'use client';

import { useId, useState, type FormEvent } from 'react';
import { MessageCircle } from 'lucide-react';
import { contactEmail, siteUrl, type ArticleLang } from './content-data';

const copy = {
  zh: {
    title: '快速海运询价 · 只填三项', route: '起运港 / 目的港或码头', equipment: '柜型', contact: 'WhatsApp / 邮箱',
    routeHint: '青岛 / 连云港 → 目的港或码头', equipmentHint: '20GP / 40HQ / 冷柜 / 工程货', contactHint: '您的 WhatsApp 号码或邮箱',
    help: '还没有准确重量或 HS 编码？先告诉我目的港和柜型，就能快速了解参考运价。',
    greeting: '您好 Bryce，我想咨询：', wa: 'WhatsApp 快速询价', send: '发送快速询价', sending: '正在发送…', sent: '询价已发送，我会尽快回复。',
    failure: '暂时无法发送，请通过 WhatsApp 或邮件发送这些信息：', email: '发送邮件', required: '请填写此项。',
    trust: '由 Bryce 负责对接 | 依托港威国际物流（连云港及青岛）——整柜、冷柜及工程货直接订舱代理',
  },
  en: {
    title: 'Quick freight quote · 3 fields', route: 'POL / Terminal', equipment: 'Container Type', contact: 'WhatsApp / Email',
    routeHint: 'Qingdao / Lianyungang → destination port or terminal', equipmentHint: '20GP / 40HQ / Reefer / Project cargo', contactHint: 'Your WhatsApp number or email',
    help: 'No exact weight or HS code yet? Just share your target port and container type for a fast ballpark rate.',
    greeting: "Hi Bryce, I'd like a freight quote for: ", wa: 'Get a quick quote via WhatsApp', send: 'Send quick quote request', sending: 'Sending…', sent: 'Thanks, Bryce will reply as soon as possible.',
    failure: 'Unable to send right now. Send these details via WhatsApp or email:', email: 'Email Bryce', required: 'Please enter this field.',
    trust: 'Operated by Bryce | Backed by Global View Logistics (Lianyungang & Qingdao) — Direct Booking Agent for FCL, Reefer & Project Cargo',
  },
  es: {
    title: 'Cotización rápida · 3 campos', route: 'Puerto de origen / Terminal', equipment: 'Tipo de contenedor', contact: 'WhatsApp / Correo',
    routeHint: 'Qingdao / Lianyungang → puerto o terminal de destino', equipmentHint: '20GP / 40HQ / Refrigerado / Carga de proyecto', contactHint: 'Su número de WhatsApp o correo',
    help: '¿Aún no tiene el peso exacto o el código arancelario? Indique el puerto de destino y el tipo de contenedor para recibir una tarifa orientativa rápida.',
    greeting: 'Hola Bryce, quisiera una cotización para: ', wa: 'Cotizar por WhatsApp', send: 'Enviar solicitud rápida', sending: 'Enviando…', sent: 'Gracias, le responderemos pronto.',
    failure: 'No pudimos enviar su solicitud. Envíe estos datos por WhatsApp o correo:', email: 'Enviar correo', required: 'Complete este campo.',
    trust: 'Gestionado por Bryce | Con el respaldo de Global View Logistics (Lianyungang y Qingdao) — Agente de reserva directa para FCL, carga refrigerada y carga de proyecto',
  },
};

