export const siteUrl = 'https://www.sinolyg.com';
export const contactEmail = 'Bryce.Lee@gwl-lianyungang.com';
export const contactPhone = '18360639913';

export type ContentSectionSlug = 'requirements' | 'routes' | 'guides';

export type ContentSection = {
  slug: ContentSectionSlug;
  label: string;
  title: string;
  description: string;
  intro: string;
};

export type ContentArticle = {
  slug: string;
  section: ContentSectionSlug;
  title: string;
  description: string;
  updatedAt: string;
  readTime: string;
  image: string;
  keywords: string[];
  highlights: string[];
  sections: Array<{
    heading: string;
    body: string;
    bullets?: string[];
  }>;
  checklist?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};

export const contentSections: ContentSection[] = [
  {
    slug: 'requirements',
    label: 'Shipping Requirements',
    title: '中国出口出货要求',
    description:
      '整理整柜、拼箱、报关和单证资料，帮助外贸工厂在订舱前把出货信息准备清楚。',
    intro:
      '很多运输异常不是发生在海上，而是发生在订舱、截关、拖车、报关和资料确认阶段。下面这些清单适合在询价和出货前先对一遍。',
  },
  {
    slug: 'routes',
    label: 'Route Guides',
    title: '重点航线指南',
    description:
      '围绕印度、中东、南美等中国出口常见航线，说明港口、舱位、费用和目的港风险。',
    intro:
      '不同航线的差异不只是价格。港口习惯、目的港费用、旺季舱位和单证要求都会影响最终交付体验。',
  },
  {
    slug: 'guides',
    label: 'Freight Guides',
    title: '海运费用和操作说明',
    description:
      '把海运费、附加费、拖车、报关、目的港费用等拆开说明，帮助客户看懂报价。',
    intro:
      '报价单上的一个总价很容易误导判断。把费用结构拆开看，才能知道哪里可控、哪里需要提前确认。',
  },
];

