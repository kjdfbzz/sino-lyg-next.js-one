import Image from 'next/image';
import Link from 'next/link';
import { companyProfile } from './company-profile';
import { contactEmail, contactPhone, type Lang } from './content-data';
import { cargoCategories, experienceCustomers, experienceServices } from './experience-data';
import { localizePath } from './localized-path';
import PageLanguage from './PageLanguage';

const copy = {
  zh: {
    home: '首页',
    about: '公司与联系人',
    routes: '航线指南',
    pageName: '合作客户与业务经验',
    eyebrow: 'GLOBAL VIEW LOGISTICS · 港威国际物流',
    title: '合作客户与业务经验',
    intro: '从工厂货物到港口出运，了解港威国际物流公司资料中列示的客户与业务经验，沟通适合您货物的运输和配套操作。',
    source: '客户名单及业务经验依据港威公司简介第 9–13 页整理，属于 Global View 公司经验。具体运输方案按当票货物与出运要求确认。',
    customersHeading: '合作过的客户',
    customersIntro: '公司简介列示的服务客户。客户名称按资料原文及常用品牌名称展示。',
    cargoHeading: '进出口货物经验',
    cargoIntro: '公司简介介绍的货物品类，涵盖制造业设备、工业材料、车辆与消费品。',
    servicesHeading: '业务服务经验',
    servicesIntro: '从海运集装箱到设备、项目货及配套服务，以下内容对应公司简介中的服务范围与操作经验。',
    cargoLabel: '涉及货物',
    operationsLabel: '服务与操作',
    sourcePages: '资料页码',
    imageHeading: '公司简介中的业务图片',
    portCaption: '公司简介中的港口业务图片（第 13 页）',
    contactHeading: '沟通您的出货需求',
    contactIntro: '联系港威连云港销售经理李海文（Bryce Lee），沟通连云港、青岛等起运港至印度、中东、拉美及其他目的地的运输需求。',
    inquiryInfo: '请提供品名、重量与体积、货物尺寸、起运地与目的港、预计备货时间，以及需要提货、报关或目的地服务的要求。',
    emailAction: '邮件询价',
    whatsappAction: 'WhatsApp 联系',
    profileAction: '查看公司与联系人',
    routeAction: '查看航线指南',
    footer: '客户与业务经验 · 公司资料 · 出口运输咨询',
  },
  en: {
    home: 'Home',
    about: 'Company & contact',
    routes: 'Route guides',
    pageName: 'Customers & experience',
    eyebrow: 'GLOBAL VIEW LOGISTICS',
    title: 'Customers & logistics experience',
    intro: 'Explore the customers and logistics experience listed in Global View Logistics’ company brochure, from factory cargo to port operations, and discuss transport options for your shipment.',
    source: 'Customer names and service experience are drawn from pages 9–13 of the Global View company brochure and describe company experience. Transport arrangements are confirmed for each shipment against its cargo and operating requirements.',
    customersHeading: 'Customers served',
    customersIntro: 'Customers listed in the company brochure, displayed using the source names and commonly used brand names.',
    cargoHeading: 'Import and export cargo experience',
    cargoIntro: 'Cargo categories described in the company brochure include manufacturing equipment, industrial materials, vehicles and consumer goods.',
    servicesHeading: 'Logistics service experience',
    servicesIntro: 'The following services reflect the company brochure’s operational scope, including ocean containers, equipment, project cargo and supporting logistics.',
    cargoLabel: 'Cargo',
    operationsLabel: 'Services and operations',
    sourcePages: 'Brochure pages',
    imageHeading: 'Operations images from the company brochure',
    portCaption: 'Port image from the company brochure (page 13)',
    contactHeading: 'Discuss your shipment',
    contactIntro: 'Speak with Bryce Lee, the Lianyungang Sales Manager, about freight from Lianyungang, Qingdao and other origin ports to India, the Middle East, Latin America and other destinations.',
    inquiryInfo: 'Share the commodity, weight and volume, cargo dimensions, origin and destination port, expected cargo-ready date, and any collection, customs or destination service requirements.',
    emailAction: 'Email an inquiry',
    whatsappAction: 'Contact on WhatsApp',
    profileAction: 'Company and contact details',
    routeAction: 'Explore route guides',
    footer: 'Customers and experience · Company information · Export freight inquiries',
  },
} as const;

