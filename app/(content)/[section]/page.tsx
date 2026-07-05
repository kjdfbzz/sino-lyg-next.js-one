import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  contentSections,
  getArticlesBySection,
  getArticlePath,
  getSection,
  siteUrl,
} from '../../content-data';

type SectionPageProps = {
  params: {
    section: string;
  };
};

function formatReadTime(readTime: string) {
  return `约 ${readTime.replace(' min read', ' 分钟阅读')}`;
}

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
    <main className="min-h-screen bg-[#030508] font-inter text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <section className="relative isolate overflow-hidden px-6 py-10 sm:px-10 lg:px-16">
        <img
          src="/bryce-routes-command.webp"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-52"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,5,8,0.96)_0%,rgba(3,5,8,0.8)_48%,rgba(3,5,8,0.42)_100%)]" />

        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between border-b border-white/12 pb-6">
            <Link
              href="/"
              className="font-podium text-2xl font-black uppercase tracking-[0.18em]"
            >
              Bryce Logistics
            </Link>
            <Link
              href="/#inquire"
              className="border border-white/20 px-4 py-3 text-xs font-black uppercase tracking-[0.22em] text-white/82 transition hover:border-amber-300 hover:text-amber-300"
            >
              询盘
            </Link>
          </nav>

          <div className="grid gap-10 py-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.5fr)] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-amber-300">
                {section.label}
              </p>
              <h1 className="mt-6 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-black leading-[1.02] tracking-tight">
                {section.title}
              </h1>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/68">
              {section.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px border border-white/14 bg-white/14 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={getArticlePath(article)}
                className="group flex min-h-[360px] flex-col bg-[#05070a] p-6 transition hover:bg-[#091018] sm:p-8"
              >
                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-amber-300">
                    {formatReadTime(article.readTime)}
                  </span>
                  <span className="text-xs font-bold text-white/38">
                    更新 {article.updatedAt}
                  </span>
                </div>
                <h2 className="text-2xl font-black leading-tight tracking-tight text-white">
                  {article.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/62">
                  {article.description}
                </p>
                <div className="mt-auto pt-10 text-xs font-black uppercase tracking-[0.24em] text-white/58 transition group-hover:text-amber-300">
                  查看指南
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
