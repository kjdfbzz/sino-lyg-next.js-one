'use client';

import { useState, type ComponentType, type CSSProperties } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Crown,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Package,
  Phone,
  Plane,
  Ship,
  ShieldCheck,
  Truck,
  X,
} from 'lucide-react';

const phone = '18360639913';
const email = 'bryce.lee@gwl-lianyungang.com';
const whatsapp = '8618360639913';

type Lang = 'zh' | 'en';
type Copy = Record<Lang, string>;
type IconType = ComponentType<{ className?: string }>;

const navItems = [
  { label: 'SERVICES', href: '#services' },
  { label: 'ROUTES', href: '#routes' },
  { label: 'BRYCE', href: '#about' },
  { label: 'INQUIRE', href: '#inquire' },
];

const stats = [
  { value: '10+', zh: '行业相关经验', en: 'Years Experience' },
  { value: '50+', zh: '熟悉港口 / 国家', en: 'Ports Covered' },
  { value: '20+', zh: '合作船东 / 货代', en: 'Carrier Partners' },
];

const services: Array<{
  icon: IconType;
  title: Copy;
  desc: Copy;
}> = [
  {
    icon: Ship,
    title: { zh: '海运整柜 / 拼箱', en: 'Ocean FCL / LCL' },
    desc: {
      zh: '中国出口主线服务，按货物、目的港、预算和时效匹配船司方案。',
      en: 'China export ocean freight matched to cargo, destination, budget and lead time.',
    },
  },
  {
    icon: Plane,
    title: { zh: '紧急空运 / 快件', en: 'Air & Express' },
    desc: {
      zh: '高货值、急交期货物，评估空运、快件、多式联运的性价比。',
      en: 'For urgent or high-value cargo, compare air, express and multi-modal options.',
    },
  },
  {
    icon: Truck,
    title: { zh: '拖车 / 内陆段', en: 'Trucking' },
    desc: {
      zh: '连云港自有车队，青岛协议车队合作十余年，控制进港节奏。',
      en: 'Own Lianyungang trucks and long-term Qingdao fleet support stable gate-in timing.',
    },
  },
  {
    icon: Package,
    title: { zh: '报关 / 单证 / 仓储', en: 'Docs & Customs' },
    desc: {
      zh: '报关、产地证、商检、危险品、仓储、装箱、贴标等协同处理。',
      en: 'Customs, CO, inspection, DG documents, warehousing, stuffing and labeling.',
    },
  },
];

const routes = [
  {
    code: '01',
    title: { zh: '印巴航线', en: 'India / Pakistan' },
    meta: 'Kolkata / Nhava Sheva / Mundra',
    carrier: 'MSC / SITC',
    copy: {
      zh: 'Kolkata 长期每月约 50 x 40HQ 稳定发货，旺季舱位和守价能力更强，并熟悉印度目的港杂费与清关习惯。',
      en: 'Long-term Kolkata volume around 50 x 40HQ monthly, with stronger peak-season space and Indian destination cost awareness.',
    },
  },
  {
    code: '02',
    title: { zh: '中东航线', en: 'Middle East' },
    meta: 'Dubai / Saudi Arabia / Jebel Ali / Dammam',
    carrier: 'COSCO / MSC',
    copy: {
      zh: '熟悉 Jebel Ali、Dammam 等港口收费结构和实际操作，对化工、危险品等品类可提前判断单证要求。',
      en: 'Practical knowledge of Jebel Ali, Dammam and DG/chemical documentation requirements.',
    },
  },
  {
    code: '03',
    title: { zh: '南美航线', en: 'South America' },
    meta: 'Brazil / Chile / Peru / Mexico',
    carrier: 'CMA / MSK',
    copy: {
      zh: '南美线运价高、航程长，合约资源能让舱位和价格更稳定，适合设备、工程物资、建材等客户。',
      en: 'Contracted long-haul resources for equipment, project cargo and building material exporters.',
    },
  },
];

