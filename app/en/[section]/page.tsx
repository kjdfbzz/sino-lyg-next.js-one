import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  contentSections,
  getArticlesBySection,
  getArticleCopy,
  getArticlePath,
  getSection,
  getSectionCopy,
} from '../../content-data';
import { absoluteUrl, languageAlternates } from '../../seo';
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
  const url = absoluteUrl(`/en/${section.slug}`);

  return {
    title: copy.title,
    description: copy.description,
    alternates: languageAlternates(`/${section.slug}`, 'en'),
    openGraph: {
      title: `${copy.title} | Bryce Logistics`,
      description: copy.description,
      url,
      type: 'website',
      locale: 'en_US',
      alternateLocale: ['zh_CN'],
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
  const sectionUrl = absoluteUrl(`/en/${section.slug}`);
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${sectionUrl}#webpage`,
    name: sectionCopy.title,
    description: sectionCopy.description,
    url: sectionUrl,
    inLanguage: 'en',
    publisher: {
      '@type': 'Person',
      '@id': absoluteUrl('/#person'),
      name: 'Bryce Lee',
      url: absoluteUrl('/en/about'),
    },
    breadcrumb: { '@id': `${sectionUrl}#breadcrumb` },
    mainEntity: articles.map((article) => {
      const articleCopy = getArticleCopy(article, 'en');

      return {
        '@type': 'Article',
        '@id': `${absoluteUrl(`/en${getArticlePath(article)}`)}#article`,
        headline: articleCopy.title,
        description: articleCopy.description,
        url: absoluteUrl(`/en${getArticlePath(article)}`),
        inLanguage: 'en',
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
      };
    }),
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${sectionUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/en') },
      { '@type': 'ListItem', position: 2, name: sectionCopy.title, item: sectionUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SectionPageClient
        section={section}
        articles={articles}
        initialLang="en"
      />
    </>
  );
}
