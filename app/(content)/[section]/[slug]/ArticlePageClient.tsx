'use client';

import Link from 'next/link';
import {
  contactEmail,
  contactPhone,
  type ContentArticle,
  type ContentSection,
  getArticleCopy,
  getArticlePath,
  getSectionCopy,
  type Lang,
} from '../../../content-data';
import { usePreferredLanguage } from '../../../use-language';

type ArticlePageClientProps = {
  article: ContentArticle;
  section: ContentSection;
  related: ContentArticle[];
  initialLang?: Lang;
  detectLanguage?: boolean;
};

function formatReadTime(readTime: string, lang: Lang) {
  return lang === 'zh'
    ? `约 ${readTime.replace(' min read', ' 分钟阅读')}`
    : readTime;
}

export default function ArticlePageClient({
  article,
  section,
  related,
  initialLang = 'zh',
  detectLanguage = true,
}: ArticlePageClientProps) {
  const [lang, setLang] = usePreferredLanguage(initialLang, {
    detect: detectLanguage,
  });
  const articleCopy = getArticleCopy(article, lang);
  const sectionCopy = getSectionCopy(section, lang);
  const isZh = lang === 'zh';

  return (
    <main className="min-h-screen bg-[#030508] font-inter text-white">
      <section className="relative isolate overflow-hidden px-6 py-10 sm:px-10 lg:px-16">
        <img
          src={article.image}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-48"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,5,8,0.97)_0%,rgba(3,5,8,0.82)_48%,rgba(3,5,8,0.46)_100%)]" />

        <div className="mx-auto max-w-7xl">
          <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-white/12 pb-6">
            <Link
              href="/"
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
                href={`/${section.slug}`}
                className="border border-white/20 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white/82 transition hover:border-amber-300 hover:text-amber-300"
              >
                {isZh ? '返回分类' : 'Back'}
              </Link>
            </div>
          </nav>

          <div className="max-w-5xl py-20">
            <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-amber-300">
              <Link href={`/${section.slug}`} className="hover:text-white">
                {sectionCopy.label}
              </Link>
              <span className="text-white/24">/</span>
              <span>{formatReadTime(article.readTime, lang)}</span>
              <span className="text-white/24">/</span>
              <span>{isZh ? '更新' : 'Updated'} {article.updatedAt}</span>
            </div>
            <h1 className="mt-7 max-w-5xl text-[clamp(2.25rem,4.6vw,4.35rem)] font-black leading-[1.1] tracking-tight">
              {articleCopy.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-white/72">
              {articleCopy.description}
            </p>
          </div>
        </div>
      </section>

      <article className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,760px)_minmax(280px,1fr)]">
          <div>
            <section className="border border-white/14 bg-white/[0.03] p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">
                {isZh ? '重点提示' : 'Key Points'}
              </p>
              <ul className="mt-6 list-disc space-y-4 pl-5">
                {articleCopy.highlights.map((item) => (
                  <li key={item} className="text-base leading-8 text-white/76">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-12 space-y-12">
              {articleCopy.sections.map((block) => (
                <section key={block.heading} className="border-b border-white/10 pb-10 last:border-b-0">
                  <h2 className="text-3xl font-black leading-tight tracking-tight">
                    {block.heading}
                  </h2>
                  <p className="mt-5 text-base leading-9 text-white/70">
                    {block.body}
                  </p>
                  {block.bullets && (
                    <ul className="mt-5 list-disc space-y-3 border-l border-amber-300/40 pl-8 text-sm leading-7 text-white/66">
                      {block.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {articleCopy.faqs && (
              <section className="mt-14 border-t border-white/12 pt-12">
                <h2 className="text-3xl font-black tracking-tight">
                  {isZh ? '常见问题' : 'FAQ'}
                </h2>
                <div className="mt-6 space-y-6">
                  {articleCopy.faqs.map((faq) => (
                    <div key={faq.question} className="border border-white/10 bg-white/[0.02] p-5">
                      <h3 className="text-xl font-black">{faq.question}</h3>
                      <p className="mt-3 text-base leading-8 text-white/66">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            {articleCopy.checklist && (
              <section className="border border-white/14 bg-black/32 p-6">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">
                  {isZh ? '询盘清单' : 'Inquiry Checklist'}
                </p>
                <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-white/70">
                  {articleCopy.checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className="mt-6 bg-amber-300 p-6 text-black">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-black/54">
                {isZh ? '联系 Bryce' : 'Contact Bryce'}
              </p>
              <h2 className="mt-4 text-2xl font-black leading-tight">
                {isZh
                  ? '有具体货物信息，可以直接发我判断'
                  : 'Send the shipment details and I will review the route'}
              </h2>
              <p className="mt-4 text-sm font-semibold leading-7 text-black/66">
                {isZh
                  ? '建议附上起运港、目的港、品名、箱型、件重尺和出货时间。'
                  : 'Include POL, POD, commodity, equipment, package count, weight, volume and ready date.'}
              </p>
              <div className="mt-6 grid gap-3">
                <a
                  href={`mailto:${contactEmail}`}
                  className="bg-black px-4 py-4 text-center text-xs font-black uppercase tracking-[0.18em] text-white"
                >
                  {isZh ? '发送邮件' : 'Send email'}
                </a>
                <a
                  href={`tel:${contactPhone}`}
                  className="border border-black px-4 py-4 text-center text-xs font-black uppercase tracking-[0.18em]"
                >
                  {isZh ? '电话' : 'Call'} {contactPhone}
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
              {isZh ? '相关指南' : 'Related Guides'}
            </h2>
            <div className="mt-8 grid gap-px border border-white/14 bg-white/14 md:grid-cols-3">
              {related.map((item) => {
                const relatedCopy = getArticleCopy(item, lang);

                return (
                  <Link
                    key={item.slug}
                    href={getArticlePath(item)}
                    className="bg-[#05070a] p-6 transition hover:bg-[#091018]"
                  >
                    <h3 className="text-xl font-black leading-tight">
                      {relatedCopy.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/58">
                      {relatedCopy.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
