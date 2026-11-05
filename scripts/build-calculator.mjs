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

for (const lang of ['zh', 'en']) {
  const dictionary = dictionaries[lang];
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
