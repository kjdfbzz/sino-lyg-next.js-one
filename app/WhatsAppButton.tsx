import { MessageCircle } from 'lucide-react';
import { contactPhone, type ArticleLang } from './content-data';

export function whatsappHref(lang: ArticleLang, title: string) {
  const text = lang === 'zh'
    ? `您好 Bryce，我想咨询：${title}`
    : lang === 'es'
      ? `Hola Bryce, quisiera una cotización para: ${title}`
      : `Hi Bryce, I'd like a quote for: ${title}`;
  return `https://wa.me/86${contactPhone}?text=${encodeURIComponent(text)}`;
}

export default function WhatsAppButton({ lang, title, floating = false }: {
  lang: ArticleLang;
  title: string;
  floating?: boolean;
}) {
  const label = lang === 'zh' ? 'WhatsApp 咨询' : lang === 'es' ? 'Escribir por WhatsApp' : 'Chat on WhatsApp';
  const button = (
    <a href={whatsappHref(lang, title)} target="_blank" rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#128c46] px-4 py-4 text-sm font-bold text-white transition hover:bg-[#0b7036] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400">
      <MessageCircle aria-hidden="true" className="h-5 w-5 shrink-0" />
      {label}
    </a>
  );
  return floating ? <div className="whatsapp-dock" data-whatsapp-dock>{button}</div> : button;
}
