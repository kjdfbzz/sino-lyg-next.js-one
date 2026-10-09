import Link from 'next/link';
import { companyProfile } from './company-profile';
import { contactEmail, contactPhone, type Lang } from './content-data';
import { localizePath } from './localized-path';
import PageLanguage from './PageLanguage';

const copy = {
  zh: {
    home: '首页',
    routes: '航线指南',
    about: '公司与联系人',
    eyebrow: 'GLOBAL VIEW LOGISTICS · 港威国际物流',
    title: '港威国际物流 · 李海文 Bryce Lee',
    intro: '了解港威国际物流的服务范围，联系连云港销售经理李海文（Bryce Lee），沟通从连云港、青岛及中国其他港口出口的运输需求。',
    companyHeading: '关于港威国际物流',
    companyIntro: '港威国际物流总部位于青岛，以海运整柜（FCL）和拼箱（LCL）业务为主，并提供空运、内陆运输、仓储、报关单证及特种箱、项目货运输协调。',
    companyDetail: '业务沟通重点涵盖印度、巴基斯坦、中东和拉美方向。具体起运港、目的港、运输方式及配套服务，按货物情况和当次出货需求确认。',
    headquarters: '青岛公司',
    branch: '连云港分公司',
    supplyChain: '连云港供应链联系单位',
    website: '港威国际物流企业官网',
    servicesHeading: '服务范围',
    servicesIntro: '先明确货物与交付要求，再确认海运及配套操作方案。',
    services: [
      { title: '海运整柜与拼箱', body: '整柜与拼箱运输方案、订舱沟通和出口出货协调。' },
      { title: '空运', body: '根据货量、时效与目的地要求，沟通适合的空运方案。' },
      { title: '内陆运输与仓储', body: '衔接提货、内陆运输、仓储及港口出货安排。' },
      { title: '报关与单证', body: '协调出口报关资料、运输单证及相关操作要求。' },
      { title: '特种箱与项目货', body: '根据尺寸、重量及装卸条件，协调特种箱和项目货运输。' },
    ],
    personHeading: '您的业务联系人',
    personIntro: '李海文（Bryce Lee）担任港威连云港销售经理，负责询价沟通、出货信息确认和运输方案对接。',
    siteIdentity: 'Bryce Logistics 是李海文（Bryce Lee）的个人货运业务网站，提供出货指南、航线资料和业务咨询入口。港威国际物流企业官网通过本页的“企业官网”链接访问。',
    office: '连云港办公室',
    postcode: '邮编',
    email: '公司邮箱',
    mobile: '手机',
    landline: '办公室电话',
    emailAction: '邮件询价',
    whatsappAction: 'WhatsApp 联系',
    routeHeading: '重点航线资料',
    routeIntro: '先阅读目的地的出货要求、费用与操作要点，再提供实际货物信息沟通方案。',
    routeGroups: [
      {
        title: '印度与巴基斯坦',
        links: [
          { title: '连云港至印度整柜', path: '/routes/lianyungang-to-india-fcl-shipping' },
          { title: '中国至卡拉奇', path: '/routes/china-to-karachi-shipping' },
        ],
      },
      {
        title: '中东',
        links: [{ title: '中国至杰贝阿里', path: '/routes/china-to-jebel-ali-shipping' }],
      },
      {
        title: '拉美',
        links: [
          { title: '中国至巴西与阿根廷', path: '/routes/china-to-brazil-argentina-shipping' },
          { title: '中国至墨西哥、智利与秘鲁', path: '/routes/china-to-mexico-chile-peru-shipping' },
        ],
      },
    ],
    faqHeading: '联系前常见问题',
    faqs: [
      {
        question: '询价需要提供哪些信息？',
        answer: '请提供起运地和目的港、品名、件数、重量与体积、箱型箱量、预计备货时间、贸易条款，以及是否需要提货、报关或目的地服务。特种箱和项目货请另附尺寸、重量与装卸要求。',
      },
      {
        question: '可以咨询连云港和青岛的出口运输吗？',
        answer: '可以联系李海文沟通连云港、青岛等起运港的出口需求。具体线路、订舱和配套服务需结合目的港、货物资料与当次出货条件确认。',
      },
      {
        question: '如何联系李海文？',
        answer: '可使用本页的公司邮箱、国际格式手机号码或 WhatsApp。邮件中写明起运地、目的地和预计出货时间，有助于更快确认所需资料。',
      },
    ],
    footer: '公司介绍 · 航线资料 · 出口运输咨询',
  },
  en: {
    home: 'Home',
    routes: 'Route guides',
    about: 'Company & contact',
    eyebrow: 'GLOBAL VIEW LOGISTICS',
    title: 'Global View Logistics & Bryce Lee',
    intro: 'Explore Global View Logistics services and speak with Bryce Lee, the Lianyungang Sales Manager, about export shipments from Lianyungang, Qingdao and other Chinese ports.',
    companyHeading: 'About Global View Logistics',
    companyIntro: 'Headquartered in Qingdao, Global View Logistics focuses on ocean freight in full-container loads (FCL) and less-than-container loads (LCL), with coordination for air freight, inland transport, warehousing, customs documentation, special containers and project cargo.',
    companyDetail: 'Key trade lanes include India, Pakistan, the Middle East and Latin America. Origin and destination ports, transport modes and supporting services are confirmed against the cargo details and shipment requirements.',
    headquarters: 'Qingdao company',
    branch: 'Lianyungang branch',
    supplyChain: 'Lianyungang supply chain contact entity',
    website: 'Global View Logistics corporate website',
    servicesHeading: 'Services',
    servicesIntro: 'Share the cargo and delivery requirements to discuss ocean freight and the supporting operations.',
    services: [
      { title: 'FCL & LCL ocean freight', body: 'Shipment planning, booking communication and export coordination for full and shared containers.' },
      { title: 'Air freight', body: 'Discuss air freight options based on cargo volume, timing and destination requirements.' },
      { title: 'Inland transport & warehousing', body: 'Coordinate cargo collection, inland transport, warehousing and port shipment arrangements.' },
      { title: 'Customs & documentation', body: 'Coordinate export customs information, shipping documents and related operational requirements.' },
      { title: 'Special containers & project cargo', body: 'Coordinate shipment options based on cargo dimensions, weight and loading requirements.' },
    ],
    personHeading: 'Your freight contact',
    personIntro: 'Bryce Lee (李海文) is the Sales Manager for Global View Logistics in Lianyungang, handling quote discussions, shipment information and transport planning communication.',
    siteIdentity: 'Bryce Logistics is Bryce Lee’s personal freight business website, offering shipment guides, route information and an inquiry channel. Visit the separate Global View Logistics corporate website through the link on this page.',
    office: 'Lianyungang office',
    postcode: 'Postal code',
    email: 'Company email',
    mobile: 'Mobile',
    landline: 'Office telephone',
    emailAction: 'Email an inquiry',
    whatsappAction: 'Contact on WhatsApp',
    routeHeading: 'Key trade lane guides',
    routeIntro: 'Review destination requirements, cost components and operational points before sharing your cargo details.',
    routeGroups: [
      {
        title: 'India & Pakistan',
        links: [
          { title: 'Lianyungang to India FCL', path: '/routes/lianyungang-to-india-fcl-shipping' },
          { title: 'China to Karachi', path: '/routes/china-to-karachi-shipping' },
        ],
      },
      {
        title: 'Middle East',
        links: [{ title: 'China to Jebel Ali', path: '/routes/china-to-jebel-ali-shipping' }],
      },
      {
        title: 'Latin America',
        links: [
          { title: 'China to Brazil & Argentina', path: '/routes/china-to-brazil-argentina-shipping' },
          { title: 'China to Mexico, Chile & Peru', path: '/routes/china-to-mexico-chile-peru-shipping' },
        ],
      },
    ],
    faqHeading: 'Before you get in touch',
    faqs: [
      {
        question: 'What information is needed for a quotation?',
        answer: 'Share the origin and destination port, commodity, package count, weight and volume, container type and quantity, expected cargo-ready date, trade terms, and any collection, customs or destination service requirements. For special containers and project cargo, include dimensions, weight and loading requirements.',
      },
      {
        question: 'Can I discuss exports from Lianyungang and Qingdao?',
        answer: 'Contact Bryce Lee about export requirements from Lianyungang, Qingdao and other origin ports. Routes, booking options and supporting services depend on the destination, cargo information and conditions for the shipment.',
      },
      {
        question: 'How can I contact Bryce Lee?',
        answer: 'Use the company email, international-format mobile number or WhatsApp link on this page. Include the origin, destination and expected shipment date in your message to help identify the information needed.',
      },
    ],
    footer: 'Company profile · Route guides · Export freight inquiries',
  },
} as const;

