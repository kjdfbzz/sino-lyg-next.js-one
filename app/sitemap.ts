import type { MetadataRoute } from 'next';
import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
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

  const localizedPages = pages.flatMap(({ path, lastModified, article }) => {
    const pageLanguages: ArticleLang[] = article?.es ? [...languages, 'es'] : languages;
    const alternateLanguages = article ? articleLanguageUrls(article) : languageUrls(path);

    return pageLanguages.map((lang) => ({
      url: absoluteUrl(localizePath(path, lang)),
      ...(lastModified ? { lastModified } : {}),
      alternates: { languages: alternateLanguages },
    }));
  });
  const calculatorUpdatedAt = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(statSync(join(process.cwd(), 'public/tools/container-load-calculator.html')).mtime);
  const calculatorLanguages = {
    'zh-CN': absoluteUrl('/load'),
    en: absoluteUrl('/en/load'),
    'x-default': absoluteUrl('/load'),
  };
  const englishCalculatorSource = readFileSync(join(process.cwd(), 'public/tools/container-load-calculator-en.html'), 'utf8');
  const englishCalculatorGeneratedAt = englishCalculatorSource.match(/<meta name="calculator-generated-at" content="(\d{4}-\d{2}-\d{2})">/)?.[1];
  if (!englishCalculatorGeneratedAt) throw new Error('Run npm run build:calculator to generate the English calculator date.');
  return [
    ...localizedPages,
    { url: absoluteUrl('/es') },
    { url: absoluteUrl('/load'), lastModified: calculatorUpdatedAt, alternates: { languages: calculatorLanguages } },
    { url: absoluteUrl('/en/load'), lastModified: englishCalculatorGeneratedAt, alternates: { languages: calculatorLanguages } },
  ];
}