export default function QuickQuote({ lang, title, sourcePath, destinationHint, collapsible = false, whatsappLabel, showHeading = true }: {
  lang: ArticleLang;
  title: string;
  sourcePath: string;
  destinationHint?: string;
  collapsible?: boolean;
  whatsappLabel?: string;
  showHeading?: boolean;
}) {
  const text = copy[lang];
  const id = useId();
  const [form, setForm] = useState({ route: '', equipment: '', contact: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');
  const sourceUrl = `${siteUrl}${sourcePath}`;
  const slug = sourcePath.split('/').filter(Boolean).pop() || 'home';
  const brief = [
    `${text.greeting}${title}`, `${text.route}: ${form.route.trim()}`, `${text.equipment}: ${form.equipment.trim()}`,
    `${text.contact}: ${form.contact.trim()}`, `Language: ${lang}`, `Source: ${sourceUrl}`,
  ].join('\n');
  const waHref = `https://wa.me/8618360639913?text=${encodeURIComponent(brief)}`;
  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(`Quick freight quote [${slug}]`)}&body=${encodeURIComponent(brief)}`;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    const formElement = event.currentTarget;
    for (const input of Array.from(formElement.querySelectorAll('input'))) {
      input.setCustomValidity(input.value.trim() ? '' : text.required);
    }
    if (!formElement.reportValidity()) return;
    setStatus('sending');
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pol: form.route.trim(), contact: form.contact.trim(), notes: brief, lang, sourceUrl }),
      });
      const result = await response.json();
      setStatus(response.ok && result.ok === true ? 'sent' : 'failed');
    } catch { setStatus('failed'); }
  }

  const fields = [
    { name: 'route' as const, label: text.route, placeholder: destinationHint ? `Qingdao / Lianyungang → ${destinationHint}` : text.routeHint },
    { name: 'equipment' as const, label: text.equipment, placeholder: text.equipmentHint },
    { name: 'contact' as const, label: text.contact, placeholder: text.contactHint },
  ];
  const formContent = (
    <form onSubmit={submit} aria-label={text.title} className="space-y-4 p-5 sm:p-6">
      <div className={collapsible ? 'space-y-4' : 'grid gap-4 sm:grid-cols-3'}>
        {fields.map(field => <label key={field.name} htmlFor={`${id}-${field.name}`} className="block min-w-0 text-xs font-bold text-white/80">
          {field.label}
          <input id={`${id}-${field.name}`} name={field.name} required maxLength={300} placeholder={field.placeholder} value={form[field.name]}
            onChange={event => { event.target.setCustomValidity(''); setForm({ ...form, [field.name]: event.target.value }); setStatus('idle'); }}
            className="mt-2 w-full min-w-0 border border-white/20 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-amber-300" />
        </label>)}
      </div>
      <p className="text-sm leading-7 text-white/70">{text.help}</p>
      <button type="submit" disabled={status === 'sending'} className="min-h-12 w-full bg-amber-300 px-5 py-3 text-sm font-black text-black transition hover:bg-white disabled:opacity-60">{status === 'sending' ? text.sending : text.send}</button>
      <div role="status" aria-live="polite" className="text-sm leading-7">
        {status === 'sent' && <p className="text-emerald-200">{text.sent}</p>}
        {status === 'failed' && <div className="text-amber-100"><p>{text.failure}</p><div className="mt-2 flex flex-wrap gap-4">
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">WhatsApp</a>
          <a href={emailHref} className="underline underline-offset-4">{text.email}</a>
        </div></div>}
      </div>
      <p data-quote-trust className="border-t border-white/15 pt-4 text-xs leading-6 text-white/60">{text.trust}</p>
    </form>
  );
  const whatsappButton = <a href={waHref} target="_blank" rel="noopener noreferrer" data-quick-quote-whatsapp className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#128c46] px-5 py-4 text-center text-sm font-bold leading-6 text-white transition hover:bg-[#0b7036] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">
    <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />{whatsappLabel || text.wa}
  </a>;

  return <div data-quick-quote lang={lang === 'zh' ? 'zh-CN' : lang} className="min-w-0 bg-[#090f16] text-white">
    {showHeading && !collapsible && <h2 className="border-b border-white/15 px-5 py-5 text-xl font-black text-amber-300 sm:px-6">{text.title}</h2>}
    {collapsible ? <div className="flex flex-wrap items-start gap-3">
      <div className="min-w-0 flex-1 basis-64">{whatsappButton}</div>
      <details className="min-w-0 flex-1 basis-64 border border-white/25">
        <summary className="cursor-pointer px-5 py-4 text-sm font-bold text-white hover:text-amber-300">{text.title}</summary>
        {formContent}
      </details>
    </div> : <><div className="px-5 pt-5 sm:px-6">{whatsappButton}</div>{formContent}</>}
  </div>;
}
