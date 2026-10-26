const host = 'www.sinolyg.com';
const key = '7ecad7e25346c2fc49df1da3285f68a2';
const keyLocation = `https://${host}/${key}.txt`;
const sitemapLocation = `https://${host}/sitemap.xml`;
const endpoint = 'https://api.indexnow.org/indexnow';

function decodeXmlText(value) {
  const text = value.trim();
  if (text.startsWith('<![CDATA[') && text.endsWith(']]>')) {
    return text.slice(9, -3).trim();
  }

  const entities = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };
  return text.replace(/&(amp|lt|gt|quot|apos|#\d+|#x[\da-fA-F]+);/g, (_, entity) => {
    if (entity.startsWith('#x')) return String.fromCodePoint(parseInt(entity.slice(2), 16));
    if (entity.startsWith('#')) return String.fromCodePoint(parseInt(entity.slice(1), 10));
    return entities[entity];
  });
}

async function fetchText(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`GET ${url}: HTTP ${response.status}`);
  return response.text();
}

async function main() {
  // Confirm that the public key file is deployed before submitting any URLs.
  const publishedKey = await fetchText(keyLocation);
  if (publishedKey.trim() !== key) throw new Error('The published IndexNow key does not match.');

  const sitemap = await fetchText(sitemapLocation);
  const urlList = [...new Set(
    [...sitemap.matchAll(/<loc\b[^>]*>([\s\S]*?)<\/loc\s*>/g)]
      .map((match) => decodeXmlText(match[1])),
  )];

  if (urlList.length === 0) throw new Error('No <loc> URLs found in the live sitemap.');
  if (urlList.length > 10_000) throw new Error('IndexNow accepts up to 10,000 URLs per request.');

  for (const value of urlList) {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.host !== host || url.username || url.password) {
      throw new Error(`Unexpected sitemap URL: ${value}`);
    }
  }

  // No retries: this script submits once, only when run manually.
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
    signal: AbortSignal.timeout(30_000),
  });
  console.log(`IndexNow HTTP ${response.status} ${response.statusText} (${urlList.length} URLs)`);

  if (!response.ok) {
    const details = await response.text();
    if (details) console.error(details);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(`IndexNow: ${error.message}`);
  process.exitCode = 1;
});
