export const siteUrl = 'https://www.sinolyg.com';
export const contactEmail = 'Bryce.Lee@gwl-lianyungang.com';
export const contactPhone = '18360639913';

export type Lang = 'zh' | 'en';
export type ContentSectionSlug = 'requirements' | 'routes' | 'guides';

export type ArticleBlock = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type ArticleCopy = {
  title: string;
  description: string;
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
  description_en?: string;
  highlights_en?: string[];
  sections_en?: Array<{
    heading: string;
    body: string;
    bullets?: string[];
  }>;
  checklist_en?: string[];
  faqs_en?: Array<{
    question: string;
    answer: string;
  }>;
  en?: ArticleCopy & {
    keywords?: string[];
  };
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
        'Practical FCL, LCL, customs and documentation checklists for China export shipments.',
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
        'Break down ocean freight, surcharges, trucking, customs and destination charges so clients can compare quotes clearly.',
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
    },
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
    },
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
    title_en: 'China to India Ocean Freight: Kolkata, Nhava Sheva and Mundra',
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
    title: '连云港出口印度海运专线：ONE / EMC 上海中转，周三周五驳船',
    description:
      '连云港至印度 FCL 整柜出口航线，经上海中转 ONE 与 EMC 大船，覆盖 Nhava Sheva、Mundra、Chennai 和 Kolkata。',
    updatedAt: '2026-07-07',
    readTime: '7 min read',
    image: '/bryce-routes-command.webp',
    keywords: [
      '连云港到印度海运',
      '连云港出口印度',
      'ONE 印度航线',
      'EMC 印度航线',
      'Nhava Sheva',
      'Mundra',
      'Chennai',
      'Kolkata',
    ],
    highlights: [
      '连云港周三、周五两班驳船接上海大船，适合印度方向 FCL 整柜出口。',
      '覆盖 Nhava Sheva、Mundra、Chennai、Kolkata 四大主流印度港口。',
      'VIP 钻石舱保，重点降低上海中转甩柜和等待风险。',
      '单票 10 TEU 以上可单独申请运价，大票货议价空间更大。',
    ],
    sections: [
      {
        heading: '1. 航线概况',
        body:
          '连云港至印度航线主推 ONE（海洋网联）与 EMC（长荣）两大船司，经上海港中转。连云港每周周三、周五两班驳船接驳上海大船，舱位衔接稳定，适合印度方向的 FCL 整柜出口。',
      },
      {
        heading: '2. 覆盖港口与航程时间',
        body:
          '连云港驳船至上海约 1 天；上海至奈瓦舍瓦 Nhava Sheva、蒙德拉 Mundra、金奈 Chennai 约 15 天；上海至加尔各答 Kolkata 约 20 天。四大主流印度港全覆盖，西岸和东岸都能安排。',
        bullets: [
          '连云港驳船至上海：约 1 天。',
          '上海至 Nhava Sheva / Mundra / Chennai：约 15 天。',
          '上海至 Kolkata：约 20 天。',
        ],
      },
      {
        heading: '3. 为什么选这条线',
        body:
          '连云港本地接货加上海中转的组合，综合成本通常低于苏北货源绕道其他口岸的方案。VIP 钻石舱保用于保证接驳上海大船准时上船，旺季爆舱期也尽量避免货物在上海中转港等待。周三、周五双班期也方便工厂安排货好时间。',
        bullets: [
          '价格优势：连云港本地接货 + 上海中转，适合苏北及周边货源。',
          '舱位保障：重点处理上海中转衔接，降低甩柜等待风险。',
          '大票议价：单票 10 TEU 以上可单独申请运价。',
          '班期灵活：每周三、周五两班，工厂交货时间更好安排。',
        ],
      },
      {
        heading: '4. 适合货物与柜型',
        body:
          '这条线适合 20GP、40GP、40HQ 常规干货柜。铅酸电池可按普货方案审核，需提供海运鉴定书和 MSDS，船司审核通过后即可安排。电动车、电池类出口印度客户，可以提前把资料发来判断是否能按普货操作。',
      },
      {
        heading: '5. 出口印度需要提前准备的收货人资料',
        body:
          '印度清关对收货人资料要求严格，订舱前请向印度买家收齐公司全称与详细地址、IEC、PAN、GST 和联系邮箱。其中 IEC 必须与提单收货人登记信息一致，资料不完整可能导致目的港清关卡点。',
        bullets: [
          '公司全称与详细地址',
          'IEC（进出口代码，提单收货人必须与 IEC 登记一致）',
          'PAN（税务账号）',
          'GST（商品服务税号）',
          '联系邮箱（目的港放货通知用）',
        ],
      },
      {
        heading: '6. 目的港免堆期和报价方式',
        body:
          '印度港口正常约 14 天免堆。货量大或清关周期长的，可以在订舱前单独申请延长免堆。询价时请提供品名、件毛体、柜型柜量、目的港和预计货好时间，我会按当天舱位和船期回复方案。',
      },
    ],
    checklist: [
      '品名、件数、毛重、体积',
      '柜型柜量：20GP / 40GP / 40HQ',
      '目的港：Nhava Sheva / Mundra / Chennai / Kolkata',
      '预计货好时间和是否能赶周三或周五驳船',
      '印度收货人 IEC、PAN、GST、公司地址和联系邮箱',
      '如为铅酸电池，提前提供海运鉴定书和 MSDS',
    ],
    faqs: [
      {
        question: '连云港到印度一定要经过上海中转吗？',
        answer:
          '这条方案主打连云港驳船接上海大船，通过上海衔接 ONE / EMC 印度方向主线。优势是本地接货方便、班期明确，并能利用上海大船资源。',
      },
      {
        question: '铅酸电池可以按普货走吗？',
        answer:
          '可以按普货方案先审核，但需要提供海运鉴定书和 MSDS，最终以船司和舱位审核结果为准。资料越早提供，越容易提前判断价格和可操作性。',
      },
      {
        question: '印度目的港免堆期可以延长吗？',
        answer:
          '正常约 14 天免堆。货量大或清关周期长的，可以在订舱前单独申请延长免堆，建议不要等到货到港后再处理。',
      },
    ],
    en: {
      title:
        'Lianyungang to India FCL Service: ONE / EMC via Shanghai, Wed & Fri Feeder',
      description:
        'Weekly FCL service from Lianyungang to India via Shanghai, connecting to ONE and Evergreen mainline vessels for Nhava Sheva, Mundra, Chennai and Kolkata.',
      highlights: [
        'Direct feeder from Lianyungang to Shanghai every Wednesday and Friday for India-bound FCL cargo.',
        'Coverage for Nhava Sheva, Mundra, Chennai and Kolkata.',
        'Premium space protection helps reduce rollover and waiting risk at Shanghai transshipment.',
        'Special rate filing can be requested for shipments of 10+ TEU.',
      ],
      sections: [
        {
          heading: '1. Service overview',
          body:
            'This Lianyungang to India FCL service connects by feeder to Shanghai and then to ONE and Evergreen (EMC) mainline vessels. The Lianyungang feeder runs every Wednesday and Friday, giving factories in northern Jiangsu a stable way to connect with India sailings.',
        },
        {
          heading: '2. Ports covered and transit time',
          body:
            'The Lianyungang to Shanghai feeder takes about 1 day. Shanghai to Nhava Sheva, Mundra and Chennai is about 15 days, while Shanghai to Kolkata is about 20 days. The service covers major west-coast and east-coast India ports.',
          bullets: [
            'Lianyungang feeder to Shanghai: approx. 1 day.',
            'Shanghai to Nhava Sheva / Mundra / Chennai: approx. 15 days.',
            'Shanghai to Kolkata: approx. 20 days.',
          ],
        },
        {
          heading: '3. Why use this route',
          body:
            'Lianyungang local pickup plus Shanghai transshipment can be more cost-effective for northern Jiangsu cargo than routing through other ports. Premium space protection is used to secure the Shanghai mainline connection and reduce rollover risk during peak season.',
          bullets: [
            'Cost advantage for Lianyungang and nearby factory cargo.',
            'Shanghai connection is managed as the key risk point.',
            'Volume pricing can be requested for 10+ TEU shipments.',
            'Twice-weekly feeder schedule gives factories more loading flexibility.',
          ],
        },
        {
          heading: '4. Cargo and equipment',
          body:
            'The service is suitable for standard dry containers: 20GP, 40GP and 40HQ. Lead-acid batteries can be reviewed as general cargo with a valid Sea Transport Appraisal Certificate and MSDS, subject to carrier approval.',
        },
        {
          heading: '5. Required consignee information for India',
          body:
            'Indian customs requires complete consignee details before shipment. Please collect the full company name and address, IEC, PAN, GST and contact email from your buyer. The IEC must match the bill of lading consignee information.',
          bullets: [
            'Full company name and address',
            'IEC, which must match the B/L consignee registration',
            'PAN tax number',
            'GST number',
            'Contact email for arrival notice and release communication',
          ],
        },
        {
          heading: '6. Free time and quotation details',
          body:
            'Standard free time at Indian ports is normally about 14 days. Extended free time can be requested before booking for large volumes or shipments with longer customs clearance cycles. For a quote, send commodity, package count, weight, volume, container type, destination port and cargo ready date.',
        },
      ],
      checklist: [
        'Commodity, package count, gross weight and volume',
        'Equipment: 20GP / 40GP / 40HQ',
        'Destination port: Nhava Sheva / Mundra / Chennai / Kolkata',
        'Cargo ready date and whether Wed or Fri feeder can be met',
        'India consignee IEC, PAN, GST, company address and contact email',
        'For lead-acid batteries, Sea Transport Appraisal Certificate and MSDS',
      ],
      faqs: [
        {
          question: 'Does Lianyungang to India have to transship via Shanghai?',
          answer:
            'This service is built around the Lianyungang feeder connecting to ONE / EMC mainline vessels in Shanghai. The advantage is local pickup convenience, clear feeder days and access to Shanghai mainline space.',
        },
        {
          question: 'Can lead-acid batteries move as general cargo?',
          answer:
            'They can be reviewed as general cargo, but the Sea Transport Appraisal Certificate and MSDS are required. Final acceptance depends on carrier and space approval.',
        },
        {
          question: 'Can India destination free time be extended?',
          answer:
            'Standard free time is normally about 14 days. For large volumes or longer clearance cycles, extended free time should be requested before booking.',
        },
      ],
    },
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
    title_en: 'China to Karachi Ocean Freight: AICT, KICT, PICT, Port Qasim & SAPT Terminals Explained',
    description_en:
      'Transshipment routes, terminal differences, transit times, common carriers and destination charges for ocean freight from Lianyungang and Qingdao to Karachi, Pakistan.',
    highlights_en: [
      'Lianyungang to Karachi is currently transshipment-based with almost no stable direct service, so build in extra transit buffer.',
      'Karachi has five terminals — AICT, KICT, PICT, Port Qasim (QICT) and SAPT — and the consignee\'s designated terminal affects carriers and customs clearance.',
      'SAPT and Port Qasim offer the widest carrier choice and denser schedules, making them common picks out of Lianyungang.',
    ],
    sections_en: [
      {
        heading: '1. What are the differences between Karachi\'s five terminals',
        body:
          'Karachi is not a single port but is split into several container terminals. Consignee customs clearance and cargo pickup are usually tied to a specific terminal, so before booking, confirm which terminal the consignee requires rather than just saying "to Karachi".',
        bullets: [
          'AICT: carriers like MAERSK, OOCL; often second transshipment, longer transit.',
          'KICT: OOCL, YML, COSCO, WHL; usually via Shanghai or Ningbo.',
          'PICT: mainly WHL, OOCL; some via Singapore second transshipment.',
          'Port Qasim / QICT: ONE, CMA, OOCL, HAPAG and more; flexible options.',
          'SAPT: the most carriers — ONE, CMA, EMC, PIL, HMM, KMTC — with dense schedules.',
        ],
      },
      {
        heading: '2. Lianyungang to Karachi is transshipment-based, no stable direct service',
        body:
          'Shipments from Lianyungang to Karachi terminals are currently mostly transshipment routes, commonly connecting via Qingdao, Shanghai or Ningbo to a mother vessel, with some routes doing a second transshipment in Singapore or Karachi. This means the "fastest transit" shown in quotes is usually the ideal scenario with smooth connections; in practice, leave buffer for transshipment and port congestion.',
      },
      {
        heading: '3. Approximate transit times',
        body:
          'Transit times vary widely by terminal and carrier. Faster SAPT and KICT options run about 16 to 23 days, some Port Qasim options from 17 days, while AICT and PICT often exceed 30 days due to second transshipment. Don\'t look at the shortest days alone — also weigh carrier reliability and number of transshipments.',
        bullets: [
          'SAPT: fast around 17-23 days, slow 26-37 days, most carrier choice.',
          'KICT: about 16-25 days, OOCL, YML, COSCO etc.',
          'Port Qasim: from about 17 days, plenty of carriers.',
          'AICT / PICT: mostly second transshipment, often 30+ days.',
        ],
      },
      {
        heading: '4. Confirm destination charges and clearance in advance',
        body:
          'Pakistan destination charges — DO fees, terminal, storage and clearance — plus differences between agents all affect the consignee\'s real landed cost. Customers who only compare the low Lianyungang origin price often overlook destination-side costs. Electronics, chemicals, used equipment and cargo needing special documents should be discussed upfront.',
      },
    ],
    checklist_en: [
      'Which terminal the consignee designates (AICT / KICT / PICT / Port Qasim / SAPT)',
      'Container type, weight, commodity, and whether it is used equipment or chemicals',
      'Whether transshipment is acceptable and the acceptable transit days',
      'Any nominated carrier or destination agent',
      'Whether certificate of origin, packing list attestation or other special documents are needed',
    ],
    faqs_en: [
      {
        question: 'Is there a direct service from Lianyungang to Karachi?',
        answer:
          'Currently it is mostly transshipment-based with no stable direct sailings, usually connecting via Qingdao, Shanghai or Ningbo to a mother vessel, sometimes with a second transshipment. Plan your timeline around transshipment transit.',
      },
      {
        question: 'With so many Karachi terminals, which should I choose?',
        answer:
          'It mainly depends on which terminal the consignee\'s clearing agent is tied to. If the consignee has no hard requirement, SAPT and Port Qasim offer more carriers and denser schedules and are usually more flexible; still weigh transit, carrier and cost together.',
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
    title_en: 'China to Dubai Jebel Ali Ocean Freight: Middle East Export Essentials',
    description_en:
      'Schedules, transshipment, documents and destination charges to watch when exporting from China to Jebel Ali, Dammam and other Middle East ports.',
    highlights_en: [
      'Jebel Ali is a major Middle East transshipment and distribution hub, but still check the final destination.',
      'Chemicals, building materials and dangerous goods need documents and carrier acceptance confirmed in advance.',
      'Middle East customers often focus on schedule reliability, destination charges and clearance documents.',
    ],
    sections_en: [
      {
        heading: '1. Jebel Ali is not every Middle East destination',
        body:
          'Many shipments first reach Jebel Ali, then move on to the UAE, Saudi Arabia or nearby countries. When quoting, confirm the final destination, whether transshipment is needed, the consignee\'s clearance capability and the trade terms.',
      },
      {
        heading: '2. Schedule and transshipment reliability matter',
        body:
          'Middle East routes have many carrier options, but direct versus transshipment, space and arrival reliability differ significantly. A low-price option with long transshipment time may affect the customer\'s delivery plan.',
      },
      {
        heading: '3. Confirm document requirements in advance',
        body:
          'Building materials, chemicals, dangerous goods, equipment and branded cargo may involve extra documents. Confirm invoice, packing list, certificate of origin, MSDS, dangerous goods packaging certificate and consignee requirements early.',
      },
    ],
    checklist_en: [
      'Jebel Ali or a final other city/country',
      'Whether transshipment is acceptable and expected transit',
      'Whether cargo is chemical, dangerous goods or branded',
      'Whether the customer requires certificate of origin or special certification',
      'Whether destination clearance or transshipment advice is needed',
    ],
    en: {
      title: 'China to Jebel Ali Ocean Freight: Middle East Export Guide',
      description:
        'Key operating points for China exports to Jebel Ali, Dammam and other Middle East ports: schedule, transshipment, documents and destination charges.',
      highlights: [
        'Jebel Ali is a major Middle East transshipment and distribution port, but the final destination still matters.',
        'Chemicals, building materials and DG cargo require early document and carrier acceptance checks.',
        'Middle East buyers often care about schedule reliability, destination charges and clearance documents.',
      ],
      sections: [
        {
          heading: '1. Jebel Ali is not the final answer for every shipment',
          body:
            'Many shipments first arrive at Jebel Ali and then move to the UAE, Saudi Arabia or nearby countries. When quoting, confirm the final destination, whether onward movement is needed, consignee clearance ability and trade terms.',
        },
        {
          heading: '2. Schedule and transshipment stability matter',
          body:
            'There are many carrier options on Middle East lanes, but direct service, transshipment plan, space and arrival reliability can differ greatly. A low-rate option with a long transshipment can disrupt the buyer delivery plan.',
        },
        {
          heading: '3. Document requirements should be checked early',
          body:
            'Building materials, chemicals, DG cargo, equipment and branded goods may involve extra documents. Invoice, packing list, certificate of origin, MSDS, DG package certificate and consignee requirements should be reviewed as early as possible.',
        },
      ],
      checklist: [
        'Jebel Ali or another final city / country',
        'Whether transshipment and expected transit time are acceptable',
        'Whether cargo is chemical, DG or branded',
        'Certificate of origin or special certification requirements',
        'Destination clearance or onward transport needs',
      ],
    },
  },
  {
    slug: 'china-to-south-america-shipping',
    section: 'routes',
    title: '中国到南美海运：青岛自有合约，覆盖巴西、阿根廷、墨西哥等东西两岸',
    description:
      '青岛港南美东、南美西自有合约与订舱窗口，覆盖巴西、阿根廷、墨西哥、智利、秘鲁等主要港口，含航程、船司和特殊货物操作要点。',
    updatedAt: '2026-07-13',
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
          '巴西 Santos：MSC 直达约 45 天，ONE 约 50 天。',
          '阿根廷 Buenos Aires：约 50 天。',
          '覆盖巴西南北部、阿根廷、乌拉圭主要港口及巴拉圭内陆点。',
        ],
      },
      {
        heading: '3. 南美西：墨西哥、智利、秘鲁、厄瓜多尔、哥伦比亚',
        body:
          '南美西以 CMA、MSK、KMTC 等自有舱位为主，覆盖 Manzanillo、Lazaro、Ensenada、Callao、San Antonio、Valparaiso、Guayaquil、Buenaventura 等港口。其中墨西哥航程较快，是南美西的重点市场。',
        bullets: [
          '墨西哥 Manzanillo：约 20 天，南美西最快。',
          '智利 San Antonio、秘鲁 Callao：约 30 天。',
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
          '南美西较快，墨西哥 Manzanillo 约 20 天，智利、秘鲁约 30 天；南美东较长，巴西 Santos 直达约 45 天，阿根廷约 50 天。具体以实际船期为准。',
      },
    ],
    title_en: 'China to South America Ocean Freight: Qingdao Contracted Space to Brazil, Argentina, Mexico & More',
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
          'Brazil Santos: MSC direct about 45 days, ONE about 50 days.',
          'Argentina Buenos Aires: about 50 days.',
          'Covers major ports in north and south Brazil, Argentina, Uruguay and inland Paraguay.',
        ],
      },
      {
        heading: '3. West coast: Mexico, Chile, Peru, Ecuador, Colombia',
        body:
          'The west coast is mainly our own space with CMA, MSK and KMTC, covering Manzanillo, Lazaro, Ensenada, Callao, San Antonio, Valparaiso, Guayaquil, Buenaventura and more. Mexico has a faster transit and is a key west-coast market.',
        bullets: [
          'Mexico Manzanillo: about 20 days, fastest on the west coast.',
          'Chile San Antonio, Peru Callao: about 30 days.',
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
          'The west coast is faster: Mexico Manzanillo about 20 days, Chile and Peru about 30 days. The east coast is longer: Brazil Santos direct about 45 days, Argentina about 50 days. Actual sailings may vary.',
      },
    ],
  },
  {
    slug: 'china-to-brazil-argentina-shipping',
    section: 'routes',
    title: '中国到巴西、阿根廷海运：南美东航线，青岛自有合约',
    description:
      '青岛出口到巴西 Santos、阿根廷 Buenos Aires 等南美东港口的自有合约、船司、航程和目的港操作要点。',
    updatedAt: '2026-07-13',
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
          '巴西 Santos：MSC 直达约 45 天，ONE 约 50 天。',
          '覆盖巴西南部（Santos、Paranagua、Navegantes）和北部（Suape、Salvador、Pecem、Manaus）。',
          '直达船和中转方案可根据货物和时效选择。',
        ],
      },
      {
        heading: '3. 阿根廷、乌拉圭、巴拉圭',
        body:
          '除巴西外，南美东还覆盖阿根廷 Buenos Aires、La Plata、Rosario、Zarate，乌拉圭 Montevideo，以及巴拉圭 Asuncion 等内陆点。',
        bullets: [
          '阿根廷 Buenos Aires：约 50 天。',
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
          'MSC 直达约 45 天，ONE 约 50 天，具体以实际船期为准。可根据时效选择直达或中转方案。',
      },
      {
        question: '南美东是自有合约吗？',
        answer:
          '是的，南美东是我们在青岛港的自有合约和订舱窗口，属于自己家订舱，在舱位保障、价格和旺季稳定性上更有优势。',
      },
    ],
    title_en: 'China to Brazil & Argentina Ocean Freight: South America East Coast, Qingdao Contracted Space',
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
          'Brazil Santos: MSC direct about 45 days, ONE about 50 days.',
          'Covers south Brazil (Santos, Paranagua, Navegantes) and north Brazil (Suape, Salvador, Pecem, Manaus).',
          'Direct and transshipment options based on cargo and timing.',
        ],
      },
      {
        heading: '3. Argentina, Uruguay, Paraguay',
        body:
          'Beyond Brazil, the east coast covers Argentina Buenos Aires, La Plata, Rosario, Zarate, Uruguay Montevideo, and inland points like Asuncion in Paraguay.',
        bullets: [
          'Argentina Buenos Aires: about 50 days.',
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
          'MSC direct is about 45 days, ONE about 50 days; actual sailings may vary. Direct or transshipment options can be chosen by timing.',
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
    section: 'routes',
    title: '中国到墨西哥、智利、秘鲁海运：南美西航线，青岛自有舱位',
    description:
      '青岛出口到墨西哥 Manzanillo、智利 San Antonio、秘鲁 Callao 等南美西港口的自有舱位、船司、航程和操作要点。',
    updatedAt: '2026-07-13',
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
      '墨西哥 Manzanillo 约 20 天，是南美西航程最快、最主力的市场。',
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
          '墨西哥 Manzanillo：约 20 天，南美西最快。',
          '覆盖 Manzanillo、Lazaro、Ensenada 等港口。',
        ],
      },
      {
        heading: '3. 智利、秘鲁、厄瓜多尔、哥伦比亚',
        body:
          '除墨西哥外，南美西还覆盖智利 San Antonio、Valparaiso、Iquique，秘鲁 Callao、Paita，厄瓜多尔 Guayaquil，哥伦比亚 Buenaventura 等港口。',
        bullets: [
          '智利 San Antonio、秘鲁 Callao：约 30 天。',
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
          '约 20 天，是南美西航程最快的市场之一，具体以实际船期为准。',
      },
      {
        question: '南美西是自有舱位吗？',
        answer:
          '南美西以 CMA、MSK、KMTC 等自有舱位为主，属于自己家订舱窗口，在舱位保障和价格上更有优势。',
      },
    ],
    title_en: 'China to Mexico, Chile & Peru Ocean Freight: South America West Coast, Qingdao Own Space',
    description_en:
      'Qingdao own space, carriers, transit times and notes for South America West ports like Manzanillo, San Antonio and Callao.',
    highlights_en: [
      'The South America West coast is mainly our own space at Qingdao with CMA, MSK and KMTC — direct booking for better security.',
      'Mexico Manzanillo is about 20 days — the fastest and leading west-coast market.',
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
          'Mexico Manzanillo: about 20 days, fastest on the west coast.',
          'Covers Manzanillo, Lazaro and Ensenada.',
        ],
      },
      {
        heading: '3. Chile, Peru, Ecuador, Colombia',
        body:
          'Beyond Mexico, the west coast covers Chile San Antonio, Valparaiso, Iquique, Peru Callao, Paita, Ecuador Guayaquil and Colombia Buenaventura.',
        bullets: [
          'Chile San Antonio, Peru Callao: about 30 days.',
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
          'About 20 days, one of the fastest west-coast markets; actual sailings may vary.',
      },
      {
        question: 'Is the west coast your own space?',
        answer:
          'The west coast is mainly our own space with CMA, MSK and KMTC — our own booking window — with an edge in space and rate.',
      },
    ],
  },
  {
    slug: 'china-to-vietnam-shipping',
    section: 'routes',
    title: '连云港到越南海运：胡志明、海防、岘港，含直航与中转方案',
    description:
      '连云港出口到越南胡志明 Ho Chi Minh、海防 Hai Phong、岘港 Da Nang 的直航与中转方案、航程、船司和目的港要点。',
    updatedAt: '2026-07-20',
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
      '胡志明 Ho Chi Minh 多经青岛中转，岘港也可安排，覆盖越南南北主要港口。',
      'SITC、MCC 等船司资源，直航和中转方案可按时效和成本选择。',
    ],
    sections: [
      {
        heading: '1. 越南主要港口和走法',
        body:
          '越南出口主要涉及北部海防（Hai Phong）、南部胡志明（Ho Chi Minh）和中部岘港（Da Nang）。北部海防有直航方案，南部胡志明多经青岛或香港中转，具体走法要结合收货人所在区域、时效要求和成本。',
        bullets: [
          '海防 Hai Phong：有直航，COSCO 约 13 天、海安集运（ECX）约 5 天直航。',
          '胡志明 Ho Chi Minh：多经青岛中转，航程约 15 天。',
          '岘港 Da Nang：可经中转安排。',
        ],
      },
      {
        heading: '2. 直航还是中转怎么选',
        body:
          '海防有直航班次，时效稳定，适合对时间敏感的货物；胡志明等港口经青岛或香港中转，船期选择多、覆盖广。SITC、MCC 等船司资源都可以安排，建议根据出货时间和目的港确认最合适的方案。',
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
          '胡志明多经青岛中转，航程约 15 天，SITC、MCC 等船司都可以安排，可根据出货时间选择合适班次。',
      },
    ],
    title_en: 'Lianyungang to Vietnam Ocean Freight: Ho Chi Minh, Hai Phong & Da Nang, Direct and Transshipment',
    description_en:
      'Direct and transshipment options, transit times, carriers and destination notes for Lianyungang exports to Ho Chi Minh, Hai Phong and Da Nang in Vietnam.',
    highlights_en: [
      'Hai Phong has direct options with COSCO and ECX, offering shorter transit.',
      'Ho Chi Minh is mostly via Qingdao transshipment; Da Nang can also be arranged, covering north and south Vietnam.',
      'SITC, MCC and other carrier resources — direct or transshipment chosen by timing and cost.',
    ],
    sections_en: [
      {
        heading: '1. Main Vietnam ports and routing',
        body:
          'Vietnam exports mainly involve Hai Phong in the north, Ho Chi Minh in the south and Da Nang in the center. Hai Phong has direct options, while Ho Chi Minh is mostly via Qingdao or Hong Kong transshipment. The routing depends on the consignee area, timing and cost.',
        bullets: [
          'Hai Phong: direct available, COSCO about 13 days, ECX about 5 days direct.',
          'Ho Chi Minh: mostly via Qingdao transshipment, about 15 days.',
          'Da Nang: can be arranged via transshipment.',
        ],
      },
      {
        heading: '2. Direct or transshipment — how to choose',
        body:
          'Hai Phong has direct sailings with stable transit, suitable for time-sensitive cargo; Ho Chi Minh and other ports go via Qingdao or Hong Kong transshipment with wider schedule choice. SITC, MCC and other carriers can all be arranged — confirm the best option based on ready date and destination.',
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
          'Yes, Hai Phong has direct options, for example COSCO about 13 days and ECX about 5 days direct; actual sailings may vary.',
      },
      {
        question: 'How does Ho Chi Minh route?',
        answer:
          'Ho Chi Minh is mostly via Qingdao transshipment, about 15 days. SITC, MCC and other carriers can arrange it; choose the schedule based on your ready date.',
      },
    ],
  },
  {
    slug: 'china-to-thailand-shipping',
    section: 'routes',
    title: '连云港到泰国海运：林查班、曼谷、莱卡邦，含直航与中转方案',
    description:
      '连云港出口到泰国林查班 Laem Chabang、曼谷 Bangkok、莱卡邦 Lat Krabang 的直航与中转方案、航程、船司和目的港要点。',
    updatedAt: '2026-07-20',
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
      '林查班 Laem Chabang 有直航方案，航程约 9 天，时效较快。',
      '曼谷 Bangkok、莱卡邦 Lat Krabang 可经香港或支线中转，班次选择多。',
      'SITC、MCC 等船司资源，直航和中转方案可按时效和成本选择。',
    ],
    sections: [
      {
        heading: '1. 泰国主要港口和走法',
        body:
          '泰国出口主要涉及林查班（Laem Chabang）、曼谷（Bangkok）和莱卡邦（Lat Krabang）。林查班是主力深水港，有直航方案；曼谷和莱卡邦多经香港或支线中转。具体走法要结合收货人所在区域、时效要求和成本。',
        bullets: [
          '林查班 Laem Chabang：直航约 9 天，时效较快。',
          '曼谷 Bangkok：多经香港中转，约 13 天。',
          '莱卡邦 Lat Krabang：经林查班支线中转，约 11 天。',
        ],
      },
      {
        heading: '2. 直航还是中转怎么选',
        body:
          '林查班有直航班次，航程较短、时效稳定，适合对时间敏感的货物；曼谷、莱卡邦经香港或支线中转，班次选择多。SITC、MCC 等船司资源都可以安排，建议根据出货时间和目的港确认最合适的方案。',
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
          '有，林查班有直航方案，航程约 9 天，时效较快，具体以实际船期为准。',
      },
      {
        question: '曼谷和莱卡邦怎么走？',
        answer:
          '曼谷多经香港中转约 13 天，莱卡邦经林查班支线中转约 11 天。SITC、MCC 等船司都可以安排。',
      },
    ],
    title_en: 'Lianyungang to Thailand Ocean Freight: Laem Chabang, Bangkok & Lat Krabang, Direct and Transshipment',
    description_en:
      'Direct and transshipment options, transit times, carriers and destination notes for Lianyungang exports to Laem Chabang, Bangkok and Lat Krabang in Thailand.',
    highlights_en: [
      'Laem Chabang has a direct option with about 9 days transit — faster timing.',
      'Bangkok and Lat Krabang can go via Hong Kong or feeder transshipment with wide schedule choice.',
      'SITC, MCC and other carrier resources — direct or transshipment chosen by timing and cost.',
    ],
    sections_en: [
      {
        heading: '1. Main Thailand ports and routing',
        body:
          'Thailand exports mainly involve Laem Chabang, Bangkok and Lat Krabang. Laem Chabang is the main deep-water port with a direct option; Bangkok and Lat Krabang mostly go via Hong Kong or feeder transshipment. The routing depends on the consignee area, timing and cost.',
        bullets: [
          'Laem Chabang: direct about 9 days, faster timing.',
          'Bangkok: mostly via Hong Kong transshipment, about 13 days.',
          'Lat Krabang: via Laem Chabang feeder, about 11 days.',
        ],
      },
      {
        heading: '2. Direct or transshipment — how to choose',
        body:
          'Laem Chabang has direct sailings with shorter, stable transit, suitable for time-sensitive cargo; Bangkok and Lat Krabang go via Hong Kong or feeder transshipment with wider schedule choice. SITC, MCC and other carriers can all be arranged — confirm the best option based on ready date and destination.',
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
          'Yes, Laem Chabang has a direct option with about 9 days transit and faster timing; actual sailings may vary.',
      },
      {
        question: 'How do Bangkok and Lat Krabang route?',
        answer:
          'Bangkok is mostly via Hong Kong transshipment about 13 days; Lat Krabang goes via Laem Chabang feeder about 11 days. SITC, MCC and other carriers can arrange it.',
      },
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

export function getSectionCopy(section: ContentSection, lang: Lang): SectionCopy {
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

export function getArticleCopy(article: ContentArticle, lang: Lang): ArticleCopy {
  if (lang === 'en') {
    const legacyEnglishCopy = article.en;

    return {
      title: article.title_en?.trim()
        ? article.title_en
        : legacyEnglishCopy?.title ?? article.title,
      description: article.description_en?.trim()
        ? article.description_en
        : legacyEnglishCopy?.description ?? article.description,
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
    description: article.description,
    highlights: article.highlights,
    sections: article.sections,
    checklist: article.checklist,
    faqs: article.faqs,
  };
}