const linkStyle = 'underline decoration-white/25 underline-offset-4 transition hover:text-amber-300 hover:decoration-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300';

export default function AboutPage({ lang }: { lang: Lang }) {
  const text = copy[lang];
  const isZh = lang === 'zh';
  const homeHref = localizePath('/', lang);

  return (
    <main lang={isZh ? 'zh-CN' : 'en'} className="min-h-screen bg-[#030508] font-inter text-white">
      <PageLanguage lang={lang} />
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
        <nav aria-label={isZh ? '主导航' : 'Main navigation'} className="flex flex-wrap items-center justify-between gap-5 border-b border-white/15 py-6">
          <Link href={homeHref} className="font-podium text-xl font-black uppercase tracking-[0.12em] sm:text-2xl">
            Bryce Logistics
          </Link>
          <div className="flex flex-wrap items-center gap-5 text-sm font-semibold">
            <Link href={homeHref} className="transition hover:text-amber-300">{text.home}</Link>
            <Link href={localizePath('/routes', lang)} className="transition hover:text-amber-300">{text.routes}</Link>
            <Link href={localizePath('/experience', lang)} className="transition hover:text-amber-300">{isZh ? '客户与业务经验' : 'Customers & experience'}</Link>
            <Link href={localizePath('/about', isZh ? 'en' : 'zh')} hrefLang={isZh ? 'en' : 'zh-CN'} className="border border-white/25 px-3 py-2 transition hover:border-amber-300 hover:text-amber-300">
              {isZh ? 'EN' : '中文'}
            </Link>
          </div>
        </nav>

        <header className="border-b border-white/15 py-12 sm:py-20">
          <nav aria-label={isZh ? '面包屑导航' : 'Breadcrumb'} className="mb-10 text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-3">
              <li><Link href={homeHref} className="hover:text-amber-300">{text.home}</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/85">{text.about}</li>
            </ol>
          </nav>
          <p className="text-xs font-bold tracking-[0.18em] text-amber-300">{text.eyebrow}</p>
          <h1 aria-label={text.title} className="mt-5 max-w-4xl text-[clamp(2rem,5vw,4.75rem)] font-black leading-[1.12] tracking-tight">
            <span className="block text-balance">{companyProfile.brand[lang]}</span>
            <span className="sr-only"> · </span>
            <span className="mt-3 block text-[clamp(1.5rem,4vw,3rem)] leading-tight text-white/85">
              {isZh ? `${companyProfile.personName.zh} ${companyProfile.personName.en}` : companyProfile.personName.en}
            </span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">{text.intro}</p>
        </header>

        <section aria-labelledby="company-heading" className="grid gap-10 border-b border-white/15 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 sm:py-16">
          <div>
            <h2 id="company-heading" className="text-2xl font-bold sm:text-3xl">{text.companyHeading}</h2>
            <p className="mt-6 text-base leading-8 text-white/75">{text.companyIntro}</p>
            <p className="mt-4 text-base leading-8 text-white/65">{text.companyDetail}</p>
            <a href={companyProfile.corporateWebsite} target="_blank" rel="noopener noreferrer" className={`mt-6 inline-block text-sm font-semibold text-amber-300 ${linkStyle}`}>
              {text.website} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <dl className="space-y-6 border border-white/15 bg-white/[0.025] p-6 sm:p-8">
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-amber-300">{text.headquarters}</dt>
              <dd className="mt-2 break-words text-lg font-semibold leading-7">{companyProfile.companyName[lang]}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-amber-300">{text.branch}</dt>
              <dd className="mt-2 break-words text-base leading-7">{companyProfile.branchName[lang]}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-amber-300">{text.supplyChain}</dt>
              <dd lang="zh-CN" className="mt-2 break-words text-base leading-7">{companyProfile.supplyChainCompanyName}</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="services-heading" className="border-b border-white/15 py-12 sm:py-16">
          <h2 id="services-heading" className="text-2xl font-bold sm:text-3xl">{text.servicesHeading}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/65">{text.servicesIntro}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {text.services.map((service) => (
              <div key={service.title} className="border border-white/15 bg-white/[0.025] p-6">
                <h3 className="text-lg font-semibold text-amber-300">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{service.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="experience-heading" className="border-b border-white/15 py-12 sm:py-16">
          <h2 id="experience-heading" className="text-2xl font-bold sm:text-3xl">{isZh ? '合作客户与货物经验' : 'Customers & cargo experience'}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            {isZh
              ? '公司简介列示了柳工、卡特彼勒、徐工集团、中国重汽、青岛双星、中集集团等服务客户，以及轮胎、钢材、车辆、机械设备、光伏产品和食品等进出口物流经验。'
              : 'The company brochure lists customer experience including Liugong, Caterpillar, Xugong Group, China National Heavy Duty Truck Group, Qingdao Doublestar and China International Marine Containers Group, together with import and export experience in tires, steel, vehicles, machinery, photovoltaic products and food.'}
          </p>
          <Link href={localizePath('/experience', lang)} className={`mt-6 inline-block text-sm font-semibold text-amber-300 ${linkStyle}`}>{isZh ? '查看客户名单与业务经验' : 'Explore customers & logistics experience'} <span aria-hidden="true">→</span></Link>
        </section>

        <section aria-labelledby="contact-heading" className="grid gap-10 border-b border-white/15 py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 sm:py-16">
          <div>
            <h2 id="contact-heading" className="text-2xl font-bold sm:text-3xl">{text.personHeading}</h2>
            <p className="mt-6 text-3xl font-bold">{companyProfile.personName[lang]}</p>
            <p className="mt-3 font-semibold text-amber-300">{companyProfile.role[lang]} · {isZh ? '港威连云港' : 'Global View Logistics, Lianyungang'}</p>
            <p className="mt-5 leading-8 text-white/75">{text.personIntro}</p>
            <p className="mt-5 text-sm leading-7 text-white/60">{text.siteIdentity}</p>
          </div>
          <div className="min-w-0 border border-white/15 bg-white/[0.025] p-6 sm:p-8">
            <h3 className="text-lg font-semibold">{text.office}</h3>
            <address className="mt-4 break-words text-sm not-italic leading-7 text-white/75">
              {companyProfile.officeAddress[lang]}<br />
              {text.postcode}: {companyProfile.postalCode}
            </address>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-white/55">{text.email}</dt>
                <dd className="mt-1 break-all"><a href={`mailto:${contactEmail}`} className={linkStyle}>{contactEmail}</a></dd>
              </div>
              <div>
                <dt className="text-white/55">{text.mobile}</dt>
                <dd className="mt-1"><a href={companyProfile.mobileHref} className={linkStyle}>{companyProfile.mobileDisplay}</a></dd>
              </div>
              <div>
                <dt className="text-white/55">{text.landline}</dt>
                <dd className="mt-1"><a href={companyProfile.landlineHref} className={linkStyle}>{companyProfile.landline}</a></dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={`mailto:${contactEmail}`} className="bg-amber-300 px-5 py-3 text-center text-sm font-bold text-black transition hover:bg-amber-200">{text.emailAction}</a>
              <a href={`https://wa.me/86${contactPhone}`} target="_blank" rel="noopener noreferrer" className="border border-white/25 px-5 py-3 text-center text-sm font-semibold transition hover:border-amber-300 hover:text-amber-300">{text.whatsappAction}</a>
            </div>
          </div>
        </section>

        <section aria-labelledby="routes-heading" className="border-b border-white/15 py-12 sm:py-16">
          <h2 id="routes-heading" className="text-2xl font-bold sm:text-3xl">{text.routeHeading}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/65">{text.routeIntro}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {text.routeGroups.map((group) => (
              <div key={group.title} className="border border-white/15 p-6">
                <h3 className="text-lg font-semibold text-amber-300">{group.title}</h3>
                <ul className="mt-5 space-y-4 text-sm leading-6">
                  {group.links.map((link) => (
                    <li key={link.path}><Link href={localizePath(link.path, lang)} className={linkStyle}>{link.title} <span aria-hidden="true">→</span></Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-heading" className="py-12 sm:py-16">
          <h2 id="faq-heading" className="text-2xl font-bold sm:text-3xl">{text.faqHeading}</h2>
          <div className="mt-8 max-w-4xl divide-y divide-white/15 border-y border-white/15">
            {text.faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-base font-semibold sm:text-lg">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{faq.answer}</p>
              </div>
            ))}
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