const advantages = [
  {
    title: { zh: '一线操作出身', en: 'Operator First' },
    copy: {
      zh: '不只是转报价，对订舱、截关、堆存费、滞期费、目的港杂费等风险更敏感。',
      en: 'Not just forwarding quotes; booking, cut-off, storage, demurrage and local charges are considered early.',
    },
  },
  {
    title: { zh: '费用结构透明', en: 'Clear Cost Structure' },
    copy: {
      zh: '把海运费、附加费、拖车费、目的港费用拆开说明，尽量避免临时加价和隐形收费。',
      en: 'Ocean freight, surcharges, trucking and destination costs are separated before you decide.',
    },
  },
  {
    title: { zh: '重点航线深耕', en: 'Focused Trade Lanes' },
    copy: {
      zh: '更关注哪条线稳定、哪家船公司靠谱、哪里容易出问题，而不是报价单上的几个数字。',
      en: 'Advice is based on stability, carrier behavior and port habits, not only quote-sheet numbers.',
    },
  },
  {
    title: { zh: '长期合作心态', en: 'Long-Term Partner' },
    copy: {
      zh: '不靠一票式低价吸引客户，更适合长期出口客户反复咨询和复盘。',
      en: 'Built for repeat export clients who need a consultant they can return to.',
    },
  },
];

const processSteps = [
  {
    zh: '货物信息',
    en: 'Brief',
    descZh: '起运港、目的港、品名、件重尺、出货时间。',
    descEn: 'POL, POD, cargo name, weight, volume and ready date.',
  },
  {
    zh: '方案比较',
    en: 'Options',
    descZh: '按船司、航程、价格、截关和目的港风险对比。',
    descEn: 'Compare carriers, transit time, price, cut-off and destination risk.',
  },
  {
    zh: '订舱执行',
    en: 'Execution',
    descZh: '协调拖车、报关、仓储、装箱和进港节点。',
    descEn: 'Coordinate trucking, customs, warehouse, stuffing and gate-in.',
  },
  {
    zh: '跟踪反馈',
    en: 'Tracking',
    descZh: '直到开船、到港、清关节点都持续同步。',
    descEn: 'Updates through sailing, arrival and clearance milestones.',
  },
];

const inquiryFields = [
  { label: 'POL / 起运港', placeholder: 'Qingdao / Lianyungang / Shanghai' },
  { label: 'POD / 目的港', placeholder: 'Kolkata / Jebel Ali / Santos' },
  { label: 'Cargo / 货物', placeholder: '品名、件数、重量、体积' },
  { label: 'Contact / 联系方式', placeholder: '微信 / 手机 / 邮箱' },
];

