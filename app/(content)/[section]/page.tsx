import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  contentSections,
  getArticlesBySection,
  getArticlePath,
  getSection,
} from '../../content-data';
import { absoluteUrl, languageAlternates } from '../../seo';
import SectionPageClient from './SectionPageClient';

type SectionPageProps = {
  params: Promise<{
    section: string;
  }>;
};

export function generateStaticParams() {
  return contentSections.map((section) => ({ section: section.slug }));
}

export async function generateMetadata({ params }: SectionPageProps): Promise<Metadata> {
  const { section: sectionSlug } = await params;
  const section = getSection(sectionSlug);

  if (!section) {
    return {};
  }

  return {
    title: section.title,
    description: section.description,
    alternates: languageAlternates(`/${section.slug}`, 'zh'),
    openGraph: {
      title: `${section.title} | Bryce Logistics`,
      description: section.description,
      url: absoluteUrl(`/${section.slug}`),
      type: 'website',
      locale: 'zh_CN',
      alternateLocale: ['en_US'],
      images: ['/og-bryce-logistics.jpg'],
    },
  };
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section: sectionSlug } = await params;
  const section = getSection(sectionSlug);

  if (!section) {
    notFound();
  }

  const articles = getArticlesBySection(section.slug);
  const sectionUrl = absoluteUrl(`/${section.slug}`);
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${sectionUrl}#webpage`,
    name: section.title,
    description: section.description,
    url: sectionUrl,
    inLanguage: 'zh-CN',
    publisher: {
      '@type': 'Person',
      '@id': absoluteUrl('/#person'),
      name: '李海文 Bryce Lee',
      url: absoluteUrl('/about'),
    },
    breadcrumb: { '@id': `${sectionUrl}#breadcrumb` },
    mainEntity: articles.map((article) => ({
      '@type': 'Article',
      '@id': `${absoluteUrl(getArticlePath(article))}#article`,
      headline: article.title,
      description: article.description,
      url: absoluteUrl(getArticlePath(article)),
      inLanguage: 'zh-CN',
      dateModified: article.updatedAt,
      author: {
        '@type': 'Person',
        '@id': absoluteUrl('/#person'),
        name: '李海文 Bryce Lee',
        url: absoluteUrl('/about'),
      },
      publisher: {
        '@type': 'Person',
        '@id': absoluteUrl('/#person'),
        name: '李海文 Bryce Lee',
        url: absoluteUrl('/about'),
      },
    })),
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${sectionUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: section.title, item: sectionUrl },
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
      <SectionPageClient section={section} articles={articles} initialLang="zh" />
    </>
  );
}
