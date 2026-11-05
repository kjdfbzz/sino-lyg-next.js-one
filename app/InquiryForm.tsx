'use client';

import { useId, useState, type ChangeEvent, type FormEvent } from 'react';
import { contactEmail, contactPhone, siteUrl, type ArticleLang } from './content-data';
import { companyProfile } from './company-profile';
import { whatsappHref } from './WhatsAppButton';
import ContactActions from './ContactActions';

type FormData = {
  name: string; company: string; contact: string; pol: string; pod: string;
  cargo: string; weightVolume: string; readyDate: string; notes: string;
};
const emptyForm: FormData = { name: '', company: '', contact: '', pol: '', pod: '', cargo: '', weightVolume: '', readyDate: '', notes: '' };
const copy = {
  zh: {
    eyebrow: '运输询价信息', title: '留下运输需求，我来帮你梳理方案',
    labels: { name: '姓名', company: '公司', contact: '联系方式', pol: '起运港 / POL', pod: '目的港 / POD', cargo: '货物信息', weightVolume: '重量 / 体积', readyDate: '出货时间', notes: '补充说明' },
    placeholders: { name: '姓名', company: '公司名称', contact: '微信 / 手机 / 邮箱', pol: '青岛 / 连云港 / 上海', pod: 'Kolkata / Jebel Ali / Santos', cargo: '品名、件数、重量、体积', weightVolume: 'kg / CBM', readyDate: '本周 / 下周 / 具体日期', notes: '是否需要拖车、报关、仓储、目的港清关建议，或其他特殊要求' },
    help: '填写货物信息和联系方式后发送。也可以复制询价信息，通过邮件或 WhatsApp 联系 Bryce。',
    success: '已发送到 Bryce 邮箱，我会尽快回复。', failure: '暂时无法发送，请通过 WhatsApp 或邮箱联系 Bryce。',
    draft: '已为你打开邮件草稿，请在邮箱客户端里确认发送。', sending: '正在发送', send: '发送到邮箱', copy: '复制', copied: '已复制', call: '电话联系', email: '发送邮件',
  },
  en: {
    eyebrow: 'Inquiry brief', title: 'Send the shipment brief',
    labels: { name: 'Name', company: 'Company', contact: 'Contact details', pol: 'Departure port / POL', pod: 'Destination port / POD', cargo: 'Cargo details', weightVolume: 'Weight / volume', readyDate: 'Cargo ready date', notes: 'Additional notes' },
    placeholders: { name: 'Name', company: 'Company name', contact: 'Email / phone / WhatsApp / WeChat', pol: 'Qingdao / Lianyungang / Shanghai', pod: 'Kolkata / Jebel Ali / Santos', cargo: 'Commodity, packages, weight and volume', weightVolume: 'kg / CBM', readyDate: 'This week / next week / specific date', notes: 'Pickup address, Incoterm, container type, destination services or special handling' },
    help: 'Send the cargo details with your contact information. You can also copy the brief and contact Bryce by email or WhatsApp.',
    success: 'Sent to Bryce. I will reply as soon as possible.', failure: 'Unable to send right now. Please contact Bryce by WhatsApp or email.',
    draft: 'Your email draft has opened. Please confirm sending in your mail client.', sending: 'Sending', send: 'Send brief', copy: 'Copy', copied: 'Copied', call: 'Call', email: 'Send email',
  },
  es: {
    eyebrow: 'Consulta de transporte', title: 'Solicite una cotización',
    labels: { name: 'Nombre', company: 'Empresa', contact: 'Correo o WhatsApp', pol: 'Puerto de origen', pod: 'Puerto de destino', cargo: 'Mercancía', weightVolume: 'Peso / volumen', readyDate: 'Fecha de carga lista', notes: 'Mensaje' },
    placeholders: { name: 'Su nombre', company: 'Nombre de la empresa', contact: 'Correo electrónico o número de WhatsApp', pol: 'Qingdao / Lianyungang / Shanghai', pod: 'Manzanillo / San Antonio / Callao', cargo: 'Producto, embalaje y cantidad', weightVolume: 'kg / CBM', readyDate: 'Esta semana / próxima semana / fecha prevista', notes: 'Dirección de recogida, Incoterm, tipo de contenedor y requisitos especiales' },
    help: 'Envíe los datos de su carga y su contacto. También puede copiar la consulta y contactar con Bryce por correo o WhatsApp.',
    success: 'Gracias, le responderemos pronto.', failure: 'No pudimos enviar su solicitud. Contacte con Bryce por WhatsApp o correo electrónico.',
    draft: '', sending: 'Enviando', send: 'Enviar solicitud', copy: 'Copiar', copied: 'Copiado', call: 'Llamar', email: 'Enviar correo',
  },
};

