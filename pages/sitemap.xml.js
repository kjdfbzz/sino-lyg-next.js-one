// pages/sitemap.xml.js

// 页面本身不会渲染，用一个空组件即可
const SiteMap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.sinolyg.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {}, // 页面不会用到
  };
};

export default SiteMap;
