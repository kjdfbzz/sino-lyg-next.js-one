import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  contentArticles,
  getArticle,
  getArticlePath,
  getArticlesBySection,
  getSection,
} from '../../../content-data';
import { absoluteUrl, languageAlternates } from '../../../seo';
import ArticlePageClient from './ArticlePageClient';

type ArticlePageProps = {
  params: Promise<{
    section: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return contentArticles.map((article) => ({
    section: article.section,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { section: sectionSlug, slug } = await params;
  const article = getArticle(sectionSlug, slug);
  const section = getSection(sectionSlug);

  if (!article || !section) {
    return {};
  }

  const url = absoluteUrl(getArticlePath(article));

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: languageAlternates(getArticlePath(article), 'zh'),
    openGraph: {
      title: `${article.title} | Bryce Logistics`,
      description: article.description,
      url,
      type: 'article',
      locale: 'zh_CN',
      alternateLocale: ['en_US'],
      modifiedTime: article.updatedAt,
      authors: ['Bryce Lee'],
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { section: sectionSlug, slug } = await params;
  const article = getArticle(sectionSlug, slug);
  const section = getSection(sectionSlug);

  if (!article || !section) {
    notFound();
  }

  const related = getArticlesBySection(article.section)
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);
  const articleUrl = absoluteUrl(getArticlePath(article));
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    url: articleUrl,
    inLanguage: 'zh-CN',
    headline: article.title,
    description: article.description,
    image: absoluteUrl(article.image),
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      '@id': absoluteUrl('/#person'),
      name: 'Bryce Lee',
      url: absoluteUrl('/'),
    },
    publisher: {
      '@type': 'Organization',
      '@id': absoluteUrl('/#organization'),
      name: 'Bryce Logistics',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${articleUrl}#webpage`,
      url: articleUrl,
      inLanguage: 'zh-CN',
      breadcrumb: { '@id': `${articleUrl}#breadcrumb` },
    },
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${articleUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首页',
        item: absoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: section.title,
        item: absoluteUrl(`/${section.slug}`),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };
  const faqJsonLd = article.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${articleUrl}#faq`,
        inLanguage: 'zh-CN',
        isPartOf: { '@id': `${articleUrl}#webpage` },
        mainEntity: article.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

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
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <ArticlePageClient article={article} section={section} related={related} initialLang="zh" />
    </>
  );
}
