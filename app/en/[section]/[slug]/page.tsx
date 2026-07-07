import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  contentArticles,
  getArticle,
  getArticleCopy,
  getArticlePath,
  getArticlesBySection,
  getSection,
  getSectionCopy,
  siteUrl,
} from '../../../content-data';
import ArticlePageClient from '../../../(content)/[section]/[slug]/ArticlePageClient';

type EnglishArticlePageProps = {
  params: {
    section: string;
    slug: string;
  };
};

export function generateStaticParams() {
  return contentArticles.map((article) => ({
    section: article.section,
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: EnglishArticlePageProps): Metadata {
  const article = getArticle(params.section, params.slug);
  const section = getSection(params.section);

  if (!article || !section) {
    return {};
  }

  const copy = getArticleCopy(article, 'en');
  const url = `${siteUrl}/en${getArticlePath(article)}`;

  return {
    title: copy.title,
    description: copy.description,
    keywords: article.en?.keywords ?? article.keywords,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        'zh-CN': `${siteUrl}${getArticlePath(article)}`,
      },
    },
    openGraph: {
      title: `${copy.title} | Bryce Logistics`,
      description: copy.description,
      url,
      type: 'article',
      locale: 'en_US',
      publishedTime: article.updatedAt,
      modifiedTime: article.updatedAt,
      authors: ['Bryce Lee'],
      images: [
        {
          url: article.image,
          alt: copy.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: [article.image],
    },
  };
}

export default function EnglishArticlePage({ params }: EnglishArticlePageProps) {
  const article = getArticle(params.section, params.slug);
  const section = getSection(params.section);

  if (!article || !section) {
    notFound();
  }

  const articleCopy = getArticleCopy(article, 'en');
  const sectionCopy = getSectionCopy(section, 'en');
  const related = getArticlesBySection(article.section)
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);
  const articleUrl = `${siteUrl}/en${getArticlePath(article)}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleCopy.title,
    description: articleCopy.description,
    image: `${siteUrl}${article.image}`,
    datePublished: article.updatedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      name: 'Bryce Lee',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bryce Logistics',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/og-bryce-logistics.jpg`,
      },
    },
    mainEntityOfPage: articleUrl,
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/en`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: sectionCopy.title,
        item: `${siteUrl}/en/${section.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: articleCopy.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ArticlePageClient
        article={article}
        section={section}
        related={related}
        initialLang="en"
        detectLanguage={false}
      />
    </>
  );
}