function pick(copy: Copy, lang: Lang) {
  return copy[lang];
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('zh');
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const isZh = lang === 'zh';

  const openInquiry = () => {
    setMenuOpen(false);
    setQuoteOpen(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030508] font-inter text-white selection:bg-amber-300 selection:text-black">
      <Hero
        lang={lang}
        menuOpen={menuOpen}
        setLang={setLang}
        setMenuOpen={setMenuOpen}
        openInquiry={openInquiry}
      />

      <MobileMenu
        lang={lang}
        menuOpen={menuOpen}
        setLang={setLang}
        setMenuOpen={setMenuOpen}
        openInquiry={openInquiry}
      />

      <section id="services" className="relative isolate min-h-screen overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <img
          src="/bryce-services-port.png"
          alt="Night cargo operations with truck, forklift and container ship"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,5,8,0.94)_0%,rgba(3,5,8,0.74)_42%,rgba(3,5,8,0.16)_78%,rgba(3,5,8,0.34)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#030508] to-transparent" />

        <TemplateIntro
          label="SERVICES"
          title={isZh ? '从订舱到交付。' : 'From booking to delivery.'}
          copy={
            isZh
              ? '围绕中国出口，把海运、空运、拖车、单证四个环节串起来，先判断风险，再给出可执行方案。'
              : 'Ocean, air, trucking and documentation are connected into one practical China export plan.'
          }
        />

        <div className="mt-16 grid max-w-6xl border border-white/16 bg-black/30 backdrop-blur-sm md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title.zh}
                className={`group min-h-[330px] p-6 sm:p-7 ${
                  index > 0 ? 'border-t border-white/16 md:border-l md:border-t-0' : ''
                } ${index === 2 ? 'md:border-l-0 md:border-t xl:border-l xl:border-t-0' : ''}`}
              >
                <div className="mb-14 flex items-center justify-between">
                  <span className="text-4xl font-black tabular-nums text-white/18">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Icon className="h-8 w-8 text-amber-300" />
                </div>
                <h3 className="text-2xl font-black tracking-tight text-white">
                  {pick(service.title, lang)}
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/66">
                  {pick(service.desc, lang)}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="routes" className="relative isolate min-h-screen overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <img
          src="/bryce-routes-command.png"
          alt="Dark route planning command center with shipping map"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,5,8,0.58)_0%,rgba(3,5,8,0.86)_68%,rgba(3,5,8,0.98)_100%)]" />
        <div className="grid min-h-[calc(100vh-12rem)] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="self-start">
            <p className="text-xs font-black uppercase tracking-[0.34em] text-amber-300">
              ROUTES
            </p>
            <h2 className="mt-6 font-podium text-[clamp(4rem,11vw,11rem)] font-black uppercase leading-[0.86] text-white">
              Lanes.
              <br />
              Space.
              <br />
              Risk.
            </h2>
          </div>

          <div className="space-y-4">
            {routes.map((route) => (
              <article
                key={route.code}
                className="grid gap-5 border border-white/16 bg-black/38 p-5 backdrop-blur-md transition hover:border-amber-300/50 sm:grid-cols-[86px_1fr] sm:p-6"
              >
                <div className="text-5xl font-black leading-none tabular-nums text-amber-300">
                  {route.code}
                </div>
                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-2xl font-black tracking-tight">
                      {pick(route.title, lang)}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/46">
                      {route.carrier}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/42">
                    {route.meta}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    {pick(route.copy, lang)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#030508] px-6 py-24 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.34em] text-amber-300">
              BRYCE
            </p>
            <h2 className="mt-6 max-w-3xl font-podium text-[clamp(3.5rem,8vw,8.4rem)] font-black uppercase leading-[0.88]">
              Clear
              <br />
              Before
              <br />
              Cargo.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/64">
              {isZh
                ? '我常年在中国连云港从事国际货运代理工作，从业接近十年。主要专注印巴、南美、中东等航线，对不同国家港口的操作习惯、清关要求和费用结构都有长期实操经验。'
                : 'Based in Lianyungang, China, I have worked in freight forwarding for nearly ten years, focusing on India-Pakistan, Middle East and South America trade lanes.'}
            </p>
          </div>

          <div className="grid border border-white/16 md:grid-cols-2">
            {advantages.map((item, index) => (
              <article
                key={item.title.zh}
                className={`min-h-[260px] p-6 sm:p-7 ${
                  index > 0 ? 'border-t border-white/16 md:border-l md:border-t-0' : ''
                } ${index === 2 ? 'md:border-l-0 md:border-t' : ''}`}
              >
                <ShieldCheck className="h-7 w-7 text-amber-300" />
                <h3 className="mt-10 text-xl font-black tracking-tight">
                  {pick(item.title, lang)}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {pick(item.copy, lang)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <img
          src="/bryce-process-desk.png"
          alt="Freight consultant desk with shipping documents and port view"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,5,8,0.92)_0%,rgba(3,5,8,0.76)_42%,rgba(3,5,8,0.36)_100%)]" />

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.34em] text-amber-300">
              PROCESS
            </p>
            <h2 className="mt-6 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              {isZh ? '运输方案从信息拆解开始。' : 'Every shipment starts with a sharper brief.'}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/64">
              {isZh
                ? '真正影响运输体验的，不只是海运费，还有截关、拖车、目的港费用、单证要求、旺季舱位和异常处理。'
                : 'Freight is not only the ocean rate. Cut-off, trucking, destination charges, documents, peak-season space and exceptions all matter.'}
            </p>
          </div>

          <div className="grid border border-white/16 bg-black/34 backdrop-blur-sm md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step.zh}
                className={`min-h-[250px] p-6 ${
                  index > 0 ? 'border-t border-white/16 md:border-l md:border-t-0' : ''
                }`}
              >
                <div className="text-5xl font-black leading-none tabular-nums text-white/22">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-10 text-xl font-black">
                  {isZh ? step.zh : step.en}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {isZh ? step.descZh : step.descEn}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="inquire"
        className="relative overflow-hidden bg-amber-300 px-6 py-20 text-black sm:px-10 lg:px-16"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.34em] text-black/54">
              LET'S MOVE IT
            </p>
            <h2 className="mt-5 max-w-4xl font-podium text-[clamp(3.2rem,8vw,7rem)] font-black uppercase leading-[0.9]">
              Send
              <br />
              The Brief.
            </h2>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-black/68">
              {isZh
                ? '如果你现在就有一票货，把起运港、目的港、货物信息和出货时间发给我，我来帮你先把方案梳理清楚。'
                : 'Send POL, POD, cargo details and ready date. I will help turn it into a clear shipping plan.'}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:w-[440px]">
            <button
              type="button"
              onClick={openInquiry}
              className="group flex items-center justify-center gap-3 bg-black px-6 py-5 text-xs font-black uppercase tracking-[0.24em] text-white transition hover:bg-[#141414]"
            >
              {isZh ? '在线留下需求' : 'Send inquiry'}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <a
              href={`tel:${phone}`}
              className="flex items-center justify-center gap-3 border border-black px-6 py-5 text-xs font-black uppercase tracking-[0.24em] transition hover:bg-black hover:text-white"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#030508] px-6 py-12 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-8 border-t border-white/14 pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-podium text-3xl font-black uppercase tracking-[0.18em]">
              Bryce Logistics
            </div>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-white/42">
              {isZh
                ? '个人国际货运顾问 · 中国出口整柜 / 拼箱 / 拖车 / 报关'
                : 'Independent freight consultant · China export FCL / LCL / trucking / customs'}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm font-bold text-white/66 md:items-end">
            <a className="hover:text-white" href={`tel:${phone}`}>
              {phone}
            </a>
            <a className="hover:text-white" href={`mailto:${email}`}>
              {email}
            </a>
            <a
              className="hover:text-white"
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp +86 {phone}
            </a>
          </div>
        </div>
      </footer>

      <FloatingContact
        lang={lang}
        contactOpen={contactOpen}
        setContactOpen={setContactOpen}
      />

      {quoteOpen && <InquiryModal setQuoteOpen={setQuoteOpen} />}
    </main>
  );
}

function Hero({
  lang,
  menuOpen,
  setLang,
  setMenuOpen,
  openInquiry,
}: {
  lang: Lang;
  menuOpen: boolean;
  setLang: (lang: Lang) => void;
  setMenuOpen: (open: boolean) => void;
  openInquiry: () => void;
}) {
  const isZh = lang === 'zh';

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden">
      <img
        src="/bryce-hero-port.png"
        alt="Night container port with cranes and cargo ship"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,5,8,0.93)_0%,rgba(3,5,8,0.68)_42%,rgba(3,5,8,0.14)_74%,rgba(3,5,8,0.34)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#030508] to-transparent" />
      <div className="pointer-events-none absolute bottom-24 left-6 right-6 top-24 z-0 border border-white/[0.07] sm:left-10 sm:right-10 lg:left-16 lg:right-16" />

      <nav className="relative z-30 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
        <a
          href="#home"
          className="font-podium text-xl font-black uppercase tracking-[0.12em] text-white sm:text-3xl sm:tracking-[0.18em]"
          aria-label="Bryce Logistics home"
        >
          Bryce Logistics
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) =>
            item.label === 'INQUIRE' ? (
              <button
                key={item.label}
                type="button"
                onClick={openInquiry}
                className="text-sm font-black uppercase tracking-[0.28em] text-white/78 transition hover:text-white"
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-black uppercase tracking-[0.28em] text-white/78 transition hover:text-white"
              >
                {item.label}
              </a>
            ),
          )}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setLang(isZh ? 'en' : 'zh')}
            className="border border-white/20 px-4 py-3 text-xs font-black uppercase tracking-[0.22em] text-white/84 transition hover:border-white/50 hover:text-white"
          >
            {isZh ? 'EN' : '中文'}
          </button>
          <button
            type="button"
            onClick={openInquiry}
            className="group flex items-center gap-3 border border-white/30 px-6 py-3 text-xs font-black uppercase tracking-[0.28em] text-white transition hover:border-white/60 hover:bg-white/10"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setLang(isZh ? 'en' : 'zh')}
            className="border border-white/20 px-2.5 py-2 text-xs font-black uppercase tracking-[0.18em] text-white"
          >
            {isZh ? 'EN' : '中'}
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-white/20 text-white"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <div className="relative z-10 flex min-h-[calc(100vh-96px)] flex-col justify-center px-6 pb-28 pt-10 sm:px-10 lg:px-16">
        <div className="max-w-[980px]">
          <div className="animate-fade-up mb-6 flex items-center gap-3 lg:mb-8">
            <Crown className="h-4 w-4 text-white/78" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-white/72 sm:text-sm">
              China Export Freight Consultant
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 font-podium text-[4.05rem] font-black uppercase leading-[0.82] text-white [text-shadow:0_18px_45px_rgba(0,0,0,0.72)] sm:text-[5.8rem] md:text-[7.6rem] lg:text-[9.5rem] xl:text-[11rem]">
            Move.
            <br />
            Clear.
            <br />
            Deliver.
          </h1>

          <div className="animate-fade-up-delay-2 mt-8 grid gap-6 lg:grid-cols-[minmax(0,640px)_auto] lg:items-end">
            <p className="max-w-2xl text-sm leading-7 text-white/74 sm:text-base">
              {isZh
                ? '我是 Bryce，在中国连云港从事国际货运代理。为出口客户把整柜、拼箱、拖车、报关、空运和重点航线方案讲清楚，让每一票货都有可执行路径。'
                : 'I am Bryce, a freight forwarding consultant based in Lianyungang, China. I turn FCL, LCL, trucking, customs, air freight and trade-lane decisions into clear executable shipment plans.'}
            </p>

            <button
              type="button"
              onClick={openInquiry}
              className="group flex w-fit items-center gap-3 border border-white/35 bg-black/35 px-7 py-4 text-xs font-black uppercase tracking-[0.28em] text-white shadow-2xl shadow-black/20 backdrop-blur-md transition hover:border-amber-300 hover:bg-amber-300 hover:text-black"
            >
              {isZh ? '留下运输需求' : 'Send inquiry'}
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="animate-fade-up-delay-3 mt-12 grid max-w-4xl grid-cols-1 border border-white/14 bg-black/20 backdrop-blur-[2px] sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className={`p-5 sm:p-7 ${
                  index > 0 ? 'border-t border-white/14 sm:border-l sm:border-t-0' : ''
                }`}
              >
                <div className="text-4xl font-black tabular-nums text-white sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-[10px] font-black uppercase tracking-[0.22em] text-amber-300 sm:text-xs">
                  {isZh ? stat.zh : stat.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col gap-3 text-xs font-black tracking-[0.18em] text-white/72 sm:left-10 sm:right-10 sm:flex-row sm:items-center sm:justify-between lg:left-16 lg:right-16">
        <a className="transition hover:text-white" href={`tel:${phone}`}>
          TEL&nbsp;&nbsp;{phone}
        </a>
        <a className="transition hover:text-white" href={`mailto:${email}`}>
          {email}
        </a>
        <a
          className="transition hover:text-white"
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          WHATSAPP&nbsp;&nbsp;+86 {phone}
        </a>
      </div>
    </section>
  );
}

function TemplateIntro({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="text-xs font-black uppercase tracking-[0.34em] text-amber-300">
        {label}
      </p>
      <h2 className="mt-6 max-w-4xl text-[clamp(3rem,7vw,7.2rem)] font-black leading-[0.96] tracking-tight text-white">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-8 text-white/66">
        {copy}
      </p>
    </div>
  );
}

function MobileMenu({
  lang,
  menuOpen,
  setLang,
  setMenuOpen,
  openInquiry,
}: {
  lang: Lang;
  menuOpen: boolean;
  setLang: (lang: Lang) => void;
  setMenuOpen: (open: boolean) => void;
  openInquiry: () => void;
}) {
  const isZh = lang === 'zh';

  return (
    <div
      data-testid="mobile-menu"
      className={`fixed inset-0 z-50 bg-black/96 px-6 py-5 backdrop-blur-sm transition-all duration-500 md:hidden ${
        menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className="flex items-center justify-between">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="font-podium text-2xl font-black uppercase tracking-[0.18em] text-white"
        >
          Bryce Logistics
        </a>
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
          className="flex h-10 w-10 items-center justify-center border border-white/20 text-white"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="flex h-[calc(100vh-96px)] flex-col items-center justify-center gap-7">
        {navItems.map((item, index) => {
          const style = {
            transitionDelay: `${index * 80 + 100}ms`,
          } as CSSProperties;

          return item.label === 'INQUIRE' ? (
            <button
              key={item.label}
              type="button"
              onClick={openInquiry}
              style={style}
              className={`font-podium text-4xl uppercase tracking-[0.16em] text-white transition-all duration-500 sm:text-5xl ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
            >
              {item.label}
            </button>
          ) : (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={style}
              className={`font-podium text-4xl uppercase tracking-[0.16em] text-white transition-all duration-500 sm:text-5xl ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
            >
              {item.label}
            </a>
          );
        })}

        <button
          type="button"
          onClick={() => setLang(isZh ? 'en' : 'zh')}
          className="border border-white/24 px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-white"
        >
          {isZh ? 'Switch to English' : '切换中文'}
        </button>
      </div>
    </div>
  );
}

