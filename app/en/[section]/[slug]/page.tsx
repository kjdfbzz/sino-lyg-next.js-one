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

  const fallbackCopy = getArticleCopy(article, 'en');
  const hasEnglishVersion = Boolean(
    (article.title_en?.trim() && article.description_en?.trim()) ||
      (article.en?.title.trim() && article.en.description.trim()),
  );
  const title = article.title_en?.trim()
    ? article.title_en
    : fallbackCopy.title;
  const description = article.description_en?.trim()
    ? article.description_en
    : fallbackCopy.description;
  const url = `${siteUrl}/en${getArticlePath(article)}`;

  return {
    title,
    description,
    keywords: article.en?.keywords ?? article.keywords,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        'zh-CN': `${siteUrl}${getArticlePath(article)}`,
      },
    },
    openGraph: {
      title: `${title} | Bryce Logistics`,
      description,
      url,
      type: 'article',
      locale: 'en_US',
      ...(hasEnglishVersion
        ? {
            alternateLocale: ['zh_CN'],
          }
        : {}),
      publishedTime: article.updatedAt,
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
  const articleTitle = article.title_en?.trim()
    ? article.title_en
    : articleCopy.title;
  const articleDescription = article.description_en?.trim()
    ? article.description_en
    : articleCopy.description;
  const sectionCopy = getSectionCopy(section, 'en');
  const related = getArticlesBySection(article.section)
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);
  const articleUrl = `${siteUrl}/en${getArticlePath(article)}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleTitle,
    description: articleDescription,
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
        name: articleTitle,
        item: articleUrl,
      },
    ],
  };
  const englishFaqs = article.faqs_en?.length
    ? article.faqs_en
    : article.en?.faqs;
  const faqJsonLd = englishFaqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
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
        detectLanguage={false}
      />
    </>
  );
}
