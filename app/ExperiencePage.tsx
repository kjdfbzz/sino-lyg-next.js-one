import Image from 'next/image';
import Link from 'next/link';
import { companyProfile } from './company-profile';
import { contactEmail, contactPhone, type Lang } from './content-data';
import { cargoCategories, experienceCustomers, experienceServices } from './experience-data';
import { factoryGalleries } from './factory-shipments';
import { localizePath } from './localized-path';
import PageLanguage from './PageLanguage';

const copy = {
  zh: {
    home: '首页',
    about: '公司与联系人',
    routes: '航线指南',
    pageName: '客户与工厂展示',
    eyebrow: 'GLOBAL VIEW LOGISTICS · 港威国际物流',
    title: '合作客户与工厂展示',
    intro: '连接工厂、港口与海外市场。了解合作客户、工厂与设备图片，以及我们提供的运输服务。',
    shipmentsHeading: '客户工厂与设备图片',
    shipmentsIntro: '徐工、福田与柳工的设备、工厂及发运场景。',
    customersHeading: '合作客户',
    customersIntro: '港威国际物流服务过的制造业与贸易客户。',
    cargoHeading: '货物品类',
    servicesHeading: '运输与配套服务',
    servicesIntro: '从集装箱到大型设备，从工厂提货到港口出运。',
    contactHeading: '沟通您的出货需求',
    contactIntro: '联系港威连云港销售经理李海文（Bryce Lee），沟通连云港、青岛等起运港至印度、中东、拉美及其他目的地的运输需求。',
    inquiryInfo: '请提供品名、重量与体积、货物尺寸、起运地与目的港、预计备货时间，以及提货、报关或目的地服务要求。',
    emailAction: '邮件询价',
    whatsappAction: 'WhatsApp 联系',
    profileAction: '公司与联系人',
    routeAction: '航线指南',
    footer: '合作客户 · 工厂展示 · 国际运输',
  },
  en: {
    home: 'Home',
    about: 'Company & contact',
    routes: 'Route guides',
    pageName: 'Customers & factory gallery',
    eyebrow: 'GLOBAL VIEW LOGISTICS',
    title: 'Customers & factory gallery',
    intro: 'Connecting factories, ports and overseas markets. Explore our customers, factory and equipment photos, and freight services.',
    shipmentsHeading: 'Customer factories & equipment',
    shipmentsIntro: 'Equipment, factory and shipment scenes from XCMG, FOTON and LiuGong.',
    customersHeading: 'Customers',
    customersIntro: 'Manufacturing and trading customers served by Global View Logistics.',
    cargoHeading: 'Cargo categories',
    servicesHeading: 'Freight & supporting services',
    servicesIntro: 'From containers to heavy equipment, and from factory collection to port operations.',
    contactHeading: 'Discuss your shipment',
    contactIntro: 'Speak with Bryce Lee, the Lianyungang Sales Manager, about freight from Lianyungang, Qingdao and other origin ports to India, the Middle East, Latin America and other destinations.',
    inquiryInfo: 'Share the commodity, weight and volume, cargo dimensions, origin and destination port, expected cargo-ready date, and any collection, customs or destination service requirements.',
    emailAction: 'Email an inquiry',
    whatsappAction: 'Contact on WhatsApp',
    profileAction: 'Company & contact',
    routeAction: 'Route guides',
    footer: 'Customers · Factory gallery · International freight',
  },
} as const;

const linkStyle = 'underline decoration-white/25 underline-offset-4 transition hover:text-amber-300 hover:decoration-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300';
const sectionLinkStyle = 'border border-white/20 px-4 py-2.5 text-sm font-semibold transition hover:border-amber-300 hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300';

