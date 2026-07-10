import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  contentArticles,
  getArticle,
  getArticlePath,
  getArticlesBySection,
  getSection,
  siteUrl,
} from '../../../content-data';
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

  const url = `${siteUrl}${getArticlePath(article)}`;

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${article.title} | Bryce Logistics`,
      description: article.description,
      url,
      type: 'article',
      publishedTime: article.updatedAt,
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
  const articleUrl = `${siteUrl}${getArticlePath(article)}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
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
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: section.title,
        item: `${siteUrl}/${section.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
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
      <ArticlePageClient article={article} section={section} related={related} />
    </>
  );
}
