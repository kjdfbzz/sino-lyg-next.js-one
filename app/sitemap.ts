import type { MetadataRoute } from 'next';
import { contentArticles, contentSections, getArticlePath, getArticlesBySection, type Lang } from './content-data';
import { absoluteUrl, languageUrls } from './seo';
import { localizePath } from './localized-path';
import { companyProfile } from './company-profile';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages: Lang[] = ['zh', 'en'];
  const pages: Array<{ path: string; lastModified?: string }> = [
    { path: '/' },
    { path: '/about', lastModified: companyProfile.updatedAt },
    ...contentSections.map((section) => ({
      path: `/${section.slug}`,
      lastModified: getArticlesBySection(section.slug)[0]?.updatedAt,
    })),
    ...contentArticles.map((article) => ({ path: getArticlePath(article), lastModified: article.updatedAt })),
  ];

  return pages.flatMap(({ path, lastModified }) => languages.map((lang) => ({
    url: absoluteUrl(localizePath(path, lang)),
    ...(lastModified ? { lastModified } : {}),
    alternates: { languages: languageUrls(path) },
  })));
}
