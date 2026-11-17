'use client';

import QuickQuote from './QuickQuote';

const sourcePath = '/en/routes/china-to-karachi-shipping';
const specs = [
  { label: 'Transit Time', value: '~25 Days from Qingdao (Direct) / ~30 Days from Lianyungang to Karachi.' },
  { label: 'Terminals Covered', value: 'Karachi Port (KICT, SAPT, KGTL), Port Qasim (QICT), and AICT off-dock handling.' },
  { label: 'Destination Protection', value: '14–21 Days Free Demurrage/Detention available upon booking to avoid port clearance penalties.' },
  { label: 'Cargo Capability', value: '20GP/40HQ FCL, Reefer, Chemicals, and RoRo/Breakbulk Machinery (XCMG, FOTON, LiuGong).' },
];

export default function KarachiRouteSpecs({ title }: { title: string }) {
  return (
    <section aria-labelledby="karachi-route-specs" className="mt-8 border border-amber-300/70 bg-[#090f16] p-5 shadow-[0_0_40px_rgba(252,211,77,0.08)] sm:p-7">
      <h2 id="karachi-route-specs" className="text-lg font-black uppercase tracking-[0.14em] text-amber-300">Key Route Specs</h2>
      <dl className="mt-5 grid gap-5 sm:grid-cols-2">
        {specs.map(spec => (
          <div key={spec.label} className="border-l-2 border-amber-300 pl-4">
            <dt className="text-xs font-black uppercase tracking-[0.14em] text-amber-200">{spec.label}</dt>
            <dd className="mt-2 text-sm leading-7 text-white/90">{spec.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6"><QuickQuote lang="en" title={title} sourcePath={sourcePath} destinationHint="KICT / SAPT / QICT" collapsible
        whatsappLabel="Get This Week's Rate to KICT / SAPT / QICT via WhatsApp" /></div>
    </section>
  );
}