export default function ExperiencePage({ lang }: { lang: Lang }) {
  const text = copy[lang];
  const isZh = lang === 'zh';
  const homeHref = localizePath('/', lang);
  const leadGallery = factoryGalleries[0];
  const leadImage = leadGallery?.images[0];

  return (
    <main lang={isZh ? 'zh-CN' : 'en'} className="min-h-screen bg-[#030508] font-inter text-white">
      <PageLanguage lang={lang} />
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
        <nav aria-label={isZh ? '主导航' : 'Main navigation'} className="flex flex-wrap items-center justify-between gap-5 border-b border-white/15 py-6">
          <Link href={homeHref} className="font-podium text-xl font-black uppercase tracking-[0.12em] sm:text-2xl">Bryce Logistics</Link>
          <div className="flex flex-wrap items-center gap-5 text-sm font-semibold">
            <Link href={homeHref} className="transition hover:text-amber-300">{text.home}</Link>
            <Link href={localizePath('/about', lang)} className="transition hover:text-amber-300">{text.about}</Link>
            <Link href={localizePath('/routes', lang)} className="transition hover:text-amber-300">{text.routes}</Link>
            <Link href={localizePath('/experience', isZh ? 'en' : 'zh')} hrefLang={isZh ? 'en' : 'zh-CN'} className="border border-white/25 px-3 py-2 transition hover:border-amber-300 hover:text-amber-300">{isZh ? 'EN' : '中文'}</Link>
          </div>
        </nav>

        <header className="border-b border-white/15 py-10 sm:py-14">
          <nav aria-label={isZh ? '面包屑导航' : 'Breadcrumb'} className="mb-8 text-xs text-white/50">
            <ol className="flex flex-wrap items-center gap-3">
              <li><Link href={homeHref} className="hover:text-amber-300">{text.home}</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/70">{text.pageName}</li>
            </ol>
          </nav>
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
            <div className="min-w-0">
              <p className="text-[10px] font-bold leading-6 tracking-[0.15em] text-amber-300 sm:text-xs">{text.eyebrow}</p>
              <h1 className="mt-4 max-w-xl text-balance text-[clamp(2.25rem,4.4vw,4rem)] font-black leading-[1.14] tracking-tight">{text.title}</h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/70">{text.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#factory-shipments" className={sectionLinkStyle}>{text.shipmentsHeading} <span aria-hidden="true">↓</span></a>
                <a href="#customers" className={sectionLinkStyle}>{text.customersHeading} <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            {leadGallery && leadImage && (
              <figure className="min-w-0">
                <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                  <Image src={leadImage.imageUrl} alt={leadImage.imageAlt[lang]} fill sizes="(min-width: 1024px) 520px, 90vw" className="object-cover" unoptimized priority />
                </div>
                <figcaption className="mt-3 text-xs leading-6 text-white/60">
                  <span className="font-semibold text-amber-300">{leadGallery.brand[lang]}</span>
                  <span className="mx-2 text-white/30" aria-hidden="true">·</span>
                  <span>{leadImage.imageAlt[lang]}</span>
                </figcaption>
              </figure>
            )}
          </div>
        </header>

        <section id="factory-shipments" aria-labelledby="shipments-heading" className="scroll-mt-8 border-b border-white/15 py-10 sm:py-14">
          <h2 id="shipments-heading" className="text-2xl font-bold sm:text-3xl">{text.shipmentsHeading}</h2>
          <p className="mt-3 text-sm leading-7 text-white/60">{text.shipmentsIntro}</p>
          <div className="mt-8 space-y-10 sm:space-y-12">
            {factoryGalleries.map((gallery) => (
              <article key={gallery.id} id={gallery.id} className="min-w-0">
                <h3 className="text-xl font-semibold leading-8 text-amber-300">{gallery.brand[lang]}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-white/65">{gallery.introduction[lang]}</p>
                <div className={`mt-5 grid gap-5 sm:grid-cols-2 ${gallery.images.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
                  {gallery.images.map((photo) => (
                    <figure key={photo.id} className="min-w-0">
                      <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                        <Image src={photo.imageUrl} alt={photo.imageAlt[lang]} fill sizes={gallery.images.length === 4 ? '(min-width: 1024px) 270px, (min-width: 640px) 45vw, 90vw' : '(min-width: 1024px) 350px, (min-width: 640px) 45vw, 90vw'} className="object-contain" unoptimized loading="lazy" />
                      </div>
                      <figcaption className="mt-2 text-xs leading-6 text-white/55">{photo.imageAlt[lang]}</figcaption>
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="customers" aria-labelledby="customers-heading" className="scroll-mt-8 border-b border-white/15 py-10 sm:py-14">
          <h2 id="customers-heading" className="text-2xl font-bold sm:text-3xl">{text.customersHeading}</h2>
          <p className="mt-3 text-sm leading-7 text-white/60">{text.customersIntro}</p>
          <ul className="mt-7 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-4">
            {experienceCustomers.map((customer) => (
              <li key={customer.id} className="flex min-w-0 items-center bg-[#080b0f] px-4 py-4 sm:px-5">
                <span className="break-words text-sm font-medium leading-6 text-white/80">{customer.name[lang]}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="services" aria-labelledby="services-heading" className="scroll-mt-8 border-b border-white/15 py-10 sm:py-14">
          <h2 id="services-heading" className="text-2xl font-bold sm:text-3xl">{text.servicesHeading}</h2>
          <p className="mt-3 text-sm leading-7 text-white/60">{text.servicesIntro}</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experienceServices.map((service) => (
              <article key={service.id} id={service.id} className="min-w-0 border border-white/15 bg-white/[0.025] p-5 sm:p-6">
                <h3 className="text-base font-semibold leading-7 text-amber-300">{service.title[lang]}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{service.description[lang]}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-white/85">{text.cargoHeading}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cargoCategories.map((cargo) => (
                <li key={cargo.en} className="border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs leading-6 text-white/65">{cargo[lang]}</li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="contact-heading" className="grid gap-8 py-10 sm:py-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-12">
          <div>
            <h2 id="contact-heading" className="text-2xl font-bold sm:text-3xl">{text.contactHeading}</h2>
            <p className="mt-5 max-w-3xl leading-8 text-white/75">{text.contactIntro}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">{text.inquiryInfo}</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
              <Link href={localizePath('/about', lang)} className={linkStyle}>{text.profileAction} <span aria-hidden="true">→</span></Link>
              <Link href={localizePath('/routes', lang)} className={linkStyle}>{text.routeAction} <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="min-w-0 border border-white/15 bg-white/[0.025] p-6 sm:p-8">
            <p className="text-xl font-bold">{companyProfile.personName[lang]}</p>
            <p className="mt-2 text-sm font-semibold text-amber-300">{companyProfile.role[lang]} · {isZh ? '港威连云港' : 'Global View Logistics, Lianyungang'}</p>
            <a href={`mailto:${contactEmail}`} className={`mt-5 block break-all text-sm leading-7 ${linkStyle}`}>{contactEmail}</a>
            <a href={companyProfile.mobileHref} className={`mt-2 inline-block text-sm leading-7 ${linkStyle}`}>{companyProfile.mobileDisplay}</a>
            <div className="mt-6 flex flex-col gap-3">
              <a href={`mailto:${contactEmail}`} className="bg-amber-300 px-5 py-3 text-center text-sm font-bold text-black transition hover:bg-amber-200">{text.emailAction}</a>
              <a href={`https://wa.me/86${contactPhone}`} target="_blank" rel="noopener noreferrer" className="border border-white/25 px-5 py-3 text-center text-sm font-semibold transition hover:border-amber-300 hover:text-amber-300">{text.whatsappAction}</a>
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 py-8 text-xs leading-6 text-white/50">
          <p>© {new Date().getFullYear()} Bryce Logistics · {text.footer}</p>
          <Link href={homeHref} className="hover:text-amber-300">{text.home} <span aria-hidden="true">→</span></Link>
        </footer>
      </div>
    </main>
  );
}
