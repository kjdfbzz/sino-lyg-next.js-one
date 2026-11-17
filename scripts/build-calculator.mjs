import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const template = await readFile(join(root, 'calculator/template.html'), 'utf8');
const dictionaries = Object.fromEntries(await Promise.all(['zh', 'en'].map(async lang => [
  lang, JSON.parse(await readFile(join(root, `calculator/locales/${lang}.json`), 'utf8')),
])));
const keys = Object.keys(dictionaries.zh).sort();
if (JSON.stringify(keys) !== JSON.stringify(Object.keys(dictionaries.en).sort())) {
  throw new Error('Calculator locale dictionaries must contain identical keys.');
}

function escapeEnglish(value, context) {
  // The dictionary contains static HTML or raw JavaScript literal segments.
  // Escape the enclosing delimiter without changing interpolation expressions.
  if (context === 'single') return value.replace(/(?<!\\)'/g, "\\'");
  if (context === 'double') return value.replace(/(?<!\\)"/g, '\\"');
  if (context === 'template') return value.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  return value;
}

const genericSpecSource = template.match(/const SPEC_GENERIC = (\{[\s\S]*?\n\});/);
if (!genericSpecSource) throw new Error('Calculator default container specifications not found.');
const genericSpecs = vm.runInNewContext(`(${genericSpecSource[1]})`);
const htmlText = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

function seoContent(lang, copy) {
  if (!Array.isArray(copy.seoFaqs) || copy.seoFaqs.length < 1 || copy.seoFaqs.some(faq => !faq.question?.trim() || !faq.answer?.trim())) {
    throw new Error(`Invalid ${lang} calculator FAQ data.`);
  }
  const url = `https://www.sinolyg.com${lang === 'en' ? '/en/load' : '/load'}`;
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${url}#faq`,
    inLanguage: lang === 'en' ? 'en' : 'zh-CN', url: `${url}#calculator-faq`,
    mainEntity: copy.seoFaqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  };
  // The carrier column is a published example, separate from the tool's editable defaults.
  const carrier20 = { L: 590, W: 235.2, H: 239.5, DW: 234, DH: 229.2, kg: 28130, tare: 2350, capacity: 33.2 };
  const specs = [genericSpecs['20GP'], carrier20, genericSpecs['40HQ']];
  const mm = (spec, key) => `${Math.round(spec[key] * 10).toLocaleString('en-US')} mm`;
  const rows = [
    [copy.seoSpecLength, ...specs.map(spec => mm(spec, 'L'))],
    [copy.seoSpecWidth, ...specs.map(spec => mm(spec, 'W'))],
    [copy.seoSpecHeight, ...specs.map(spec => mm(spec, 'H'))],
    [copy.seoSpecDoor, ...specs.map(spec => `${mm(spec, 'DW')} × ${mm(spec, 'DH')}`)],
    [copy.seoSpecPayload, ...specs.map(spec => `${spec.kg.toLocaleString('en-US')} kg`)],
    [copy.seoSpecTare, ...specs.map(spec => `${spec.tare.toLocaleString('en-US')} kg`)],
    [copy.seoSpecVolume, ...specs.map(spec => `${(spec.capacity ?? spec.L * spec.W * spec.H / 1e6).toFixed(2)} CBM`)],
    [copy.seoSpecEffective, `${genericSpecs['20GP'].exp} CBM*`, copy.seoSpecVariable, `${genericSpecs['40HQ'].exp} CBM*`],
  ];
  return {
    seoSpecRows: rows.map(row => `<tr><th scope="row">${htmlText(row[0])}</th>${row.slice(1).map(value => `<td>${htmlText(value)}</td>`).join('')}</tr>`).join('\n'),
    seoFaqMarkup: copy.seoFaqs.map(item => `<details class="seo-faq-item"><summary><h3>${htmlText(item.question)}</h3></summary><p>${htmlText(item.answer)}</p></details>`).join('\n'),
    seoFaqSchema: `<script type="application/ld+json">${JSON.stringify(faq).replace(/</g, '\\u003c')}</script>`,
  };
}

for (const lang of ['zh', 'en']) {
  const dictionary = { ...dictionaries[lang], ...seoContent(lang, dictionaries[lang]) };
  let html = template.replace(/\{\{CALC:([\w]+):(\w+)\}\}/g, (_, key, context) => {
    if (typeof dictionary[key] !== 'string') throw new Error(`Missing ${lang} translation: ${key}`);
    return lang === 'zh' ? dictionary[key] : escapeEnglish(dictionary[key], context);
  });
  if (/\{\{CALC:/.test(html)) throw new Error('Unresolved calculator template token.');
  if (lang === 'en') {
    const generatedAt = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit',
    }).format(new Date());
    html = html.replaceAll('https://www.sinolyg.com/og-load.png', 'https://www.sinolyg.com/og-load-en.png')
      .replace('<head>', `<head>\n<meta name="calculator-generated-at" content="${generatedAt}">`)
      .replace(/(<link rel="canonical" href=")https:\/\/www.sinolyg.com\/load("[^>]*>)/, '$1https://www.sinolyg.com/en/load$2')
      .replace(/(<meta (?:property="og:url"|name="twitter:url") content=")https:\/\/www.sinolyg.com\/load("[^>]*>)/g, '$1https://www.sinolyg.com/en/load$2')
      .replace('content="zh_CN"', 'content="en_US"')
      .replaceAll('href="https://www.sinolyg.com/"', 'href="https://www.sinolyg.com/en"')
      .replaceAll('href="https://wa.me/8618360639913"', 'href="https://wa.me/8618360639913?text=Hi%20Bryce%2C%20I%20used%20the%20container%20load%20calculator%20and%20would%20like%20a%20freight%20quote."');
  }
  // Parse every inline executable script before writing either generated page.
  for (const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
    if (match[0].startsWith('<script type="application/ld+json"')) JSON.parse(match[1]);
    else new vm.Script(match[1], { filename: `calculator-${lang}.js` });
  }
  const filename = `container-load-calculator${lang === 'en' ? '-en' : ''}.html`;
  await writeFile(join(root, 'public/tools', filename), html);
  console.log(`Generated ${filename} (${Buffer.byteLength(html)} bytes)`);
}
