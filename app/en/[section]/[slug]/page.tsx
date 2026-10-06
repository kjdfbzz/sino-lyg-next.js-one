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
} from '../../../content-data';
import { absoluteUrl, languageAlternates } from '../../../seo';
import ArticlePageClient from '../../../(content)/[section]/[slug]/ArticlePageClient';

type EnglishArticlePageProps = {
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

export async function generateMetadata({ params }: EnglishArticlePageProps): Promise<Metadata> {
  const { section: sectionSlug, slug } = await params;
  const article = getArticle(sectionSlug, slug);
  const section = getSection(sectionSlug);

  if (!article || !section) {
    return {};
  }

  const { title, description } = getArticleCopy(article, 'en');
  const url = absoluteUrl(`/en${getArticlePath(article)}`);

  return {
    title,
    description,
    keywords: article.en?.keywords ?? article.keywords,
    alternates: languageAlternates(getArticlePath(article), 'en'),
    openGraph: {
      title: `${title} | Bryce Logistics`,
      description,
      url,
      type: 'article',
      locale: 'en_US',
      alternateLocale: ['zh_CN'],
      modifiedTime: article.updatedAt,
      authors: ['Bryce Lee'],
      images: [
        {
          url: article.image,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [article.image],
    },
  };
}

export default async function EnglishArticlePage({ params }: EnglishArticlePageProps) {
  const { section: sectionSlug, slug } = await params;
  const article = getArticle(sectionSlug, slug);
  const section = getSection(sectionSlug);

  if (!article || !section) {
    notFound();
  }

  const articleCopy = getArticleCopy(article, 'en');
  const articleTitle = articleCopy.title;
  const articleDescription = articleCopy.description;
  const sectionCopy = getSectionCopy(section, 'en');
  const related = getArticlesBySection(article.section)
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);
  const articleUrl = absoluteUrl(`/en${getArticlePath(article)}`);
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    url: articleUrl,
    inLanguage: 'en',
    headline: articleTitle,
    description: articleDescription,
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
      inLanguage: 'en',
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
        name: 'Home',
        item: absoluteUrl('/en'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: sectionCopy.title,
        item: absoluteUrl(`/en/${section.slug}`),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: articleTitle,
        item: articleUrl,
      },
    ],
  };
  const englishFaqs = articleCopy.faqs;
  const faqJsonLd = englishFaqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${articleUrl}#faq`,
        inLanguage: 'en',
        isPartOf: { '@id': `${articleUrl}#webpage` },
        mainEntity: englishFaqs.map((faq) => ({
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
      <ArticlePageClient
        article={article}
        section={section}
        related={related}
        initialLang="en"
      />
    </>
  );
}
