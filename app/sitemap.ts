import type { MetadataRoute } from 'next';
import { contentArticles, contentSections, getArticlePath, getArticlesBySection, type ArticleLang, type ContentArticle, type Lang } from './content-data';
import { absoluteUrl, articleLanguageUrls, homeUpdatedAt, languageUrls } from './seo';
import { localizePath } from './localized-path';
import { companyProfile } from './company-profile';
import { experienceUpdatedAt } from './experience-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages: Lang[] = ['zh', 'en'];
  const pages: Array<{ path: string; lastModified?: string; article?: ContentArticle }> = [
    { path: '/', lastModified: homeUpdatedAt },
    { path: '/about', lastModified: companyProfile.updatedAt },
    { path: '/experience', lastModified: experienceUpdatedAt },
    ...contentSections.map((section) => ({
      path: `/${section.slug}`,
      lastModified: getArticlesBySection(section.slug)[0]?.updatedAt,
    })),
    ...contentArticles.map((article) => ({ path: getArticlePath(article), lastModified: article.updatedAt, article })),
  ];

  return pages.flatMap(({ path, lastModified, article }) => {
    const pageLanguages: ArticleLang[] = article?.es ? [...languages, 'es'] : languages;
    const alternateLanguages = article ? articleLanguageUrls(article) : languageUrls(path);

    return pageLanguages.map((lang) => ({
      url: absoluteUrl(localizePath(path, lang)),
      ...(lastModified ? { lastModified } : {}),
      alternates: { languages: alternateLanguages },
    }));
  });
}