function FloatingContact({
  lang,
  contactOpen,
  setContactOpen,
}: {
  lang: Lang;
  contactOpen: boolean;
  setContactOpen: (open: boolean) => void;
}) {
  const isZh = lang === 'zh';

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        type="button"
        onClick={() => setContactOpen(!contactOpen)}
        className="flex h-14 w-14 items-center justify-center bg-amber-300 text-black shadow-2xl shadow-black/30 transition hover:bg-white"
        aria-label={isZh ? '打开联系菜单' : 'Open contact menu'}
      >
        {contactOpen ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
      </button>

      {contactOpen && (
        <div className="absolute bottom-16 right-0 mb-3 w-[min(20rem,calc(100vw-2.5rem))] border border-white/18 bg-[#05070a] p-5 text-white shadow-2xl">
          <h3 className="text-lg font-black">
            {isZh ? '联系 Bryce（李经理）' : 'Contact Bryce'}
          </h3>
          <p className="mt-1 text-xs leading-5 text-white/52">
            {isZh
              ? '选择你方便的方式联系我：微信、电话、WhatsApp 或邮件。'
              : 'Choose the channel that works best: WeChat, phone, WhatsApp or email.'}
          </p>

          <div className="mt-5 space-y-3">
            <ContactRow icon={Phone} label={isZh ? '手机' : 'Mobile'} value={phone} href={`tel:${phone}`} />
            <ContactRow icon={Mail} label="Email" value={email} href={`mailto:${email}`} />
            <ContactRow
              icon={Globe2}
              label="WhatsApp"
              value={`+86 ${phone}`}
              href={`https://wa.me/${whatsapp}`}
            />
          </div>

          <div className="mt-5 border-t border-white/12 pt-5 text-center">
            <p className="mb-3 text-sm font-bold text-white/62">
              {isZh ? '添加微信（推荐）' : 'Add me on WeChat'}
            </p>
            <img
              src="/wechat-qrcode.jpg"
              alt="Bryce WeChat QR code"
              className="mx-auto w-48 border border-white/16 bg-white object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('https://') ? '_blank' : undefined}
      rel={href.startsWith('https://') ? 'noreferrer' : undefined}
      className="flex items-center gap-3 border border-white/12 bg-white/[0.04] p-3 transition hover:bg-white/[0.08]"
    >
      <Icon className="h-5 w-5 text-amber-300" />
      <span className="min-w-0">
        <span className="block text-xs font-black uppercase tracking-[0.16em] text-white/38">
          {label}
        </span>
        <span className="block break-all text-sm font-bold text-white">
          {value}
        </span>
      </span>
    </a>
  );
}

function InquiryModal({
  setQuoteOpen,
}: {
  setQuoteOpen: (open: boolean) => void;
}) {
  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/82 px-4 py-6 backdrop-blur-md sm:items-center">
      <div className="animate-scale-in w-full max-w-2xl border border-white/18 bg-[#05070a] text-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/12 px-5 py-4 sm:px-7">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-amber-300">
              Inquiry brief
            </p>
            <h2 className="mt-1 text-xl font-black tracking-tight">
              留下运输需求，我来帮你梳理方案
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close inquiry dialog"
            onClick={() => setQuoteOpen(false)}
            className="text-white/58 transition hover:text-white"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <form
          className="space-y-4 px-5 py-6 sm:px-7"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {inquiryFields.map((field) => (
              <label key={field.label} className="block">
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/48">
                  {field.label}
                </span>
                <input
                  className="mt-2 w-full border border-white/14 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/32 focus:border-amber-300 focus:bg-white/[0.07]"
                  placeholder={field.placeholder}
                />
              </label>
            ))}
          </div>

          <label className="block">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/48">
              Notes / 补充说明
            </span>
            <textarea
              className="mt-2 min-h-28 w-full border border-white/14 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/32 focus:border-amber-300 focus:bg-white/[0.07]"
              placeholder="装货时间、是否需要拖车报关、是否有目的港特殊要求等"
            />
          </label>

          <p className="text-xs leading-relaxed text-white/46">
            当前表单只在本页面整理信息，不会自动发送。你可以直接电话、邮箱或
            WhatsApp 联系我，我会按你的货物信息给出更清晰的运输方案。
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:${phone}`}
              className="flex items-center justify-center bg-amber-300 px-5 py-4 text-xs font-black uppercase tracking-[0.24em] text-black transition hover:bg-white"
            >
              Call {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center border border-white/28 px-5 py-4 text-xs font-black uppercase tracking-[0.24em] text-white transition hover:border-amber-300 hover:text-amber-300"
            >
              Email Bryce
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
