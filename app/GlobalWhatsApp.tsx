'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import { siteUrl, type ArticleLang } from './content-data';

export default function GlobalWhatsApp({ lang }: { lang: ArticleLang }) {
  const pathname = usePathname();
  const [currentUrl, setCurrentUrl] = useState('');
  useEffect(() => {
    const update = () => setCurrentUrl(window.location.href);
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, [pathname]);
  const path = pathname?.replace(/\/+$/, '') || '/';
  if (['/load', '/en/load', '/tools/container-load-calculator.html', '/tools/container-load-calculator-en.html'].includes(path)) return null;
  const greeting = lang === 'zh' ? '您好 Bryce，我想咨询这个页面的海运服务：' : lang === 'es' ? 'Hola Bryce, quisiera consultar el servicio de transporte de esta página: ' : "Hi Bryce, I'd like a freight quote for this page: ";
  const label = lang === 'zh' ? '通过 WhatsApp 咨询当前页面' : lang === 'es' ? 'Consultar esta página por WhatsApp' : 'Ask about this page on WhatsApp';
  return <a data-global-whatsapp href={`https://wa.me/8618360639913?text=${encodeURIComponent(greeting + (currentUrl || `${siteUrl}${path}`))}`}
    target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
    className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-[calc(1rem+env(safe-area-inset-right,0px))] z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#128c46] text-white shadow-lg transition hover:bg-[#0b7036] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">
    <MessageCircle className="h-7 w-7" aria-hidden="true" />
  </a>;
}
