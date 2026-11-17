import { siteJsonLd } from './seo';
import type { ArticleLang } from './content-data';
import GlobalWhatsApp from './GlobalWhatsApp';
import './globals.css';

export default function SiteLayout({ children, lang }: { children: React.ReactNode; lang: ArticleLang }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd(lang)).replace(/</g, '\\u003c') }}
      />
      {children}
      <GlobalWhatsApp lang={lang} />
    </>
  );
}
