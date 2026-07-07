import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  contentSections,
  getArticlesBySection,
  getArticlePath,
  getSection,
  siteUrl,
} from '../../content-data';
import SectionPageClient from './SectionPageClient';

type SectionPageProps = {
  params: {
    section: string;
  };
};

export function generateStaticParams() {
  return contentSections.map((section) => ({ section: section.slug }));
}

export function generateMetadata({ params }: SectionPageProps): Metadata {
  const section = getSection(params.section);

  if (!section) {
    return {};
  }

  return {
    title: section.title,
    description: section.description,
    alternates: {
      canonical: `${siteUrl}/${section.slug}`,
    },
    openGraph: {
      title: `${section.title} | Bryce Logistics`,
      description: section.description,
      url: `${siteUrl}/${section.slug}`,
      type: 'website',
      images: ['/og-bryce-logistics.jpg'],
    },
  };
}

export default function SectionPage({ params }: SectionPageProps) {
  const section = getSection(params.section);

  if (!section) {
    notFound();
  }

  const articles = getArticlesBySection(section.slug);
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: section.title,
    description: section.description,
    url: `${siteUrl}/${section.slug}`,
    mainEntity: articles.map((article) => ({
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      url: `${siteUrl}${getArticlePath(article)}`,
      dateModified: article.updatedAt,
      author: {
        '@type': 'Person',
        name: 'Bryce Lee',
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <SectionPageClient section={section} articles={articles} />
    </>
  );
}
