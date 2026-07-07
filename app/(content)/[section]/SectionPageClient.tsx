'use client';

import Link from 'next/link';
import type { ContentArticle, ContentSection, Lang } from '../../content-data';
import {
  getArticleCopy,
  getArticlePath,
  getSectionCopy,
} from '../../content-data';
import { localizePath } from '../../localized-path';
import { usePreferredLanguage } from '../../use-language';

type SectionPageClientProps = {
  section: ContentSection;
  articles: ContentArticle[];
  initialLang?: Lang;
  detectLanguage?: boolean;
};

function formatReadTime(readTime: string, lang: Lang) {
  return lang === 'zh'
    ? `约 ${readTime.replace(' min read', ' 分钟阅读')}`
    : readTime;
}

export default function SectionPageClient({
  section,
  articles,
  initialLang = 'zh',
  detectLanguage = true,
}: SectionPageClientProps) {
  const [lang, setLang] = usePreferredLanguage(initialLang, {
    detect: detectLanguage,
  });
  const sectionCopy = getSectionCopy(section, lang);
  const isZh = lang === 'zh';
  const homeHref = localizePath('/', lang);

  return (
    <main className="min-h-screen bg-[#030508] font-inter text-white">
      <section className="relative isolate overflow-hidden px-6 py-10 sm:px-10 lg:px-16">
        <img
          src="/bryce-routes-command.webp"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-52"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,5,8,0.96)_0%,rgba(3,5,8,0.8)_48%,rgba(3,5,8,0.42)_100%)]" />

        <div className="mx-auto max-w-7xl">
          <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-white/12 pb-6">
            <Link
              href={homeHref}
              className="font-podium text-2xl font-black uppercase tracking-[0.18em]"
            >
              Bryce Logistics
            </Link>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setLang(isZh ? 'en' : 'zh')}
                className="border border-white/20 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white/82 transition hover:border-amber-300 hover:text-amber-300"
              >
                {isZh ? 'EN' : '中文'}
              </button>
              <Link
                href={`${homeHref}#inquire`}
                className="border border-white/20 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white/82 transition hover:border-amber-300 hover:text-amber-300"
              >
                {isZh ? '询盘' : 'Inquiry'}
              </Link>
            </div>
          </nav>

          <div className="grid gap-10 py-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.5fr)] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-amber-300">
                {sectionCopy.label}
              </p>
              <h1 className="mt-6 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-black leading-[1.02] tracking-tight">
                {sectionCopy.title}
              </h1>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/68">
              {sectionCopy.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px border border-white/14 bg-white/14 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => {
              const articleCopy = getArticleCopy(article, lang);

              return (
                <Link
                  key={article.slug}
                  href={localizePath(getArticlePath(article), lang)}
                  className="group flex min-h-[360px] flex-col bg-[#05070a] p-6 transition hover:bg-[#091018] sm:p-8"
                >
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-amber-300">
                      {formatReadTime(article.readTime, lang)}
                    </span>
                    <span className="text-xs font-bold text-white/38">
                      {isZh ? '更新' : 'Updated'} {article.updatedAt}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black leading-tight tracking-tight text-white">
                    {articleCopy.title}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-white/62">
                    {articleCopy.description}
                  </p>
                  <div className="mt-auto pt-10 text-xs font-black uppercase tracking-[0.24em] text-white/58 transition group-hover:text-amber-300">
                    {isZh ? '查看指南' : 'Read guide'}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
