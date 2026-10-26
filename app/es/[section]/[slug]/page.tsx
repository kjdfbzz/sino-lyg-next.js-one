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
import { absoluteUrl, articleLanguageAlternates } from '../../../seo';
import ArticlePageClient from '../../../(zh)/(content)/[section]/[slug]/ArticlePageClient';

type SpanishArticlePageProps = {
  params: Promise<{
    section: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return contentArticles
    .filter((article) => article.es)
    .map((article) => ({
      section: article.section,
      slug: article.slug,
    }));
}

export async function generateMetadata({ params }: SpanishArticlePageProps): Promise<Metadata> {
  const { section: sectionSlug, slug } = await params;
  const article = getArticle(sectionSlug, slug);
  const section = getSection(sectionSlug);

  if (!article?.es || !section) {
    notFound();
  }

  const { title, description } = getArticleCopy(article, 'es');
  const url = absoluteUrl(`/es${getArticlePath(article)}`);

  return {
    title,
    description,
    keywords: article.es.keywords ?? article.keywords,
    alternates: articleLanguageAlternates(article, 'es'),
    openGraph: {
      title: `${title} | Bryce Logistics`,
      description,
      url,
      type: 'article',
      locale: 'es_MX',
      alternateLocale: ['zh_CN', 'en_US'],
      modifiedTime: article.updatedAt,
      authors: [absoluteUrl('/en/about')],
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

export default async function SpanishArticlePage({ params }: SpanishArticlePageProps) {
  const { section: sectionSlug, slug } = await params;
  const article = getArticle(sectionSlug, slug);
  const section = getSection(sectionSlug);

  if (!article?.es || !section) {
    notFound();
  }

  const articleCopy = getArticleCopy(article, 'es');
  const articleTitle = articleCopy.title;
  const articleDescription = articleCopy.description;
  const sectionCopy = getSectionCopy(section, 'es');
  const spanishRelated = contentArticles.filter(
    (item) => item.es && (item.section !== article.section || item.slug !== article.slug),
  );
  const related = spanishRelated.length
    ? [
        ...spanishRelated.filter((item) => item.section === article.section),
        ...spanishRelated.filter((item) => item.section !== article.section),
      ].slice(0, 3)
    : getArticlesBySection(article.section)
        .filter((item) => item.slug !== article.slug)
        .slice(0, 3);
  const articleUrl = absoluteUrl(`/es${getArticlePath(article)}`);
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    url: articleUrl,
    inLanguage: 'es',
    headline: articleTitle,
    description: articleDescription,
    image: absoluteUrl(article.image),
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      '@id': absoluteUrl('/#person'),
      name: 'Bryce Lee',
      url: absoluteUrl('/en/about'),
    },
    publisher: {
      '@type': 'Person',
      '@id': absoluteUrl('/#person'),
      name: 'Bryce Lee',
      url: absoluteUrl('/en/about'),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${articleUrl}#webpage`,
      url: articleUrl,
      inLanguage: 'es',
      breadcrumb: { '@id': `${articleUrl}#breadcrumb` },
    },
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${articleUrl}#breadcrumb`,
    inLanguage: 'es',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
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
  const spanishFaqs = articleCopy.faqs;
  const faqJsonLd = spanishFaqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${articleUrl}#faq`,
        inLanguage: 'es',
        isPartOf: { '@id': `${articleUrl}#webpage` },
        mainEntity: spanishFaqs.map((faq) => ({
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
        initialLang="es"
      />
    </>
  );
}
