export const siteUrl = 'https://www.sinolyg.com';
export const contactEmail = 'Bryce.Lee@gwl-lianyungang.com';
export const contactPhone = '18360639913';

export type Lang = 'zh' | 'en';
export type ArticleLang = Lang | 'es';
export type ContentSectionSlug = 'requirements' | 'routes' | 'guides';

export type ArticleBlock = {
  heading: string;
  body: string;
  bullets?: string[];
  afterBullets?: string;
  links?: Array<{ label: string; href: string }>;
  table?: {
    columns: string[];
    rows: string[][];
  };
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type ArticleCopy = {
  title: string;
  metaTitle?: string;
  description: string;
  quickAnswer?: string;
  keywords?: string[];
  highlights: string[];
  sections: ArticleBlock[];
  checklist?: string[];
  faqs?: ArticleFaq[];
};

export type SectionCopy = {
  label: string;
  title: string;
  description: string;
  intro: string;
};

export type ContentSection = {
  slug: ContentSectionSlug;
  label: string;
  title: string;
  description: string;
  intro: string;
  en?: SectionCopy;
};

export type ContentArticle = ArticleCopy & {
  slug: string;
  section: ContentSectionSlug;
  updatedAt: string;
  readTime: string;
  image: string;
  keywords: string[];
  title_en?: string;
  metaTitle_en?: string;
  description_en?: string;
  quickAnswer_en?: string;
  highlights_en?: string[];
  sections_en?: ArticleBlock[];
  checklist_en?: string[];
  faqs_en?: Array<{
    question: string;
    answer: string;
  }>;
  en?: ArticleCopy & {
    keywords?: string[];
  };
  es?: ArticleCopy;
  relatedSlugs?: string[];
};

export const contentSections: ContentSection[] = [
  {
    slug: 'requirements',
    label: '出货要求',
    title: '中国出口出货要求',
    description:
      '整理整柜、拼箱、报关和单证资料，帮助外贸工厂在订舱前把出货信息准备清楚。',
    intro:
      '很多运输异常不是发生在海上，而是发生在订舱、截关、拖车、报关和资料确认阶段。下面这些清单适合在询价和出货前先对一遍。',
    en: {
      label: 'Shipping Requirements',
      title: 'China Export Shipping Requirements',
      description:
        'Practical checklists for China export shipments: FCL booking data, LCL warehouse rules, customs documents, certificates of origin and DG paperwork.',
      intro:
        'Many shipment problems start before sailing: booking, cut-off, trucking, customs and document checks. These guides help you prepare the key details before asking for a rate.',
    },
  },
  {
    slug: 'routes',
    label: '航线指南',
    title: '重点航线指南',
    description:
      '围绕印度、中东、南美等中国出口常见航线，说明港口、舱位、费用和目的港风险。',
    intro:
      '不同航线的差异不只是价格。港口习惯、目的港费用、旺季舱位和单证要求都会影响最终交付体验。',
    en: {
      label: 'Route Guides',
      title: 'Priority Trade Lane Guides',
      description:
        'Port choices, space, destination costs and operational risks for China export lanes to India, the Middle East and South America.',
      intro:
        'A route is not just a price. Port habits, destination charges, peak-season space and document rules all affect whether the shipment lands smoothly.',
    },
  },
  {
    slug: 'guides',
    label: '费用指南',
    title: '海运费用和操作说明',
    description:
      '把海运费、附加费、拖车、报关、目的港费用等拆开说明，帮助客户看懂报价。',
    intro:
      '报价单上的一个总价很容易误导判断。把费用结构拆开看，才能知道哪里可控、哪里需要提前确认。',
    en: {
      label: 'Freight Guides',
      title: 'Freight Cost and Operation Guides',
      description:
        'Understand China export ocean freight quotes: ocean freight, surcharges, trucking, customs, destination charges and current market notes for major lanes.',
      intro:
        'A single all-in number can hide the real risk. Breaking the cost structure apart shows what is controllable and what needs confirmation before booking.',
    },
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
    en: {
      title: 'FCL Export Booking and Shipment Data Checklist',
      description:
        'What information is needed before booking a China export FCL shipment: cargo details, container type, cut-off, trucking, customs and bill of lading checks.',
      highlights: [
        'Confirm container type, cargo weight, loading address and ready date before comparing rates.',
        'Cut-off, SI deadline, port opening and laden return time should be checked together.',
        'Customs data and bill of lading details should be reviewed from the booking stage.',
      ],
      sections: [
        {
          heading: '1. Prepare basic cargo information before quoting',
          body:
            'FCL shipments become inefficient when the cargo information is incomplete. For a useful quote, provide POL, POD, commodity, container type, package count, gross weight, volume, loading address, ready date and whether trucking or customs support is needed.',
          bullets: [
            'Common equipment: 20GP, 40GP, 40HQ and 45HQ.',
            'If the cargo is close to the weight limit, port, road and carrier restrictions should be checked early.',
            'Oversized cargo may need a non-standard equipment plan instead of a normal dry container.',
          ],
        },
        {
          heading: '2. Work backward from cut-off and trucking time',
          body:
            'A sailing date alone is not enough. After booking, the port opening time, customs cut-off, SI deadline, trucking appointment and laden container return time all affect whether the cargo can catch the vessel.',
        },
        {
          heading: '3. Check customs data and B/L details early',
          body:
            'Customs documents and B/L instructions are not the same file set, but commodity name, package count, weight, shipper, consignee and destination should remain logically consistent. Chemical goods, DG cargo, batteries, wooden packing and regulated products need extra review.',
        },
      ],
      checklist: [
        'POL / POD',
        'Commodity, HS Code, material and usage',
        'Container type, package count, gross weight and volume',
        'Loading address, contact person and loading time',
        'Trucking, customs, warehouse, inspection or certificate requirements',
        'Shipper, consignee, notify party and B/L display requirements',
      ],
      faqs: [
        {
          question: 'Can I request an FCL quote with only the destination port?',
          answer:
            'It is enough for a rough indication, but a formal quote should include equipment type, cargo weight, commodity, ready date and whether trucking or customs support is needed.',
        },
        {
          question: 'Can the sailing be changed after booking?',
          answer:
            'Usually it can be requested, but it depends on carrier space, cut-off time and possible charges. During peak season or near cut-off, changes become harder.',
        },
      ],
    },
  },
  {
    slug: 'lcl-export-checklist',
    section: 'requirements',
    title: '拼箱 LCL 出口注意事项：体积、入仓和目的港费用',
    description:
      '拼箱出口适合小批量货物，但要提前确认计费体积、入仓要求、目的港费用和单证信息。',
    updatedAt: '2026-11-05',
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
    faqs: [
      { question: '拼箱怎么计费？', answer: '拼箱一般按体积和重量取较大的一项计费，1 吨按 1 立方米计算（W/M）。轻泡货按体积算，重货按重量算。' },
      { question: '多少货适合走拼箱？', answer: '通常十几立方米以下走拼箱更划算；接近 15 立方米以上时，建议同时比较 20 尺整柜的总费用，有时整柜反而更便宜、也更快。' },
      { question: '为什么拼箱的目的港费用比较多？', answer: '拼箱到港后要拆箱、入仓、分票，目的港代理会收取拆箱费、仓储费、换单费等。询价时请确认目的港费用的项目和收费方式，避免到港后出现意外费用。' },
    ],
    en: {
      title: 'LCL Export Checklist: Volume, Warehouse Entry and Destination Charges',
      description:
        'LCL export is useful for small shipments, but chargeable volume, warehouse rules, destination charges and documents need to be checked early.',
      highlights: [
        'LCL is normally charged by W/M, whichever is greater between weight and volume.',
        'Marks, package count, outer packing and warehouse booking details must be clear before cargo entry.',
        'Destination charges should be confirmed early, especially for India, the Middle East and South America.',
      ],
      sections: [
        {
          heading: '1. Check volume and weight first',
          body:
            'LCL cargo is not charged simply by shipment count. It is usually charged by W/M, meaning the greater of weight ton or measurement ton. Light cargo, heavy cargo and irregular packing can lead to very different costs.',
        },
        {
          heading: '2. Confirm packing and shipping marks before warehouse entry',
          body:
            'LCL cargo is consolidated with other shipments, so outer packing, marks, package count and warehouse entry data must be accurate. Wooden cases, pallets, fragile goods, liquids and battery products should be declared in advance.',
          bullets: [
            'Confirm warehouse address, entry reference and cut-off time.',
            'Package count and packing type should match customs and warehouse data.',
            'Cargo photos, carton dimensions and mark photos can reduce communication errors.',
          ],
        },
        {
          heading: '3. Destination charges must be explained in advance',
          body:
            'Destination charges for LCL can be higher than expected, especially in India, the Middle East and parts of South America. When quoting, compare origin charges, ocean freight and common destination fee items together.',
        },
      ],
      checklist: [
        'Commodity, package count, gross weight and volume',
        'Dimensions and packing type for each package',
        'Battery, liquid, powder, magnetic or wooden packing details',
        'Warehouse entry time and warehouse requirements',
        'Customs, certificate of origin or inspection requirements',
      ],
      faqs: [
        { question: 'How is LCL freight charged?', answer: 'LCL is usually charged on weight or volume, whichever is greater, with 1 ton counted as 1 CBM (W/M). Light, bulky cargo is charged by volume and heavy cargo by weight.' },
        { question: 'How much cargo is suitable for LCL?', answer: 'LCL is usually more economical below about a dozen cubic meters. Once you approach 15 CBM or more, compare the total cost of a 20-foot container; FCL is sometimes cheaper and faster.' },
        { question: 'Why are LCL destination charges higher?', answer: 'After arrival, LCL cargo has to be unloaded, warehoused and split by shipment, and the destination agent charges for devanning, storage and document release. Confirm the destination charge items and how they are calculated when you request a quote.' },
      ],
    },
  },
  {
    slug: 'customs-documents',
    section: 'requirements',
    title: '中国出口报关和单证资料：订舱前需要确认什么',
    description:
      '梳理中国出口常见报关资料、提单资料、产地证、商检和特殊货物单证，减少临时卡点。',
    updatedAt: '2026-11-05',
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
    faqs: [
      { question: '出口报关需要哪些资料？', answer: '一般需要商业发票、装箱单、报关委托书（委托报关时）和合同。机电、化工、食品等特殊货物，可能还需要商检、许可证或其他监管证件。' },
      { question: '产地证什么时候办？', answer: '如果进口国需要原产地证，或者可以享受贸易协定优惠（例如出口东盟国家的 FORM E），请在出货前和收货人确认，并按要求办理，以免影响目的港清关和关税。' },
      { question: '危险品出口要准备什么？', answer: '需要 MSDS（SDS）、UN 编号、危险品类别，以及出口危险货物包装使用鉴定结果单等资料，并提前确认船公司是否接受。' },
    ],
    en: {
      title: 'China Export Customs and Document Checklist',
      description:
        'A practical guide to customs documents, bill of lading details, certificates, inspection and special cargo paperwork before booking.',
      highlights: [
        'Customs data and B/L instructions are different, but key shipment facts must not conflict.',
        'Regulatory conditions, inspection, DG documents and certificates should be checked before booking.',
        'The later documents are confirmed, the higher the cost of fixing errors near cut-off.',
      ],
      sections: [
        {
          heading: '1. Common export customs documents',
          body:
            'A normal China export declaration may involve packing list, commercial invoice, contract, customs authorization, declaration elements and HS Code information. Exact requirements vary by commodity, control conditions, trade mode and port rules.',
        },
        {
          heading: '2. Do not mix B/L details with customs documents',
          body:
            'The bill of lading supports transportation and cargo release, while customs documents support declaration. They are not the same document set, but shipper, consignee, commodity, package count, weight and destination should remain consistent.',
        },
        {
          heading: '3. Special cargo should be identified early',
          body:
            'DG cargo, chemicals, battery products, powders, liquids, food-contact goods, wooden products and inspection-controlled cargo should be declared before booking. Discovering missing documents near cut-off can lead to sailing changes or extra costs.',
        },
      ],
      checklist: [
        'HS Code and Chinese / English commodity name',
        'Packing list, invoice and contract',
        'Declaration elements and regulatory conditions',
        'Shipper, consignee, notify party and destination',
        'Certificate of origin, inspection, DG package certificate or MSDS needs',
      ],
      faqs: [
        { question: 'What documents are needed for China export customs?', answer: 'Usually a commercial invoice, packing list, customs declaration power of attorney (when using an agent) and the sales contract. Special goods such as machinery, chemicals or food may also need inspection certificates, licenses or other regulatory documents.' },
        { question: 'When should the certificate of origin be prepared?', answer: 'If the importing country requires one, or the buyer can use a trade agreement preference (for example FORM E for ASEAN countries), confirm with the consignee before shipment and prepare it as required, so clearance and duties at destination are not affected.' },
        { question: 'What is needed to export dangerous goods?', answer: 'An MSDS (SDS), UN number, hazard class and the dangerous goods packaging inspection result, with carrier acceptance confirmed in advance.' },
      ],
    },
  },
  {
    slug: 'china-to-india-shipping',
    section: 'routes',
    title: '中国到印度海运：Kolkata、Nhava Sheva、Mundra 出口要点',
    description:
      '中国出口到印度常见港口的船期、目的港费用、清关习惯和旺季舱位注意事项。',
    quickAnswer: '青岛到印度主要港口都有直航：Nhava Sheva 约 20–21 天（EMC、KMTC），Mundra 约 22–28 天（EMC、KMTC），Chennai 约 18–23 天（EMC、KMTC）。Kolkata 需中转：SITC 经霍尔迪亚（Haldia）约 20 天，是青岛最快的方案，可申请 21 天免柜期；MSC 经科伦坡约 30 天，成本较低，可接铅酸电池。连云港出运经上海或青岛中转。以上航程为参考，具体以船公司当期船期为准。',
    quickAnswer_en: 'From Qingdao, the main Indian ports have direct services: Nhava Sheva about 20–21 days (EMC, KMTC), Mundra about 22–28 days (EMC, KMTC) and Chennai about 18–23 days (EMC, KMTC). Kolkata requires transshipment: SITC via Haldia takes about 20 days and is the fastest option from Qingdao, with 21 days free time available; MSC via Colombo takes about 30 days at a lower cost and can accept lead-acid batteries. Cargo from Lianyungang connects via Shanghai or Qingdao. Transit times are references; each sailing is confirmed with the carrier.',
    updatedAt: '2026-11-05',
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
    title_en: 'China to India Ocean Freight: Kolkata, Nhava Sheva and Mundra',
    metaTitle_en: 'China to India Ocean Freight: Kolkata, Nhava Sheva & Mundra',
    description_en:
      'Key export points for common India ports: sailing schedule, destination charges, customs habits and peak-season space risk.',
    highlights_en: [
      'India shipments should be compared by ocean freight, destination charges and clearance habits together.',
      'Kolkata, Nhava Sheva and Mundra serve different inland markets, so port choice should not be based on price alone.',
      'Peak-season space, rollovers and destination congestion need schedule buffer.',
    ],
    sections_en: [
      {
        heading: '1. How to choose the destination port',
        body:
          'Kolkata often serves eastern India, Nhava Sheva covers Mumbai and nearby regions, and Mundra is common for northwestern India and inland points. The right choice depends on the consignee address, clearance capability, inland transport and destination charges.',
      },
      {
        heading: '2. Confirm India destination charges early',
        body:
          'Destination charges can vary a lot between Indian ports and local agents. If the buyer only compares origin-side rates from China, they may miss charges for delivery order, terminal, storage, clearance and inland movement.',
      },
      {
        heading: '3. Leave buffer for peak season and holidays',
        body:
          'During peak season, holidays and port congestion, India lane space and schedule reliability can change quickly. Equipment, building materials, chemicals and long-term orders should confirm space earlier instead of waiting until cut-off.',
      },
    ],
    checklist_en: [
      'Destination port and final delivery city',
      'Container type, cargo weight and destination clearance needs',
      'Whether transshipment service is acceptable',
      'Nominated carrier or destination agent',
      'Certificate, special document or L/C requirements',
    ],
    faqs: [
      { question: '青岛到 Nhava Sheva 要多久？', answer: '青岛到 Nhava Sheva 有直航，长荣（EMC）约 20 天、KMTC 约 21 天；到 Mundra 约 22–28 天，到 Chennai 约 18–23 天，具体以船公司当期船期为准。' },
      { question: '到 Kolkata 怎么走？', answer: 'Kolkata 需要中转。SITC 经霍尔迪亚（Haldia）约 20 天，是青岛出发最快的方案，可申请 21 天免柜期；MSC 经科伦坡约 30 天，成本较低，可接铅酸电池。' },
      { question: '出口印度要特别注意什么？', answer: '提单品名、HS 编码和发票要保持一致，提前确认收货人的 IEC 编码，以及目的港免柜期和费用。印度清关对单证一致性要求较严，资料不一致容易产生查验和滞港费用。' },
    ],
    faqs_en: [
      { question: 'How long does Qingdao to Nhava Sheva take?', answer: 'Qingdao has direct services to Nhava Sheva: about 20 days with EMC and about 21 days with KMTC. Mundra takes about 22–28 days and Chennai about 18–23 days, subject to the current carrier schedule.' },
      { question: 'How do you ship to Kolkata?', answer: 'Kolkata requires transshipment. SITC via Haldia takes about 20 days and is the fastest option from Qingdao, with 21 days free time available; MSC via Colombo takes about 30 days at a lower cost and can accept lead-acid batteries.' },
      { question: 'What should I watch for when shipping to India?', answer: 'Keep the cargo description, HS code and invoice consistent across documents, confirm the consignee\'s IEC code, and check destination free time and charges. Indian customs is strict on document consistency, and mismatches can lead to inspections and demurrage.' },
    ],
    en: {
      title: 'China to India Ocean Freight: Kolkata, Nhava Sheva and Mundra',
      description:
        'Key export points for common India ports: sailing schedule, destination charges, customs habits and peak-season space risk.',
      highlights: [
        'India shipments should be compared by ocean freight, destination charges and clearance habits together.',
        'Kolkata, Nhava Sheva and Mundra serve different inland markets, so port choice should not be based on price alone.',
        'Peak-season space, rollovers and destination congestion need schedule buffer.',
      ],
      sections: [
        {
          heading: '1. How to choose the destination port',
          body:
            'Kolkata often serves eastern India, Nhava Sheva covers Mumbai and nearby regions, and Mundra is common for northwestern India and inland points. The right choice depends on the consignee address, clearance capability, inland transport and destination charges.',
        },
        {
          heading: '2. Confirm India destination charges early',
          body:
            'Destination charges can vary a lot between Indian ports and local agents. If the buyer only compares origin-side rates from China, they may miss charges for delivery order, terminal, storage, clearance and inland movement.',
        },
        {
          heading: '3. Leave buffer for peak season and holidays',
          body:
            'During peak season, holidays and port congestion, India lane space and schedule reliability can change quickly. Equipment, building materials, chemicals and long-term orders should confirm space earlier instead of waiting until cut-off.',
        },
      ],
      checklist: [
        'Destination port and final delivery city',
        'Container type, cargo weight and destination clearance needs',
        'Whether transshipment service is acceptable',
        'Nominated carrier or destination agent',
        'Certificate, special document or L/C requirements',
      ],
    },
  },
  {
    slug: 'lianyungang-to-india-fcl-shipping',
    section: 'routes',
    title: '连云港到印度整柜海运：上海接驳、目的港与订舱清单',
    metaTitle_en: 'Lianyungang to India FCL Shipping: Routes & Booking Checklist',
    description: '连云港出口印度 FCL 整柜方案，说明上海或青岛接驳、Nhava Sheva、Mundra、Chennai、Kolkata 港口选择，以及船期、免费期、单证和报价确认。',
    quickAnswer: '连云港到印度以中转为主：Nhava Sheva 走 EMC 经上海中转，每周两班，约 20 天；Mundra 走 EMC 经上海中转，约 25 天；Chennai 走 EMC 经上海中转，约 15 天；Kolkata 走 MSC，经青岛和科伦坡两次中转，约 35 天。以上航程为参考，具体以船公司当期船期为准。',
    quickAnswer_en: 'Lianyungang to India is mainly via transshipment: Nhava Sheva with EMC via Shanghai, twice weekly, about 20 days; Mundra with EMC via Shanghai, about 25 days; Chennai with EMC via Shanghai, about 15 days; Kolkata with MSC via Qingdao and Colombo, about 35 days. Transit times are references; each sailing is confirmed with the carrier.',
    updatedAt: '2026-10-27',
    readTime: '6 min read',
    image: '/bryce-routes-command.webp',
    keywords: [
      '连云港到印度海运',
      '连云港印度整柜',
      '上海中转印度',
      'ONE 印度航线',
      'EMC 印度航线',
      'Nhava Sheva',
      'Mundra',
      'Chennai',
      'Kolkata',
    ],
    highlights: [
      '从工厂货好时间倒推连云港接货、上海或青岛接驳和大船截关，询价时一并核对两段运输。',
      'Nhava Sheva、Mundra、Chennai、Kolkata 应结合买家提货地点和指定港口比较。',
      '班期、舱位、航程和免费期按具体船司、航次、箱型及本票确认，不统一承诺固定天数。',
      '电池、化工品和特殊设备先审核运输分类与资料，再确定可接受的柜型和船期。',
    ],
    sections: [
      {
        heading: '1. 连云港接货与上海接驳怎么安排',
        body: '江苏及周边工厂询价时，先提供装货地址、货好日期、箱型箱量和目的港，再比较连云港接货、上海或青岛接驳和印度主线的整体安排。Nhava Sheva、Mundra、Chennai 走 EMC 经上海中转，Kolkata 走 MSC 经青岛和科伦坡两次中转，实际可订航次、接驳日期和船司接受条件由本票订舱确认。',
        bullets: [
          '核对驳船开航与上海主线截关之间的时间衔接。',
          '把拖车、装柜、还重箱、报关、截单和 VGM 截止时间列在同一张计划中。',
          '如需要比较青岛或其他口岸，同时核算工厂到港费用、操作时间和中转等待。',
        ],
      },
      {
        heading: '2. 印度目的港要与买家提货地点匹配',
        body: '报价不能只写“印度”。请确认买家指定的是 Nhava Sheva、Mundra、Chennai 还是 Kolkata，并写清最终交货城市、是否安排内陆运输以及谁负责目的港清关。海运到港报价和到门方案应分别列出服务范围。',
        bullets: [
          'Nhava Sheva / Mundra：分别询问买家指定卸货港、码头及后续提货安排。',
          'Chennai / Kolkata：核对具体港口、收货人要求和接驳方式。',
          '如果需要内陆交付，补充详细地址、卸货条件和收货时间要求。',
        ],
      },
      {
        heading: '3. 船期、航程和舱位按哪一票确认',
        body: '订舱方案应列明起运港、接驳港、船名航次、预计离港与到港日期、截关时间和中转次数。固定星期班期或历史航程只能作为方案沟通背景，实际交货计划要以当前订舱和船期更新为准；如购买舱位保障服务，还应核对适用航段、服务条款及发生变更时的处理方式。',
        bullets: [
          '请提供最晚可接受到港日期，方便比较不同航次。',
          '驳船与主线分别确认，不能把主线航程直接当作工厂到港总时长。',
          '报价写明有效期、适用航次、货类和箱型；大票货可提供同批箱量申请项目报价。',
        ],
      },
      {
        heading: '4. 免费期要区分船司用箱与码头堆存',
        body: '船司滞箱、滞港和码头堆存费用可能采用不同计费口径。不要把一份报价上的“14 天”直接理解为所有印度港口、所有柜型和全部费用都免费。订舱前逐项确认适用天数、起算事件、自然日或工作日、合并或分开计费以及超过免费期后的费率。',
        bullets: [
          '分别确认 demurrage、detention 和 terminal storage 的收费方与范围。',
          '需要延长免费期时，先申请并取得本票书面确认。',
          '让买家提前安排清关、提柜和还空箱，避免免费期结束后才开始准备。',
        ],
      },
      {
        heading: '5. 收货人资料与特殊货物先审核',
        body: '请买家及当地清关代理确认本票适用的进口资质与识别信息，例如 IEC、PAN、GST，以及提单收货人名称、地址、通知人和联系邮箱。发票、箱单、货物说明与提单资料应保持一致。铅酸电池、带电设备和化工品不能仅凭品名或一份 MSDS 默认按普货操作，需结合运输鉴定、包装和船司审核确定分类。',
        bullets: [
          '常规干货可询问 20GP、40GP、40HQ；超重或超尺寸货物另审设备与装载方案。',
          '特殊货物提前提供 SDS / MSDS、运输鉴定及船司要求的其他资料。',
          '收货人登记信息、放货方式和目的港代理在截单前核对。',
        ],
      },
      {
        heading: '6. 一份可比较的印度报价应包含什么',
        body: '向李经理提供货物资料后，比较海运费时也应同时看拖车、起运港操作、报关、接驳、目的港费用和免费期。需要到门服务的，另外明确清关、税费和内陆交付由谁安排、哪些项目包含在报价中。方案确认后，再按货好日期安排装柜与资料提交。',
      },
    ],
    checklist: [
      '工厂装货地址、货好日期和最晚可接受到港日期',
      '品名、用途、件数、毛重、体积及适用 HS Code',
      '箱型箱量与是否超重、超尺寸或带电',
      '指定目的港、最终交货城市和贸易条款',
      '是否接受上海或其他港口中转',
      '收货人名称、地址、通知人与适用进口登记资料',
      '船期、截关、截单与 VGM 截止时间',
      '免费期口径、目的港费用及报价有效期',
    ],
    faqs: [
      {
        question: '连云港到印度一定要经上海吗？',
        answer: 'Nhava Sheva、Mundra、Chennai 经上海中转，Kolkata 经青岛和科伦坡中转。是否采用该方案，应结合当前可订航次、工厂交货时间、目的港和整体费用比较；询价时也可以提出其他起运或接驳要求。',
      },
      {
        question: '印度目的港统一有 14 天免费期吗？',
        answer: '不能统一认定。免费期与船司、合同、港口、箱型和收费项目有关，须分别确认船司用箱与码头堆存；需要延长时在订舱前取得本票确认。',
      },
      {
        question: '铅酸电池提供 MSDS 后就可以按普货走吗？',
        answer: '不能仅凭 MSDS 认定。需提供货物与包装资料、适用运输鉴定，由船司审核分类和接受条件后确定运输方案。',
      },
      {
        question: '什么时候询价最有帮助？',
        answer: '货好日期、箱型箱量、货物和目的港确定后即可询价。若买家有交付期限、指定船司或免费期要求，请一起说明，方便比较完整方案。',
      },
    ],
    en: {
      title: 'Lianyungang to India FCL Shipping: Shanghai Connections & Booking Checklist',
      description: 'Plan India-bound FCL from Lianyungang via Shanghai or Qingdao: destination ports, feeder connections, booking deadlines, free-time terms, consignee details and quote scope.',
      highlights: [
        'Plan factory pickup, the Shanghai or Qingdao connection and mainline deadlines from the cargo ready date.',
        'Compare Nhava Sheva, Mundra, Chennai and Kolkata against the buyer’s delivery location.',
        'Confirm schedules, space, transit and free time for the specific carrier, voyage, equipment and booking.',
        'Review batteries, chemicals and special equipment before choosing the shipping plan.',
      ],
      sections: [
        {
          heading: '1. Plan Lianyungang pickup and the Shanghai connection',
          body: 'Send the factory address, ready date, equipment, container count and destination before comparing local pickup, the Shanghai or Qingdao connection and the India mainline service. Nhava Sheva, Mundra and Chennai use EMC via Shanghai; Kolkata uses MSC via Qingdao and Colombo; available voyages, connection dates and cargo acceptance need booking-specific confirmation.',
          bullets: [
            'Check the feeder arrival against the mainline cargo cut-off.',
            'Put trucking, loading, laden return, customs, SI and VGM deadlines on one plan.',
            'If comparing Qingdao or another origin, include factory-to-port cost and connection time.',
          ],
        },
        {
          heading: '2. Match the Indian port to the buyer’s delivery plan',
          body: 'A useful request names Nhava Sheva, Mundra, Chennai or Kolkata rather than only “India”. Confirm the requested discharge port, final delivery city, inland transport scope and destination clearance arrangements. Separate port-to-port pricing from a door delivery proposal.',
          bullets: [
            'For each destination, confirm the port and terminal requested by the consignee.',
            'Check whether the proposal includes inland transport or ends at the discharge port.',
            'For door delivery, provide the full address, unloading conditions and receiving window.',
          ],
        },
        {
          heading: '3. Confirm the schedule and space for the actual booking',
          body: 'A proposal should identify origin, connection port, vessel and voyage, estimated departure and arrival, cut-off times and transshipment count. Historical sailing days and transit figures are planning references, not the current booking schedule. If a space protection product is offered, review the covered leg, terms and change procedure.',
          bullets: [
            'State the latest acceptable arrival date.',
            'Check feeder and mainline legs separately; mainline transit is not total factory-to-arrival time.',
            'Confirm quote validity, applicable voyage, commodity and equipment; send batch volume for a project quote.',
          ],
        },
        {
          heading: '4. Separate carrier free time from terminal storage',
          body: 'Demurrage, detention and terminal storage can have different rules and charging parties. A 14-day term in one proposal does not mean every Indian port, equipment type and charge has the same free period. Confirm the starting event, calendar or working days, combined or separate calculation and rates after expiry.',
          bullets: [
            'Identify the charging party and scope for each fee.',
            'Request extra free time before booking and obtain written confirmation for the shipment.',
            'Arrange clearance, pickup and empty return before the relevant free period expires.',
          ],
        },
        {
          heading: '5. Review consignee details and special cargo',
          body: 'Ask the buyer and local broker to confirm applicable import registration and identification details, such as IEC, PAN and GST, together with consignee name, address, notify party and email. Invoice, packing list and B/L data should agree. Lead-acid batteries, powered equipment and chemicals require cargo classification and carrier acceptance review; an MSDS alone does not establish general-cargo status.',
          bullets: [
            'Quote standard dry equipment or review overweight and oversized cargo separately.',
            'Provide SDS / MSDS, applicable transport appraisal and other carrier-requested documents early.',
            'Check consignee registration, cargo release method and destination agent before SI cut-off.',
          ],
        },
        {
          heading: '6. Compare the full quote scope',
          body: 'Compare ocean freight together with trucking, origin handling, customs, connection costs, destination charges and free-time conditions. For door delivery, clarify clearance, duties and inland delivery responsibility and list included and excluded charges. Then arrange loading and documentation against the confirmed cargo ready date.',
        },
      ],
      checklist: [
        'Factory address, ready date and latest acceptable arrival',
        'Commodity, use, packages, gross weight, volume and applicable HS code',
        'Equipment, container count and any overweight, oversize or battery cargo',
        'Discharge port, final delivery city and trade terms',
        'Acceptable Shanghai or other transshipment routing',
        'Consignee, notify party and applicable import registration details',
        'Schedule, cargo cut-off, SI and VGM deadlines',
        'Free-time terms, destination charges and quote validity',
      ],
      faqs: [
        {
          question: 'Must Lianyungang to India cargo connect via Shanghai?',
          answer: 'Nhava Sheva, Mundra and Chennai connect via Shanghai; Kolkata connects via Qingdao and Colombo. Compare it against available voyages, factory readiness, destination and total cost; include any alternative origin or connection preference in the request.',
        },
        {
          question: 'Is 14 days of free time standard for every Indian shipment?',
          answer: 'No uniform allowance should be assumed. Carrier, contract, port, equipment and charge type matter. Check carrier free time and terminal storage separately and confirm any extension before booking.',
        },
        {
          question: 'Does an MSDS make lead-acid batteries general cargo?',
          answer: 'No. Supply cargo, packaging and applicable transport appraisal details for carrier classification and acceptance review before deciding the shipping plan.',
        },
        {
          question: 'When should I request a quote?',
          answer: 'Send the ready date, cargo, equipment, volume and destination once known. Include delivery deadlines, nominated carriers and free-time requests so the full proposal can be compared.',
        },
      ],
    },
  },
  {
    slug: 'china-to-karachi-shipping',
    section: 'routes',
    title: '连云港、青岛到卡拉奇海运：Karachi Port、Port Qasim 与订舱要点',
    metaTitle_en: 'Lianyungang & Qingdao to Karachi Shipping: Terminals & Transit',
    description: '区分 Karachi Port 的 KICT、KGTL、SAPT，Port Qasim 的 QICT 与 AICT 港外堆场，整理连云港、青岛出口巴基斯坦的码头、船期、费用和询价资料。',
    quickAnswer: '青岛到卡拉奇海运约 25 天；连云港出运经青岛中转，约 30 天。目前主要订舱船司为长荣（EMC）和 KMTC。卡拉奇的集装箱在卡拉奇港（KICT、KGTL、SAPT）和卡西姆港（QICT）作业，AICT 为场外堆场，订舱前请先确认收货人指定的码头。以上航程为参考，具体以船公司当期船期为准。',
    quickAnswer_en: 'Ocean transit from Qingdao to Karachi is about 25 days; from Lianyungang, cargo connects via Qingdao and takes about 30 days. We mainly book with EMC (Evergreen) and KMTC. Containers in Karachi are handled at Karachi Port terminals (KICT, KGTL, SAPT) and at Port Qasim (QICT), with AICT as an off-dock facility, so confirm the consignee\'s required terminal before booking. Transit times are references; each sailing is confirmed with the carrier.',
    updatedAt: '2026-10-26',
    readTime: '6 min read',
    image: '/bryce-routes-command.webp',
    keywords: [
      '连云港到卡拉奇海运',
      '青岛到卡拉奇海运',
      'China to Karachi shipping',
      '巴基斯坦海运',
      'Port Qasim',
      'QICT',
      'KICT',
      'KGTL',
      'PICT',
      'SAPT',
      'AICT',
    ],
    highlights: [
      '先区分 Karachi Port 与 Port Qasim，再确认船司实际挂靠码头和收货人提货要求。',
      'KICT、KGTL、SAPT / SAPTL 属于 Karachi Port；QICT 属于 Port Qasim，AICT 是港外堆场。',
      '报价中的旧码头名称和代理简称要核对现行名称，不能只凭“Karachi”订舱。',
      '同时比较起运港、接驳、中转次数、目的港费用、免费期和最终交付范围。',
    ],
    sections: [
      {
        heading: '1. Karachi Port 与 Port Qasim 是不同港区',
        body: '中国到卡拉奇地区的运输询价，应先写明实际卸货港及码头。Karachi Port 与 Port Qasim 是不同港区，选择会影响船司挂靠、清关、提柜和后续内陆运输。请收货人或当地代理确认指定港区，不要只用城市名替代订舱中的港口信息。',
      },
      {
        heading: '2. 码头与港外堆场名称怎么区分',
        body: 'Karachi Port Trust 当前资料列出 KICT、KGTL、SAPTL 三个集装箱码头运营主体；SAPT 是常见业务称呼。Port Qasim 的 QICT 应单独识别。报价中出现 PICT 等旧称时，要核对现行码头名称和订舱显示。AICT 运营方将其标示为港外集装箱场站，不能与海港卸船码头混为一谈。',
        bullets: [
          'KICT：Karachi International Container Terminal。',
          'KGTL：Karachi Gateway Terminal Limited；报价出现 PICT 旧称时核对实际码头。',
          'SAPT / SAPTL：South Asia Pakistan Terminals，属于 Karachi Port。',
          'Port Qasim / QICT：独立港区及其集装箱码头。',
          'AICT：港外场站；如需该场站服务，另确认卸船码头、转运和交付范围。',
        ],
      },
      {
        heading: '3. 连云港与青岛起运怎样比较',
        body: '连云港询价时，把本地接货、支线接驳和主线运输一并比较；青岛询价时，确认主线订舱条件和工厂到港安排。直航或中转、船司、挂靠码头和可接受货类都应按当前航次确认，不沿用固定的“某船司只到某码头”对照表。',
        bullets: [
          '提供装货地址、货好日期和箱型箱量。',
          '注明收货人指定的港口、码头、船司或目的港代理。',
          '若需要超尺寸设备方案，提前提供尺寸、重量、重心与装卸条件。',
        ],
      },
      {
        heading: '4. 航程要拆成运输与等待环节',
        body: '询价时请同时看预计离港、预计到港、中转港、中转次数和交付结束点。主线海上航程不包含工厂备货、拖车、接驳等待、清关和提货。若买家有交付期限，应先说明最晚到港或到门日期，再比较可订方案，并预留衔接变化的时间。',
      },
      {
        heading: '5. 到港费用和免费期逐项确认',
        body: '报价应区分海运、起运港操作、目的港换单、码头、仓储、用箱、清关和内陆运输费用，写明收费方和承担方。免费期要核对开始计算的事件、天数和费用类型。Port Qasim 与 Karachi Port、海港码头与港外场站的费用不能直接当成同一套。',
        bullets: [
          '请目的港代理确认换单、提货与还空箱安排。',
          '免费期延长需本票确认，不凭其他订单或历史报价推断。',
          '到门服务补充完整收货地址、卸货方式和清关责任。',
        ],
      },
      {
        heading: '6. 文件和放货方式在截单前核对',
        body: '提前核对发票、箱单、品名、HS Code、件重体和收发货人资料，并让买家与当地代理确认适用进口手续和单证。化工品、电池、二手或大型设备应提前审核运输接受条件。提单显示的卸货港、交货地点、通知人和放货方式须与报价及买家安排一致。',
      },
    ],
    checklist: [
      '装货地址、连云港或青岛起运要求、货好日期',
      '品名、件数、毛重、体积、HS Code 与特殊货物资料',
      '箱型箱量及超重、超尺寸或装卸限制',
      'Karachi Port 或 Port Qasim，以及具体码头名称',
      'AICT 等港外场站是否另含转运与交付服务',
      '指定船司、目的港代理及可接受中转次数',
      '预计到港或到门日期与最终交付地址',
      '费用承担方、免费期、报价有效期和放货方式',
    ],
    faqs: [
      {
        question: 'Port Qasim 和 Karachi Port 是同一个港吗？',
        answer: '不是同一港区。询价和订舱应写清实际卸货港及码头，再由收货人确认清关与提货安排。',
      },
      {
        question: 'AICT 是船舶卸货的海港码头吗？',
        answer: 'AICT 是港外集装箱场站。若买家指定 AICT，还要核对船舶实际卸货码头、转运安排和报价中的最终交付范围。',
      },
      {
        question: '报价写 PICT，应该如何确认？',
        answer: '请船司或目的港代理核对现行码头名称、代码及挂靠安排，确认是否指 KGTL 相关作业区域，不直接沿用旧名称对应船司的表格。',
      },
      {
        question: '连云港到卡拉奇有直航吗，多久到？',
        answer: '连云港出运通常经青岛中转，海上约 30 天；青岛直接出运约 25 天，主要订舱船司为长荣（EMC）和 KMTC。实际方案取决于货好日期、指定码头和当期船期，请提供货好日期、港区、箱型和最晚可接受到港时间，以便比较完整方案。',
      },
    ],
    en: {
      title: 'Lianyungang & Qingdao to Karachi Shipping: Ports, Terminals & Booking Guide',
      description: 'Compare Karachi Port and Port Qasim, KICT, KGTL, SAPT, QICT and the AICT off-dock facility. Prepare China export booking, charges and cargo details.',
      highlights: [
        'Distinguish Karachi Port from Port Qasim before confirming the vessel terminal and consignee pickup plan.',
        'KICT, KGTL and SAPT / SAPTL are at Karachi Port; QICT is at Port Qasim, while AICT is an off-dock facility.',
        'Check current terminal names and booking references instead of relying on a city name or an old terminal label.',
        'Compare origin, connections, destination charges, free time and the delivery endpoint together.',
      ],
      sections: [
        {
          heading: '1. Karachi Port and Port Qasim are different port areas',
          body: 'Name the actual discharge port and terminal when requesting China-to-Karachi-area freight. Karachi Port and Port Qasim are different port areas, affecting vessel calls, clearance, pickup and inland movement. Ask the consignee or local agent to confirm the required port instead of using the city name alone.',
        },
        {
          heading: '2. Distinguish marine terminals from off-dock facilities',
          body: 'Karachi Port Trust lists KICT, KGTL and SAPTL as its three container terminal operators; SAPT is a common commercial reference. Identify QICT at Port Qasim separately. If a proposal uses a historical PICT reference, confirm the current terminal and booking details. AICT describes itself as an off-dock facility and should not be treated as a vessel discharge terminal.',
          bullets: [
            'KICT: Karachi International Container Terminal.',
            'KGTL: Karachi Gateway Terminal Limited; verify the actual terminal if a quote uses PICT.',
            'SAPT / SAPTL: South Asia Pakistan Terminals at Karachi Port.',
            'Port Qasim / QICT: the separate port area and its container terminal.',
            'AICT: an off-dock facility; confirm the marine terminal, transfer and delivery scope separately.',
          ],
        },
        {
          heading: '3. Compare Lianyungang and Qingdao origins',
          body: 'For Lianyungang, compare factory pickup, feeder connections and mainline transport together. For Qingdao, confirm the mainline booking and factory-to-port arrangements. Direct or transshipment routing, carrier, terminal calls and cargo acceptance depend on the current voyage; do not rely on a fixed carrier-to-terminal table.',
          bullets: [
            'Supply loading address, ready date, equipment and container count.',
            'State any nominated port, terminal, carrier or destination agent.',
            'For oversized equipment, provide dimensions, weight, centre of gravity and lifting conditions early.',
          ],
        },
        {
          heading: '4. Separate sailing time from the whole delivery plan',
          body: 'Check estimated departure and arrival, connection ports, transshipment count and the quoted delivery endpoint. Mainline sailing time excludes factory preparation, trucking, connection waiting, customs and pickup. State the latest acceptable port or door arrival date before comparing available plans and allow for connection changes.',
        },
        {
          heading: '5. Confirm destination costs and free-time terms',
          body: 'Separate ocean freight, origin handling, delivery order, terminal, storage, equipment use, clearance and inland transport. Identify who charges and who pays each item. Confirm the free-time starting event, days and charge scope. Different port areas, marine terminals and off-dock facilities do not share one universal charge package.',
          bullets: [
            'Confirm release, pickup and empty return with the destination agent.',
            'Obtain booking-specific confirmation for any free-time extension.',
            'For door delivery, supply the full address, unloading method and clearance responsibility.',
          ],
        },
        {
          heading: '6. Check documents and release before SI cut-off',
          body: 'Review invoice, packing list, commodity, HS code, packages, weight, volume and shipper/consignee data. Ask the buyer and local agent to confirm applicable import procedures and documents. Review chemicals, batteries and used or large equipment early. Align the B/L discharge port, delivery place, notify party and release method with the agreed proposal.',
        },
      ],
      checklist: [
        'Factory address, preferred Lianyungang or Qingdao origin and ready date',
        'Commodity, packages, gross weight, volume, HS code and special-cargo documents',
        'Equipment, volume and weight, size or handling restrictions',
        'Karachi Port or Port Qasim and the named terminal',
        'Any AICT off-dock transfer and delivery scope',
        'Nominated carrier or agent and acceptable connections',
        'Port or door deadline and final address',
        'Charge responsibility, free time, quote validity and release method',
      ],
      faqs: [
        {
          question: 'Are Karachi Port and Port Qasim the same port?',
          answer: 'They are different port areas. Name the discharge port and terminal in the request and confirm clearance and pickup with the consignee.',
        },
        {
          question: 'Is AICT a vessel discharge terminal?',
          answer: 'AICT is an off-dock facility. If it is requested, also confirm the marine discharge terminal, transfer and final delivery scope.',
        },
        {
          question: 'What should I check if a quote says PICT?',
          answer: 'Ask the carrier or local agent to verify the current terminal name, code and vessel call, including whether the reference relates to the KGTL operating area.',
        },
        {
          question: 'Is there a direct Lianyungang service and how long does it take?',
          answer: 'Lianyungang cargo usually connects via Qingdao, with about 30 days at sea; direct loading from Qingdao takes about 25 days. We mainly book with EMC (Evergreen) and KMTC. The actual plan depends on your ready date, required terminal and the current sailing schedule, so send the ready date, port area, equipment and latest acceptable arrival date to compare options.',
        },
      ],
    },
  },
  {
    slug: 'china-to-jebel-ali-shipping',
    section: 'routes',
    title: '青岛、连云港到中东海运：迪拜 Jebel Ali、Dammam 与 Jeddah',
    metaTitle_en: 'China to Middle East Shipping: Jebel Ali, Dammam & Jeddah',
    description: '青岛与连云港出口中东海运指南：比较 Jebel Ali、Dammam、Jeddah 目的港，核对订舱、直航与中转、单证、免费期、目的港费用和到门范围。',
    quickAnswer: '青岛到迪拜（Jebel Ali）目前主要走 MSC、CMA 和 ASCL，经豪尔费坎（Khor Fakkan）中转，航程约 30–40 天；连云港出运有嘉华航运（KAWA Shipping）直达豪尔费坎再转迪拜，约 30 天。达曼（Dammam）、吉达（Jeddah）按航次确认。中东航线订舱前，请与收货人确认地区局势相关的附加费和条款。以上航程为参考，具体以船公司当期船期为准。',
    quickAnswer_en: 'From Qingdao to Dubai (Jebel Ali), sailings currently run mainly with MSC, CMA and ASCL, transshipping at Khor Fakkan, with about 30–40 days transit. From Lianyungang, KAWA Shipping runs a direct service to Khor Fakkan with on-carriage to Dubai, about 30 days. Dammam and Jeddah are confirmed per sailing. Before booking, agree with the consignee on any surcharges or terms related to the regional situation. Transit times are references; each sailing is confirmed with the carrier.',
    updatedAt: '2026-11-05',
    readTime: '6 min read',
    image: '/bryce-routes-command.webp',
    keywords: [
      '青岛中东海运',
      '青岛到迪拜海运',
      '连云港中东海运',
      '连云港到 Jebel Ali',
      'Jebel Ali shipping',
      'Dammam shipping',
      'Jeddah shipping',
      '中东出口货代',
    ],
    highlights: [
      '青岛或连云港起运，应把工厂到港、主线或接驳、中转和交付范围一起比较。',
      'Jebel Ali 在阿联酋，Dammam 与 Jeddah 在沙特；最终买家所在地决定目的港及后续运输。',
      '到港价与到门价分别列出包含项目，目的港清关、税费和内陆运输责任提前写清。',
      '按本票确认船期、接受货类、免费期和报价有效期，方便工厂与买家安排交货。',
    ],
    sections: [
      {
        heading: '1. 青岛与连云港起运需要哪些资料',
        body: '港威国际物流总部在青岛，李经理在连云港为出口客户沟通运输方案。询价先提供工厂地址、货物、箱型箱量、货好时间、目的港和贸易条款。青岛方案确认主线订舱及工厂到港安排；连云港方案同时比较本地接货、支线接驳及主线衔接。是否直航、经哪里中转和具体船司按当前可订航次确认。',
        bullets: [
          '常规 FCL 提供箱型、箱量、毛重和装柜地址。',
          'LCL 提供包装尺寸、件数、重量、体积和是否可叠放。',
          '设备、化工品和带电货物提前提供尺寸、包装、运输鉴定或 SDS / MSDS 等适用资料。',
        ],
      },
      {
        heading: '2. Jebel Ali、Dammam、Jeddah 怎么比较',
        body: '中东不是一个统一目的港。Jebel Ali 是迪拜港口，Dammam 对应沙特东部港口需求，Jeddah 位于沙特红海一侧。应先确认买家最终收货城市、指定卸货港、清关代理和是否需要内陆运输，再比较海运及后续交付；不能因为报价写“迪拜”就默认包含进入其他国家的转运和清关。',
        bullets: [
          'Jebel Ali：确认交货是到港、阿联酋本地到门，还是另含后续转运。',
          'Dammam：询问买家是否指定 King Abdulaziz Port，以及后续收货地址。',
          'Jeddah：确认 Jeddah Islamic Port 的卸货安排与买家交付要求。',
          '如需跨国或内陆交付，把路线、交货地点与责任范围单独列明。',
        ],
      },
      {
        heading: '3. 直航、中转和交货时间如何确认',
        body: '询价提供最晚可接受到港或到门日期，比只问“最快几天”更便于安排。比较方案时分别列出起运港、船名航次、预计离港与到港、中转港、截关、截单和 VGM 截止时间。船期变化、支线接驳和港口操作会影响交付，正式订舱以具体航次确认。',
      },
      {
        heading: '4. 中东报价要分清包含与不包含',
        body: '一份可比较的报价应列明起运港操作、拖车、报关、海运及附加费，另说明目的港换单、码头、用箱、仓储、清关与内陆运输是否包含。免费期还应区分船司用箱与码头堆存，并确认起算方式和适用箱型。到门方案需明确进口清关、税费、卸货和收货条件的安排及承担方。',
        bullets: [
          '写明运费支付方式、费用币种及报价有效期。',
          '买家指定代理时，提前核对当地服务与收费。',
          '延长免费期或其他特殊要求，取得本票书面确认后再纳入方案。',
        ],
      },
      {
        heading: '5. 普货、建材、化工与设备单证分别核对',
        body: '基础资料包括货物英文说明、发票、箱单、件重体、收发货人和适用 HS Code。产地证、认证或产品准入资料是否需要，应由买家与当地清关代理按目的国家和货物确认。化工品、危险品、带电产品及超尺寸设备另审船司接受条件、包装和适用运输文件，避免装柜后才补资料。',
      },
      {
        heading: '6. 从询价到出货的确认步骤',
        body: '先确认货物、目的港与最终交付需求，再比较航次和费用范围；方案选定后确认订舱、装柜和资料截止时间，复核提单信息与放货方式。出货后按约定跟进船期与接驳更新，收货人提前准备到港清关、提货和还空箱。',
        bullets: [
          '第一步：提交货物、地址、箱量、日期与贸易条款。',
          '第二步：比较起运方案、船期、总费用项目和目的港责任。',
          '第三步：确认订舱、截关、单证、装柜与提单。',
          '第四步：衔接到港清关、提货、内陆交付和空箱归还。',
        ],
      },
    ],
    checklist: [
      '青岛或连云港起运要求与工厂装货地址',
      'Jebel Ali / Dammam / Jeddah 或其他明确目的港',
      '最终交付国家、城市、地址及到港或到门范围',
      '品名、HS Code、件数、毛重、体积、箱型箱量',
      '货好日期、最晚到港时间与可接受中转方案',
      '收货人、当地清关代理和适用单证要求',
      '费用承担方、免费期要求及报价有效期',
      '特殊货物包装、尺寸与船司审核资料',
    ],
    faqs: [
      {
        question: '青岛到中东海运询价要提供什么？',
        answer: '请提供装货地址、目的港、最终交付城市、品名、箱型箱量、件重体、货好日期和贸易条款。特殊货物另附包装及适用运输资料。',
      },
      {
        question: '到 Jebel Ali 就能直接交付沙特买家吗？',
        answer: '到 Jebel Ali 的海运到港报价不自动包含沙特交付。若需后续转运或跨国运输，另确认路线、手续、清关、费用和最终交货地点。',
      },
      {
        question: 'Dammam 和 Jeddah 应该怎么选？',
        answer: '先让买家确认收货城市、清关代理和指定卸货港，再比较海运与内陆交付安排；不能只按海运费判断。',
      },
      {
        question: '中东海运到门报价包含税费和卸货吗？',
        answer: '需逐项约定。请核对进口清关、税费、码头与用箱费用、内陆运输、卸货及收货限制的包含范围和承担方。',
      },
    ],
    en: {
      title: 'Qingdao & Lianyungang to Middle East Shipping: Jebel Ali, Dammam & Jeddah',
      description: 'Plan China exports from Qingdao or Lianyungang to Jebel Ali, Dammam and Jeddah. Compare routing, booking data, destination charges and delivery scope.',
      highlights: [
        'Compare factory-to-port arrangements, mainline or feeder connections and delivery scope together.',
        'Jebel Ali is in the UAE; Dammam and Jeddah are in Saudi Arabia. Match the port to the buyer’s final location.',
        'Separate port delivery from door delivery and clarify clearance, duties and inland transport responsibility.',
        'Confirm schedule, cargo acceptance, free time and quote validity for the actual shipment.',
      ],
      sections: [
        {
          heading: '1. Prepare a Qingdao or Lianyungang origin request',
          body: 'Global View Logistics is headquartered in Qingdao, with Bryce Lee supporting export enquiries from Lianyungang. Send factory address, cargo, equipment, container count, ready date, destination and trade terms. For Qingdao, confirm mainline booking and factory-to-port arrangements; for Lianyungang, compare local pickup and feeder/mainline connections. Available direct or transshipment routing and carrier depend on the voyage.',
          bullets: [
            'For FCL, provide equipment, volume, gross weight and loading address.',
            'For LCL, provide package dimensions, count, weight, volume and stackability.',
            'For equipment, chemicals or battery cargo, send applicable dimensions, packing, transport appraisal or SDS / MSDS details early.',
          ],
        },
        {
          heading: '2. Compare Jebel Ali, Dammam and Jeddah',
          body: 'The Middle East is not a single destination port. Jebel Ali is in Dubai; Dammam serves Saudi Arabia’s eastern port demand, while Jeddah is on the Red Sea side. Confirm the buyer’s final city, nominated discharge port, broker and inland requirement before comparing ocean and onward transport. A Dubai port quote does not automatically cover movement or clearance in another country.',
          bullets: [
            'Jebel Ali: clarify port delivery, UAE door delivery or a separately agreed onward movement.',
            'Dammam: ask whether King Abdulaziz Port is required and confirm the final address.',
            'Jeddah: confirm Jeddah Islamic Port discharge and the buyer’s delivery requirements.',
            'List cross-border or inland routing, delivery point and responsibilities separately.',
          ],
        },
        {
          heading: '3. Compare routing against the delivery deadline',
          body: 'State the latest acceptable port or door arrival date instead of only asking for the fastest sailing time. Compare origin, vessel/voyage, estimated departure and arrival, connection ports, cargo cut-off, SI and VGM deadlines. Schedule changes, feeder connections and port operations affect delivery; confirm the actual voyage when booking.',
        },
        {
          heading: '4. Separate included and excluded charges',
          body: 'List origin handling, trucking, customs, ocean freight and surcharges, then identify whether delivery order, terminal, equipment use, storage, clearance and inland transport are included. Separate carrier free time from terminal storage and confirm the starting event and equipment scope. A door proposal must clarify import clearance, duties, unloading and receiving conditions.',
          bullets: [
            'Identify freight payment terms, currency and quote validity.',
            'Check local services and charges when the buyer nominates an agent.',
            'Obtain shipment-specific written confirmation for extra free time or other special requests.',
          ],
        },
        {
          heading: '5. Review documents for the actual cargo and country',
          body: 'Prepare cargo description, invoice, packing list, packages, weight, volume, shipper/consignee details and applicable HS code. Ask the buyer and local broker to confirm any origin certificate, attestation or product approval for the country and goods. Review carrier acceptance, packing and transport documents for chemicals, dangerous goods, batteries and oversized equipment before loading.',
        },
        {
          heading: '6. Follow the enquiry-to-shipment sequence',
          body: 'Confirm cargo, discharge port and delivery scope, then compare voyages and charge coverage. After selecting a proposal, confirm booking, loading and document deadlines and check B/L data and release method. Follow agreed schedule and connection updates, while the buyer prepares clearance, pickup and empty return.',
          bullets: [
            'Step 1: send cargo, addresses, volume, dates and trade terms.',
            'Step 2: compare origin routing, schedule, charges and destination responsibilities.',
            'Step 3: confirm booking, cut-offs, documents, loading and B/L.',
            'Step 4: arrange arrival clearance, pickup, inland delivery and empty return.',
          ],
        },
      ],
      checklist: [
        'Preferred Qingdao or Lianyungang origin and factory address',
        'Jebel Ali, Dammam, Jeddah or another named port',
        'Final country, city, address and port or door scope',
        'Commodity, HS code, packages, weight, volume and equipment',
        'Ready date, latest arrival and acceptable connections',
        'Consignee, local broker and applicable documents',
        'Charge responsibility, free-time request and quote validity',
        'Special-cargo packing, dimensions and acceptance documents',
      ],
      faqs: [
        {
          question: 'What is needed for a Qingdao to Middle East quote?',
          answer: 'Send factory address, discharge port, final city, commodity, equipment, volume, packages, weight, ready date and trade terms. Add applicable packing and transport details for special cargo.',
        },
        {
          question: 'Does Jebel Ali freight automatically include delivery to Saudi Arabia?',
          answer: 'No. A port quote to Jebel Ali does not automatically include onward or cross-border delivery. Agree routing, procedures, clearance, charges and final delivery place separately.',
        },
        {
          question: 'How should I choose between Dammam and Jeddah?',
          answer: 'Confirm the buyer’s city, broker and required discharge port, then compare ocean and inland arrangements rather than ocean freight alone.',
        },
        {
          question: 'Does a Middle East door quote include duties and unloading?',
          answer: 'Check the agreed scope item by item, including import clearance, duties, terminal and equipment charges, inland transport, unloading and receiving restrictions.',
        },
      ],
    },
  },
  {
    slug: 'china-to-south-america-shipping',
    section: 'routes',
    title: '中国到南美海运：青岛自有合约，覆盖巴西、阿根廷、墨西哥等东西两岸',
    description:
      '青岛港南美东、南美西自有合约与订舱窗口，覆盖巴西、阿根廷、墨西哥、智利、秘鲁等主要港口，含航程、船司和特殊货物操作要点。',
    quickAnswer: '青岛到拉美主要港口的参考航程：墨西哥 Manzanillo 约 22–26 天（KMTC、MSK），Lázaro Cárdenas 约 25 天（ONE）；秘鲁 Callao 约 35 天，智利 San Antonio 约 40 天；巴西 Santos 约 40 天，阿根廷 Buenos Aires 约 45 天（CMA）。以上均为直航，具体以船公司当期船期为准。',
    quickAnswer_en: 'Reference transit times from Qingdao to main Latin American ports: Manzanillo, Mexico about 22–26 days (KMTC, MSK) and Lázaro Cárdenas about 25 days (ONE); Callao, Peru about 35 days and San Antonio, Chile about 40 days; Santos, Brazil about 40 days and Buenos Aires, Argentina about 45 days (CMA). All are direct services; each sailing is confirmed with the carrier.',
    updatedAt: '2026-10-27',
    readTime: '6 min read',
    image: '/bryce-routes-command.webp',
    keywords: [
      '中国到南美海运',
      'South America shipping',
      '青岛到巴西海运',
      '青岛到墨西哥海运',
      '南美东',
      '南美西',
    ],
    highlights: [
      '青岛港南美东、南美西均有自有合约和订舱窗口，直接订舱，舱位和价格更有保障。',
      '南美东覆盖巴西、阿根廷、乌拉圭、巴拉圭等，南美西覆盖墨西哥、智利、秘鲁、厄瓜多尔、哥伦比亚等。',
      '化工品、建材等特殊货物可操作，并可覆盖 Asuncion 等内陆点。',
    ],
    sections: [
      {
        heading: '1. 青岛港自有合约，东西两岸都能走',
        body:
          '我们在青岛港拥有南美东和南美西的自有合约与订舱窗口，属于自己家订舱，而不是二手转卖舱位，因此在舱位保障、价格和旺季稳定性上更有优势。无论是南美东的巴西、阿根廷，还是南美西的墨西哥、智利、秘鲁，都能直接安排。',
      },
      {
        heading: '2. 南美东：巴西、阿根廷、乌拉圭、巴拉圭',
        body:
          '南美东有 CMA、MSC、COSCO、ONE、PIL、YML、EMC、HMM、ZIM、MSK 等多家船司的直达和中转资源，覆盖 Santos、Paranagua、Navegantes、Itapoa、Rio de Janeiro、Buenos Aires、Montevideo 等主要港口，并可覆盖 Asuncion（巴拉圭）等内陆点。',
        bullets: [
          '巴西 Santos：CMA 直航约 40 天。',
          '阿根廷 Buenos Aires：CMA 直航约 45 天。',
          '覆盖巴西南北部、阿根廷、乌拉圭主要港口及巴拉圭内陆点。',
        ],
      },
      {
        heading: '3. 南美西：墨西哥、智利、秘鲁、厄瓜多尔、哥伦比亚',
        body:
          '南美西以 CMA、MSK、KMTC 等自有舱位为主，覆盖 Manzanillo、Lazaro、Ensenada、Callao、San Antonio、Valparaiso、Guayaquil、Buenaventura 等港口。其中墨西哥航程较快，是南美西的重点市场。',
        bullets: [
          '墨西哥 Manzanillo：KMTC 直航约 22 天、MSK 直航约 26 天，南美西最快。',
          '智利 San Antonio：直航约 40 天；秘鲁 Callao：直航约 35 天。',
          '覆盖墨西哥、智利、秘鲁、厄瓜多尔、哥伦比亚等主要港口。',
        ],
      },
      {
        heading: '4. 特殊货物和目的港费用',
        body:
          '化工品、建材等特殊货物可以操作，但需要提前确认单证和船司接受情况。南美部分港口和航线的目的港费用、清关要求差异较大，建议询价时一并确认，避免只看起运港价格。',
      },
    ],
    checklist: [
      '目的港和最终收货城市（南美东 / 南美西）',
      '箱型、货重、品名，是否为化工品或建材',
      '是否需要覆盖内陆点（如 Asuncion）',
      '是否接受中转以及可接受的航程天数',
      '是否需要产地证、MSDS 或其他特殊单证',
    ],
    faqs: [
      {
        question: '你们南美线是自己订舱还是转的舱位？',
        answer:
          '青岛港南美东和南美西都是我们自有合约和订舱窗口，属于自己家订舱，因此在舱位保障、价格和旺季稳定性上更有优势。',
      },
      {
        question: '南美航程大概多久？',
        answer:
          '南美西较快，墨西哥 Manzanillo 走 KMTC 直航约 22 天、MSK 直航约 26 天，智利 San Antonio 直航约 40 天、秘鲁 Callao 直航约 35 天；南美东较长，巴西 Santos 走 CMA 直航约 40 天，阿根廷 Buenos Aires 走 CMA 直航约 45 天。具体以实际船期为准。',
      },
    ],
    title_en: 'China to South America Ocean Freight: Qingdao Contracted Space to Brazil, Argentina, Mexico & More',
    metaTitle_en: 'China to South America Ocean Freight: Qingdao Contracted Space',
    description_en:
      'Qingdao contracted space and booking windows for both South America East and West coasts — Brazil, Argentina, Mexico, Chile, Peru and more, with transit times, carriers and special cargo notes.',
    highlights_en: [
      'We hold our own contracts and booking windows at Qingdao for both South America East and West coasts — direct booking for better space and rate security.',
      'East coast covers Brazil, Argentina, Uruguay and Paraguay; West coast covers Mexico, Chile, Peru, Ecuador and Colombia.',
      'Chemicals, building materials and other special cargo can be handled, and inland points such as Asuncion are covered.',
    ],
    sections_en: [
      {
        heading: '1. Our own contracts at Qingdao, both coasts covered',
        body:
          'We hold our own contracts and booking windows at Qingdao for both the South America East and West coasts. This is our own booking, not resold space, which gives an edge in space security, rate and peak-season reliability. Whether it is Brazil and Argentina on the east coast or Mexico, Chile and Peru on the west, we can arrange it directly.',
      },
      {
        heading: '2. East coast: Brazil, Argentina, Uruguay, Paraguay',
        body:
          'The east coast has direct and transshipment resources from many carriers — CMA, MSC, COSCO, ONE, PIL, YML, EMC, HMM, ZIM, MSK — covering Santos, Paranagua, Navegantes, Itapoa, Rio de Janeiro, Buenos Aires, Montevideo and more, plus inland points such as Asuncion (Paraguay).',
        bullets: [
          'Brazil Santos: CMA direct about 40 days.',
          'Argentina Buenos Aires: CMA direct about 45 days.',
          'Covers major ports in north and south Brazil, Argentina, Uruguay and inland Paraguay.',
        ],
      },
      {
        heading: '3. West coast: Mexico, Chile, Peru, Ecuador, Colombia',
        body:
          'The west coast is mainly our own space with CMA, MSK and KMTC, covering Manzanillo, Lazaro, Ensenada, Callao, San Antonio, Valparaiso, Guayaquil, Buenaventura and more. Mexico has a faster transit and is a key west-coast market.',
        bullets: [
          'Mexico Manzanillo: KMTC direct about 22 days or MSK direct about 26 days, fastest on the west coast.',
          'Chile San Antonio: direct about 40 days; Peru Callao: direct about 35 days.',
          'Covers major ports in Mexico, Chile, Peru, Ecuador and Colombia.',
        ],
      },
      {
        heading: '4. Special cargo and destination charges',
        body:
          'Chemicals, building materials and other special cargo can be handled, but confirm documents and carrier acceptance in advance. Destination charges and clearance requirements vary across South American ports and routes, so confirm them together when requesting a quote rather than looking at origin price alone.',
      },
    ],
    checklist_en: [
      'Destination port and final receiving city (East or West coast)',
      'Container type, weight, commodity, and whether it is chemical or building material',
      'Whether inland points (such as Asuncion) need to be covered',
      'Whether transshipment is acceptable and the acceptable transit days',
      'Whether certificate of origin, MSDS or other special documents are needed',
    ],
    faqs_en: [
      {
        question: 'Is your South America space your own booking or resold?',
        answer:
          'Both South America East and West coasts at Qingdao are our own contracts and booking windows — our own booking — which gives an edge in space security, rate and peak-season reliability.',
      },
      {
        question: 'How long is the transit to South America?',
        answer:
          'The west coast is faster: Mexico Manzanillo is direct with KMTC in about 22 days or MSK in about 26 days, Chile San Antonio direct about 40 days and Peru Callao direct about 35 days. On the east coast, Brazil Santos is direct with CMA in about 40 days and Argentina Buenos Aires with CMA in about 45 days. Actual sailings may vary.',
      },
    ],
  },
  {
    slug: 'china-to-brazil-argentina-shipping',
    section: 'routes',
    title: '中国到巴西、阿根廷海运：南美东航线，青岛自有合约',
    description:
      '青岛出口到巴西 Santos、阿根廷 Buenos Aires 等南美东港口的自有合约、船司、航程和目的港操作要点。',
    quickAnswer: '青岛到巴西 Santos 走 CMA 直航，约 40 天；到阿根廷 Buenos Aires 走 CMA 直航，约 45 天。其他南美东港口按航次确认。以上航程为参考，具体以船公司当期船期为准。',
    quickAnswer_en: 'From Qingdao, Santos, Brazil is direct with CMA in about 40 days, and Buenos Aires, Argentina is direct with CMA in about 45 days. Other east coast ports are confirmed per sailing. Transit times are references; each sailing is confirmed with the carrier.',
    updatedAt: '2026-10-27',
    readTime: '5 min read',
    image: '/bryce-routes-command.webp',
    keywords: [
      '中国到巴西海运',
      'China to Brazil shipping',
      '青岛到 Santos',
      '中国到阿根廷海运',
      'Buenos Aires shipping',
      '南美东',
    ],
    highlights: [
      '青岛港南美东自有合约和订舱窗口，直接订舱，舱位和价格更有保障。',
      '覆盖巴西 Santos、Paranagua、Rio de Janeiro 及阿根廷 Buenos Aires 等主要港口。',
      '化工品、建材等特殊货物可操作，并可覆盖 Asuncion（巴拉圭）等内陆点。',
    ],
    sections: [
      {
        heading: '1. 南美东自有合约，船司资源全',
        body:
          '南美东是我们在青岛港的自有合约航线，有 CMA、MSC、COSCO、ONE、PIL、YML、EMC、HMM、ZIM、MSK 等多家船司的直达和中转资源。属于自己家订舱窗口，在舱位、价格和旺季稳定性上更有保障，而不是二手转卖舱位。',
      },
      {
        heading: '2. 巴西主要港口和航程',
        body:
          '巴西是南美东最主要的市场，覆盖 Santos、Paranagua、Navegantes、Itapoa、Rio de Janeiro、Itaguai、Suape、Salvador、Pecem、Manaus 等港口，直达和中转方案都有。',
        bullets: [
          '巴西 Santos：CMA 直航约 40 天。',
          '覆盖巴西南部（Santos、Paranagua、Navegantes）和北部（Suape、Salvador、Pecem、Manaus）。',
          '直达船和中转方案可根据货物和时效选择。',
        ],
      },
      {
        heading: '3. 阿根廷、乌拉圭、巴拉圭',
        body:
          '除巴西外，南美东还覆盖阿根廷 Buenos Aires、La Plata、Rosario、Zarate，乌拉圭 Montevideo，以及巴拉圭 Asuncion 等内陆点。',
        bullets: [
          '阿根廷 Buenos Aires：CMA 直航约 45 天。',
          '可覆盖 Montevideo（乌拉圭）、Asuncion（巴拉圭内陆点）。',
        ],
      },
      {
        heading: '4. 特殊货物和目的港费用',
        body:
          '化工品、建材等特殊货物可以操作，但需要提前确认单证和船司接受情况。巴西、阿根廷部分港口的目的港费用和清关要求差异较大，建议询价时一并确认。',
      },
    ],
    checklist: [
      '目的港（Santos / Buenos Aires / Montevideo 等）和最终收货城市',
      '箱型、货重、品名，是否为化工品或建材',
      '是否需要覆盖内陆点（如 Asuncion）',
      '是否接受中转以及可接受的航程天数',
      '是否需要产地证、MSDS 或其他特殊单证',
    ],
    faqs: [
      {
        question: '巴西 Santos 航程多久？',
        answer:
          'CMA 直航约 40 天，具体以实际船期为准。',
      },
      {
        question: '南美东是自有合约吗？',
        answer:
          '是的，南美东是我们在青岛港的自有合约和订舱窗口，属于自己家订舱，在舱位保障、价格和旺季稳定性上更有优势。',
      },
    ],
    title_en: 'China to Brazil & Argentina Ocean Freight: South America East Coast, Qingdao Contracted Space',
    metaTitle_en: 'China to Brazil & Argentina Ocean Freight: Santos, Buenos Aires',
    description_en:
      'Qingdao contracted space, carriers, transit times and destination notes for South America East ports like Santos and Buenos Aires.',
    highlights_en: [
      'Our own contract and booking window at Qingdao for the South America East coast — direct booking for better space and rate security.',
      'Covers Brazil Santos, Paranagua, Rio de Janeiro and Argentina Buenos Aires and more.',
      'Chemicals, building materials and special cargo can be handled, and inland points like Asuncion (Paraguay) are covered.',
    ],
    sections_en: [
      {
        heading: '1. Our own east-coast contract, full carrier resources',
        body:
          'The South America East coast is our own contracted lane at Qingdao, with direct and transshipment resources from CMA, MSC, COSCO, ONE, PIL, YML, EMC, HMM, ZIM and MSK. It is our own booking window — better space, rate and peak-season reliability, not resold space.',
      },
      {
        heading: '2. Main Brazil ports and transit times',
        body:
          'Brazil is the main east-coast market, covering Santos, Paranagua, Navegantes, Itapoa, Rio de Janeiro, Itaguai, Suape, Salvador, Pecem and Manaus, with both direct and transshipment options.',
        bullets: [
          'Brazil Santos: CMA direct about 40 days.',
          'Covers south Brazil (Santos, Paranagua, Navegantes) and north Brazil (Suape, Salvador, Pecem, Manaus).',
          'Direct and transshipment options based on cargo and timing.',
        ],
      },
      {
        heading: '3. Argentina, Uruguay, Paraguay',
        body:
          'Beyond Brazil, the east coast covers Argentina Buenos Aires, La Plata, Rosario, Zarate, Uruguay Montevideo, and inland points like Asuncion in Paraguay.',
        bullets: [
          'Argentina Buenos Aires: CMA direct about 45 days.',
          'Covers Montevideo (Uruguay) and Asuncion (inland Paraguay).',
        ],
      },
      {
        heading: '4. Special cargo and destination charges',
        body:
          'Chemicals, building materials and special cargo can be handled, but confirm documents and carrier acceptance in advance. Destination charges and clearance at some Brazil and Argentina ports vary, so confirm them when requesting a quote.',
      },
    ],
    checklist_en: [
      'Destination port (Santos / Buenos Aires / Montevideo etc.) and final receiving city',
      'Container type, weight, commodity, and whether chemical or building material',
      'Whether inland points (such as Asuncion) need to be covered',
      'Whether transshipment is acceptable and the acceptable transit days',
      'Whether certificate of origin, MSDS or other special documents are needed',
    ],
    faqs_en: [
      {
        question: 'How long is transit to Brazil Santos?',
        answer:
          'CMA direct is about 40 days; actual sailings may vary.',
      },
      {
        question: 'Is the east coast your own contract?',
        answer:
          'Yes, the South America East coast is our own contract and booking window at Qingdao — our own booking — with an edge in space, rate and peak-season reliability.',
      },
    ],
  },
  {
    slug: 'china-to-mexico-chile-peru-shipping',
    relatedSlugs: [
      'china-to-central-america-caribbean-shipping',
      'china-to-mexico-chile-peru-shipping',
      'china-to-south-america-shipping',
      'china-to-brazil-argentina-shipping',
    ],
    section: 'routes',
    title: '中国到墨西哥、智利、秘鲁海运：南美西航线，青岛自有舱位',
    description:
      '青岛出口到墨西哥 Manzanillo、智利 San Antonio、秘鲁 Callao 等南美西港口的自有舱位、船司、航程和操作要点。',
    quickAnswer: '青岛到墨西哥有直航：Manzanillo 走 KMTC 约 22 天、走 MSK 约 26 天，Lázaro Cárdenas 走 ONE 约 25 天。青岛到智利 San Antonio 直航约 40 天（CMA、COSCO、EMC、OOCL、万海），到秘鲁 Callao 直航约 35 天（HMM、ONE、阳明）。以上航程为参考，具体以船公司当期船期为准。',
    quickAnswer_en: 'From Qingdao there are direct services to Mexico: Manzanillo with KMTC in about 22 days or MSK in about 26 days, and Lázaro Cárdenas with ONE in about 25 days. San Antonio, Chile is about 40 days direct (CMA, COSCO, EMC, OOCL, Wan Hai) and Callao, Peru about 35 days direct (HMM, ONE, Yang Ming). Transit times are references; each sailing is confirmed with the carrier.',
    updatedAt: '2026-10-27',
    readTime: '5 min read',
    image: '/bryce-routes-command.webp',
    keywords: [
      '中国到墨西哥海运',
      'China to Mexico shipping',
      '青岛到 Manzanillo',
      '中国到智利海运',
      '中国到秘鲁海运',
      '南美西',
    ],
    highlights: [
      '青岛港南美西以 CMA、MSK、KMTC 等自有舱位为主，直接订舱更有保障。',
      '墨西哥 Manzanillo 走 KMTC 约 22 天、MSK 约 26 天，是南美西航程最快、最主力的市场。',
      '覆盖墨西哥、智利、秘鲁、厄瓜多尔、哥伦比亚等主要港口。',
    ],
    sections: [
      {
        heading: '1. 南美西自有舱位，墨西哥主力',
        body:
          '南美西以 CMA、MSK、KMTC 等自有舱位为主，属于自己家订舱窗口，在舱位和价格上更有保障。其中墨西哥是南美西最主力的市场，航程较快、需求量大。',
      },
      {
        heading: '2. 墨西哥主要港口和航程',
        body:
          '墨西哥覆盖 Manzanillo、Lazaro、Ensenada 等主要港口。Manzanillo 是太平洋侧最主要的门户港，航程较快。',
        bullets: [
          '墨西哥 Manzanillo：KMTC 直航约 22 天、MSK 直航约 26 天，南美西最快。',
          '覆盖 Manzanillo、Lazaro、Ensenada 等港口。',
        ],
      },
      {
        heading: '3. 智利、秘鲁、厄瓜多尔、哥伦比亚',
        body:
          '除墨西哥外，南美西还覆盖智利 San Antonio、Valparaiso、Iquique，秘鲁 Callao、Paita，厄瓜多尔 Guayaquil，哥伦比亚 Buenaventura 等港口。',
        bullets: [
          '智利 San Antonio：直航约 40 天；秘鲁 Callao：直航约 35 天。',
          '覆盖智利、秘鲁、厄瓜多尔、哥伦比亚主要港口。',
        ],
      },
      {
        heading: '4. 特殊货物和目的港费用',
        body:
          '化工品、建材等特殊货物可以操作，但需要提前确认单证和船司接受情况。南美西部分港口的目的港费用和清关要求差异较大，建议询价时一并确认，避免只看起运港价格。',
      },
    ],
    checklist: [
      '目的港（Manzanillo / San Antonio / Callao 等）和最终收货城市',
      '箱型、货重、品名，是否为化工品或建材',
      '是否接受中转以及可接受的航程天数',
      '是否有指定船司或目的港代理',
      '是否需要产地证、MSDS 或其他特殊单证',
    ],
    faqs: [
      {
        question: '墨西哥 Manzanillo 航程多久？',
        answer:
          'KMTC 直航约 22 天、MSK 直航约 26 天，是南美西航程最快的市场之一，具体以实际船期为准。',
      },
      {
        question: '南美西是自有舱位吗？',
        answer:
          '南美西以 CMA、MSK、KMTC 等自有舱位为主，属于自己家订舱窗口，在舱位保障和价格上更有优势。',
      },
    ],
    title_en: 'China to Mexico, Chile & Peru Ocean Freight: South America West Coast, Qingdao Own Space',
    metaTitle_en: 'China to Mexico, Chile & Peru Ocean Freight from Qingdao',
    description_en:
      'Qingdao own space, carriers, transit times and notes for South America West ports like Manzanillo, San Antonio and Callao.',
    highlights_en: [
      'The South America West coast is mainly our own space at Qingdao with CMA, MSK and KMTC — direct booking for better security.',
      'Mexico Manzanillo is about 22 days with KMTC or 26 days with MSK — the fastest and leading west-coast market.',
      'Covers major ports in Mexico, Chile, Peru, Ecuador and Colombia.',
    ],
    sections_en: [
      {
        heading: '1. Own west-coast space, Mexico as the lead market',
        body:
          'The west coast is mainly our own space with CMA, MSK and KMTC — our own booking window, with better space and rate security. Mexico is the leading west-coast market, with faster transit and strong demand.',
      },
      {
        heading: '2. Main Mexico ports and transit times',
        body:
          'Mexico covers Manzanillo, Lazaro and Ensenada. Manzanillo is the main Pacific-side gateway port with a faster transit.',
        bullets: [
          'Mexico Manzanillo: KMTC direct about 22 days or MSK direct about 26 days, fastest on the west coast.',
          'Covers Manzanillo, Lazaro and Ensenada.',
        ],
      },
      {
        heading: '3. Chile, Peru, Ecuador, Colombia',
        body:
          'Beyond Mexico, the west coast covers Chile San Antonio, Valparaiso, Iquique, Peru Callao, Paita, Ecuador Guayaquil and Colombia Buenaventura.',
        bullets: [
          'Chile San Antonio: direct about 40 days; Peru Callao: direct about 35 days.',
          'Covers major ports in Chile, Peru, Ecuador and Colombia.',
        ],
      },
      {
        heading: '4. Special cargo and destination charges',
        body:
          'Chemicals, building materials and special cargo can be handled, but confirm documents and carrier acceptance in advance. Destination charges and clearance at some west-coast ports vary, so confirm them when requesting a quote rather than looking at origin price alone.',
      },
    ],
    checklist_en: [
      'Destination port (Manzanillo / San Antonio / Callao etc.) and final receiving city',
      'Container type, weight, commodity, and whether chemical or building material',
      'Whether transshipment is acceptable and the acceptable transit days',
      'Any nominated carrier or destination agent',
      'Whether certificate of origin, MSDS or other special documents are needed',
    ],
    faqs_en: [
      {
        question: 'How long is transit to Mexico Manzanillo?',
        answer:
          'KMTC direct is about 22 days, or MSK direct about 26 days, one of the fastest west-coast markets; actual sailings may vary.',
      },
      {
        question: 'Is the west coast your own space?',
        answer:
          'The west coast is mainly our own space with CMA, MSK and KMTC — our own booking window — with an edge in space and rate.',
      },
    ],
    es: {
      title: 'Flete marítimo de China a México, Chile y Perú: Manzanillo, San Antonio y Callao',
      metaTitle: 'Flete marítimo de China a México, Chile y Perú desde Qingdao',
      description: 'Envíos FCL desde Qingdao a México, Chile y Perú con espacio propio en CMA, MSK y KMTC: puertos, tiempos de tránsito, documentos y cargos en destino.',
      quickAnswer: 'Desde Qingdao hay servicios directos a México: Manzanillo con KMTC en unos 22 días o con MSK en unos 26 días, y Lázaro Cárdenas con ONE en unos 25 días. San Antonio (Chile) tiene servicio directo en unos 40 días (CMA, COSCO, EMC, OOCL, Wan Hai) y Callao (Perú) en unos 35 días (HMM, ONE, Yang Ming). Los tiempos son referencias; cada salida se confirma con la naviera.',
      keywords: ['flete marítimo China México', 'importar de China a México', 'Qingdao a Manzanillo', 'flete marítimo China Chile', 'flete marítimo China Perú', 'contenedor China Manzanillo'],
      highlights: [
        'Salidas desde Qingdao con espacio propio contratado en CMA, MSK y KMTC; también podemos coordinar carga con origen en Lianyungang.',
        'Manzanillo es la ruta más rápida de la costa oeste: unos 22 días con KMTC o 26 días con MSK, en servicio directo.',
        'Cobertura en México, Centroamérica y la costa oeste de Sudamérica: Chile, Perú, Ecuador y Colombia.',
      ],
      sections: [
        {
          heading: '1. Espacio propio en Qingdao, no reventa',
          body: 'Trabajamos la costa oeste de Latinoamérica con contratos y ventanas de reserva propias en Qingdao con CMA, MSK y KMTC. Al reservar directamente, y no con espacio revendido, tenemos más control sobre la disponibilidad, la tarifa y la estabilidad del embarque en temporada alta, cuando las navieras suelen dejar carga en puerto o cancelar escalas.',
        },
        {
          heading: '2. México: Manzanillo, Lázaro Cárdenas y Ensenada',
          body: 'Manzanillo es el principal puerto del Pacífico mexicano y la opción más usada para carga con destino a Ciudad de México, Guadalajara y el Bajío. Lázaro Cárdenas es una alternativa para el centro del país, y Ensenada atiende el noroeste.',
          bullets: [
            'Manzanillo: servicio directo desde Qingdao, unos 22 días con KMTC o 26 días con MSK.',
            'Lázaro Cárdenas y Ensenada: según la naviera y la salida disponible.',
            'Confirme con su agente aduanal el puerto de entrada y el destino final antes de reservar.',
          ],
          links: [{ label: 'Ver la guía completa de Manzanillo con inspección en fábrica →', href: '/es/routes/china-to-manzanillo-shipping' }],
        },
        {
          heading: '3. Chile, Perú y el resto de la costa oeste',
          body: 'Además de México, cubrimos San Antonio y Lirquén en Chile, Callao y Chancay en Perú, Guayaquil y Posorja en Ecuador y Buenaventura en Colombia. Para Centroamérica atendemos Puerto Quetzal, Acajutla, Corinto, Caldera y Balboa.',
          bullets: [
            'Chile (San Antonio): servicio directo en unos 40 días; Perú (Callao): servicio directo en unos 35 días.',
            'Los tiempos indicados son referencias; cada salida se confirma con la naviera.',
          ],
        },
        {
          heading: '4. Documentos y carga especial',
          body: 'Podemos manejar materiales de construcción, maquinaria y químicos, pero la aceptación de la naviera y los documentos se confirman antes de reservar. Para mercancía peligrosa se necesita la hoja de datos de seguridad (SDS/MSDS), el número UN y la clase. Revise también si su producto requiere certificado de origen u otros permisos de importación en su país.',
        },
        {
          heading: '5. Cargos en destino y tiempo libre',
          body: 'El costo total no es solo el flete. Los cargos en puerto de destino, el tiempo libre de contenedor, el despacho aduanal y el transporte terrestre varían según el puerto y el agente. Al pedir una cotización, confirme qué incluye y qué paga cada parte según el Incoterm acordado.',
        },
      ],
      checklist: [
        'Puerto de destino y ciudad de entrega final',
        'Tipo y cantidad de contenedores, peso bruto y volumen',
        'Descripción de la mercancía y si es carga especial o peligrosa',
        'Fecha estimada de carga lista en China e Incoterm de compra',
        'Si necesita recolección en fábrica, despacho de exportación o servicios en destino',
      ],
      faqs: [
        {
          question: '¿Cuánto tarda un contenedor de China a Manzanillo?',
          answer: 'Desde Qingdao, servicio directo en unos 22 días con KMTC o 26 días con MSK, de puerto a puerto. Al tiempo total hay que sumar la recolección en fábrica, el despacho aduanal y el transporte terrestre en México. Cada salida se confirma con la naviera.',
        },
        {
          question: '¿Su espacio es propio o revendido?',
          answer: 'Tenemos contratos y ventanas de reserva propias en Qingdao con CMA, MSK y KMTC para la costa oeste de Latinoamérica, lo que da más estabilidad de espacio y tarifa en temporada alta.',
        },
        {
          question: '¿Puedo escribirles en español?',
          answer: 'Sí. Envíenos el puerto de destino, la mercancía, el peso, el volumen y la fecha de carga, en español o en inglés, y le responderemos con las opciones disponibles.',
        },
      ],
    },
  },
  {
    slug: 'china-to-manzanillo-shipping',
    section: 'routes',
    title: '中国到曼萨尼约海运：青岛、宁波出运，含验厂和装柜视频',
    description: '青岛、宁波到墨西哥曼萨尼约（Manzanillo）整柜海运，KMTC、MSK，约 20–26 天；可代买家到工厂看货、核对数量、拍照并录制装柜视频。',
    quickAnswer: '青岛到曼萨尼约有直航，KMTC 约 22 天、MSK 约 26 天；宁波到曼萨尼约走 MSK，约 20 天。除了海运，我们可以到供应商工厂看货、核对数量、拍照并录制装柜视频。首次合作订舱，第一次验厂和监装免费，之后按工厂距离单独报价。以上航程为参考，以船公司当期船期为准。',
    updatedAt: '2026-11-12',
    readTime: '5 min read',
    image: '/bryce-routes-command.webp',
    keywords: ['中国到曼萨尼约海运', '青岛到曼萨尼约', '宁波到曼萨尼约', '工厂看货', '装柜视频', 'China to Manzanillo ocean freight', 'Qingdao to Manzanillo', 'Ningbo to Manzanillo'],
    highlights: ['青岛到曼萨尼约有直航：KMTC 约 22 天、MSK 约 26 天；宁波出运走 MSK，约 20 天。', '可到中国任何城市的供应商工厂看货、核对数量并录制装柜视频；向我们订舱，首次验厂免费。', '青岛到曼萨尼约使用 KMTC 合约舱位。'],
    sections: [
      {
        heading: '1. 到曼萨尼约的走法和航程',
        body: '曼萨尼约是我们到墨西哥的主要航线。青岛出运使用 KMTC 合约舱位，也可安排 MSK 从青岛或宁波出运，按供应商所在地和货好日期选择。',
        bullets: ['青岛 → 曼萨尼约：KMTC 直航，约 22 天。', '青岛 → 曼萨尼约：MSK 直航，约 26 天。', '宁波 → 曼萨尼约：MSK，约 20 天。', '也可以安排工厂提货和出口报关。'],
      },
      {
        heading: '2. 您在中国的眼睛：工厂看货和装柜视频',
        body: '远程采购的一个风险，是付尾款前没能亲眼看到货物。集装箱离开前，我们可以到中国任何城市的供应商工厂看货。',
        bullets: ['查看货物外观和包装。', '按采购订单核对数量。', '拍摄货物、标签和集装箱照片。', '录制装柜过程和封条视频。'],
        afterBullets: '向我们订舱，第一次验厂免费。追加上门检查按工厂距离单独报价。',
      },
      {
        heading: '3. 经常承运的货物',
        body: '我们主要服务整柜大宗普货进口商，常见货物包括化工品、食品添加剂、胶合板和板材、建筑材料。危险品须在订舱前确认船公司是否接受，并提供 SDS/MSDS、UN 编号和危险品类别。',
      },
    ],
    checklist: ['品名及 HS 编码（如有）', '中国供应商所在城市', '箱型、箱量和毛重', '预计货好日期', '是否需要工厂看货和装柜视频'],
    faqs: [
      {
        question: '中国到曼萨尼约海运要多久？',
        answer: '青岛出运，KMTC 约 22 天、MSK 约 26 天；宁波出运，MSK 约 20 天。每个航次均以船公司当期船期为准。',
      },
      {
        question: '工厂看货怎么收费？',
        answer: '向我们订舱，第一次验厂免费。追加上门检查按工厂距离单独报价。',
      },
      {
        question: '看货后会收到哪些资料？',
        answer: '通过 WhatsApp 或邮件发送货物和包装照片、数量核对结果，以及装柜过程和封条视频。',
      },
    ],
    title_en: 'China to Manzanillo Ocean Freight: Qingdao & Ningbo, with Factory Inspection and Loading Video',
    metaTitle_en: 'China to Manzanillo Ocean Freight: Qingdao & Ningbo',
    description_en: 'FCL from Qingdao and Ningbo to Manzanillo in about 20–26 days with KMTC and MSK. We visit your supplier\'s factory, verify quantities and film the container loading.',
    quickAnswer_en: 'Qingdao to Manzanillo is direct with KMTC in about 22 days or MSK in about 26 days; Ningbo to Manzanillo takes about 20 days with MSK. Beyond freight, we visit your supplier\'s factory in China, check the goods, verify quantities and send photos and a video of the container loading. The first inspection is free when you book your shipment with us. Transit times are references; each sailing is confirmed with the carrier.',
    highlights_en: ['Qingdao → Manzanillo direct: about 22 days with KMTC or 26 days with MSK; Ningbo → Manzanillo: about 20 days with MSK.', 'Factory inspection and loading video in any city in China; the first inspection is free when you book with us.', 'Contracted space with KMTC in Qingdao for the Manzanillo route.'],
    sections_en: [
      {
        heading: '1. Routes and transit times to Manzanillo',
        body: 'Manzanillo is our main route to Mexico. We book contracted space with KMTC from Qingdao and also work with MSK from Qingdao and Ningbo, depending on your supplier location and cargo-ready date.',
        bullets: ['Qingdao → Manzanillo: direct, about 22 days with KMTC.', 'Qingdao → Manzanillo: direct, about 26 days with MSK.', 'Ningbo → Manzanillo: about 20 days with MSK.', 'We can also arrange factory pickup and export customs clearance in China.'],
      },
      {
        heading: '2. Your eyes in China: factory inspection and loading video',
        body: 'Buying remotely carries a risk: not seeing the goods before paying the balance. We can visit your supplier\'s factory, in any city in China, before the container leaves.',
        bullets: ['Visual checks of the goods and packaging.', 'Quantity checks against your purchase order.', 'Photos of the goods, labels and container.', 'Video of the container loading and seal.'],
        afterBullets: 'The first inspection is free when you book your shipment with us. Additional visits are quoted according to the distance to the factory.',
      },
      {
        heading: '3. Cargo we handle regularly',
        body: 'We mainly work with importers of general cargo shipped in full containers: chemicals, food additives, plywood and boards, and building materials. For dangerous goods, carrier acceptance is confirmed before booking and we need the safety data sheet (SDS/MSDS), UN number and hazard class.',
      },
    ],
    checklist_en: ['Product and HS code, if available', 'Supplier city in China', 'Container type and quantity, gross weight', 'Estimated cargo-ready date', 'Whether you would like factory inspection and a loading video'],
    faqs_en: [
      {
        question: 'How long does a container from China to Manzanillo take?',
        answer: 'From Qingdao, about 22 days with KMTC or 26 days with MSK; from Ningbo, about 20 days with MSK. Each sailing is confirmed with the carrier.',
      },
      {
        question: 'How much does the factory inspection cost?',
        answer: 'The first inspection is free when you book your shipment with us. Additional visits are quoted according to the distance to the factory.',
      },
      {
        question: 'What will I receive after the inspection?',
        answer: 'Photos of the goods and packaging, quantity checks, and a video of the container loading and seal, sent by WhatsApp or email.',
      },
    ],
    es: {
      title: 'Flete marítimo de China a Manzanillo: Qingdao y Ningbo, con inspección en fábrica y video de carga',
      metaTitle: 'Flete marítimo China a Manzanillo: Qingdao y Ningbo',
      description: 'Envíos FCL de Qingdao y Ningbo a Manzanillo en unos 20–26 días con KMTC y MSK. Visitamos la fábrica de su proveedor, verificamos cantidades y grabamos la carga del contenedor.',
      quickAnswer: 'De Qingdao a Manzanillo hay servicio directo con KMTC en unos 22 días y con MSK en unos 26 días; de Ningbo, con MSK en unos 20 días. Además del flete, visitamos la fábrica de su proveedor en China, revisamos la mercancía, verificamos cantidades y le enviamos fotos y video de la carga del contenedor. La primera inspección es sin costo al reservar su embarque con nosotros. Los tiempos son referencias; cada salida se confirma con la naviera.',
      keywords: ['flete marítimo China Manzanillo', 'Qingdao a Manzanillo', 'Ningbo a Manzanillo', 'inspección en fábrica China', 'importar de China a México', 'agente de carga China México'],
      highlights: ['Qingdao → Manzanillo directo: unos 22 días con KMTC o 26 días con MSK; Ningbo → Manzanillo: unos 20 días con MSK.', 'Inspección en fábrica y video de carga en cualquier ciudad de China; la primera es sin costo al reservar con nosotros.', 'Espacio contratado con KMTC en Qingdao para la ruta a Manzanillo.'],
      sections: [
        {
          heading: '1. Rutas y tiempos a Manzanillo',
          body: 'Manzanillo es nuestra ruta principal a México. Reservamos con espacio contratado con KMTC desde Qingdao y también trabajamos con MSK desde Qingdao y Ningbo, según dónde esté su proveedor y la fecha de carga.',
          bullets: ['Qingdao → Manzanillo: directo, unos 22 días con KMTC.', 'Qingdao → Manzanillo: directo, unos 26 días con MSK.', 'Ningbo → Manzanillo: unos 20 días con MSK.', 'También coordinamos la recolección en fábrica y el despacho de exportación en China.'],
        },
        {
          heading: '2. Sus ojos en China: inspección en fábrica y video de carga',
          body: 'Comprar a distancia tiene un riesgo: no ver la mercancía antes de pagar el saldo. Podemos ir a la fábrica de su proveedor, en cualquier ciudad de China, antes de que el contenedor salga.',
          bullets: ['Revisión visual de la mercancía y del empaque.', 'Verificación de cantidades contra su orden de compra.', 'Fotos de la mercancía, las etiquetas y el contenedor.', 'Video de la carga del contenedor y del sello.'],
          afterBullets: 'La primera inspección es sin costo cuando reserva su embarque con nosotros. Para visitas adicionales, cotizamos según la distancia a la fábrica.',
        },
        {
          heading: '3. Carga que movemos con frecuencia',
          body: 'Trabajamos sobre todo con importadores de carga general a granel en contenedor: productos químicos, aditivos alimentarios, triplay y tableros, y materiales de construcción. Para mercancía peligrosa confirmamos la aceptación de la naviera antes de reservar y necesitamos la hoja de seguridad (SDS/MSDS), el número UN y la clase.',
        },
      ],
      checklist: ['Producto y código arancelario si lo tiene', 'Ciudad del proveedor en China', 'Tipo y cantidad de contenedores, peso bruto', 'Fecha estimada de carga lista', 'Si desea inspección en fábrica y video de carga'],
      faqs: [
        {
          question: '¿Cuánto tarda un contenedor de China a Manzanillo?',
          answer: 'Desde Qingdao, unos 22 días con KMTC o 26 días con MSK; desde Ningbo, unos 20 días con MSK. Cada salida se confirma con la naviera.',
        },
        {
          question: '¿Cuánto cuesta la inspección en fábrica?',
          answer: 'La primera inspección es sin costo cuando reserva su embarque con nosotros. Las visitas adicionales se cotizan según la distancia a la fábrica.',
        },
        {
          question: '¿Qué recibo después de la inspección?',
          answer: 'Fotos de la mercancía y del empaque, la verificación de cantidades y un video de la carga del contenedor y del sello, enviados por WhatsApp o correo.',
        },
      ],
    },
  },
  {
    slug: 'china-to-central-america-caribbean-shipping',
    relatedSlugs: [
      'china-to-central-america-caribbean-shipping',
      'china-to-mexico-chile-peru-shipping',
      'china-to-south-america-shipping',
      'china-to-brazil-argentina-shipping',
    ],
    section: 'routes',
    title: '中国到中美洲和加勒比海运：巴拿马、危地马拉、哥斯达黎加、牙买加、多米尼加',
    description: '青岛、连云港出口到中美洲太平洋岸和加勒比的走法、中转港、航程参考、船司和订舱注意事项，覆盖巴拿马、危地马拉、洪都拉斯、哥斯达黎加、牙买加、多米尼加等。',
    quickAnswer: '中美洲太平洋岸（危地马拉 Puerto Quetzal、萨尔瓦多 Acajutla、尼加拉瓜 Corinto、哥斯达黎加 Caldera、巴拿马 Balboa）一般需要中转，经墨西哥 Lázaro Cárdenas、哥伦比亚 Buenaventura 或巴拿马 Balboa，约 30–40 天。加勒比和中美洲大西洋岸可安排 MSC、CMA、COSCO、ONE、EMC、YML、OOCL 等船司，经巴拿马运河或 Colón、Cartagena、Kingston、Caucedo 等枢纽港中转，航程按航次确认。重的 20 尺柜可能有超重费，波多黎各 San Juan 需提前申报 AMS。以上为参考，以船公司当期船期为准。',
    quickAnswer_en: 'The Pacific coast of Central America (Puerto Quetzal, Acajutla, Corinto, Caldera, Balboa) usually involves transshipment via Lázaro Cárdenas, Buenaventura or Balboa, about 30–40 days. The Caribbean and the Atlantic side can be served by MSC, CMA, COSCO, ONE, EMC, YML and OOCL via the Panama Canal or hubs such as Colón, Cartagena, Kingston and Caucedo, with transit confirmed per sailing. Heavy 20-foot containers may carry an overweight surcharge, and San Juan, Puerto Rico requires an AMS filing. These are references; each sailing is confirmed with the carrier.',
    updatedAt: '2026-11-05',
    readTime: '6 min read',
    image: '/bryce-routes-command.webp',
    keywords: ['中国到中美洲海运', '中国到加勒比海运', '青岛到巴拿马', '中国到牙买加海运', '中国到多米尼加海运', 'Central America shipping'],
    highlights: [
      '中美洲分太平洋岸和加勒比岸，同一个国家两边港口走法不同，订舱前先确认收货人要到哪一边。',
      '太平洋岸以中转为主，航程约 30–40 天，以船公司确认为准。',
      '加勒比方向有 MSC、CMA、COSCO、ONE、EMC、YML、OOCL 等多家船司可选，经巴拿马运河或枢纽港中转。',
    ],
    sections: [
      { heading: '1. 两条海岸，走法不同', body: '中美洲分太平洋岸和加勒比（大西洋）岸，同一个国家两边的港口走法完全不同。比如危地马拉有太平洋的 Puerto Quetzal，也有加勒比的 Santo Tomás de Castilla 和 Puerto Barrios；哥斯达黎加有太平洋的 Caldera，也有加勒比的 Moín。订舱前先确认收货人要到哪一边的港口，再选船司和航线。' },
      { heading: '2. 太平洋岸：危地马拉、萨尔瓦多、尼加拉瓜、哥斯达黎加、巴拿马', body: '太平洋岸港口以中转为主：CMA 经墨西哥 Lázaro Cárdenas 或哥伦比亚 Buenaventura 接区域支线，Maersk 经巴拿马 Balboa 中转。整体航程约 30–40 天，具体以船公司当期船期为准。', bullets: ['Puerto Quetzal（危地马拉）、Acajutla（萨尔瓦多）：常见经 Lázaro Cárdenas 中转。', 'Corinto（尼加拉瓜）、Caldera（哥斯达黎加）：常见经 Buenaventura 或 Balboa 中转。', 'Balboa、Rodman（巴拿马）：可安排直达或中转。'] },
      { heading: '3. 加勒比和中美洲大西洋岸', body: '加勒比方向经巴拿马运河，或在 Colón、Cartagena、Kingston、Caucedo 等枢纽港中转。MSC、CMA、COSCO、ONE、EMC、YML、OOCL 等船司都可以安排，覆盖港口很多，航程按航次和中转港确认。', bullets: ['巴拿马 Colón / Cristóbal / Manzanillo，哥伦比亚 Cartagena、Barranquilla、Santa Marta。', '牙买加 Kingston，多米尼加 Caucedo、Río Haina，海地 Port-au-Prince，波多黎各 San Juan。', '洪都拉斯 Puerto Cortés，危地马拉 Santo Tomás / Puerto Barrios，哥斯达黎加 Moín，伯利兹 Belize City。', '特立尼达 Port of Spain / Point Lisas，巴巴多斯 Bridgetown，库拉索、阿鲁巴，圭亚那 Georgetown，苏里南 Paramaribo。', '墨西哥湾 Veracruz、Altamira、Progreso，委内瑞拉 Puerto Cabello、La Guaira。'] },
      { heading: '4. 订舱时容易漏的几点', body: '中美洲和加勒比航线船期变动较多，几个细节最好在询价阶段就说清楚。', bullets: ['小柜重货：部分船司对重的 20 尺柜收超重附加费，个别航次还有限重，订舱前请提供准确毛重。', '波多黎各 San Juan 属美国关境，需要提前申报 AMS。', '加勒比部分航次常有延误和舱位紧张，旺季建议提早订舱。', '危险品、化工品需要提前确认船司是否接受，并准备 MSDS、UN 号和危规等级。'] },
      { heading: '5. 目的港费用和免费期', body: '总成本不只是海运费。目的港费用、免堆免柜天数、清关和内陆运输，在不同港口和代理之间差别很大。询价时请确认报价包含哪些项目，以及按贸易条款由谁承担。' },
    ],
    checklist: ['目的港和最终收货城市，太平洋岸还是加勒比岸', '箱型、箱量、毛重（小柜请写准确毛重）和体积', '品名，是否为危险品、化工品或特殊货', '预计出货时间和贸易条款', '是否需要拖车、报关或目的港服务'],
    faqs: [
      { question: '中国到中美洲太平洋岸要多久？', answer: '大多需要中转，整体约 30–40 天，具体以船公司当期船期为准。' },
      { question: '加勒比哪些港口可以走？', answer: '常见有 Colón、Cartagena、Kingston、Caucedo、Río Haina、Puerto Cortés、Santo Tomás、Moín、San Juan、Port of Spain 等，覆盖面较广，具体港口可以单独询价确认。' },
      { question: '可以用西班牙语联系吗？', answer: '可以，用西班牙语或英文发送目的港、货物、重量、体积和出货时间即可。' },
    ],
    title_en: 'China to Central America & Caribbean Ocean Freight: Panama, Guatemala, Costa Rica, Jamaica & Dominican Republic',
    metaTitle_en: 'China to Central America & Caribbean Ocean Freight',
    description_en: 'Routing, transshipment hubs, transit references, carriers and booking notes for exports from Qingdao and Lianyungang to Central America and the Caribbean.',
    highlights_en: [
      'Central America has a Pacific coast and a Caribbean coast, and the routing differs by side, so confirm which port the consignee needs before booking.',
      'Pacific-coast ports are mostly transshipment, about 30–40 days, subject to the carrier schedule.',
      'For the Caribbean, MSC, CMA, COSCO, ONE, EMC, YML and OOCL are all available, via the Panama Canal or transshipment hubs.',
    ],
    sections_en: [
      { heading: '1. Two coasts, two different routings', body: 'Central America has a Pacific coast and a Caribbean (Atlantic) coast, and ports on each side of the same country are served very differently. Guatemala has Puerto Quetzal on the Pacific and Santo Tomás de Castilla and Puerto Barrios on the Caribbean; Costa Rica has Caldera on the Pacific and Moín on the Caribbean. Confirm which side the consignee needs before choosing the carrier and routing.' },
      { heading: '2. Pacific coast: Guatemala, El Salvador, Nicaragua, Costa Rica, Panama', body: 'Pacific-coast ports are mostly served by transshipment: CMA connects via Lázaro Cárdenas in Mexico or Buenaventura in Colombia to regional feeders, and Maersk transships at Balboa, Panama. Overall transit is about 30–40 days, subject to the current carrier schedule.', bullets: ['Puerto Quetzal (Guatemala), Acajutla (El Salvador): commonly via Lázaro Cárdenas.', 'Corinto (Nicaragua), Caldera (Costa Rica): commonly via Buenaventura or Balboa.', 'Balboa and Rodman (Panama): direct or transshipment.'] },
      { heading: '3. Caribbean and the Atlantic side of Central America', body: 'Caribbean cargo moves through the Panama Canal or transships at hubs such as Colón, Cartagena, Kingston and Caucedo. MSC, CMA, COSCO, ONE, EMC, YML and OOCL can all be arranged, with wide port coverage; transit is confirmed per sailing and transshipment hub.', bullets: ['Panama: Colón / Cristóbal / Manzanillo; Colombia: Cartagena, Barranquilla, Santa Marta.', 'Jamaica: Kingston; Dominican Republic: Caucedo, Río Haina; Haiti: Port-au-Prince; Puerto Rico: San Juan.', 'Honduras: Puerto Cortés; Guatemala: Santo Tomás / Puerto Barrios; Costa Rica: Moín; Belize City.', 'Trinidad: Port of Spain / Point Lisas; Barbados: Bridgetown; Curaçao, Aruba; Guyana: Georgetown; Suriname: Paramaribo.', 'Gulf of Mexico: Veracruz, Altamira, Progreso; Venezuela: Puerto Cabello, La Guaira.'] },
      { heading: '4. Details that are easy to miss when booking', body: 'Schedules on Central America and Caribbean lanes change often, so settle these details at the quotation stage.', bullets: ['Heavy small containers: some carriers charge an overweight surcharge on heavy 20-foot containers and some sailings have weight limits, so give the exact gross weight before booking.', 'San Juan, Puerto Rico is US customs territory and requires an AMS filing in advance.', 'Some Caribbean sailings are often delayed or tight on space, so book early in peak season.', 'Dangerous goods and chemicals need carrier acceptance confirmed in advance, with the SDS/MSDS, UN number and class.'] },
      { heading: '5. Destination charges and free time', body: 'Total cost is more than ocean freight. Destination charges, free time, customs clearance and inland delivery vary widely by port and agent. When requesting a quote, confirm what is included and who pays what under the agreed Incoterm.' },
    ],
    checklist_en: ['Destination port and final delivery city, Pacific or Caribbean side', 'Container type and quantity, gross weight (exact for 20-foot containers) and volume', 'Commodity, and whether it is dangerous, chemical or special cargo', 'Expected ready date and Incoterm', 'Whether trucking, customs or destination services are needed'],
    faqs_en: [
      { question: 'How long does shipping from China to the Pacific coast of Central America take?', answer: 'Most routings involve transshipment, about 30–40 days overall, subject to the current carrier schedule.' },
      { question: 'Which Caribbean ports can you serve?', answer: 'Common ports include Colón, Cartagena, Kingston, Caucedo, Río Haina, Puerto Cortés, Santo Tomás, Moín, San Juan and Port of Spain. Coverage is wide; send your port for a quote.' },
      { question: 'Can I contact you in Spanish?', answer: 'Yes. Send the destination port, cargo, weight, volume and ready date in Spanish or English.' },
    ],
    es: {
      title: 'Flete marítimo de China a Centroamérica y el Caribe: Panamá, Guatemala, Costa Rica, Jamaica y República Dominicana',
      metaTitle: 'Flete marítimo de China a Centroamérica y el Caribe',
      description: 'Rutas, puertos de transbordo, tiempos de tránsito de referencia, navieras y recomendaciones de reserva para envíos desde Qingdao y Lianyungang a Centroamérica y el Caribe.',
      quickAnswer: 'La costa del Pacífico de Centroamérica (Puerto Quetzal, Acajutla, Corinto, Caldera, Balboa) suele llevar transbordo vía Lázaro Cárdenas, Buenaventura o Balboa, en unos 30–40 días. El Caribe y la costa atlántica se atienden con MSC, CMA, COSCO, ONE, EMC, YML y OOCL, vía el Canal de Panamá o puertos como Colón, Cartagena, Kingston y Caucedo, con tránsito confirmado por salida. Los contenedores de 20 pies pesados pueden tener recargo por sobrepeso, y San Juan (Puerto Rico) requiere declaración AMS. Son referencias; cada salida se confirma con la naviera.',
      keywords: ['flete marítimo China Centroamérica', 'flete marítimo China Caribe', 'importar de China a Guatemala', 'flete China Panamá', 'contenedor China República Dominicana', 'flete marítimo China Costa Rica'],
      highlights: [
        'Centroamérica tiene costa del Pacífico y costa del Caribe, y la ruta cambia según el lado; confirme a qué puerto necesita llegar el consignatario antes de reservar.',
        'Los puertos del Pacífico se atienden sobre todo con transbordo, en unos 30–40 días, según el itinerario vigente de la naviera.',
        'Para el Caribe trabajamos con MSC, CMA, COSCO, ONE, EMC, YML y OOCL, vía el Canal de Panamá o puertos de transbordo.',
      ],
      sections: [
        { heading: '1. Dos costas, dos rutas distintas', body: 'Centroamérica tiene costa del Pacífico y costa del Caribe (Atlántico), y los puertos de cada lado de un mismo país se atienden de forma muy distinta. Guatemala tiene Puerto Quetzal en el Pacífico y Santo Tomás de Castilla y Puerto Barrios en el Caribe; Costa Rica tiene Caldera en el Pacífico y Moín en el Caribe. Confirme a qué lado necesita llegar el consignatario antes de elegir naviera y ruta.' },
        { heading: '2. Costa del Pacífico: Guatemala, El Salvador, Nicaragua, Costa Rica y Panamá', body: 'Los puertos del Pacífico se atienden principalmente con transbordo: CMA conecta vía Lázaro Cárdenas (México) o Buenaventura (Colombia) con servicios regionales, y Maersk transborda en Balboa, Panamá. El tránsito total es de unos 30–40 días, sujeto al itinerario vigente de la naviera.', bullets: ['Puerto Quetzal (Guatemala) y Acajutla (El Salvador): normalmente vía Lázaro Cárdenas.', 'Corinto (Nicaragua) y Caldera (Costa Rica): normalmente vía Buenaventura o Balboa.', 'Balboa y Rodman (Panamá): servicio directo o con transbordo.'] },
        { heading: '3. El Caribe y la costa atlántica de Centroamérica', body: 'La carga al Caribe pasa por el Canal de Panamá o se transborda en puertos como Colón, Cartagena, Kingston y Caucedo. Podemos reservar con MSC, CMA, COSCO, ONE, EMC, YML y OOCL, con amplia cobertura de puertos; el tránsito se confirma según la salida y el puerto de transbordo.', bullets: ['Panamá: Colón / Cristóbal / Manzanillo; Colombia: Cartagena, Barranquilla y Santa Marta.', 'Jamaica: Kingston; República Dominicana: Caucedo y Río Haina; Haití: Puerto Príncipe; Puerto Rico: San Juan.', 'Honduras: Puerto Cortés; Guatemala: Santo Tomás / Puerto Barrios; Costa Rica: Moín; Belice: Belize City.', 'Trinidad y Tobago: Port of Spain / Point Lisas; Barbados: Bridgetown; Curazao, Aruba; Guyana: Georgetown; Surinam: Paramaribo.', 'Golfo de México: Veracruz, Altamira y Progreso; Venezuela: Puerto Cabello y La Guaira.'] },
        { heading: '4. Detalles que conviene aclarar al reservar', body: 'Los itinerarios hacia Centroamérica y el Caribe cambian con frecuencia, así que es mejor aclarar estos puntos al cotizar.', bullets: ['Contenedores de 20 pies pesados: algunas navieras cobran recargo por sobrepeso y ciertas salidas tienen límite de peso; indique el peso bruto exacto antes de reservar.', 'San Juan, Puerto Rico, es territorio aduanero de EE. UU. y requiere declaración AMS anticipada.', 'Algunas salidas al Caribe suelen retrasarse o ir con poco espacio; en temporada alta reserve con anticipación.', 'Para mercancía peligrosa o químicos, la aceptación de la naviera se confirma antes de reservar, con la hoja de seguridad (SDS/MSDS), el número UN y la clase.'] },
        { heading: '5. Cargos en destino y tiempo libre', body: 'El costo total no es solo el flete. Los cargos en destino, el tiempo libre de contenedor, el despacho aduanal y el transporte terrestre varían mucho según el puerto y el agente. Al pedir una cotización, confirme qué incluye y qué paga cada parte según el Incoterm acordado.' },
      ],
      checklist: ['Puerto de destino y ciudad de entrega final, lado Pacífico o Caribe', 'Tipo y cantidad de contenedores, peso bruto (exacto en contenedores de 20 pies) y volumen', 'Descripción de la mercancía y si es peligrosa, química o especial', 'Fecha estimada de carga lista e Incoterm', 'Si necesita transporte, despacho aduanal o servicios en destino'],
      faqs: [
        { question: '¿Cuánto tarda un envío de China a la costa del Pacífico de Centroamérica?', answer: 'La mayoría de las rutas llevan transbordo; el tránsito total es de unos 30–40 días, según el itinerario vigente de la naviera.' },
        { question: '¿A qué puertos del Caribe pueden enviar?', answer: 'Entre los más comunes están Colón, Cartagena, Kingston, Caucedo, Río Haina, Puerto Cortés, Santo Tomás, Moín, San Juan y Port of Spain. La cobertura es amplia; envíenos su puerto para cotizar.' },
        { question: '¿Puedo escribirles en español?', answer: 'Sí. Envíenos el puerto de destino, la mercancía, el peso, el volumen y la fecha de carga, en español o en inglés.' },
      ],
    },
  },
  {
    slug: 'china-to-vietnam-shipping',
    section: 'routes',
    title: '连云港到越南海运：胡志明、海防、岘港，含直航与中转方案',
    description:
      '连云港出口到越南胡志明 Ho Chi Minh、海防 Hai Phong、岘港 Da Nang 的直航与中转方案、航程、船司和目的港要点。',
    quickAnswer: '连云港到越南有直航：海防（Hai Phong）走 COSCO 每周直航，约 13 天；海安集运（Hai An）两周一班直航，约 5 天；胡志明（Ho Chi Minh）走 CNC 每周直航，约 8 天。以上航程为参考，具体以船公司当期船期为准。',
    quickAnswer_en: 'Lianyungang has direct services to Vietnam: Hai Phong with COSCO weekly, about 13 days, or with Hai An every two weeks, about 5 days; Ho Chi Minh with CNC weekly, about 8 days. Transit times are references; each sailing is confirmed with the carrier.',
    updatedAt: '2026-10-27',
    readTime: '5 min read',
    image: '/bryce-routes-command.webp',
    keywords: [
      '连云港到越南海运',
      'China to Vietnam shipping',
      '连云港到胡志明',
      'Ho Chi Minh shipping',
      '海防海运',
      'Hai Phong shipping',
    ],
    highlights: [
      '海防 Hai Phong 有直航方案，COSCO、海安集运等直航班次，航程较短。',
      '胡志明 Ho Chi Minh 走 CNC 每周直航，约 8 天，岘港也可安排，覆盖越南南北主要港口。',
      'COSCO、海安集运、CNC 等船司资源，直航和中转方案可按时效和成本选择。',
    ],
    sections: [
      {
        heading: '1. 越南主要港口和走法',
        body:
          '越南出口主要涉及北部海防（Hai Phong）、南部胡志明（Ho Chi Minh）和中部岘港（Da Nang）。北部海防有 COSCO、海安集运直航方案，南部胡志明走 CNC 每周直航约 8 天，具体走法要结合收货人所在区域、时效要求和成本。',
        bullets: [
          '海防 Hai Phong：有直航，COSCO 约 13 天、海安集运（Hai An）约 5 天直航。',
          '胡志明 Ho Chi Minh：CNC 每周直航，约 8 天。',
          '岘港 Da Nang：可经中转安排。',
        ],
      },
      {
        heading: '2. 直航还是中转怎么选',
        body:
          '海防有直航班次，时效稳定，适合对时间敏感的货物；胡志明走 CNC 每周直航约 8 天，其他港口按航次确认。COSCO、海安集运、CNC 等船司资源都可以安排，建议根据出货时间和目的港确认最合适的方案。',
      },
      {
        heading: '3. 目的港费用和滞箱期',
        body:
          '越南部分港口的目的港费用、滞箱和滞港免费期差异较大，例如海防常见 7 天滞箱加 14 天滞港期。询价时建议一并确认目的港费用和免费期，避免只看起运港价格。',
      },
    ],
    checklist: [
      '目的港（Ho Chi Minh / Hai Phong / Da Nang 等）和最终收货城市',
      '箱型、货重、品名，是否为特殊货物',
      '对时效的要求（是否需要直航）',
      '是否接受中转以及可接受的航程天数',
      '是否需要产地证或其他特殊单证',
    ],
    faqs: [
      {
        question: '连云港到海防有直航吗？',
        answer:
          '有，海防有直航方案，例如 COSCO 约 13 天、海安集运约 5 天直航，具体以实际船期为准。',
      },
      {
        question: '胡志明怎么走？',
        answer:
          '胡志明走 CNC 每周直航，约 8 天，可根据出货时间选择合适班次。',
      },
    ],
    title_en: 'Lianyungang to Vietnam Ocean Freight: Ho Chi Minh, Hai Phong & Da Nang, Direct and Transshipment',
    metaTitle_en: 'Lianyungang to Vietnam Ocean Freight: Ho Chi Minh & Hai Phong',
    description_en:
      'Direct and transshipment options, transit times, carriers and destination notes for Lianyungang exports to Ho Chi Minh, Hai Phong and Da Nang in Vietnam.',
    highlights_en: [
      'Hai Phong has direct options with COSCO and Hai An, offering shorter transit.',
      'Ho Chi Minh is direct with CNC weekly, about 8 days; Da Nang can also be arranged, covering north and south Vietnam.',
      'COSCO, Hai An, CNC and other carrier resources — direct or transshipment chosen by timing and cost.',
    ],
    sections_en: [
      {
        heading: '1. Main Vietnam ports and routing',
        body:
          'Vietnam exports mainly involve Hai Phong in the north, Ho Chi Minh in the south and Da Nang in the center. Hai Phong has direct options with COSCO and Hai An, while Ho Chi Minh is direct with CNC weekly in about 8 days. The routing depends on the consignee area, timing and cost.',
        bullets: [
          'Hai Phong: direct available, COSCO about 13 days, Hai An about 5 days direct.',
          'Ho Chi Minh: CNC direct weekly, about 8 days.',
          'Da Nang: can be arranged via transshipment.',
        ],
      },
      {
        heading: '2. Direct or transshipment — how to choose',
        body:
          'Hai Phong has direct sailings with stable transit, suitable for time-sensitive cargo; Ho Chi Minh is direct with CNC weekly in about 8 days, while other ports are confirmed per sailing. COSCO, Hai An, CNC and other carriers can all be arranged — confirm the best option based on ready date and destination.',
      },
      {
        heading: '3. Destination charges and free time',
        body:
          'Destination charges and demurrage/detention free time vary across Vietnam ports; for example Hai Phong commonly offers 7 days demurrage plus 14 days port free time. Confirm destination charges and free time together when requesting a quote rather than looking at origin price alone.',
      },
    ],
    checklist_en: [
      'Destination port (Ho Chi Minh / Hai Phong / Da Nang etc.) and final receiving city',
      'Container type, weight, commodity, and whether special cargo',
      'Timing requirement (whether direct service is needed)',
      'Whether transshipment is acceptable and the acceptable transit days',
      'Whether certificate of origin or other special documents are needed',
    ],
    faqs_en: [
      {
        question: 'Is there a direct service from Lianyungang to Hai Phong?',
        answer:
          'Yes, Hai Phong has direct options, for example COSCO about 13 days and Hai An about 5 days direct; actual sailings may vary.',
      },
      {
        question: 'How does Ho Chi Minh route?',
        answer:
          'Ho Chi Minh is direct with CNC weekly, about 8 days; choose the schedule based on your ready date.',
      },
    ],
  },
  {
    slug: 'china-to-thailand-shipping',
    section: 'routes',
    title: '连云港到泰国海运：林查班、曼谷、莱卡邦，含直航与中转方案',
    description:
      '连云港出口到泰国林查班 Laem Chabang、曼谷 Bangkok、莱卡邦 Lat Krabang 的直航与中转方案、航程、船司和目的港要点。',
    quickAnswer: '连云港到泰国有直航：林查班（Laem Chabang）走锦江/SITC 共舱或 MSK，约 8 天；曼谷（Bangkok）走锦江/SITC 共舱直航，约 9 天。以上航程为参考，具体以船公司当期船期为准。',
    quickAnswer_en: 'Lianyungang has direct services to Thailand: Laem Chabang with Jinjiang/SITC (shared vessel) or MSK, about 8 days; Bangkok with Jinjiang/SITC direct, about 9 days. Transit times are references; each sailing is confirmed with the carrier.',
    updatedAt: '2026-10-27',
    readTime: '5 min read',
    image: '/bryce-routes-command.webp',
    keywords: [
      '连云港到泰国海运',
      'China to Thailand shipping',
      '连云港到林查班',
      'Laem Chabang shipping',
      '曼谷海运',
      'Bangkok shipping',
    ],
    highlights: [
      '林查班 Laem Chabang 有直航方案，航程约 8 天，时效较快。',
      '曼谷 Bangkok 走锦江/SITC 共舱直航，约 9 天；莱卡邦 Lat Krabang 为曼谷附近的内陆场站，经林查班转运，航程按航次确认。',
      '林查班可选锦江/SITC 共舱或 MSK，曼谷走锦江/SITC 共舱，可按时效和成本选择。',
    ],
    sections: [
      {
        heading: '1. 泰国主要港口和走法',
        body:
          '泰国出口主要涉及林查班（Laem Chabang）、曼谷（Bangkok）和莱卡邦（Lat Krabang）。林查班是主力深水港，有直航方案；曼谷走锦江/SITC 共舱直航约 9 天。莱卡邦为曼谷附近的内陆场站，经林查班转运，航程按航次确认。具体走法要结合收货人所在区域、时效要求和成本。',
        bullets: [
          '林查班 Laem Chabang：直航约 8 天，时效较快。',
          '曼谷 Bangkok：锦江/SITC 共舱直航，约 9 天。',
          '莱卡邦 Lat Krabang：曼谷附近的内陆场站，经林查班转运，航程按航次确认。',
        ],
      },
      {
        heading: '2. 直航还是中转怎么选',
        body:
          '林查班有直航班次，航程较短、时效稳定，适合对时间敏感的货物；曼谷走锦江/SITC 共舱直航约 9 天。莱卡邦为曼谷附近的内陆场站，经林查班转运，航程按航次确认。林查班可选锦江/SITC 共舱或 MSK，建议根据出货时间和目的港确认最合适的方案。',
      },
      {
        heading: '3. 目的港费用和滞箱期',
        body:
          '泰国部分港口的目的港费用和滞箱免费期差异较大，部分航线目的港有 18 天滞箱免费期。询价时建议一并确认目的港费用和免费期，避免只看起运港价格。',
      },
    ],
    checklist: [
      '目的港（Laem Chabang / Bangkok / Lat Krabang 等）和最终收货城市',
      '箱型、货重、品名，是否为特殊货物',
      '对时效的要求（是否需要直航）',
      '是否接受中转以及可接受的航程天数',
      '是否需要产地证或其他特殊单证',
    ],
    faqs: [
      {
        question: '连云港到林查班有直航吗？',
        answer:
          '有，林查班有直航方案，航程约 8 天，时效较快，具体以实际船期为准。',
      },
      {
        question: '曼谷和莱卡邦怎么走？',
        answer:
          '曼谷走锦江/SITC 共舱直航约 9 天；莱卡邦为曼谷附近的内陆场站，经林查班转运，航程按航次确认。具体以实际船期为准。',
      },
    ],
    title_en: 'Lianyungang to Thailand Ocean Freight: Laem Chabang, Bangkok & Lat Krabang, Direct and Transshipment',
    metaTitle_en: 'Lianyungang to Thailand Ocean Freight: Laem Chabang & Bangkok',
    description_en:
      'Direct and transshipment options, transit times, carriers and destination notes for Lianyungang exports to Laem Chabang, Bangkok and Lat Krabang in Thailand.',
    highlights_en: [
      'Laem Chabang has a direct option with about 8 days transit — faster timing.',
      'Bangkok is direct with Jinjiang/SITC, about 9 days; Lat Krabang is an inland container depot near Bangkok, reached via Laem Chabang, with transit confirmed per sailing.',
      'Laem Chabang uses Jinjiang/SITC (shared vessel) or MSK, while Bangkok uses Jinjiang/SITC, chosen by timing and cost.',
    ],
    sections_en: [
      {
        heading: '1. Main Thailand ports and routing',
        body:
          'Thailand exports mainly involve Laem Chabang, Bangkok and Lat Krabang. Laem Chabang is the main deep-water port with a direct option; Bangkok is direct with Jinjiang/SITC in about 9 days. Lat Krabang is an inland container depot near Bangkok, reached via Laem Chabang, with transit confirmed per sailing. The routing depends on the consignee area, timing and cost.',
        bullets: [
          'Laem Chabang: direct about 8 days, faster timing.',
          'Bangkok: Jinjiang/SITC direct, about 9 days.',
          'Lat Krabang: an inland container depot near Bangkok, reached via Laem Chabang, with transit confirmed per sailing.',
        ],
      },
      {
        heading: '2. Direct or transshipment — how to choose',
        body:
          'Laem Chabang has direct sailings with shorter, stable transit, suitable for time-sensitive cargo; Bangkok is direct with Jinjiang/SITC in about 9 days. Lat Krabang is an inland container depot near Bangkok, reached via Laem Chabang, with transit confirmed per sailing. Laem Chabang uses Jinjiang/SITC (shared vessel) or MSK — confirm the best option based on ready date and destination.',
      },
      {
        heading: '3. Destination charges and free time',
        body:
          'Destination charges and demurrage free time vary across Thailand ports; some routes offer 18 days demurrage free time at destination. Confirm destination charges and free time together when requesting a quote rather than looking at origin price alone.',
      },
    ],
    checklist_en: [
      'Destination port (Laem Chabang / Bangkok / Lat Krabang etc.) and final receiving city',
      'Container type, weight, commodity, and whether special cargo',
      'Timing requirement (whether direct service is needed)',
      'Whether transshipment is acceptable and the acceptable transit days',
      'Whether certificate of origin or other special documents are needed',
    ],
    faqs_en: [
      {
        question: 'Is there a direct service from Lianyungang to Laem Chabang?',
        answer:
          'Yes, Laem Chabang has a direct option with about 8 days transit and faster timing; actual sailings may vary.',
      },
      {
        question: 'How do Bangkok and Lat Krabang route?',
        answer:
          'Bangkok is direct with Jinjiang/SITC in about 9 days; Lat Krabang is an inland container depot near Bangkok, reached via Laem Chabang, with transit confirmed per sailing. Actual sailings may vary.',
      },
    ],
  },
  {
    slug: 'china-to-philippines-shipping',
    section: 'routes',
    title: '连云港到菲律宾海运：马尼拉、宿务、达沃等多港覆盖，含中转方案',
    description:
      '连云港出口到菲律宾马尼拉 Manila、宿务 Cebu、达沃 Davao、卡加延、八打雁等港口的中转方案、航程、船司和目的港要点。',
    quickAnswer: '连云港到菲律宾以中转为主：马尼拉南港（Manila South）走 KMTC 经釜山中转，约 12 天；宿务（Cebu）走万海经高雄中转，约 12 天；达沃（Davao）走万海经高雄中转，约 14 天。马尼拉分南北两个码头，订舱前请确认收货人指定码头。以上航程为参考，具体以船公司当期船期为准。',
    quickAnswer_en: 'Lianyungang to the Philippines is mainly via transshipment: Manila South with KMTC via Busan, about 12 days; Cebu with Wan Hai via Kaohsiung, about 12 days; Davao with Wan Hai via Kaohsiung, about 14 days. Manila has North and South terminals, so confirm the consignee\'s terminal before booking. Transit times are references; each sailing is confirmed with the carrier.',
    updatedAt: '2026-10-27',
    readTime: '5 min read',
    image: '/bryce-routes-command.webp',
    keywords: [
      '连云港到菲律宾海运',
      'China to Philippines shipping',
      '连云港到马尼拉',
      'Manila shipping',
      '宿务海运',
      'Cebu shipping',
    ],
    highlights: [
      '覆盖马尼拉、宿务、达沃、卡加延、八打雁、苏比克、伊洛伊洛等多个菲律宾港口。',
      '马尼拉分南北两个码头，订舱前需确认收货人指定码头。',
      '马尼拉南港走 KMTC 经釜山中转，宿务、达沃走万海经高雄中转，班次选择多。',
    ],
    sections: [
      {
        heading: '1. 马尼拉南北码头要先确认',
        body:
          '马尼拉是菲律宾最主要的市场，分为马尼拉北（Manila North，PHMNN）和马尼拉南（Manila South，PHMNS）两个码头。收货人清关和提货通常绑定具体码头，所以订舱前要先确认收货人要求到北港还是南港，而不是笼统说"到马尼拉"。',
        bullets: [
          '马尼拉北 PHMNN：按航次确认；马尼拉南 PHMNS：KMTC 经釜山中转，约 12 天。',
          '收货人指定的码头会影响清关和提货，订舱前先确认。',
        ],
      },
      {
        heading: '2. 其他主要港口和航程',
        body:
          '除马尼拉外，菲律宾还覆盖宿务、达沃、卡加延、八打雁、苏比克、伊洛伊洛等港口，其中宿务、达沃走万海经高雄中转。港口较多、覆盖较广，可根据收货人所在区域选择。',
        bullets: [
          '八打雁 Batangas：按航次确认。',
          '宿务 Cebu：万海经高雄中转，约 12 天；卡加延 Cagayan de Oro：按航次确认。',
          '达沃 Davao、苏比克 Subic、伊洛伊洛 Iloilo：可经中转安排。',
        ],
      },
      {
        heading: '3. 中转班次和时效',
        body:
          '菲律宾主要港口以中转为主，马尼拉南港经釜山接驳，宿务、达沃经高雄接驳。KMTC、万海等船司资源班次较多，报价时看到的航程通常是顺利接驳的理想情况，实际要为中转和港口情况留出缓冲。',
      },
      {
        heading: '4. 目的港费用和滞箱期',
        body:
          '菲律宾部分港口的目的港费用、滞箱免费期差异较大，部分航线目的港有 18 天滞箱免费期，部分含起运港 THC。询价时建议一并确认目的港费用和免费期，避免只看起运港价格。',
      },
    ],
    checklist: [
      '目的港（马尼拉北/南 / 宿务 / 达沃等）和最终收货城市',
      '马尼拉需确认收货人指定的码头（北港 / 南港）',
      '箱型、货重、品名，是否为特殊货物',
      '是否接受中转以及可接受的航程天数',
      '是否需要产地证或其他特殊单证',
    ],
    faqs: [
      {
        question: '连云港到马尼拉航程多久？',
        answer:
          '马尼拉北港按航次确认；南港走 KMTC 经釜山中转约 12 天，具体以实际船期为准。订舱前需确认收货人指定的是北港还是南港。',
      },
      {
        question: '菲律宾港口这么多，怎么选？',
        answer:
          '主要看收货人所在区域和指定港口。马尼拉是最大市场，分南北两个码头；宿务、达沃、卡加延等港口覆盖其他区域，其中宿务走万海经高雄中转约 12 天，达沃走万海经高雄中转约 14 天。',
      },
    ],
    title_en: 'Lianyungang to Philippines Ocean Freight: Manila, Cebu, Davao & More, via Transshipment',
    metaTitle_en: 'Lianyungang to Philippines Ocean Freight: Manila, Cebu & Davao',
    description_en:
      'Transshipment options, transit times, carriers and destination notes for Lianyungang exports to Manila, Cebu, Davao, Cagayan, Batangas and more in the Philippines.',
    highlights_en: [
      'Covers many Philippine ports — Manila, Cebu, Davao, Cagayan, Batangas, Subic and Iloilo.',
      'Manila has two terminals (North and South) — confirm the consignee terminal before booking.',
      'Manila South is with KMTC via Busan; Cebu and Davao are with Wan Hai via Kaohsiung, with wide schedule choice.',
    ],
    sections_en: [
      {
        heading: '1. Confirm Manila North or South terminal first',
        body:
          'Manila is the main market in the Philippines, split into Manila North (PHMNN) and Manila South (PHMNS). Consignee clearance and pickup are usually tied to a specific terminal, so before booking, confirm whether the consignee needs North or South rather than just saying "to Manila".',
        bullets: [
          'Manila North (PHMNN): confirmed per sailing; Manila South (PHMNS): KMTC via Busan, about 12 days.',
          'The consignee-designated terminal affects clearance and pickup — confirm before booking.',
        ],
      },
      {
        heading: '2. Other main ports and transit times',
        body:
          'Beyond Manila, the Philippines covers Cebu, Davao, Cagayan, Batangas, Subic and Iloilo, with Cebu and Davao served by Wan Hai via Kaohsiung. Wide port coverage — choose based on the consignee area.',
        bullets: [
          'Batangas: confirmed per sailing.',
          'Cebu: Wan Hai via Kaohsiung, about 12 days; Cagayan de Oro: confirmed per sailing.',
          'Davao, Subic, Iloilo: can be arranged via transshipment.',
        ],
      },
      {
        heading: '3. Transshipment schedules and timing',
        body:
          'The main Philippine ports are transshipment-based: Manila South connects via Busan, and Cebu and Davao via Kaohsiung. KMTC and Wan Hai offer many sailings; the transit shown in quotes is usually the ideal scenario with smooth connections, so leave buffer for transshipment and port conditions.',
      },
      {
        heading: '4. Destination charges and free time',
        body:
          'Destination charges and demurrage free time vary across Philippine ports; some routes offer 18 days demurrage free time, and some include origin THC. Confirm destination charges and free time together when requesting a quote rather than looking at origin price alone.',
      },
    ],
    checklist_en: [
      'Destination port (Manila North/South / Cebu / Davao etc.) and final receiving city',
      'For Manila, confirm the consignee-designated terminal (North / South)',
      'Container type, weight, commodity, and whether special cargo',
      'Whether transshipment is acceptable and the acceptable transit days',
      'Whether certificate of origin or other special documents are needed',
    ],
    faqs_en: [
      {
        question: 'How long is transit from Lianyungang to Manila?',
        answer:
          'Manila North is confirmed per sailing; Manila South is with KMTC via Busan in about 12 days; actual sailings may vary. Confirm whether the consignee needs North or South before booking.',
      },
      {
        question: 'With so many Philippine ports, how to choose?',
        answer:
          'It mainly depends on the consignee area and designated port. Manila is the largest market with two terminals; Cebu, Davao, Cagayan and others cover other regions, with Cebu served by Wan Hai via Kaohsiung in about 12 days and Davao in about 14 days.',
      },
    ],
  },
  {
    slug: 'china-to-indonesia-shipping',
    section: 'routes',
    title: '连云港到印尼海运：雅加达、泗水、三宝垄，含直航与中转方案',
    description:
      '连云港出口到印尼海运：雅加达有直航，正常约 10 天，泗水、三宝垄约 10 天，主要船司为 CNC、SITC 和锦江航运。本文整理雅加达、泗水、三宝垄、棉兰等港口的走法、船期选择、目的港费用和免箱期要点，按票询价。',
    quickAnswer: '连云港到雅加达（Jakarta）有直航船，正常约 10 天；泗水（Surabaya）、三宝垄（Semarang）也有直航，约 10 天。目前主要订舱船司为 CNC、SITC 和锦江航运。棉兰（Belawan）、望加锡等其他港口按航次确认。以上航程为参考，具体以船公司当期船期为准。',
    updatedAt: '2026-11-05',
    readTime: '5 min read',
    image: '/bryce-routes-command.webp',
    keywords: [
      '连云港到印尼海运',
      'China to Indonesia shipping',
      '连云港到雅加达',
      'Jakarta shipping',
      '泗水海运',
      'Surabaya shipping',
    ],
    highlights: [
      '连云港到雅加达（Jakarta）有直航船，正常约 10 天。',
      '泗水（Surabaya）、三宝垄（Semarang）也有直航，约 10 天；棉兰、望加锡等港口按航次确认。',
      '主要订舱船司为 CNC、SITC 和锦江航运，可按船期和舱位选择。',
    ],
    sections: [
      {
        heading: '1. 印尼主要港口和航程',
        body: '印尼出口主要涉及雅加达（Jakarta）、泗水（Surabaya）、三宝垄（Semarang）和棉兰（Belawan）等港口。连云港到雅加达有直航船，泗水、三宝垄也有直航，约 10 天，具体走法要结合收货人所在区域、时效要求和成本。',
        bullets: [
          '雅加达 Jakarta：直航，正常约 10 天。',
          '泗水 Surabaya、三宝垄 Semarang：也有直航，约 10 天。',
          '主要船司：CNC、SITC、锦江航运。',
        ],
      },
      {
        heading: '2. 其他港口和覆盖',
        body: '除主力港口外，印尼还覆盖棉兰（Belawan）、打拉根（Tarakan）、望加锡（Makassar）、巴淡（Batam）等港口，多经支线中转，航程和舱位按航次单独确认。可根据收货人所在岛屿和区域选择。',
        bullets: [
          '棉兰 Belawan、望加锡 Makassar：按航次确认航线和航程。',
          '打拉根、巴淡：经支线中转，舱位单独确认。',
        ],
      },
      {
        heading: '3. 怎么选船期和船司',
        body: '雅加达、泗水和三宝垄有直航船，时效稳定，适合对时间敏感的货物；其他港口按航次确认直航或中转。CNC、SITC、锦江航运都可以安排，建议根据出货时间、目的港和舱位情况确认最合适的方案。',
      },
      {
        heading: '4. 目的港费用和滞箱期',
        body:
          '印尼部分港口的目的港费用、滞箱免费期差异较大，常见目的港 14 天免箱期，部分小柜有超重费。询价时建议一并确认目的港费用和免费期，避免只看起运港价格。',
      },
    ],
    checklist: [
      '目的港（Jakarta / Surabaya / Semarang / Belawan 等）和最终收货城市',
      '箱型、货重、品名，是否为特殊货物或小柜超重',
      '对时效的要求（是否需要直航）',
      '是否接受中转以及可接受的航程天数',
      '是否需要产地证或其他特殊单证',
    ],
    faqs: [
      {
        question: '连云港到雅加达有直航吗？',
        answer: '有，连云港到雅加达有直航船，正常约 10 天，主要船司为 CNC、SITC 和锦江航运，具体以当期船期为准。',
      },
      {
        question: '泗水、三宝垄要多久？',
        answer: '泗水、三宝垄也有直航，约 10 天，CNC、SITC、锦江航运都可以安排。',
      },
    ],
    title_en: 'Lianyungang to Indonesia Ocean Freight: Jakarta, Surabaya & Semarang, Direct and Transshipment',
    metaTitle_en: 'Lianyungang to Indonesia Shipping: Direct to Jakarta, ~10 Days',
    description_en:
      'Direct and transshipment options, transit times, carriers and destination notes for Lianyungang exports to Jakarta, Surabaya, Semarang and more in Indonesia.',
    quickAnswer_en: 'Lianyungang has direct sailings to Jakarta, normally about 10 days; Surabaya and Semarang also have direct sailings, about 10 days. We mainly book with CNC, SITC and Jinjiang Shipping. Belawan, Makassar and other ports are confirmed per sailing. Transit times are references; each sailing is confirmed with the carrier.',
    highlights_en: [
      'Lianyungang has direct sailings to Jakarta, normally about 10 days.',
      'Surabaya and Semarang also have direct sailings, about 10 days; Belawan, Makassar and other ports are confirmed per sailing.',
      'We mainly book with CNC, SITC and Jinjiang Shipping, chosen by schedule and space.',
    ],
    sections_en: [
      {
        heading: '1. Main Indonesia ports and transit times',
        body: 'Indonesia exports mainly involve Jakarta, Surabaya, Semarang and Belawan. Lianyungang has direct sailings to Jakarta, and Surabaya and Semarang also have direct sailings, about 10 days. The routing depends on the consignee area, timing and cost.',
        bullets: [
          'Jakarta: direct, normally about 10 days.',
          'Surabaya and Semarang: direct sailings, about 10 days.',
          'Main carriers: CNC, SITC and Jinjiang Shipping.',
        ],
      },
      {
        heading: '2. Other ports and coverage',
        body: 'Beyond the main ports, Indonesia also covers Belawan, Tarakan, Makassar and Batam, mostly via feeder transshipment, with routing and space confirmed per sailing. Choose based on the consignee island and region.',
        bullets: [
          'Belawan and Makassar: routing and transit confirmed per sailing.',
          'Tarakan and Batam: via feeder transshipment, space confirmed separately.',
        ],
      },
      {
        heading: '3. Choosing the sailing and carrier',
        body: 'Jakarta, Surabaya and Semarang have direct sailings with stable transit, suitable for time-sensitive cargo; other ports are confirmed per sailing as direct or transshipment. CNC, SITC and Jinjiang Shipping can all be arranged; confirm the best option by ready date, destination and space.',
      },
      {
        heading: '4. Destination charges and free time',
        body:
          'Destination charges and demurrage free time vary across Indonesian ports; 14 days free time is common at destination, and some small containers have overweight charges. Confirm destination charges and free time together when requesting a quote rather than looking at origin price alone.',
      },
    ],
    checklist_en: [
      'Destination port (Jakarta / Surabaya / Semarang / Belawan etc.) and final receiving city',
      'Container type, weight, commodity, and whether special cargo or small-container overweight',
      'Timing requirement (whether direct service is needed)',
      'Whether transshipment is acceptable and the acceptable transit days',
      'Whether certificate of origin or other special documents are needed',
    ],
    faqs_en: [
      {
        question: 'Is there a direct service from Lianyungang to Jakarta?',
        answer: 'Yes. Lianyungang has direct sailings to Jakarta, normally about 10 days, mainly with CNC, SITC and Jinjiang Shipping; actual sailings may vary.',
      },
      {
        question: 'How long do Surabaya and Semarang take?',
        answer: 'Surabaya and Semarang also have direct sailings, about 10 days; CNC, SITC and Jinjiang Shipping can all arrange it.',
      },
    ],
  },
  {
    slug: 'china-to-malaysia-shipping',
    section: 'routes',
    title: '连云港到马来西亚海运：巴生港、帕西谷当、关丹，含直航与中转方案',
    description:
      '连云港出口到马来西亚巴生港 Port Klang、帕西谷当 Pasir Gudang、关丹等港口的直航与中转方案、航程、船司和目的港要点。',
    quickAnswer: '连云港到巴生港（Port Klang）走锦江/SITC 共舱直航，约 9 天；帕西谷当（Pasir Gudang）走 EMC 经高雄中转，每周两班，约 16 天。巴生港分北港和西港，订舱前请确认收货人指定码头。以上航程为参考，具体以船公司当期船期为准。',
    quickAnswer_en: 'Lianyungang to Port Klang is direct with Jinjiang/SITC (shared vessel), about 9 days; Pasir Gudang is with EMC via Kaohsiung, twice weekly, about 16 days. Port Klang has North Port and West Port, so confirm the consignee\'s terminal before booking. Transit times are references; each sailing is confirmed with the carrier.',
    updatedAt: '2026-10-27',
    readTime: '5 min read',
    image: '/bryce-routes-command.webp',
    keywords: [
      '连云港到马来西亚海运',
      'China to Malaysia shipping',
      '连云港到巴生港',
      'Port Klang shipping',
      '帕西谷当',
      'Pasir Gudang shipping',
    ],
    highlights: [
      '巴生港 Port Klang 是马来西亚主力大港，覆盖巴生北、巴生西两个码头。',
      '帕西谷当 Pasir Gudang 走 EMC 经高雄中转，每周两班，约 16 天；关丹 Kuantan 等港口也可安排。',
      '巴生港走锦江/SITC 共舱直航，帕西谷当走 EMC 中转，可按时效和成本选择。',
    ],
    sections: [
      {
        heading: '1. 巴生港北码头和西码头',
        body:
          '巴生港（Port Klang）是马来西亚最主要的港口，分为巴生北（North Port）和巴生西（West Port）两个码头。收货人清关和提货通常绑定具体码头，所以订舱前要先确认收货人要求到北港还是西港。',
        bullets: [
          '巴生北 MYPKG、巴生西 MYPKW：锦江/SITC 共舱直航，约 9 天。',
          '收货人指定的码头会影响清关和提货，订舱前先确认。',
        ],
      },
      {
        heading: '2. 帕西谷当和其他港口',
        body:
          '除巴生港外，马来西亚还覆盖帕西谷当（Pasir Gudang）、关丹（Kuantan）、丹戎帕拉帕斯（Tanjung Pelepas）等港口；帕西谷当走 EMC 经高雄中转，每周两班，其他港口按航次确认。帕西谷当靠近新山，服务马来南部和新加坡周边。',
        bullets: [
          '帕西谷当 Pasir Gudang：EMC 经高雄中转，每周两班，约 16 天。',
          '关丹 Kuantan、丹戎帕拉帕斯 Tanjung Pelepas：可经中转安排。',
        ],
      },
      {
        heading: '3. 直航与中转班次和时效',
        body:
          '巴生港走锦江/SITC 共舱直航约 9 天，帕西谷当走 EMC 经高雄中转约 16 天、每周两班。报价时看到的航程通常是顺利接驳的理想情况，实际要为中转和港口情况留出缓冲。',
      },
      {
        heading: '4. 目的港费用和滞箱期',
        body:
          '马来西亚部分港口的目的港费用、滞箱免费期差异较大，常见目的港 14 天免箱期。询价时建议一并确认目的港费用和免费期，避免只看起运港价格。',
      },
    ],
    checklist: [
      '目的港（巴生北/西 / 帕西谷当 / 关丹 等）和最终收货城市',
      '巴生港需确认收货人指定的码头（北港 / 西港）',
      '箱型、货重、品名，是否为特殊货物',
      '是否接受中转以及可接受的航程天数',
      '是否需要产地证或其他特殊单证',
    ],
    faqs: [
      {
        question: '连云港到巴生港航程多久？',
        answer:
          '巴生北、巴生西走锦江/SITC 共舱直航，约 9 天，具体以实际船期为准。订舱前需确认收货人指定的是北港还是西港。',
      },
      {
        question: '帕西谷当怎么走？',
        answer:
          '帕西谷当走 EMC 经高雄中转，每周两班，约 16 天，靠近新山、服务马来南部。',
      },
    ],
    title_en: 'Lianyungang to Malaysia Ocean Freight: Port Klang, Pasir Gudang & Kuantan, Direct and Transshipment',
    metaTitle_en: 'Lianyungang to Malaysia Ocean Freight: Port Klang & Pasir Gudang',
    description_en:
      'Direct and transshipment options, transit times, carriers and destination notes for Lianyungang exports to Port Klang, Pasir Gudang, Kuantan and more in Malaysia.',
    highlights_en: [
      'Port Klang is Malaysia\'s main gateway, with North Port and West Port terminals.',
      'Pasir Gudang is with EMC via Kaohsiung, twice weekly, about 16 days; Kuantan and other ports can also be arranged.',
      'Port Klang is direct with Jinjiang/SITC (shared vessel), while Pasir Gudang is with EMC via transshipment, chosen by timing and cost.',
    ],
    sections_en: [
      {
        heading: '1. Port Klang North Port and West Port',
        body:
          'Port Klang is Malaysia\'s main port, split into North Port and West Port. Consignee clearance and pickup are usually tied to a specific terminal, so before booking, confirm whether the consignee needs North Port or West Port.',
        bullets: [
          'North Port (MYPKG), West Port (MYPKW): Jinjiang/SITC (shared vessel) direct, about 9 days.',
          'The consignee-designated terminal affects clearance and pickup — confirm before booking.',
        ],
      },
      {
        heading: '2. Pasir Gudang and other ports',
        body:
          'Beyond Port Klang, Malaysia also covers Pasir Gudang, Kuantan and Tanjung Pelepas; Pasir Gudang uses EMC via Kaohsiung twice weekly, while other ports are confirmed per sailing. Pasir Gudang is near Johor Bahru, serving southern Malaysia and the Singapore area.',
        bullets: [
          'Pasir Gudang: EMC via Kaohsiung, twice weekly, about 16 days.',
          'Kuantan, Tanjung Pelepas: can be arranged via transshipment.',
        ],
      },
      {
        heading: '3. Direct and transshipment schedules and timing',
        body:
          'Port Klang is direct with Jinjiang/SITC (shared vessel) in about 9 days, while Pasir Gudang is with EMC via Kaohsiung in about 16 days, twice weekly. The transit shown in quotes is usually the ideal scenario with smooth connections, so leave buffer for transshipment and port conditions.',
      },
      {
        heading: '4. Destination charges and free time',
        body:
          'Destination charges and demurrage free time vary across Malaysian ports; 14 days free time is common at destination. Confirm destination charges and free time together when requesting a quote rather than looking at origin price alone.',
      },
    ],
    checklist_en: [
      'Destination port (Port Klang North/West / Pasir Gudang / Kuantan etc.) and final receiving city',
      'For Port Klang, confirm the consignee-designated terminal (North / West)',
      'Container type, weight, commodity, and whether special cargo',
      'Whether transshipment is acceptable and the acceptable transit days',
      'Whether certificate of origin or other special documents are needed',
    ],
    faqs_en: [
      {
        question: 'How long is transit from Lianyungang to Port Klang?',
        answer:
          'North Port and West Port are direct with Jinjiang/SITC (shared vessel), about 9 days; actual sailings may vary. Confirm whether the consignee needs North or West Port before booking.',
      },
      {
        question: 'How does Pasir Gudang route?',
        answer:
          'Pasir Gudang is with EMC via Kaohsiung, twice weekly, about 16 days, near Johor Bahru serving southern Malaysia.',
      },
    ],
  },
  {
    slug: 'ocean-freight-cost-breakdown',
    section: 'guides',
    title: '海运费由哪些部分组成？中国出口报价怎么看',
    description:
      '拆解中国出口海运报价中的海运费、附加费、拖车、报关、文件和目的港费用，帮助客户看懂总成本。',
    quickAnswer: '中国出口海运报价通常由四部分组成：海运费及船司附加费；起运港本地费用，如订舱、码头操作、文件和封条费；拖车和出口报关；目的港费用，如换单、码头、仓储、清关和内陆运输。比较报价时，先确认每家报价包含哪些项目、按贸易条款由谁承担，只比较海运费往往会低估总成本。',
    quickAnswer_en: 'A China export ocean freight quote usually has four parts: ocean freight and carrier surcharges; origin local charges such as booking, terminal handling, documentation and seal fees; trucking and export customs; and destination charges such as delivery order, terminal, storage, clearance and inland delivery. When comparing quotes, check what each one includes and who pays what under the Incoterm; comparing ocean freight alone often understates the total cost.',
    updatedAt: '2026-10-26',
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
    en: {
      title: 'What Is Included in an Ocean Freight Quote?',
      description:
        'Break down China export ocean freight quotes into ocean freight, surcharges, trucking, customs, documents and destination charges.',
      highlights: [
        'Ocean freight is only one part of the full shipment cost.',
        'A low rate is not always a low final cost if rollover, delayed sailing or destination charges are unclear.',
        'Quotes should separate ocean freight, trucking, customs, documents and destination risk.',
      ],
      sections: [
        {
          heading: '1. Ocean freight is only one part',
          body:
            'When clients say ocean freight, they often mean the base ocean freight charge. The actual export cost may also include booking fee, documentation fee, terminal charges, seal fee, customs fee, trucking, warehousing and destination charges.',
        },
        {
          heading: '2. Surcharges and destination charges should be separated',
          body:
            'Different carriers and lanes may include fuel, peak-season, congestion, low-sulfur and other surcharges. Destination side may include delivery order, terminal, storage, clearance and inland movement. A quote should explain what is included and what is excluded.',
        },
        {
          heading: '3. Why rates differ on the same lane',
          body:
            'Rate differences can come from carrier choice, direct service or transshipment, space level, cut-off timing, payment terms, destination agent and whether local charges are included. The lowest number may hide schedule or downstream risk.',
        },
      ],
      checklist: [
        'Whether ocean freight includes surcharges',
        'Whether origin local charges are listed',
        'Whether trucking, customs and warehousing are separate',
        'Who pays destination charges',
        'Quote validity and expected sailing schedule',
      ],
      faqs: [
        {
          question: 'Why do freight forwarder quotes differ so much?',
          answer:
            'They may include different fee items, use different carriers or provide different space reliability. Destination and origin local charges may also be listed differently. Compare line by line.',
        },
        {
          question: 'Is the lowest ocean freight always the best choice?',
          answer:
            'Not always. If a low rate comes with long transshipment, high rollover risk or unclear destination charges, the final cost and delivery risk can be higher.',
        },
      ],
    },
  },
  {
    slug: 'china-export-freight-market-notes',
    section: 'guides',
    title: '中国出口海运市场观察：东南亚、印巴、中东、南美舱位动态',
    description: '连云港、青岛出口航线的舱位与市场节奏观察，覆盖东南亚、印巴、中东和南美，定期更新，不含具体运价。',
    updatedAt: '2026-11-03',
    readTime: '4 min read',
    image: '/bryce-hero-port.webp',
    keywords: ['中国出口海运市场', '海运舱位', '提前订舱', '东南亚海运', '印度排灯节海运', '南美海运'],
    highlights: [
      '本页是定期更新的市场观察，只写舱位和节奏判断，不含具体运价；价格以当期报价为准。',
      '东南亚仍然爆仓、甩柜，部分目的港压港要等 7–14 天，建议尽早订舱并预留缓冲。',
      '南美东、南美西运力充足，运价走低；印巴在排灯节后回落，整体稳中略降。',
    ],
    sections: [
      { heading: '1. 本期概览（11 月 1 日至 7 日）', body: '进入 11 月，各航线开始分化：东南亚仍然紧张，甩柜和目的港压港还在持续；南美东西两岸、印巴和加勒比的舱位则明显缓和。本页只记录舱位和时间节奏，不列具体运价；需要当期价格，请按具体港口和货物单独询价。' },
      { heading: '2. 东南亚：仍然爆仓，拐点不远', body: '东南亚整体仍处于爆仓、甩柜的高位状态。目的港压港导致船舶不能按时返回，不少货物被连续甩柜 2–3 次，部分目的港压港需要等待 7–14 天。目前海运费已经处在高位，客户接受度开始下降，随着 11 月运力逐步改善，市场拐点预计不远。', bullets: ['订舱尽量提前，并为甩柜和改期预留至少一到两周缓冲。', '收货人要提前了解目的港可能的压港时间，安排好提货和免柜期。'] },
      { heading: '3. 印度、巴基斯坦：排灯节后回落', body: '排灯节过后，印巴出货量明显回落。11 月 8 日仍有部分船司空班，整体舱位不如 10 月紧张，运价稳中略降。', bullets: ['空班前后的航次请提前确认舱位和截关时间。', '节后是比较各家方案的好时机，可以多比较几条船期。'] },
      { heading: '4. 中东：红海运力增加，波斯湾持平', body: '红海方向直达船持续增加，船东恢复稳定班轮的意愿很强。但地区局势仍是最大的不确定因素，部分客户出货意愿不高，运价有稳中下降的趋势，同时要留意局势变化可能带来的临时附加费。波斯湾方向出货意愿在恢复，运价稳定且小幅上涨，订舱前仍应与收货人沟通好相关风险。' },
      { heading: '5. 拉美：南美运力充足，加勒比平稳', body: '南美西岸 10 月甩下的货已基本清完，11 月运力充足；前期汽车等大批量订单基本出运完毕，市场货量减少，运价平稳略降。南美东岸加班船陆续上线，运力过剩，运价每周下调；巴西大选期间，部分客户在观望关税政策的变化。加勒比方向运力基本恢复，主力船司没有空班计划，运价小幅波动。', bullets: ['南美东西两岸当前舱位好订，适合比较多个方案。', '加勒比运价相对稳定，仍建议按实际航次确认中转和航程。'] },
      { heading: '6. 如何使用这页', body: '这页是定期更新的参考，不构成报价或舱位承诺。运价、舱位和船期以船司和当期确认为准；有具体货物时，请把起运港、目的港、货物信息和出货时间发给我判断。' },
    ],
    checklist: ['起运港（连云港 / 青岛）和目的港', '预计出货时间和截关要求', '是否能接受改期或中转', '货物类型，是否为冻柜、危险品或特殊货', '目的港假期或清关安排'],
    faqs: [
      { question: '为什么现在要提前订舱？', answer: '东南亚仍然爆仓，甩柜和目的港压港较多，临近截关再订舱容易被甩，建议提前一到两周确认舱位。南美、印巴和加勒比目前舱位相对宽松，但仍建议按实际航次确认。' },
      { question: '这页会写具体运价吗？', answer: '不会。运价变化快，且因港口、箱型和货物而异，请提供具体信息单独询价。' },
    ],
    title_en: 'China Export Freight Market Notes: Space Trends for Southeast Asia, India-Pakistan, Middle East & South America',
    metaTitle_en: 'China Export Freight Market Notes: Space & Schedule Trends',
    description_en: 'Regularly updated notes on space and timing for exports from Lianyungang and Qingdao to Southeast Asia, India-Pakistan, the Middle East and South America. No freight rates.',
    highlights_en: [
      'This page is a regularly updated market note covering space and timing only, with no freight rates; prices depend on the current quotation.',
      'Southeast Asia is still overbooked with frequent rollovers, and some destination ports have 7–14 days of waiting time, so book early and allow buffer.',
      'South America East and West have ample capacity and softer rates; India-Pakistan has eased after Diwali and is stable to slightly lower.',
    ],
    sections_en: [
      { heading: '1. This period at a glance (Nov 1–7)', body: 'In November the lanes are diverging: Southeast Asia remains tight, with rollovers and destination congestion continuing, while South America, India-Pakistan and the Caribbean have eased noticeably. This page records space and timing only, with no freight rates; for current pricing, request a quotation for your specific port and cargo.' },
      { heading: '2. Southeast Asia: still overbooked, a turning point is near', body: 'Southeast Asia remains overbooked with frequent rollovers. Destination congestion is keeping vessels from returning on time, many shipments have been rolled two or three times, and some destination ports have 7–14 days of waiting time. Freight levels are already high and shippers are becoming less willing to accept them; as capacity improves through November, a turning point is expected soon.', bullets: ['Book as early as possible and allow one to two weeks of buffer for rollovers and schedule changes.', 'Consignees should plan for possible destination congestion when arranging pickup and free time.'] },
      { heading: '3. India and Pakistan: easing after Diwali', body: 'After Diwali, India-Pakistan volumes have dropped noticeably. Some carriers still have a blank sailing around November 8, but overall space is less tight than in October and the market is stable to slightly lower.', bullets: ['Confirm space and cut-off dates early for sailings around the blank sailing.', 'After the holiday is a good time to compare options across several sailings.'] },
      { heading: '4. Middle East: more Red Sea capacity, steady Persian Gulf', body: 'On the Red Sea side, direct services keep increasing as carriers aim to restore regular schedules. The regional situation remains the main uncertainty and some shippers are holding back, so rates are stable to slightly lower; watch for temporary surcharges if the situation changes. On the Persian Gulf side, shipper appetite is recovering and rates are steady with small weekly increases; discuss risks with the consignee before booking.' },
      { heading: '5. Latin America: ample South America capacity, steady Caribbean', body: 'On the South America west coast, cargo rolled in October has largely cleared and November capacity is ample; with large base orders such as vehicles already shipped, volumes are lower and rates are stable to slightly lower. On the east coast, extra sailings have added capacity and rates are being adjusted down weekly; during Brazil\'s election period some importers are waiting for clarity on tariff policy. In the Caribbean, capacity has largely recovered, main carriers have no blank sailings planned and rates are moving within a narrow range.', bullets: ['Space to both South American coasts is currently easy to secure, so it is a good time to compare options.', 'Caribbean rates are relatively stable; still confirm transshipment and transit per sailing.'] },
      { heading: '6. How to use this page', body: 'This page is a regularly updated reference, not a quotation or space commitment. Rates, space and sailings depend on the carrier and current confirmation. If you have a shipment, send the origin port, destination port, cargo details and ready date and I will review it.' },
    ],
    checklist_en: ['Origin (Lianyungang / Qingdao) and destination port', 'Expected ready date and cut-off requirements', 'Whether schedule changes or transshipment are acceptable', 'Cargo type, including reefer, dangerous goods or special cargo', 'Destination holidays or clearance arrangements'],
    faqs_en: [
      { question: 'Why book earlier right now?', answer: 'Southeast Asia is still overbooked, with frequent rollovers and destination congestion, so booking close to cut-off risks being rolled; confirm space one to two weeks ahead. South America, India-Pakistan and the Caribbean have more space at the moment, but still confirm each sailing.' },
      { question: 'Does this page show freight rates?', answer: 'No. Rates change quickly and vary by port, container type and cargo. Send your shipment details for a separate quotation.' },
    ],
  },
  {
    slug: 'china-export-transit-time-table',
    section: 'guides',
    title: '中国出口海运航程总表：连云港、青岛到东南亚、印巴、中东、拉美',
    description: '连云港、青岛出口到东南亚、印度、巴基斯坦、中东和拉美主要港口的参考航程、直航或中转方式和主要船司，一张表查清，定期更新，不含运价。',
    quickAnswer: '连云港出口东南亚多为直航，约 8–10 天（印尼、越南南部、泰国、巴生港）；菲律宾经釜山或高雄中转约 12–14 天。印度经上海中转约 15–25 天，卡拉奇经青岛中转约 30 天，迪拜走嘉华航运（KAWA Shipping）经豪尔费坎约 30 天。青岛出口印度直航约 18–28 天，卡拉奇约 25 天；墨西哥直航约 22–26 天，秘鲁约 35 天，智利、巴西约 40 天，阿根廷约 45 天。以上为参考航程，以船公司当期船期为准。',
    updatedAt: '2026-11-05',
    readTime: '8 min read',
    image: '/bryce-routes-command.webp',
    keywords: ['中国出口海运航程', '连云港海运航程', '青岛海运航程', '东南亚航程', '印巴航程', '中东航程', '拉美航程', 'China export transit times'],
    highlights: ['一张表汇总连云港、青岛到主要港口的参考航程、走法和船司。', '东南亚近期仍有甩柜和压港，实际到港时间可能比表中更长。', '表中不含运价，价格请按具体港口和货物询价。'],
    sections: [
      {
        heading: '1. 连云港出发',
        body: '连云港出口东南亚以直航为主；印度、巴基斯坦和中东多经上海、青岛或豪尔费坎中转。',
        table: {
          columns: ['目的港', '国家', '参考航程', '走法', '主要船司'],
          rows: [
            ['雅加达 Jakarta', '印尼', '约 10 天', '直航', 'CNC、SITC、锦江航运'],
            ['泗水 Surabaya', '印尼', '约 10 天', '直航', 'CNC、SITC、锦江航运'],
            ['三宝垄 Semarang', '印尼', '约 10 天', '直航', 'CNC、SITC、锦江航运'],
            ['胡志明 Ho Chi Minh', '越南', '约 8 天', '直航', 'CNC'],
            ['海防 Hai Phong', '越南', '约 5–13 天', '直航', '海安集运（两周一班）约 5 天、COSCO 约 13 天'],
            ['林查班 Laem Chabang', '泰国', '约 8 天', '直航', '锦江/SITC 共舱、MSK'],
            ['曼谷 Bangkok', '泰国', '约 9 天', '直航', '锦江/SITC 共舱'],
            ['巴生港 Port Klang', '马来西亚', '约 9 天', '直航', '锦江/SITC 共舱'],
            ['帕西谷当 Pasir Gudang', '马来西亚', '约 16 天', '高雄中转', 'EMC'],
            ['马尼拉南港 Manila South', '菲律宾', '约 12 天', '釜山中转', 'KMTC'],
            ['宿务 Cebu', '菲律宾', '约 12 天', '高雄中转', '万海'],
            ['达沃 Davao', '菲律宾', '约 14 天', '高雄中转', '万海'],
            ['Chennai', '印度', '约 15 天', '上海中转', 'EMC'],
            ['Nhava Sheva', '印度', '约 20 天', '上海中转', 'EMC'],
            ['Mundra', '印度', '约 25 天', '上海中转', 'EMC'],
            ['Kolkata', '印度', '约 35 天', '青岛、科伦坡两次中转', 'MSC'],
            ['卡拉奇 Karachi', '巴基斯坦', '约 30 天', '青岛中转', 'EMC、KMTC'],
            ['迪拜 Jebel Ali', '阿联酋', '约 30 天', '直达豪尔费坎再转迪拜', '嘉华航运（KAWA Shipping）'],
          ],
        },
      },
      {
        heading: '2. 青岛出发',
        body: '青岛出口印巴和拉美以直航为主，拉美有自有合约舱位；中东目前经豪尔费坎中转。',
        table: {
          columns: ['目的港', '国家', '参考航程', '走法', '主要船司'],
          rows: [
            ['Nhava Sheva', '印度', '约 20–21 天', '直航', 'EMC 约 20 天、KMTC 约 21 天'],
            ['Mundra', '印度', '约 22–28 天', '直航', 'EMC 约 22 天、KMTC 约 28 天'],
            ['Chennai', '印度', '约 18–23 天', '直航', 'EMC 约 18 天、KMTC 约 23 天'],
            ['Kolkata', '印度', '约 20–30 天', '中转', 'SITC 经霍尔迪亚约 20 天；MSC 经科伦坡约 30 天'],
            ['卡拉奇 Karachi', '巴基斯坦', '约 25 天', '直航', 'EMC、KMTC'],
            ['迪拜 Jebel Ali', '阿联酋', '约 30–40 天', '豪尔费坎中转', 'MSC、CMA、ASCL'],
            ['Manzanillo', '墨西哥', '约 22–26 天', '直航', 'KMTC 约 22 天、MSK 约 26 天'],
            ['Lázaro Cárdenas', '墨西哥', '约 25 天', '直航', 'ONE'],
            ['Callao', '秘鲁', '约 35 天', '直航', 'HMM、ONE、阳明（Yang Ming）'],
            ['San Antonio', '智利', '约 40 天', '直航', 'CMA、COSCO、EMC、OOCL、万海'],
            ['Santos', '巴西', '约 40 天', '直航', 'CMA'],
            ['Buenos Aires', '阿根廷', '约 45 天', '直航', 'CMA'],
            ['中美洲太平洋岸（Puerto Quetzal、Acajutla、Corinto、Caldera、Balboa）', '中美洲', '约 30–40 天', '中转', '按航次确认'],
          ],
        },
      },
      {
        heading: '3. 怎么用这张表',
        body: '表中是海上参考航程，不含工厂备货、拖车、截关等待、清关和目的港提货的时间。同一条航线不同船司、不同航次的天数会有差别，旺季甩柜和目的港压港也会拉长到港时间。需要确定船期时，请提供起运港、目的港、货好日期和箱型，我们按当期船期确认。具体航线的码头、单证和注意事项，请看各航线页面。',
      },
    ],
    faqs: [
      {
        question: '连云港到东南亚要多久？',
        answer: '多数东南亚主要港口从连云港直航约 8–10 天，菲律宾经釜山或高雄中转约 12–14 天，马来西亚帕西谷当经高雄约 16 天。',
      },
      {
        question: '青岛到拉美要多久？',
        answer: '墨西哥直航约 22–26 天，秘鲁约 35 天，智利和巴西约 40 天，阿根廷约 45 天；中美洲太平洋岸一般中转，约 30–40 天。',
      },
      {
        question: '表里的航程准吗？',
        answer: '表中是近期船期的参考值，会随船司调整、甩柜和压港变化。实际订舱时以船公司当期船期为准，我们会在报价时一并确认。',
      },
    ],
    title_en: 'China Export Transit Time Table: Lianyungang & Qingdao to Southeast Asia, India-Pakistan, Middle East & Latin America',
    metaTitle_en: 'China Export Transit Times: Lianyungang & Qingdao by Port',
    description_en: 'Reference ocean transit times, direct or transshipment routing and main carriers from Lianyungang and Qingdao to major ports in Southeast Asia, India, Pakistan, the Middle East and Latin America. Updated regularly, no rates.',
    quickAnswer_en: 'From Lianyungang, most Southeast Asia ports are direct in about 8–10 days (Indonesia, southern Vietnam, Thailand, Port Klang); the Philippines take about 12–14 days via Busan or Kaohsiung. India takes about 15–25 days via Shanghai, Karachi about 30 days via Qingdao and Dubai about 30 days via Khor Fakkan with KAWA Shipping. From Qingdao, India is direct in about 18–28 days and Karachi about 25 days; Mexico is direct in about 22–26 days, Peru about 35 days, Chile and Brazil about 40 days and Argentina about 45 days. These are reference times; each sailing is confirmed with the carrier.',
    highlights_en: ['One table for reference transit times, routing and carriers from Lianyungang and Qingdao.', 'Southeast Asia still has rollovers and port congestion, so actual arrival may take longer than shown.', 'No freight rates are listed; request a quote for your port and cargo.'],
    sections_en: [
      {
        heading: '1. From Lianyungang',
        body: 'Lianyungang exports to Southeast Asia are mostly direct; India, Pakistan and the Middle East usually connect via Shanghai, Qingdao or Khor Fakkan.',
        table: {
          columns: ['Destination', 'Country', 'Transit', 'Routing', 'Main carriers'],
          rows: [
            ['Jakarta', 'Indonesia', 'About 10 days', 'Direct', 'CNC, SITC, Jinjiang'],
            ['Surabaya', 'Indonesia', 'About 10 days', 'Direct', 'CNC, SITC, Jinjiang'],
            ['Semarang', 'Indonesia', 'About 10 days', 'Direct', 'CNC, SITC, Jinjiang'],
            ['Ho Chi Minh', 'Vietnam', 'About 8 days', 'Direct', 'CNC'],
            ['Hai Phong', 'Vietnam', 'About 5–13 days', 'Direct', 'Hai An (every two weeks) about 5 days; COSCO about 13 days'],
            ['Laem Chabang', 'Thailand', 'About 8 days', 'Direct', 'Jinjiang/SITC slot-sharing service, MSK'],
            ['Bangkok', 'Thailand', 'About 9 days', 'Direct', 'Jinjiang/SITC slot-sharing service'],
            ['Port Klang', 'Malaysia', 'About 9 days', 'Direct', 'Jinjiang/SITC slot-sharing service'],
            ['Pasir Gudang', 'Malaysia', 'About 16 days', 'Via Kaohsiung', 'EMC'],
            ['Manila South', 'Philippines', 'About 12 days', 'Via Busan', 'KMTC'],
            ['Cebu', 'Philippines', 'About 12 days', 'Via Kaohsiung', 'Wan Hai'],
            ['Davao', 'Philippines', 'About 14 days', 'Via Kaohsiung', 'Wan Hai'],
            ['Chennai', 'India', 'About 15 days', 'Via Shanghai', 'EMC'],
            ['Nhava Sheva', 'India', 'About 20 days', 'Via Shanghai', 'EMC'],
            ['Mundra', 'India', 'About 25 days', 'Via Shanghai', 'EMC'],
            ['Kolkata', 'India', 'About 35 days', 'Via Qingdao and Colombo (two transshipments)', 'MSC'],
            ['Karachi', 'Pakistan', 'About 30 days', 'Via Qingdao', 'EMC, KMTC'],
            ['Jebel Ali', 'United Arab Emirates', 'About 30 days', 'Direct to Khor Fakkan, then on-carriage to Dubai', 'KAWA Shipping'],
          ],
        },
      },
      {
        heading: '2. From Qingdao',
        body: 'Qingdao exports to India-Pakistan and Latin America are mostly direct, with own contracted space for Latin America; the Middle East currently connects via Khor Fakkan.',
        table: {
          columns: ['Destination', 'Country', 'Transit', 'Routing', 'Main carriers'],
          rows: [
            ['Nhava Sheva', 'India', 'About 20–21 days', 'Direct', 'EMC about 20 days, KMTC about 21 days'],
            ['Mundra', 'India', 'About 22–28 days', 'Direct', 'EMC about 22 days, KMTC about 28 days'],
            ['Chennai', 'India', 'About 18–23 days', 'Direct', 'EMC about 18 days, KMTC about 23 days'],
            ['Kolkata', 'India', 'About 20–30 days', 'Transshipment', 'SITC via Haldia about 20 days; MSC via Colombo about 30 days'],
            ['Karachi', 'Pakistan', 'About 25 days', 'Direct', 'EMC, KMTC'],
            ['Jebel Ali', 'United Arab Emirates', 'About 30–40 days', 'Via Khor Fakkan', 'MSC, CMA, ASCL'],
            ['Manzanillo', 'Mexico', 'About 22–26 days', 'Direct', 'KMTC about 22 days, MSK about 26 days'],
            ['Lázaro Cárdenas', 'Mexico', 'About 25 days', 'Direct', 'ONE'],
            ['Callao', 'Peru', 'About 35 days', 'Direct', 'HMM, ONE, Yang Ming'],
            ['San Antonio', 'Chile', 'About 40 days', 'Direct', 'CMA, COSCO, EMC, OOCL, Wan Hai'],
            ['Santos', 'Brazil', 'About 40 days', 'Direct', 'CMA'],
            ['Buenos Aires', 'Argentina', 'About 45 days', 'Direct', 'CMA'],
            ['Central America Pacific coast (Puerto Quetzal, Acajutla, Corinto, Caldera, Balboa)', 'Central America', 'About 30–40 days', 'Transshipment', 'Confirmed per sailing'],
          ],
        },
      },
      {
        heading: '3. How to use this table',
        body: 'These are reference ocean transit times and do not include factory preparation, trucking, cut-off waiting, customs clearance or destination pickup. Times vary by carrier and sailing, and peak-season rollovers or destination congestion can extend arrival. To confirm a schedule, send the origin, destination, ready date and container type, and we will check the current sailings. For terminals, documents and route-specific notes, see each route guide.',
      },
    ],
    faqs_en: [
      {
        question: 'How long from Lianyungang to Southeast Asia?',
        answer: 'Most main Southeast Asia ports are direct from Lianyungang in about 8–10 days; the Philippines take about 12–14 days via Busan or Kaohsiung, and Pasir Gudang about 16 days via Kaohsiung.',
      },
      {
        question: 'How long from Qingdao to Latin America?',
        answer: 'Mexico is direct in about 22–26 days, Peru about 35 days, Chile and Brazil about 40 days and Argentina about 45 days; the Pacific coast of Central America usually involves transshipment, about 30–40 days.',
      },
      {
        question: 'How accurate are these times?',
        answer: 'They are reference values from recent schedules and change with carrier adjustments, rollovers and congestion. The actual sailing is confirmed with the carrier when you book, and we confirm it with your quote.',
      },
    ],
    es: {
      "title": "Tiempos de tránsito marítimo desde China: Qingdao y Lianyungang a Latinoamérica, Asia y Medio Oriente",
      "metaTitle": "Tiempos de tránsito desde China: Qingdao y Lianyungang por puerto",
      "description": "Tiempos de tránsito de referencia, ruta directa o con transbordo y navieras principales desde Qingdao y Lianyungang a México, Centroamérica, Sudamérica, el Sudeste Asiático, India, Pakistán y Medio Oriente. Sin tarifas.",
      "keywords": [
        "tiempo de tránsito China México",
        "cuánto tarda un contenedor de China a México",
        "flete marítimo China Perú",
        "tiempo de tránsito China Chile",
        "Qingdao Manzanillo días",
        "transporte marítimo desde China"
      ],
      "quickAnswer": "Desde Qingdao hay servicios directos a México en unos 22–26 días (Manzanillo con KMTC o MSK; Lázaro Cárdenas con ONE), a Perú (Callao) en unos 35 días, a Chile (San Antonio) y Brasil (Santos) en unos 40 días y a Argentina (Buenos Aires) en unos 45 días. La costa del Pacífico de Centroamérica suele llevar transbordo, unos 30–40 días. Desde Lianyungang, la mayoría de los puertos del Sudeste Asiático son directos en unos 8–10 días. Son tiempos de referencia; cada salida se confirma con la naviera.",
      "highlights": [
        "Una sola tabla con tiempos de tránsito, rutas y navieras desde Qingdao y Lianyungang.",
        "Para Latinoamérica reservamos con espacio propio contratado en Qingdao.",
        "No se publican tarifas; solicite una cotización para su puerto y mercancía."
      ],
      "sections": [
        {
          "heading": "1. Desde Qingdao",
          "body": "Las exportaciones desde Qingdao a Latinoamérica, India y Pakistán son mayormente directas, con espacio propio contratado para Latinoamérica; Medio Oriente conecta actualmente vía Khor Fakkan.",
          "table": {
            "columns": [
              "Destino",
              "País",
              "Tránsito",
              "Ruta",
              "Navieras principales"
            ],
            "rows": [
              [
                "Manzanillo",
                "México",
                "Unos 22–26 días",
                "Directo",
                "KMTC unos 22 días; MSK unos 26 días"
              ],
              [
                "Lázaro Cárdenas",
                "México",
                "Unos 25 días",
                "Directo",
                "ONE"
              ],
              [
                "Callao",
                "Perú",
                "Unos 35 días",
                "Directo",
                "HMM, ONE, Yang Ming"
              ],
              [
                "San Antonio",
                "Chile",
                "Unos 40 días",
                "Directo",
                "CMA, COSCO, EMC, OOCL, Wan Hai"
              ],
              [
                "Santos",
                "Brasil",
                "Unos 40 días",
                "Directo",
                "CMA"
              ],
              [
                "Buenos Aires",
                "Argentina",
                "Unos 45 días",
                "Directo",
                "CMA"
              ],
              [
                "Costa del Pacífico de Centroamérica (Puerto Quetzal, Acajutla, Corinto, Caldera, Balboa)",
                "Centroamérica",
                "Unos 30–40 días",
                "Transbordo",
                "Se confirma por salida"
              ],
              [
                "Nhava Sheva",
                "India",
                "Unos 20–21 días",
                "Directo",
                "EMC unos 20 días; KMTC unos 21 días"
              ],
              [
                "Mundra",
                "India",
                "Unos 22–28 días",
                "Directo",
                "EMC unos 22 días; KMTC unos 28 días"
              ],
              [
                "Chennai",
                "India",
                "Unos 18–23 días",
                "Directo",
                "EMC unos 18 días; KMTC unos 23 días"
              ],
              [
                "Kolkata",
                "India",
                "Unos 20–30 días",
                "Transbordo",
                "SITC vía Haldia unos 20 días; MSC vía Colombo unos 30 días"
              ],
              [
                "Karachi",
                "Pakistán",
                "Unos 25 días",
                "Directo",
                "EMC, KMTC"
              ],
              [
                "Jebel Ali (Dubái)",
                "Emiratos Árabes Unidos",
                "Unos 30–40 días",
                "Vía Khor Fakkan",
                "MSC, CMA, ASCL"
              ]
            ]
          }
        },
        {
          "heading": "2. Desde Lianyungang",
          "body": "Las exportaciones desde Lianyungang al Sudeste Asiático son mayormente directas; India, Pakistán y Medio Oriente suelen conectar vía Shanghái, Qingdao o Khor Fakkan.",
          "table": {
            "columns": [
              "Destino",
              "País",
              "Tránsito",
              "Ruta",
              "Navieras principales"
            ],
            "rows": [
              [
                "Yakarta (Jakarta)",
                "Indonesia",
                "Unos 10 días",
                "Directo",
                "CNC, SITC, Jinjiang"
              ],
              [
                "Surabaya",
                "Indonesia",
                "Unos 10 días",
                "Directo",
                "CNC, SITC, Jinjiang"
              ],
              [
                "Semarang",
                "Indonesia",
                "Unos 10 días",
                "Directo",
                "CNC, SITC, Jinjiang"
              ],
              [
                "Ho Chi Minh",
                "Vietnam",
                "Unos 8 días",
                "Directo",
                "CNC"
              ],
              [
                "Hai Phong",
                "Vietnam",
                "Unos 5–13 días",
                "Directo",
                "Hai An (cada dos semanas) unos 5 días; COSCO unos 13 días"
              ],
              [
                "Laem Chabang",
                "Tailandia",
                "Unos 8 días",
                "Directo",
                "Jinjiang/SITC (servicio compartido), MSK"
              ],
              [
                "Bangkok",
                "Tailandia",
                "Unos 9 días",
                "Directo",
                "Jinjiang/SITC (servicio compartido)"
              ],
              [
                "Port Klang",
                "Malasia",
                "Unos 9 días",
                "Directo",
                "Jinjiang/SITC (servicio compartido)"
              ],
              [
                "Pasir Gudang",
                "Malasia",
                "Unos 16 días",
                "Vía Kaohsiung",
                "EMC"
              ],
              [
                "Manila South",
                "Filipinas",
                "Unos 12 días",
                "Vía Busan",
                "KMTC"
              ],
              [
                "Cebú",
                "Filipinas",
                "Unos 12 días",
                "Vía Kaohsiung",
                "Wan Hai"
              ],
              [
                "Davao",
                "Filipinas",
                "Unos 14 días",
                "Vía Kaohsiung",
                "Wan Hai"
              ],
              [
                "Chennai",
                "India",
                "Unos 15 días",
                "Vía Shanghái",
                "EMC"
              ],
              [
                "Nhava Sheva",
                "India",
                "Unos 20 días",
                "Vía Shanghái",
                "EMC"
              ],
              [
                "Mundra",
                "India",
                "Unos 25 días",
                "Vía Shanghái",
                "EMC"
              ],
              [
                "Kolkata",
                "India",
                "Unos 35 días",
                "Vía Qingdao y Colombo (dos transbordos)",
                "MSC"
              ],
              [
                "Karachi",
                "Pakistán",
                "Unos 30 días",
                "Vía Qingdao",
                "EMC, KMTC"
              ],
              [
                "Jebel Ali (Dubái)",
                "Emiratos Árabes Unidos",
                "Unos 30 días",
                "Directo a Khor Fakkan y luego a Dubái",
                "KAWA Shipping"
              ]
            ]
          }
        },
        {
          "heading": "3. Cómo usar esta tabla",
          "body": "Son tiempos de tránsito marítimo de referencia y no incluyen la preparación en fábrica, el transporte terrestre, la espera hasta el cierre, el despacho aduanal ni la recolección en destino. Los días varían según la naviera y la salida, y en temporada alta los rolados o la congestión en destino pueden alargar la llegada. Para confirmar un itinerario, envíenos el puerto de origen y destino, la fecha de carga lista y el tipo de contenedor, y revisamos las salidas vigentes. Para terminales, documentos y detalles de cada ruta, consulte las guías de ruta."
        }
      ],
      "faqs": [
        {
          "question": "¿Cuánto tarda un contenedor de Qingdao a México?",
          "answer": "Hay servicio directo: Manzanillo en unos 22 días con KMTC o 26 días con MSK, y Lázaro Cárdenas en unos 25 días con ONE. Cada salida se confirma con la naviera."
        },
        {
          "question": "¿Cuánto tarda de Qingdao a Sudamérica?",
          "answer": "Con servicio directo, Callao (Perú) tarda unos 35 días, San Antonio (Chile) y Santos (Brasil) unos 40 días y Buenos Aires (Argentina) unos 45 días. La costa del Pacífico de Centroamérica suele llevar transbordo, unos 30–40 días."
        },
        {
          "question": "¿Qué tan precisos son estos tiempos?",
          "answer": "Son valores de referencia de itinerarios recientes y cambian con los ajustes de las navieras, los rolados y la congestión. La salida real se confirma con la naviera al reservar, y la confirmamos junto con su cotización."
        }
      ]
    },
  },
];

export function getSection(slug: string) {
  return contentSections.find((section) => section.slug === slug);
}

export function getArticlesBySection(sectionSlug: string) {
  return contentArticles
    .filter((article) => article.section === sectionSlug)
    .sort((articleA, articleB) =>
      articleB.updatedAt.localeCompare(articleA.updatedAt),
    );
}

export function getArticle(sectionSlug: string, slug: string) {
  return contentArticles.find(
    (article) => article.section === sectionSlug && article.slug === slug,
  );
}

export function getArticlePath(article: ContentArticle) {
  return `/${article.section}/${article.slug}`;
}

export function getSectionCopy(section: ContentSection, lang: ArticleLang): SectionCopy {
  if (lang === 'es') {
    const spanishSections: Record<ContentSectionSlug, SectionCopy> = {
      requirements: {
        label: 'Requisitos de envío',
        title: 'Requisitos para exportar desde China',
        description: 'Listas de verificación para contenedores completos, carga consolidada, aduanas y documentos de exportación desde China.',
        intro: 'Revise la información de la carga y los documentos antes de reservar.',
      },
      routes: {
        label: 'Guías de rutas',
        title: 'Guías de rutas marítimas',
        description: 'Opciones de puertos, espacio, costes en destino y requisitos operativos para exportaciones desde China.',
        intro: 'Compare cada ruta según los puertos, la carga, la fecha y el alcance del servicio.',
      },
      guides: {
        label: 'Guías de fletes',
        title: 'Guías de costes y operaciones de transporte',
        description: 'Información sobre flete marítimo, recargos, transporte terrestre, aduanas y gastos en destino.',
        intro: 'Revise los conceptos incluidos y excluidos de cada cotización antes de reservar.',
      },
    };

    return spanishSections[section.slug];
  }

  if (lang === 'en' && section.en) {
    return section.en;
  }

  return {
    label: section.label,
    title: section.title,
    description: section.description,
    intro: section.intro,
  };
}

export function getArticleCopy(article: ContentArticle, lang: ArticleLang): ArticleCopy {
  if (lang === 'es') {
    if (!article.es) {
      throw new Error(`Spanish content is not available for article: ${article.slug}`);
    }

    return article.es;
  }

  if (lang === 'en') {
    const legacyEnglishCopy = article.en;

    return {
      title: article.title_en?.trim()
        ? article.title_en
        : legacyEnglishCopy?.title ?? article.title,
      metaTitle: article.metaTitle_en?.trim()
        ? article.metaTitle_en
        : legacyEnglishCopy?.metaTitle,
      description: article.description_en?.trim()
        ? article.description_en
        : legacyEnglishCopy?.description ?? article.description,
      quickAnswer: article.quickAnswer_en?.trim()
        ? article.quickAnswer_en
        : legacyEnglishCopy?.quickAnswer,
      highlights: article.highlights_en?.length
        ? article.highlights_en
        : legacyEnglishCopy?.highlights ?? article.highlights,
      sections: article.sections_en?.length
        ? article.sections_en
        : legacyEnglishCopy?.sections ?? article.sections,
      checklist: article.checklist_en?.length
        ? article.checklist_en
        : legacyEnglishCopy?.checklist ?? article.checklist,
      faqs: article.faqs_en?.length
        ? article.faqs_en
        : legacyEnglishCopy?.faqs ?? article.faqs,
    };
  }

  return {
    title: article.title,
    metaTitle: article.metaTitle,
    description: article.description,
    quickAnswer: article.quickAnswer,
    highlights: article.highlights,
    sections: article.sections,
    checklist: article.checklist,
    faqs: article.faqs,
  };
}
