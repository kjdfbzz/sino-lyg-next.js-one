import type { Metadata } from 'next';
import Link from 'next/link';
import { contentArticles, getArticlePath, siteUrl } from '../content-data';
import InquiryForm from '../InquiryForm';
import WhatsAppButton from '../WhatsAppButton';

const title = 'Bryce Logistics – Flete marítimo desde China';
const description = 'Flete marítimo FCL/LCL desde Qingdao y Lianyungang, despacho de exportación y atención en español. Consulte rutas, documentos y opciones de transporte con Bryce Lee.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${siteUrl}/es` },
  openGraph: { title, description, url: `${siteUrl}/es`, type: 'website', locale: 'es_MX', images: [{ url: '/og-bryce-logistics.jpg', alt: title }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-bryce-logistics.jpg'] },
};

export default function SpanishHome() {
  const articles = contentArticles.filter(article => article.es);
  return (
    <main lang="es" className="whatsapp-page min-h-screen bg-[#030508] px-6 py-10 font-inter text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-white/12 pb-6" aria-label="Idiomas">
          <Link href="/es" className="text-2xl font-black">Bryce Logistics</Link>
          <div className="flex gap-6"><Link href="/">中文</Link><Link href="/en">EN</Link></div>
        </nav>
        <header className="py-16">
          <h1 className="text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Soy Bryce Lee, gerente de ventas de Global View Logistics en Lianyungang. Organizamos envíos FCL/LCL desde Qingdao y Lianyungang, transporte terrestre y despacho de exportación. Ofrecemos atención en español y cotizaciones según su puerto, mercancía y fecha de carga.
          </p>
        </header>
        <section aria-labelledby="spanish-guides">
          <h2 id="spanish-guides" className="text-2xl font-black">Guías en español</h2>
          <div className="my-8 grid gap-4 sm:grid-cols-2">
            {articles.map(article => <Link key={article.slug} href={`/es${getArticlePath(article)}`} className="border border-white/14 bg-white/[0.03] p-6 transition hover:border-amber-300">
              <h3 className="text-xl font-black text-amber-300">{article.es!.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">{article.es!.description}</p>
            </Link>)}
          </div>
        </section>
        <section id="spanish-contact" className="pb-12">
          <div className="mb-8"><WhatsAppButton lang="es" title={title} /></div>
          <InquiryForm lang="es" sourcePath="/es" articleTitle={title} />
        </section>
      </div>
      <WhatsAppButton lang="es" title={title} floating />
    </main>
  );
}
