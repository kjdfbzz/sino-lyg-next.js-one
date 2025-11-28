'use client';

import React, { useState, useEffect } from 'react';
import {
  Ship,
  Plane,
  Truck,
  Package,
  Globe,
  Anchor,
  Menu,
  X,
  Clock,
  CheckCircle,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroImageError, setHeroImageError] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  const phone = '18360639913';
  const email = 'bryce.lee@gwl-lianyungang.com';
  const whatsapp = '8618360639913'; // WhatsApp 带国家码

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isZh = lang === 'zh';

  // 服务卡片文案
  const services = [
    {
      id: 'sea',
      title: isZh ? '国际海运整箱 / 拼箱' : 'Sea Freight (FCL / LCL)',
      desc: isZh
        ? '主做中国出口海运，熟悉印巴、中东、南美等航线资源，可根据你的成本和时效定制方案。'
        : 'Experienced in China export sea freight with focus on India–Pakistan, Middle East and South America. Tailor-made solutions for both cost and transit time.',
      gradient: 'from-blue-600 to-blue-900',
      icon: <Ship size={48} className="text-white" />,
      bgIcon: (
        <Anchor
          size={200}
          className="absolute -right-10 -bottom-10 text-white/10 rotate-12 group-hover:rotate-0 transition-all duration-700"
        />
      ),
    },
    {
      id: 'air',
      title: isZh ? '紧急空运 & 快件方案' : 'Air Freight & Express',
      desc: isZh
        ? '适合高货值、紧急交期的货物，协助评估空运 / 快件 / 多式联运的最优组合。'
        : 'For urgent and high-value shipments. Help you choose between air, express and multi-modal options.',
      gradient: 'from-sky-400 to-blue-600',
      icon: <Plane size={48} className="text-white" />,
      bgIcon: (
        <Globe
          size={200}
          className="absolute -right-10 -bottom-10 text-white/10 rotate-12 group-hover:rotate-0 transition-all duration-700"
        />
      ),
    },
    {
      id: 'truck',
      title: isZh ? '拖车 & 内陆段安排' : 'Trucking & Inland Haulage',
      desc: isZh
        ? '连云港自有车队，青岛协议车队合作十余年，可安排门到港 / 内陆中转，控制整体时效与成本。'
        : 'Own trucking team in Lianyungang and long-term contracted fleet in Qingdao, enabling stable inland haulage and door-to-port service.',
      gradient: 'from-orange-400 to-red-600',
      icon: <Truck size={48} className="text-white" />,
      bgIcon: (
        <MapPin
          size={200}
          className="absolute -right-10 -bottom-10 text-white/10 rotate-12 group-hover:rotate-0 transition-all duration-700"
        />
      ),
    },
    {
      id: 'warehouse',
      title: isZh ? '报关单证 & 仓储协同' : 'Customs & Documentation',
      desc: isZh
        ? '熟悉报关、产地证、商检、危险品等单证配合，可衔接仓储、装箱、贴标等操作。'
        : 'Experienced with customs, certificates of origin, inspection and DG documents, and can coordinate warehousing and stuffing.',
      gradient: 'from-emerald-400 to-teal-700',
      icon: <Package size={48} className="text-white" />,
      bgIcon: (
        <Package
          size={200}
          className="absolute -right-10 -bottom-10 text-white/10 rotate-12 group-hover:rotate-0 transition-all duration-700"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-800 selection:bg-amber-500 selection:text-white">
      {/* === 1. 导航栏 === */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900 shadow-lg py-3'
            : 'bg-slate-900/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-amber-500 p-1.5 rounded-lg">
              <Anchor size={24} className="text-slate-900" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Bryce<span className="text-amber-500">Logistics</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
            <a href="#home" className="hover:text-white transition">
              {isZh ? '首页' : 'Home'}
            </a>
            <a href="#services" className="hover:text-white transition">
              {isZh ? '服务内容' : 'Services'}
            </a>
            <a href="#about" className="hover:text-white transition">
              {isZh ? '关于我' : 'About'}
            </a>
            <a href="#routes" className="hover:text-white transition">
              {isZh ? '航线优势' : 'Trade Lanes'}
            </a>

            {/* 语言切换 */}
            <button
              onClick={() => setLang(isZh ? 'en' : 'zh')}
              className="px-3 py-1 rounded-full border border-slate-500/60 text-xs flex items-center gap-1 hover:border-amber-400 hover:text-amber-300 transition"
            >
              <Globe size={14} />
              {isZh ? 'EN' : '中'}
            </button>

            <a
              href={`tel:${phone}`}
              className="text-amber-400 hover:text-amber-300 transition flex items-center gap-1"
            >
              <Phone size={16} />
              {phone}
            </a>
            <button
              onClick={() => setShowQuoteModal(true)}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-2.5 rounded font-bold transition transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              {isZh ? '在线留下需求' : 'Send Your Inquiry'}
              <ArrowRight size={16} />
            </button>
          </div>

          {/* 修复：外层改为 div，避免 button 嵌套报错 */}
          <div className="md:hidden text-white flex items-center gap-3">
            {/* 语言切换（移动端） */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLang(isZh ? 'en' : 'zh');
              }}
              className="px-3 py-1 rounded-full border border-slate-500/60 text-xs flex items-center gap-1 hover:border-amber-400 hover:text-amber-300 transition"
            >
              <Globe size={14} />
              {isZh ? 'EN' : '中'}
            </button>
            {/* 菜单切换按钮 */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900 pt-24 px-6">
          <div className="flex flex-col gap-6 text-xl text-white font-medium">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-amber-300 transition"
            >
              {isZh ? '首页' : 'Home'}
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-amber-300 transition"
            >
              {isZh ? '服务内容' : 'Services'}
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-amber-300 transition"
            >
              {isZh ? '关于我' : 'About'}
            </a>
            <a
              href="#routes"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-amber-300 transition"
            >
              {isZh ? '航线优势' : 'Trade Lanes'}
            </a>
            <a
              href={`tel:${phone}`}
              className="bg-slate-800/80 border border-slate-700 py-3 rounded font-bold flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              {isZh ? '一键拨打：' : 'Call: '}
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="bg-slate-800/80 border border-slate-700 py-3 rounded font-bold flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              {isZh ? '发送邮件' : 'Send Email'}
            </a>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setShowQuoteModal(true);
              }}
              className="bg-amber-500 text-slate-900 py-3 rounded font-bold mt-2"
            >
              {isZh ? '在线提交业务需求' : 'Leave Your Inquiry'}
            </button>
          </div>
        </div>
      )}

      {/* === 2. Hero 区域 === */}
      <section
        id="home"
        className="relative min-h-[800px] flex flex-col justify-center pt-20 pb-32"
      >
        <div className="absolute inset-0 z-0 bg-slate-900">
          {!heroImageError ? (
            <img
              src="https://images.unsplash.com/photo-1494412651409-8963ce7f3508?auto=format&fit=crop&w=2000&q=80"
              alt="Global Logistics Hub"
              className="w-full h-full object-cover opacity-60"
              onError={() => setHeroImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-full opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(#ffffff 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              ></div>
              <Globe
                className="absolute -right-20 top-20 text-slate-700 opacity-20"
                size={600}
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-slate-600 text-amber-400 text-sm font-semibold tracking-wider mb-4 backdrop-blur-sm shadow-lg">
            {isZh
              ? 'Bryce · 连云港 / 青岛 / 上海 / 天津 / 广州 · 国际货运顾问'
              : 'Bryce · Lianyungang / Qingdao · Freight Forwarding Consultant'}
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
            {isZh ? (
              <>
                让全球贸易
                <br />
                变得
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  简单高效
                </span>
              </>
            ) : (
              <>
                Make Global Trade
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  Simple & Efficient
                </span>
              </>
            )}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            {isZh
              ? '这个网站只为做一件事：让你在考虑出口方案时，能快速找到一个讲真话、懂细节、能落地的货代伙伴。无论是整柜、拼箱还是多口岸联动，我会根据你的货物、目的港和预算，给出清晰、可执行的运输方案。'
              : 'This site has one goal: to help you quickly find a forwarder who tells the truth, understands the details and delivers workable solutions. From FCL/LCL to multi-port coordination, I design clear and practical shipping plans based on your cargo, destination and budget.'}
          </p>

          <div className="text-sm md:text-base text-slate-200 mb-8 flex flex-col items-center">
            <div className="inline-flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="w-20 text-right">
                  {isZh ? '手机' : 'Mobile'}
                </span>
                <a
                  href={`tel:${phone}`}
                  className="text-amber-300 hover:text-amber-200 font-semibold"
                >
                  {phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-20 text-right">Email</span>
                <a
                  href={`mailto:${email}`}
                  className="text-amber-300 hover:text-amber-200 font-semibold"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-20 text-right">WhatsApp</span>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  className="text-amber-300 hover:text-amber-200 font-semibold"
                >
                  +86 {phone}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <a
              href={`tel:${phone}`}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-10 py-4 rounded-lg font-bold shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
            >
              <Phone size={20} />
              {isZh ? '立即电话联系' : 'Call Now'}
            </a>
            <button
              onClick={() => setShowQuoteModal(true)}
              className="bg-white/10 hover:bg-white/15 text-white px-10 py-4 rounded-lg font-bold shadow-xl border border-white/20 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
            >
              {isZh ? '在线提交运输需求' : 'Leave Your Inquiry'}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* 底部统计卡片 */}
        <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2 z-20 hidden md:block">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl grid grid-cols-4 divide-x divide-slate-100 p-8 border border-slate-100">
              {[
                {
                  label: isZh ? '行业相关经验' : 'Industry Experience',
                  value: '≈10 年',
                  icon: <Clock className="text-amber-500 mb-2" size={28} />,
                },
                {
                  label: isZh ? '熟悉港口 / 国家' : 'Ports / Countries Covered',
                  value: '50+',
                  icon: <Globe className="text-blue-600 mb-2" size={28} />,
                },
                {
                  label: isZh ? '合作船东 / 货代' : 'Carriers & Partners',
                  value: '20+',
                  icon: <Ship className="text-slate-700 mb-2" size={28} />,
                },
                {
                  label: isZh ? '方案反馈时效' : 'Response Time',
                  value: '24h',
                  icon: (
                    <CheckCircle className="text-emerald-500 mb-2" size={28} />
                  ),
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-center hover:bg-slate-50 transition p-2 rounded-lg"
                >
                  {stat.icon}
                  <div className="text-3xl font-black text-slate-800">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === 3. 服务板块 === */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {isZh ? '我能帮你做什么' : 'What I Can Help You With'}
              </h2>
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>
            <p className="text-slate-600 max-w-xl text-lg">
              {isZh
                ? '下面是我日常经常处理的几类工作内容。如果你的需求不在其中，也可以直接联系我，一起评估是否适合合作。'
                : 'These are the type of work I handle on a daily basis. If your requirement is not listed, feel free to contact me and we can evaluate it together.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                />
                {service.bgIcon}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div>
                    <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/10 shadow-inner">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>
                  <span className="text-white font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-4 border-t border-white/20 pt-6">
                    {isZh ? '想了解这类服务' : 'Learn more about this'}
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 4. 关于我 & 差异化优势 === */}
      <section id="about" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold mb-6">
            {isZh ? '关于我 · Bryce' : 'About Me · Bryce'}
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            {isZh
              ? '我常年在中国连云港从事国际货运代理工作，从业接近十年。主要专注印巴、南美、中东等航线，对不同国家港口的操作习惯、清关要求和费用结构都有长期实操经验。这些年服务过的客户类型包括化工、电动车、电动三轮车、建材等中大型客户。'
              : 'Based in Lianyungang, China, I have been working in international freight forwarding for nearly ten years. I focus on India–Pakistan, Middle East and South America trade lanes, with hands-on experience in port operations, customs requirements and local charges. I mainly serve mid- to large-sized clients in chemicals, e-bikes, electric tricycles and building materials.'}
          </p>

          <h3 className="text-2xl font-semibold mb-3">
            {isZh
              ? '我和普通货代的区别'
              : 'How I Am Different from a Typical Forwarder'}
          </h3>
          <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
            <li>
              <span className="text-amber-400 font-semibold">
                {isZh
                  ? '一线操作出身，不只是“转报价”：'
                  : 'Operational background, not just a quote broker: '}
              </span>
              {isZh
                ? '长期在一线做实际操作和客户跟进，而不是单纯转发报价。对订舱、截关、堆存费、滞期费、目的港杂费等细节非常敏感，很多潜在问题会在接单前就帮你想到。'
                : 'I work from the operational side with direct customer follow-up instead of just forwarding quotes. I pay close attention to details like booking, cut-off, storage/demurrage and local charges, and highlight potential risks before you ship.'}
            </li>
            <li>
              <span className="text-amber-400 font-semibold">
                {isZh
                  ? '费用结构透明，不玩“临时加价”：'
                  : 'Transparent cost structure, no surprise charges: '}
              </span>
              {isZh
                ? '不承诺“全网最低价”，但会把运费、附加费、拖车费、目的港费用拆开说明，能省的帮你省，不能省的提前告诉你，尽量避免临时加价和隐形收费。'
                : 'I do not promise “cheapest rate on the market”, but I will clearly break down ocean freight, surcharges, trucking and local charges. I try to save where possible and always inform you in advance where costs are fixed.'}
            </li>
            <li>
              <span className="text-amber-400 font-semibold">
                {isZh
                  ? '深耕印巴 / 南美 / 中东航线，懂纸面规则以外的东西：'
                  : 'Deep focus on India–Pakistan, Middle East and South America: '}
              </span>
              {isZh
                ? '同样一个港口，不同船公司、不同海外代理的习惯完全不一样。我更关注哪条线更稳定、哪家船公司在这个港口更靠谱、哪里容易出问题，而不仅仅是报价单上的那几个数字。'
                : 'For the same port, every carrier and local agent behaves differently. I care about which service is more stable, which carrier is reliable at a given port and where problems usually occur, not just the numbers on a quote sheet.'}
            </li>
            <li>
              <span className="text-amber-400 font-semibold">
                {isZh
                  ? '连云港自有车队 + 青岛协议车队合作十余年：'
                  : 'Own trucking team in Lianyungang + long-term fleet in Qingdao: '}
              </span>
              {isZh
                ? '在连云港有自有车队，在青岛有合作超过十年的协议车队。这意味着旺季、天气异常、甩柜频繁的时候，拖车与进港节奏更可控，整体时效和成本更稳定。'
                : 'With my own trucks in Lianyungang and over ten years of cooperation with a contracted fleet in Qingdao, I can keep inland haulage and gate-in more stable during peak season and bad weather.'}
            </li>
            <li>
              <span className="text-amber-400 font-semibold">
                {isZh
                  ? '长期合作心态，而不是“一票式中间商”：'
                  : 'Long-term partnership mindset, not one-off deals: '}
              </span>
              {isZh
                ? '不会为了拿一票货把价格压到不现实，也不会故意隐瞒目的港风险。更愿意作为你的长期国际物流顾问，让你在遇到任何运输相关问题时，第一时间想到可以来问我。'
                : 'I don’t quote unrealistic low rates just to win one shipment, nor do I hide destination risks on purpose. I prefer to be your long-term logistics partner whom you can consult whenever you have questions.'}
            </li>
          </ul>
        </div>
      </section>

      {/* === 5. 航线优势 & 船公司资源 === */}
      <section id="routes" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            {isZh
              ? '我擅长的航线 & 船公司资源'
              : 'Key Trade Lanes & Carrier Resources'}
          </h2>
          <p className="text-slate-600 mb-12 max-w-3xl">
            {isZh
              ? '近十年的一线操作经验，加上稳定、可观的发货量，让我在印巴、中东、南美等重点航线拥有更稳定的舱位、价格和服务资源。下面是我日常重点在做的几条航线与合作船公司。'
              : 'With nearly ten years of hands-on operations and stable volume, I have reliable space and rate support on India–Pakistan, Middle East and South America trade lanes. Below are some of my key lanes and carrier partners.'}
          </p>

          <div className="space-y-12">
            {/* 印巴 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {isZh
                  ? '印巴航线（Kolkata 重点）'
                  : 'India–Pakistan Trade Lane (Kolkata Focus)'}
              </h3>
              <p className="text-slate-600 mb-1">
                📍 {isZh ? '核心港口：' : 'Key ports: '}
                <span className="font-semibold">
                  Kolkata / Nhava Sheva / Mundra
                </span>
              </p>
              <p className="text-slate-600 mb-1">
                📦 {isZh ? '货量情况：' : 'Volume: '}
                <span className="font-semibold">
                  Kolkata{' '}
                  {isZh
                    ? '长期每月约 50×40HQ 稳定发货'
                    : 'around 50×40HQ per month on a long-term basis'}
                </span>
              </p>
              <p className="text-slate-600">
                🚢 {isZh ? '船司资源：' : 'Carriers: '}
                <span className="font-semibold">MSC / SITC</span>
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-1 text-slate-600 text-sm">
                <li>
                  {isZh
                    ? '长期大批量直客资源 → 旺季舱位更稳定、守价能力更强。'
                    : 'Long-term and sizable direct client volume → more stable space and better rate protection in peak season.'}
                </li>
                <li>
                  {isZh
                    ? '熟悉印度港口目的港杂费结构与清关习惯，能提前做费用与风险提示。'
                    : 'Familiar with Indian local charges and customs practices; can highlight costs and risks in advance.'}
                </li>
                <li>
                  {isZh
                    ? '善于在 MSC 和 SITC 之间平衡时效与成本，给出适合你货物的组合方案。'
                    : 'Able to balance MSC and SITC services to optimize transit time and cost for your cargo.'}
                </li>
              </ul>
            </div>

            {/* 中东 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {isZh ? '中东航线' : 'Middle East Trade Lane'}
              </h3>
              <p className="text-slate-600 mb-1">
                📍 {isZh ? '覆盖区域：' : 'Coverage: '}
                <span className="font-semibold">
                  {isZh
                    ? '迪拜、沙特等主流中东市场'
                    : 'Dubai, Saudi Arabia and main ME markets'}
                </span>
              </p>
              <p className="text-slate-600">
                🚢 {isZh ? '船司资源：' : 'Carriers: '}
                <span className="font-semibold">COSCO / MSC</span>
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-1 text-slate-600 text-sm">
                <li>
                  {isZh
                    ? '熟悉 Jebel Ali、Dammam 等港口的收费结构与实际操作习惯。'
                    : 'Experienced with Jebel Ali, Dammam and other main ports in terms of local charges and operations.'}
                </li>
                <li>
                  {isZh
                    ? '旺季时舱位协调能力强，结合 COSCO / MSC 的不同优势做整体方案。'
                    : 'Strong space coordination in peak season by leveraging different strengths of COSCO and MSC.'}
                </li>
                <li>
                  {isZh
                    ? '对化工、危险品等品类发往中东有经验，能提前判断单证和申报要求。'
                    : 'Experienced in shipping chemicals and DG cargo to ME and can advise on documents and declarations.'}
                </li>
              </ul>
            </div>

            {/* 南美 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {isZh ? '南美航线' : 'South America Trade Lane'}
              </h3>
              <p className="text-slate-600 mb-1">
                📍 {isZh ? '覆盖区域：' : 'Coverage: '}
                <span className="font-semibold">
                  {isZh
                    ? '巴西、智利、秘鲁、墨西哥等南美主要市场'
                    : 'Brazil, Chile, Peru, Mexico and other main LATAM markets'}
                </span>
              </p>
              <p className="text-slate-600">
                🚢 {isZh ? '船司合约：' : 'Contracted carriers: '}
                <span className="font-semibold">CMA / MSK</span>
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-1 text-slate-600 text-sm">
                <li>
                  {isZh
                    ? '南美线运价高、航程长，有合约资源 → 舱位与价格更稳定。'
                    : 'South America is high-cost and long-transit; with carrier contracts, both space and rates are more stable.'}
                </li>
                <li>
                  {isZh
                    ? '熟悉南美地区清关要求与港口特点，适合设备、工程物资、建材等中大型客户。'
                    : 'Familiar with LATAM customs and port practices; suitable for equipment, project cargo and building materials.'}
                </li>
                <li>
                  {isZh
                    ? '可以根据成本和时效，在直达与中转之间设计合适的整体方案。'
                    : 'Can design suitable solutions by choosing between direct and transhipment services based on cost and lead time.'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === 6. CTA & Footer === */}
      <section className="bg-amber-500 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            {isZh
              ? '如果你现在就有一票货，'
              : 'If you have a shipment to discuss,'}
          </h2>
          <h3 className="text-xl md:text-2xl text-slate-900/80 mb-8">
            {isZh
              ? '可以直接联系我获取一个清晰、透明的运输方案。'
              : 'feel free to contact me for a clear and transparent shipping proposal.'}
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href={`tel:${phone}`}
              className="bg-slate-900 text-white px-10 py-4 rounded-lg font-bold hover:bg-slate-800 shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              {isZh ? '电话：' : 'Call: '}
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="bg-white text-slate-900 px-10 py-4 rounded-lg font-bold hover:bg-slate-100 shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              {isZh ? '邮箱联系我' : 'Email Me'}
            </a>
          </div>
          <p className="text-sm text-slate-900/80">
            {isZh
              ? '也可以点击页面任意按钮，在线提交你的需求，我会尽快回复你。'
              : 'You can also use any button on this page to leave your inquiry and I will get back to you as soon as possible.'}
          </p>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-2xl font-bold text-white mb-1">
                Bryce<span className="text-amber-500">Logistics</span>
              </div>
              <div className="text-xs text-slate-500">
                {isZh
                  ? '个人国际货运顾问 · 专注中国出口整柜 / 拼箱及相关配套服务'
                  : 'Independent freight forwarding consultant · Focus on China export FCL / LCL and related services.'}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 text-sm font-medium items-center">
              <a
                href={`tel:${phone}`}
                className="hover:text-white transition flex items-center gap-1"
              >
                <Phone size={16} />
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="hover:text-white transition flex items-center gap-1"
              >
                <Mail size={16} />
                {email}
              </a>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                className="hover:text-white transition text-xs md:text-sm"
              >
                WhatsApp: +86 {phone}
              </a>
            </div>
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Bryce Logistics. Personal site.
            </p>
          </div>
        </div>
      </footer>

      {/* === 悬浮联系按钮（微信二维码 + 复制手机号 + WhatsApp） === */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Toggle Button */}
        <button
          onClick={() => setShowContactMenu(!showContactMenu)}
          className="w-14 h-14 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-full shadow-xl flex items-center justify-center transition"
        >
          {showContactMenu ? (
            <X size={26} className="text-slate-900" />
          ) : (
            <Phone size={24} />
          )}
        </button>

        {/* Menu Panel - Added max-h and scroll */}
        {showContactMenu && (
          <div className="absolute bottom-20 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 space-y-5 max-h-[80vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-slate-800 mb-1">
              {isZh ? '联系 Bryce（李经理）' : 'Contact Bryce'}
            </h3>
            <p className="text-xs text-slate-500 mb-2">
              {isZh
                ? '选择你方便的方式联系我（微信 / 电话 / WhatsApp / 邮件）。'
                : 'Choose any way that is convenient for you: WeChat / phone / WhatsApp / email.'}
            </p>

            {/* 手机号 */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p className="text-sm text-slate-600">
                  {isZh ? '手机' : 'Mobile'}
                </p>
                <p className="font-semibold text-slate-900">{phone}</p>
              </div>
              <button
                className="text-amber-500 font-semibold hover:text-amber-600 text-sm"
                onClick={() => {
                  navigator.clipboard.writeText(phone);
                  alert(isZh ? '手机号已复制' : 'Mobile number copied');
                }}
              >
                {isZh ? '复制' : 'Copy'}
              </button>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              className="block p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition"
            >
              <p className="text-sm text-slate-600">WhatsApp</p>
              <p className="font-semibold text-slate-900">+86 {phone}</p>
            </a>

            {/* 邮箱 */}
            <a
              href={`mailto:${email}`}
              className="block p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition"
            >
              <p className="text-sm text-slate-600">
                {isZh ? '邮箱' : 'Email'}
              </p>
              <p className="font-semibold text-slate-900 break-all">{email}</p>
            </a>

            {/* WeChat QR Code - Smaller and Centered */}
            <div className="text-center">
              <p className="text-sm text-slate-600 mb-2">
                {isZh ? '添加微信（推荐）' : 'Add me on WeChat'}
              </p>
              <div className="flex justify-center">
                {/* 修复：使用 w-full h-auto 确保长方形图片完整显示，同时限制最大宽度 */}
                <img
                  src="wechat-qrcode.jpg"
                  alt="微信二维码"
                  className="w-48 h-auto max-w-[260px] rounded-lg border border-slate-200 shadow-sm object-contain bg-white"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* === 报价/需求收集 Modal === */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-[60] bg-slate-900/90 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl">
            <div className="p-6 border-b flex justify-between items-center bg-slate-50 rounded-t-2xl">
              <h2 className="text-xl font-bold text-slate-900">
                {isZh
                  ? '留下你的需求，我会尽快回复'
                  : 'Leave your inquiry and I will get back to you soon'}
              </h2>
              <button onClick={() => setShowQuoteModal(false)}>
                <X className="text-slate-400 hover:text-slate-600" />
              </button>
            </div>
            <div className="p-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={
                    isZh
                      ? '起运城市 / 港口（如 Qingdao）'
                      : 'POL (e.g. Qingdao)'
                  }
                  className="p-3 border rounded bg-slate-50 w-full outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="text"
                  placeholder={
                    isZh ? '目的城市 / 港口' : 'POD / Destination city'
                  }
                  className="p-3 border rounded bg-slate-50 w-full outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="number"
                  placeholder={isZh ? '重量 (KG)' : 'Weight (KG)'}
                  className="p-3 border rounded bg-slate-50 w-full outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="number"
                  placeholder={isZh ? '体积 (CBM)' : 'Volume (CBM)'}
                  className="p-3 border rounded bg-slate-50 w-full outline-none focus:ring-2 focus:ring-amber-500"
                />
                <select className="p-3 border rounded bg-slate-50 w-full outline-none focus:ring-2 focus:ring-amber-500">
                  <option>{isZh ? '海运' : 'Sea Freight'}</option>
                  <option>{isZh ? '空运' : 'Air Freight'}</option>
                  <option>{isZh ? '陆运 / 拖车' : 'Trucking / Inland'}</option>
                </select>
              </div>
              <input
                type="text"
                placeholder={
                  isZh ? '你的称呼（公司 / 姓名）' : 'Your name / company'
                }
                className="p-3 border rounded bg-slate-50 w-full outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="text"
                placeholder={
                  isZh
                    ? '你的联系方式（微信 / 手机 / 邮箱）'
                    : 'Your contact (WeChat / mobile / email)'
                }
                className="p-3 border rounded bg-slate-50 w-full outline-none focus:ring-2 focus:ring-amber-500"
              />
              <textarea
                placeholder={
                  isZh
                    ? '补充说明（货物品名、装货时间、是否有特殊要求等）'
                    : 'Additional information (cargo name, ready time, special requirements, etc.)'
                }
                className="p-3 border rounded bg-slate-50 w-full outline-none focus:ring-2 focus:ring-amber-500 min-h-[120px]"
              />
              <p className="text-xs text-slate-500">
                {isZh
                  ? '当前表单仅作展示，不会自动发送信息。如果你希望真实沟通，请直接使用页面上的手机号、微信或邮箱联系我。'
                  : 'This form is only for demo and will not actually send any data. For real communication, please contact me directly via mobile, WeChat or email shown on this page.'}
              </p>
              <button
                onClick={() => setShowQuoteModal(false)}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 rounded transition"
              >
                {isZh ? '知道了，先关闭' : 'Got it, close this'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