export const contentArticles: ContentArticle[] = [
  {
    slug: 'fcl-export-checklist',
    section: 'requirements',
    title: '整柜 FCL 出口订舱和出货资料清单',
    description:
      '中国出口整柜订舱前需要准备哪些资料？按货物信息、箱型、截关、拖车、报关和提单确认梳理。',
    updatedAt: '2026-07-05',
    readTime: '5 min read',
    image: '/bryce-services-port.webp',
    keywords: ['整柜出口', 'FCL shipping', '订舱资料', '中国出口货代'],
    highlights: [
      '先确认箱型、货重、装货地址和出货时间，再谈价格更有效。',
      '截关、截单、开港和还重箱时间要一起看，不能只看船期。',
      '报关资料和提单资料最好在订舱阶段就开始核对。',
    ],
    sections: [
      {
        heading: '1. 询价和订舱前先准备基础货物信息',
        body:
          '整柜运输最怕信息不完整导致价格、舱位和拖车安排反复变化。询价时建议一次性提供起运港、目的港、品名、箱型、件数、毛重、体积、装货地址、预计出货时间和是否需要报关。',
        bullets: [
          '常见箱型：20GP、40GP、40HQ、45HQ。',
          '货重接近限重时，需要提前确认港区、道路和船司限制。',
          '如果货物超长、超宽、超高，普通柜方案可能不适用。',
        ],
      },
      {
        heading: '2. 截关、截单和拖车时间要倒推',
        body:
          '整柜不是“有船期就能走”。订舱后需要看开港时间、截关时间、截单时间、拖车装货时间和还重箱时间。工厂装货慢、报关资料晚、港区拥堵都会影响能否赶上船。',
      },
      {
        heading: '3. 报关和提单资料尽量提前核对',
        body:
          '报关资料和提单资料虽然不是同一套文件，但品名、件数、重量、收发货人、目的港等信息应保持逻辑一致。尤其是化工品、危险品、带电产品、木制品和监管条件特殊的货物，需要提前确认。',
      },
    ],
    checklist: [
      '起运港 / 目的港',
      '品名、HS Code、材质和用途',
      '箱型、件数、毛重、体积',
      '装货地址、联系人、装货时间',
      '是否需要拖车、报关、仓储、商检、产地证',
      '收发货人、通知人、提单显示要求',
    ],
    faqs: [
      {
        question: '整柜询价只给目的港可以吗？',
        answer:
          '可以先粗略判断，但正式报价最好补充箱型、货重、品名、出货时间和是否需要拖车报关，否则价格和可操作性容易偏差。',
      },
      {
        question: '整柜订舱后还能改船期吗？',
        answer:
          '通常可以尝试调整，但会受船司舱位、截关时间和费用影响。旺季或临近截关时改动难度更高。',
      },
    ],
  },
  {
    slug: 'lcl-export-checklist',
    section: 'requirements',
    title: '拼箱 LCL 出口注意事项：体积、入仓和目的港费用',
    description:
      '拼箱出口适合小批量货物，但要提前确认计费体积、入仓要求、目的港费用和单证信息。',
    updatedAt: '2026-07-05',
    readTime: '4 min read',
    image: '/bryce-process-desk.webp',
    keywords: ['拼箱出口', 'LCL shipping', '入仓', '目的港费用'],
    highlights: [
      '拼箱计费通常按体积或重量择大，轻泡货和重货差异明显。',
      '货物入仓前要确认唛头、件数、外包装和仓库预约要求。',
      '目的港费用必须提前问清楚，避免客户只看到起运港低价。',
    ],
    sections: [
      {
        heading: '1. 拼箱先看体积和重量',
        body:
          '拼箱 LCL 不是简单按一票货收费，通常会按 W/M 计费，也就是重量吨和体积吨择大。轻泡货、重货、异形包装的实际费用差异会比较大。',
      },
      {
        heading: '2. 入仓前确认包装和唛头',
        body:
          '拼箱货会和其他客户的货物一起装箱，所以外包装、唛头、件数和仓库入仓信息必须清楚。木箱、托盘、易碎品、液体和带电产品要提前说明。',
        bullets: [
          '确认仓库地址、入仓编号和截止入仓时间。',
          '件数和包装方式要和报关、入仓数据一致。',
          '货物照片、外箱尺寸和唛头照片可以减少沟通成本。',
        ],
      },
      {
        heading: '3. 目的港费用要提前说明',
        body:
          '拼箱目的港费用有时比客户预期更高，尤其是印度、中东、南美部分港口。询价时建议同时确认起运港费用、海运费和目的港常见收费项目。',
      },
    ],
    checklist: [
      '品名、件数、毛重、体积',
      '每件尺寸和包装方式',
      '是否带电、液体、粉末、磁性、木质包装',
      '入仓时间和仓库要求',
      '是否需要报关、产地证或商检',
    ],
  },
  {
    slug: 'customs-documents',
    section: 'requirements',
    title: '中国出口报关和单证资料：订舱前需要确认什么',
    description:
      '梳理中国出口常见报关资料、提单资料、产地证、商检和特殊货物单证，减少临时卡点。',
    updatedAt: '2026-07-05',
    readTime: '5 min read',
    image: '/bryce-process-desk.webp',
    keywords: ['出口报关资料', '提单资料', '产地证', '商检'],
    highlights: [
      '报关资料和提单资料要分别准备，但关键数据不能互相冲突。',
      '监管条件、商检、危险品和产地证需要提前确认。',
      '资料越晚确认，截关前出错成本越高。',
    ],
    sections: [
      {
        heading: '1. 常见出口报关资料',
        body:
          '一般出口报关会涉及箱单、发票、合同、报关委托、申报要素和 HS Code 等资料。具体要求会根据货物品名、监管条件、贸易方式和口岸要求变化。',
      },
      {
        heading: '2. 提单资料和报关资料不要混淆',
        body:
          '提单主要服务于运输和收货，报关资料主要服务于海关申报。两者不是同一套文件，但收发货人、品名、件数、重量、目的港等信息需要保持合理一致。',
      },
      {
        heading: '3. 特殊货物要提前判断',
        body:
          '危险品、化工品、带电产品、粉末、液体、食品接触类、木制品和需要商检的货物，订舱前就应该说明。等到截关前才发现资料缺失，很容易导致改船或额外费用。',
      },
    ],
    checklist: [
      'HS Code 和中文/英文品名',
      '箱单、发票、合同',
      '申报要素和监管条件',
      '收发货人、通知人、目的港',
      '是否需要产地证、商检、危包证或 MSDS',
    ],
  },
  {
    slug: 'china-to-india-shipping',
    section: 'routes',
    title: '中国到印度海运：Kolkata、Nhava Sheva、Mundra 出口要点',
    description:
      '中国出口到印度常见港口的船期、目的港费用、清关习惯和旺季舱位注意事项。',
    updatedAt: '2026-07-05',
    readTime: '6 min read',
    image: '/bryce-routes-command.webp',
    keywords: ['中国到印度海运', 'Kolkata shipping', 'Nhava Sheva', 'Mundra'],
    highlights: [
      '印度航线要同时看海运费、目的港费用和清关习惯。',
      'Kolkata、Nhava Sheva、Mundra 服务腹地不同，不能只按价格选港口。',
      '旺季舱位、甩柜和目的港拥堵需要提前留时间。',
    ],
    sections: [
      {
        heading: '1. 常见目的港怎么选',
        body:
          'Kolkata 更常服务印度东部市场，Nhava Sheva 覆盖孟买及周边，Mundra 对印度西北部和内陆点较常见。实际选择要结合收货人地址、清关能力、内陆运输和目的港费用。',
      },
      {
        heading: '2. 印度目的港费用要提前问清楚',
        body:
          '印度不同港口和代理的目的港收费差异较大。客户如果只比较中国起运港报价，可能会忽略到港后的换单、码头、仓储、清关和内陆费用。',
      },
      {
        heading: '3. 旺季和节假日要留缓冲',
        body:
          '印度航线在旺季、节假日和港口拥堵期间，舱位和船期稳定性会受到影响。设备、建材、化工和长期订单建议提前确认舱位，而不是临近截关再找船。',
      },
    ],
    checklist: [
      '目的港和最终收货城市',
      '箱型、货重和是否需要目的港清关建议',
      '是否接受中转航线',
      '是否有指定船司或目的港代理',
      '是否需要产地证、特殊单证或信用证要求',
    ],
  },
  {
    slug: 'china-to-karachi-shipping',
    section: 'routes',
    title: '中国到巴基斯坦卡拉奇海运：AICT、KICT、PICT、Port Qasim、SAPT 码头详解',
    description:
      '连云港、青岛出口到卡拉奇 Karachi 的中转航线、五大码头区别、航程天数、常见船司和目的港费用要点。',
    updatedAt: '2026-07-13',
    readTime: '6 min read',
    image: '/bryce-routes-command.webp',
    keywords: [
      '中国到卡拉奇海运',
      'Karachi shipping',
      '巴基斯坦海运',
      '连云港到卡拉奇',
      'Port Qasim',
      'SAPT',
    ],
    highlights: [
      '连云港到卡拉奇目前以中转为主，几乎没有稳定直航，需要提前留出航程缓冲。',
      '卡拉奇有 AICT、KICT、PICT、Port Qasim (QICT)、SAPT 五个码头，收货人指定的码头会影响船司和清关。',
      'SAPT 和 Port Qasim 船司选择最多、班次较密，是连云港出口卡拉奇较常见的选择。',
    ],
    sections: [
      {
        heading: '1. 卡拉奇五个码头有什么区别',
        body:
          '卡拉奇不是单一港口，而是分成多个集装箱码头，收货人清关和提货通常绑定具体码头，所以订舱前要先确认收货人要求到哪个码头，而不是笼统说“到卡拉奇”。',
        bullets: [
          'AICT（卡拉奇 AICT 港）：常见船司如 MAERSK、OOCL，多为二次中转，航程偏长。',
          'KICT（卡拉奇 K 港）：OOCL、YML、COSCO、WHL 等，多经上海或宁波中转。',
          'PICT（卡拉奇 P 港）：WHL、OOCL 为主，部分经新加坡等二转。',
          'Port Qasim / QICT（卡西姆港）：ONE、CMA、OOCL、HAPAG 等船司较多，选择灵活。',
          'SAPT（卡拉奇 SAPT 港）：船司最多，ONE、CMA、EMC、PIL、HMM、KMTC 等，班次密。',
        ],
      },
      {
        heading: '2. 连云港到卡拉奇以中转为主，没有稳定直航',
        body:
          '从连云港发往卡拉奇各码头，目前基本都是中转航线，常见走青岛、上海、宁波接大船，部分方案还会在新加坡或卡拉奇本地二次中转。这意味着报价时看到的“最快航程”通常是顺利接驳的理想情况，实际要为中转和港口拥堵留出缓冲。',
      },
      {
        heading: '3. 航程天数大致范围',
        body:
          '根据不同码头和船司，连云港到卡拉奇的中转航程差异较大。SAPT 和 KICT 较快的方案约 16 到 23 天，Port Qasim 部分方案 17 天起，AICT、PICT 因二次中转常见 30 天以上。选择时不能只看最短天数，还要看船司稳定性和中转次数。',
        bullets: [
          'SAPT：快线约 17-23 天，慢线 26-37 天，船司选择最多。',
          'KICT：约 16-25 天，OOCL、YML、COSCO 等。',
          'Port Qasim：约 17 天起，船司较多。',
          'AICT / PICT：多为二次中转，常见 30 天以上。',
        ],
      },
      {
        heading: '4. 目的港费用和清关要提前确认',
        body:
          '巴基斯坦目的港的换单、码头、仓储和清关费用，以及不同代理的收费差异，都会影响客户到货后的实际成本。客户如果只比较连云港起运港的低价，容易忽略到港后的费用。带电产品、化工品、二手设备和需要特殊单证的货物，更要提前沟通。',
      },
    ],
    checklist: [
      '收货人指定到哪个码头（AICT / KICT / PICT / Port Qasim / SAPT）',
      '箱型、货重、品名和是否为二手设备或化工品',
      '是否接受中转以及可接受的航程天数',
      '是否有指定船司或目的港代理',
      '是否需要产地证、装箱单认证或其他特殊单证',
    ],
    faqs: [
      {
        question: '连云港到卡拉奇有直航吗？',
        answer:
          '目前基本以中转为主，没有稳定的直航班次，通常经青岛、上海或宁波接大船，部分还会二次中转。订舱时建议按中转航程预留时间。',
      },
      {
        question: '卡拉奇这么多码头，我该选哪个？',
        answer:
          '主要看收货人清关代理绑定哪个码头。如果收货人没有硬性要求，SAPT 和 Port Qasim 船司选择多、班次较密，通常更灵活；具体仍需结合航程、船司和费用综合判断。',
      },
    ],
  },
  {
    slug: 'china-to-jebel-ali-shipping',
    section: 'routes',
    title: '中国到迪拜 Jebel Ali 海运：中东出口操作要点',
    description:
      '中国到 Jebel Ali、Dammam 等中东港口出口时，需要关注船期、转运、文件和目的港费用。',
    updatedAt: '2026-07-05',
    readTime: '5 min read',
    image: '/bryce-routes-command.webp',
    keywords: ['中国到迪拜海运', 'Jebel Ali shipping', '中东海运', 'Dammam'],
    highlights: [
      'Jebel Ali 是中东重要中转和分拨港，但仍要看最终目的地。',
      '化工品、建材和危险品要提前确认文件和船司接受情况。',
      '中东客户常关注船期稳定性、目的港费用和清关资料。',
    ],
    sections: [
      {
        heading: '1. Jebel Ali 不等于所有中东目的地',
        body:
          '很多货物会先到 Jebel Ali，再转往阿联酋、沙特或周边国家。询价时应确认最终目的地、是否需要转运、收货人清关能力和贸易条款。',
      },
      {
        heading: '2. 船期和中转稳定性很重要',
        body:
          '中东航线可选船司较多，但不同方案在直航、中转、舱位和到港稳定性上差异明显。低价方案如果中转时间长，可能影响客户交付计划。',
      },
      {
        heading: '3. 文件要求需要提前确认',
        body:
          '建材、化工品、危险品、设备和品牌货物可能涉及额外文件。发票、箱单、产地证、MSDS、危包证和收货人要求应尽早核对。',
      },
    ],
    checklist: [
      'Jebel Ali 还是最终其他城市/国家',
      '是否接受中转和预计航程',
      '货物是否为化工品、危险品或带品牌',
      '客户是否要求产地证或特殊认证',
      '是否需要目的港清关或转运建议',
    ],
  },
  {
    slug: 'ocean-freight-cost-breakdown',
    section: 'guides',
    title: '海运费由哪些部分组成？中国出口报价怎么看',
    description:
      '拆解中国出口海运报价中的海运费、附加费、拖车、报关、文件和目的港费用，帮助客户看懂总成本。',
    updatedAt: '2026-07-05',
    readTime: '6 min read',
    image: '/bryce-hero-port.webp',
    keywords: ['海运费组成', '海运报价', '目的港费用', '出口物流成本'],
    highlights: [
      '海运报价不能只看 Ocean Freight，要看起运港和目的港全链路费用。',
      '低价不一定低成本，甩柜、晚开、目的港杂费都可能影响最终结果。',
      '报价最好拆成海运、拖车、报关、文件、目的港风险几个部分。',
    ],
    sections: [
      {
        heading: '1. Ocean Freight 只是其中一部分',
        body:
          '客户常说的海运费通常指 Ocean Freight，但实际出口成本还可能包括订舱费、文件费、码头费、封条费、报关费、拖车费、仓储费和目的港费用。',
      },
      {
        heading: '2. 附加费和目的港费用要分开看',
        body:
          '不同船司和航线可能涉及燃油、旺季、港口拥堵、低硫等附加费。目的港则可能有换单、码头、仓储、清关和内陆费用。报价时应尽量说明哪些费用包含，哪些费用不包含。',
      },
      {
        heading: '3. 为什么同一条航线价格差很多',
        body:
          '价格差异可能来自船司、直航或中转、舱位等级、截关时间、账期、目的港代理、是否含本地费用等因素。只看最低价，可能忽略船期稳定性和后续风险。',
      },
    ],
    checklist: [
      'Ocean Freight 是否包含附加费',
      '起运港本地费用是否列明',
      '拖车、报关、仓储是否另计',
      '目的港费用由谁承担',
      '报价有效期和预计船期',
    ],
    faqs: [
      {
        question: '为什么货代报价差别很大？',
        answer:
          '可能是包含项目不同、船司不同、舱位稳定性不同，也可能是目的港费用和本地费用没有列清楚。建议按费用结构逐项对比。',
      },
      {
        question: '最低海运费一定最划算吗？',
        answer:
          '不一定。若低价伴随中转时间长、甩柜风险高、目的港费用不清楚，最终总成本和交付风险可能更高。',
      },
    ],
  },
];

export function getSection(slug: string) {
  return contentSections.find((section) => section.slug === slug);
}

export function getArticlesBySection(sectionSlug: string) {
  return contentArticles.filter((article) => article.section === sectionSlug);
}

export function getArticle(sectionSlug: string, slug: string) {
  return contentArticles.find(
    (article) => article.section === sectionSlug && article.slug === slug,
  );
}

export function getArticlePath(article: ContentArticle) {
  return `/${article.section}/${article.slug}`;
}
