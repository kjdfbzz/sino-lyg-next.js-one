import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  contentSections,
  getArticlesBySection,
  getArticleCopy,
  getArticlePath,
  getSection,
  getSectionCopy,
  siteUrl,
} from '../../content-data';
import SectionPageClient from '../../(content)/[section]/SectionPageClient';

type EnglishSectionPageProps = {
  params: Promise<{
    section: string;
  }>;
};

export function generateStaticParams() {
  return contentSections.map((section) => ({ section: section.slug }));
}

export async function generateMetadata({ params }: EnglishSectionPageProps): Promise<Metadata> {
  const { section: sectionSlug } = await params;
  const section = getSection(sectionSlug);

  if (!section) {
    return {};
  }

  const copy = getSectionCopy(section, 'en');
  const url = `${siteUrl}/en/${section.slug}`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        'zh-CN': `${siteUrl}/${section.slug}`,
      },
    },
    openGraph: {
      title: `${copy.title} | Bryce Logistics`,
      description: copy.description,
      url,
      type: 'website',
      locale: 'en_US',
      images: ['/og-bryce-logistics.jpg'],
    },
  };
}

export default async function EnglishSectionPage({ params }: EnglishSectionPageProps) {
  const { section: sectionSlug } = await params;
  const section = getSection(sectionSlug);

  if (!section) {
    notFound();
  }

  const articles = getArticlesBySection(section.slug);
  const sectionCopy = getSectionCopy(section, 'en');
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: sectionCopy.title,
    description: sectionCopy.description,
    url: `${siteUrl}/en/${section.slug}`,
    mainEntity: articles.map((article) => {
      const articleCopy = getArticleCopy(article, 'en');

      return {
        '@type': 'Article',
        headline: articleCopy.title,
        description: articleCopy.description,
        url: `${siteUrl}/en${getArticlePath(article)}`,
        dateModified: article.updatedAt,
        author: {
          '@type': 'Person',
          name: 'Bryce Lee',
        },
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <SectionPageClient
        section={section}
        articles={articles}
        initialLang="en"
        detectLanguage={false}
      />
    </>
  );
}
