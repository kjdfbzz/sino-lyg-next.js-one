import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  contactEmail,
  contactPhone,
  contentArticles,
  getArticle,
  getArticlePath,
  getArticlesBySection,
  getSection,
  siteUrl,
} from '../../../content-data';

type ArticlePageProps = {
  params: {
    section: string;
    slug: string;
  };
};

function formatReadTime(readTime: string) {
  return `约 ${readTime.replace(' min read', ' 分钟阅读')}`;
}

export function generateStaticParams() {
  return contentArticles.map((article) => ({
    section: article.section,
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticle(params.section, params.slug);
  const section = getSection(params.section);

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

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticle(params.section, params.slug);
  const section = getSection(params.section);

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
    <main className="min-h-screen bg-[#030508] font-inter text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="relative isolate overflow-hidden px-6 py-10 sm:px-10 lg:px-16">
        <img
          src={article.image}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-48"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,5,8,0.97)_0%,rgba(3,5,8,0.82)_48%,rgba(3,5,8,0.46)_100%)]" />

        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between border-b border-white/12 pb-6">
            <Link
              href="/"
              className="font-podium text-2xl font-black uppercase tracking-[0.18em]"
            >
              Bryce Logistics
            </Link>
            <Link
              href={`/${section.slug}`}
              className="border border-white/20 px-4 py-3 text-xs font-black uppercase tracking-[0.22em] text-white/82 transition hover:border-amber-300 hover:text-amber-300"
            >
              返回分类
            </Link>
          </nav>

          <div className="max-w-5xl py-20">
            <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.24em] text-amber-300">
              <Link href={`/${section.slug}`} className="hover:text-white">
                {section.label}
              </Link>
              <span className="text-white/24">/</span>
              <span>{formatReadTime(article.readTime)}</span>
              <span className="text-white/24">/</span>
              <span>{article.updatedAt}</span>
            </div>
            <h1 className="mt-7 text-[clamp(2.55rem,6vw,5.7rem)] font-black leading-[1.04] tracking-tight">
              {article.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-white/70">
              {article.description}
            </p>
          </div>
        </div>
      </section>

      <article className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,760px)_minmax(280px,1fr)]">
          <div>
            <section className="border border-white/14 bg-white/[0.03] p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">
                重点提示
              </p>
              <ul className="mt-6 space-y-4">
                {article.highlights.map((item) => (
                  <li key={item} className="text-base leading-8 text-white/76">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-12 space-y-12">
              {article.sections.map((block) => (
                <section key={block.heading}>
                  <h2 className="text-3xl font-black leading-tight tracking-tight">
                    {block.heading}
                  </h2>
                  <p className="mt-5 text-base leading-9 text-white/68">
                    {block.body}
                  </p>
                  {block.bullets && (
                    <ul className="mt-5 space-y-3 border-l border-amber-300/40 pl-5 text-sm leading-7 text-white/62">
                      {block.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {article.faqs && (
              <section className="mt-14 border-t border-white/12 pt-12">
                <h2 className="text-3xl font-black tracking-tight">
                  常见问题
                </h2>
                <div className="mt-6 space-y-6">
                  {article.faqs.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="text-xl font-black">{faq.question}</h3>
                      <p className="mt-3 text-base leading-8 text-white/64">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            {article.checklist && (
              <section className="border border-white/14 bg-black/32 p-6">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">
                  询盘清单
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-white/68">
                  {article.checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className="mt-6 bg-amber-300 p-6 text-black">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-black/54">
                联系 Bryce
              </p>
              <h2 className="mt-4 text-2xl font-black leading-tight">
                有具体货物信息，可以直接发我判断
              </h2>
              <p className="mt-4 text-sm font-semibold leading-7 text-black/66">
                建议附上起运港、目的港、品名、箱型、件重尺和出货时间。
              </p>
              <div className="mt-6 grid gap-3">
                <a
                  href={`mailto:${contactEmail}`}
                  className="bg-black px-4 py-4 text-center text-xs font-black uppercase tracking-[0.2em] text-white"
                >
                  发送邮件
                </a>
                <a
                  href={`tel:${contactPhone}`}
                  className="border border-black px-4 py-4 text-center text-xs font-black uppercase tracking-[0.2em]"
                >
                  电话 {contactPhone}
                </a>
              </div>
            </section>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-white/12 px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-black tracking-tight">
              相关指南
            </h2>
            <div className="mt-8 grid gap-px border border-white/14 bg-white/14 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={getArticlePath(item)}
                  className="bg-[#05070a] p-6 transition hover:bg-[#091018]"
                >
                  <h3 className="text-xl font-black leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/58">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
