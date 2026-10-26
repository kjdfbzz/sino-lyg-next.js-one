import {
  contentArticles,
  getArticlesBySection,
  type ArticleLang,
  type ContentArticle,
} from './content-data';

export function getRelatedArticles(article: ContentArticle, lang: ArticleLang): ContentArticle[] {
  if (article.relatedSlugs) {
    return article.relatedSlugs
      .filter((slug, index, slugs) => slug !== article.slug && slugs.indexOf(slug) === index)
      .map((slug) => contentArticles.find((item) => item.slug === slug))
      .filter((item): item is ContentArticle => item !== undefined)
      .slice(0, 3);
  }

  if (lang === 'es') {
    const spanishRelated = contentArticles.filter(
      (item) => item.es && (item.section !== article.section || item.slug !== article.slug),
    );

    if (spanishRelated.length > 0) {
      return [
        ...spanishRelated.filter((item) => item.section === article.section),
        ...spanishRelated.filter((item) => item.section !== article.section),
      ].slice(0, 3);
    }
  }

  return getArticlesBySection(article.section)
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);
}
