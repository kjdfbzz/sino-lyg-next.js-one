// app/sitemap.js

export default function sitemap() {
  return [
    {
      url: "https://www.sinolyg.com/",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