export default function InquiryForm({ lang, destinationPlaceholder, articleTitle = '', sourcePath = '/', showHeading = true, homeModal = false }: {
  lang: ArticleLang;
  destinationPlaceholder?: string;
  articleTitle?: string;
  sourcePath?: string;
  showHeading?: boolean;
  homeModal?: boolean;
}) {
  const text = copy[lang];
  const id = useId();
  const [form, setForm] = useState<FormData>(emptyForm);
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'sent' | 'fallback'>('idle');
  const [copied, setCopied] = useState(false);
  const sourceUrl = () => typeof window === 'undefined' ? siteUrl : `${window.location.origin}${window.location.pathname}`;
  const brief = () => [
    lang === 'es' ? 'Hola Bryce,' : lang === 'zh' ? 'Bryce 你好，' : 'Hi Bryce,', '',
    ...Object.entries(form).filter(([, value]) => value.trim()).map(([key, value]) => `${text.labels[key as keyof FormData]}: ${value}`),
    '', `Language: ${lang}`, `Source: ${siteUrl}${sourcePath}`,
  ].join('\n');
  const route = [form.pol, form.pod].map(value => value.trim()).filter(Boolean).join(' -> ');
  const slug = sourcePath.split('/').filter(Boolean).pop() || '';
  const subject = `${route ? `Freight inquiry: ${route}` : 'Freight inquiry from sinolyg.com'}${slug ? ` [${slug}]` : ''}`;
  const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(brief())}`;
  const updateField = (name: keyof FormData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(current => ({ ...current, [name]: event.target.value }));
    setSubmitState('idle'); setCopied(false);
  };
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitState === 'sending') return;
    setSubmitState('sending');
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang, sourceUrl: sourceUrl() }),
      });
      const result = await response.json();
      if (response.ok && result.ok === true) { setSubmitState('sent'); return; }
    } catch { /* Explicit contact alternatives remain available below. */ }
    setSubmitState('fallback');
    if (homeModal) window.location.href = mailtoHref;
  };
  const copyBrief = async () => {
    try { await navigator.clipboard.writeText(brief()); setCopied(true); } catch { setCopied(false); }
  };
  const fields: Array<keyof FormData> = lang === 'es'
    ? ['name', 'company', 'contact', 'pol', 'pod', 'cargo', 'weightVolume', 'readyDate']
    : ['pol', 'pod', 'cargo', 'contact', 'readyDate'];
  const inputClass = 'mt-2 w-full min-w-0 border border-white/14 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/32 focus:border-amber-300 focus:bg-white/[0.07]';
  return (
    <div className={showHeading ? 'border border-white/18 bg-[#05070a] text-white' : undefined}>
      {showHeading && <div className="border-b border-white/12 px-5 py-4 sm:px-7">
        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-amber-300">{text.eyebrow}</p>
        <h2 id={`${id}-heading`} className="mt-1 text-xl font-black tracking-tight">{text.title}</h2>
      </div>}
      <form onSubmit={submit} aria-label={text.title} className="space-y-4 px-5 py-6 sm:px-7">
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map(name => <label key={name} className="block min-w-0">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/48">{text.labels[name]}</span>
            <input name={name} className={inputClass} placeholder={name === 'pod' && destinationPlaceholder ? destinationPlaceholder : text.placeholders[name]}
              value={form[name]} onChange={updateField(name)} maxLength={1200} required={!homeModal && name === 'contact'}
              autoComplete={name === 'name' ? 'name' : name === 'company' ? 'organization' : undefined} />
          </label>)}
        </div>
        <label className="block"><span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/48">{text.labels.notes}</span>
          <textarea name="notes" className={`${inputClass} min-h-28`} placeholder={text.placeholders.notes} value={form.notes} onChange={updateField('notes')} maxLength={1200} />
        </label>
        <p className="text-xs leading-relaxed text-white/46">{text.help}</p>
        <div role="status" aria-live="polite">
          {submitState === 'sent' && <div className="border border-emerald-400/40 bg-emerald-400/10 p-3 text-sm font-bold text-emerald-200">{text.success}</div>}
          {submitState === 'fallback' && <div className="border border-amber-300/40 bg-amber-300/10 p-3 text-sm font-bold text-amber-100">
            <p>{homeModal ? text.draft : text.failure}</p>
            <div className="mt-3 flex flex-wrap gap-4"><a className="underline" href={whatsappHref(lang, articleTitle || (lang === 'zh' ? text.title : undefined))} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="break-all underline" href={mailtoHref}>{contactEmail}</a></div>
          </div>}
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <button type="submit" disabled={submitState === 'sending'} className="flex items-center justify-center bg-amber-300 px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-white disabled:cursor-wait disabled:opacity-70 sm:col-span-2">{submitState === 'sending' ? text.sending : text.send}</button>
          <button type="button" onClick={copyBrief} className="flex items-center justify-center border border-white/28 px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:border-amber-300 hover:text-amber-300">{copied ? text.copied : text.copy}</button>
        </div>
        {lang === 'zh' ? <div className="grid gap-3 sm:grid-cols-2">
          <a href={companyProfile.mobileHref} className="flex items-center justify-center border border-white/16 px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white">{text.call} {companyProfile.mobileDisplay}</a>
          <a href={mailtoHref} className="flex min-w-0 items-center justify-center break-all border border-white/16 px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white">{contactEmail}</a>
        </div> : <ContactActions lang={lang} articleTitle={articleTitle || undefined} emailHref={mailtoHref} />}
      </form>
    </div>
  );
}