const linkStyle = 'underline decoration-white/25 underline-offset-4 transition hover:text-amber-300 hover:decoration-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300';

export default function ExperiencePage({ lang }: { lang: Lang }) {
  const text = copy[lang];
  const isZh = lang === 'zh';
  const homeHref = localizePath('/', lang);

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

        <header className="border-b border-white/15 py-12 sm:py-20">
          <nav aria-label={isZh ? '面包屑导航' : 'Breadcrumb'} className="mb-10 text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-3">
              <li><Link href={homeHref} className="hover:text-amber-300">{text.home}</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/85">{text.pageName}</li>
            </ol>
          </nav>
          <p className="text-xs font-bold tracking-[0.18em] text-amber-300">{text.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance text-[clamp(2rem,5vw,4.75rem)] font-black leading-[1.12] tracking-tight">{text.title}</h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">{text.intro}</p>
          <p className="mt-6 max-w-3xl border-l-2 border-amber-300/60 pl-4 text-sm leading-7 text-white/60">{text.source}</p>
        </header>

        <section aria-labelledby="customers-heading" className="border-b border-white/15 py-12 sm:py-16">
          <h2 id="customers-heading" className="text-2xl font-bold sm:text-3xl">{text.customersHeading}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/65">{text.customersIntro}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {experienceCustomers.map((customer) => (
              <li key={customer.id} className="min-w-0 border border-white/15 bg-white/[0.025] p-5">
                <p className="break-words text-sm font-semibold leading-6 text-white/90">{customer.name[lang]}</p>
                {isZh && customer.name.zh !== customer.name.en && (
                  <p lang="en" className="mt-2 break-words text-xs leading-5 text-white/50">{customer.name.en}</p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="cargo-heading" className="border-b border-white/15 py-12 sm:py-16">
          <h2 id="cargo-heading" className="text-2xl font-bold sm:text-3xl">{text.cargoHeading}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/65">{text.cargoIntro}</p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {cargoCategories.map((cargo) => (
              <li key={cargo.en} className="border border-amber-300/20 bg-amber-300/[0.04] px-4 py-4 text-sm font-medium leading-6 text-amber-100">{cargo[lang]}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="services-heading" className="border-b border-white/15 py-12 sm:py-16">
          <h2 id="services-heading" className="text-2xl font-bold sm:text-3xl">{text.servicesHeading}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/65">{text.servicesIntro}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {experienceServices.map((service) => (
              <article key={service.id} id={service.id} className="min-w-0 border border-white/15 bg-white/[0.025] p-6 sm:p-8">
                <h3 className="text-xl font-semibold leading-7 text-amber-300">{service.title[lang]}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{service.description[lang]}</p>
                <dl className="mt-6 space-y-4 border-t border-white/10 pt-5 text-sm leading-7">
                  <div><dt className="font-semibold text-white/90">{text.cargoLabel}</dt><dd className="mt-1 text-white/65">{service.cargo[lang]}</dd></div>
                  <div><dt className="font-semibold text-white/90">{text.operationsLabel}</dt><dd className="mt-1 text-white/65">{service.operations[lang]}</dd></div>
                </dl>
                <p className="mt-6 text-xs text-white/45">{text.sourcePages}: {service.sourcePages.join(', ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="images-heading" className="border-b border-white/15 py-12 sm:py-16">
          <h2 id="images-heading" className="text-2xl font-bold sm:text-3xl">{text.imageHeading}</h2>
          <div className="mt-8 max-w-3xl">
            <figure className="min-w-0">
              <div className="relative aspect-[3/2] overflow-hidden border border-white/15 bg-white/5">
                <Image src="/experience/brochure-port.jpg" alt={text.portCaption} fill sizes="(min-width: 1024px) 768px, 90vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-white/60">{text.portCaption}</figcaption>
            </figure>
          </div>
        </section>

        <section aria-labelledby="contact-heading" className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-12">
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
