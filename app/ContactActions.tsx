import { contactEmail } from './content-data';
import WhatsAppButton from './WhatsAppButton';

export default function ContactActions({ lang, articleTitle, emailHref, tone = 'dark' }: {
  lang: 'en' | 'es';
  articleTitle?: string;
  emailHref?: string;
  tone?: 'dark' | 'light';
}) {
  return (
    <div data-contact-actions className="grid min-w-0 gap-3">
      <WhatsAppButton lang={lang} title={articleTitle} />
      <a href={emailHref || `mailto:${contactEmail}`}
        className={`inline-flex min-h-12 items-center justify-center border px-4 py-4 text-center text-sm font-bold transition ${tone === 'light' ? 'border-black/40 text-black hover:bg-black/5' : 'border-white/25 text-white hover:bg-white/5'}`}>
        {lang === 'es' ? 'Enviar correo' : 'Send email'}
      </a>
      <p className="text-xs font-normal leading-6 opacity-70">
        {lang === 'es'
          ? 'Teléfono / WeChat: +86 183 6063 9913 (preferimos WhatsApp)'
          : 'Phone / WeChat: +86 183 6063 9913 (WhatsApp preferred)'}
      </p>
    </div>
  );
}
