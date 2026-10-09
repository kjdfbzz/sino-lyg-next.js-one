type LocalizedText = { zh: string; en: string };

export const experienceUpdatedAt = '2026-10-09';

export const experienceCustomers: {
  id: string;
  name: LocalizedText;
  sourceNames: string[];
}[] = [
  { id: 'liugong', name: { zh: '柳工（山东）', en: 'Guangxi Liugong (Shandong)' }, sourceNames: ['Guangxi Liugong (Shandong)'] },
  { id: 'caterpillar', name: { zh: '卡特彼勒', en: 'Caterpillar' }, sourceNames: ['Caterpillar (China)', 'Caterpillar'] },
  { id: 'jinpeng', name: { zh: '江苏金彭集团', en: 'Jiangsu Jinpeng Group' }, sourceNames: ['Jiangsu Jinpeng Group Co., Ltd.'] },
  { id: 'jinyishun', name: { zh: 'Jinyishun Import and Export Trading (Xuzhou)', en: 'Jinyishun Import and Export Trading (Xuzhou)' }, sourceNames: ['Jinyishun Import and Export Trading (Xuzhou) Co., Ltd.'] },
  { id: 'laigang', name: { zh: '莱钢', en: 'Shandong Laigang' }, sourceNames: ['Shandong Laigang'] },
  { id: 'lingong', name: { zh: '山东临工', en: 'Shandong Lingong' }, sourceNames: ['Shandong Lingong'] },
  { id: 'xugong', name: { zh: '徐工集团', en: 'Xugong Group' }, sourceNames: ['Xugong Group'] },
  { id: 'sinotruk', name: { zh: '中国重汽集团', en: 'China National Heavy Duty Truck Group' }, sourceNames: ['China National Heavy Duty Truck Group'] },
  { id: 'foton', name: { zh: '北汽福田', en: 'Beiqi Foton / Foton Group' }, sourceNames: ['Beiqi Foton', 'Foton Group'] },
  { id: 'lushang', name: { zh: '鲁商集团', en: 'Lushang Group' }, sourceNames: ['Lushang Group'] },
  { id: 'qinggang', name: { zh: '青钢', en: 'Qinggang' }, sourceNames: ['Qinggang'] },
  { id: 'jigang', name: { zh: '济钢', en: 'Jigang' }, sourceNames: ['Jigang'] },
  { id: 'inspur', name: { zh: '浪潮电子', en: 'Inspur Electronics' }, sourceNames: ['Inspur Electronics'] },
  { id: 'doublestar', name: { zh: '青岛双星', en: 'Qingdao Doublestar' }, sourceNames: ['Qingdao Doublestar'] },
  { id: 'yingxuan', name: { zh: '潍坊英轩', en: 'Weifang Yingxuan' }, sourceNames: ['Weifang Yingxuan'] },
  { id: 'shuntian', name: { zh: '江苏舜天', en: 'Jiangsu Shuntian' }, sourceNames: ['Jiangsu Shuntian'] },
  { id: 'rizhao-jinhe', name: { zh: 'Rizhao Jinhe（日照）', en: 'Rizhao Jinhe' }, sourceNames: ['Rizhao Jinhe'] },
  { id: 'cimc', name: { zh: '中集集团', en: 'China International Marine Containers Group' }, sourceNames: ['China International Marine Containers Group'] },
  { id: 'lianhua', name: { zh: '莲花味精', en: 'Lianhua Monosodium Glutamate' }, sourceNames: ['Lianhua Monosodium Glutamate'] },
  { id: 'taishan', name: { zh: '泰山体育', en: 'Taishan Sports' }, sourceNames: ['Taishan Sports'] },
  { id: 'kerui', name: { zh: '山东科瑞', en: 'Shandong Kerui' }, sourceNames: ['Shandong Kerui'] },
  { id: 'ats-photovoltaic', name: { zh: 'ATS Photovoltaic', en: 'ATS Photovoltaic' }, sourceNames: ['ATS Photovoltaic'] },
  { id: 'first-harbor', name: { zh: '中交一航局', en: 'China Communications First Harbor Engineering Company' }, sourceNames: ['China Communications First Harbor Engineering Company'] },
  { id: 'apple', name: { zh: '苹果公司（美国）', en: 'Apple Inc. (USA)' }, sourceNames: ['Apple Inc. (USA)'] },
  { id: 'schlumberger', name: { zh: '斯伦贝谢', en: 'Schlumberger Oilfield' }, sourceNames: ['Schlumberger Oilfield'] },
  { id: 'tonghe', name: { zh: 'Xinxiang Tonghe Wheel Group（新乡）', en: 'Xinxiang Tonghe Wheel Group' }, sourceNames: ['Xinxiang Tonghe Wheel Group'] },
  { id: 'li-ming', name: { zh: 'Li Ming Heavy Industry', en: 'Li Ming Heavy Industry' }, sourceNames: ['Li Ming Heavy Industry'] },
  { id: 'pingao', name: { zh: 'Pingao Group', en: 'Pingao Group' }, sourceNames: ['Pingao Group'] },
];

export const cargoCategories: LocalizedText[] = [
  { zh: '轮胎', en: 'Tires' },
  { zh: '化工产品', en: 'Chemical products' },
  { zh: '胶合板', en: 'Plywood' },
  { zh: '钢材及钢铁制品', en: 'Steel products' },
  { zh: '汽车', en: 'Vehicles' },
  { zh: '机械设备', en: 'Machinery and equipment' },
  { zh: '重型机械', en: 'Heavy machinery' },
  { zh: '油田设备', en: 'Oilfield equipment' },
  { zh: '电缆', en: 'Cables' },
  { zh: '光伏产品', en: 'Photovoltaic products' },
  { zh: '葡萄酒及啤酒', en: 'Wine and beer' },
  { zh: '食品', en: 'Food products' },
];

export const experienceServices: {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  cargo: LocalizedText;
  operations: LocalizedText;
  sourcePages: number[];
}[] = [
  {
    id: 'ocean-containers',
    title: { zh: '海运整柜与拼箱', en: 'FCL and LCL ocean freight' },
    description: {
      zh: '公司以海运集装箱进出口为主要业务，提供整柜与拼箱服务，并衔接海外代理及配套操作。',
      en: 'Ocean container imports and exports are a core company service, supported by FCL and LCL options, overseas agents and related operations.',
    },
    cargo: { zh: '进出口集装箱货物', en: 'Containerized import and export cargo' },
    operations: { zh: '整柜、拼箱、报关及海外代理衔接', en: 'FCL, LCL, customs coordination and overseas agency support' },
    sourcePages: [9, 11],
  },
  {
    id: 'vehicles',
    title: { zh: '汽车及新能源车辆运输', en: 'Vehicles and new-energy vehicles' },
    description: {
      zh: '公司资料介绍了新能源车辆、机动车及特种车辆的集装箱出口运输服务。',
      en: 'The company brochure describes containerized exports of new-energy vehicles, motor vehicles and special-purpose vehicles.',
    },
    cargo: { zh: '汽车、新能源车辆、特种车辆', en: 'Cars, new-energy vehicles and special-purpose vehicles' },
    operations: { zh: '车辆集装箱出口运输', en: 'Containerized vehicle export transport' },
    sourcePages: [10, 13],
  },
  {
    id: 'special-containers',
    title: { zh: '特种箱及设备装箱', en: 'Special containers and equipment loading' },
    description: {
      zh: '资料列示开顶箱、框架箱等特种箱服务，以及仓库包装、绑扎、加固、监装和拍照操作。',
      en: 'The brochure lists open-top and flat-rack container services, with warehouse packing, lashing, reinforcement, loading supervision and photography.',
    },
    cargo: { zh: '机械设备、重型机械、油田设备', en: 'Machinery, heavy machinery and oilfield equipment' },
    operations: { zh: '开顶箱、框架箱、仓库包装及装箱加固', en: 'Open-top and flat-rack options, warehouse packing and cargo securing' },
    sourcePages: [12, 13],
  },
  {
    id: 'project-bulk',
    title: { zh: '散杂货、滚装与项目货', en: 'Breakbulk, RoRo and project cargo' },
    description: {
      zh: '资料介绍天津、青岛、连云港、上海等港口的散杂货业务，涵盖钢材、设备、车辆和大型项目货，并提供港口加固及监装。',
      en: 'The brochure describes breakbulk services through Tianjin, Qingdao, Lianyungang and Shanghai for steel, equipment, vehicles and large project cargo, with port cargo securing and loading supervision.',
    },
    cargo: { zh: '钢材、设备、车辆、大型项目设备', en: 'Steel, equipment, vehicles and large project equipment' },
    operations: { zh: '散杂货及滚装运输、港口加固、装船监督', en: 'Breakbulk and RoRo transport, port cargo securing and loading supervision' },
    sourcePages: [12],
  },
  {
    id: 'qingdao-imports',
    title: { zh: '青岛进口与报关配套', en: 'Qingdao imports and customs support' },
    description: {
      zh: '公司资料列示青岛港进口集装箱服务，涉及设备、原材料、食品、日用消费品及饮料，并衔接进口报关和查验。',
      en: 'The brochure lists container imports through Qingdao for equipment, raw materials, food, consumer goods and beverages, supported by import customs clearance and inspection coordination.',
    },
    cargo: { zh: '设备、原材料、食品、消费品、饮料', en: 'Equipment, raw materials, food, consumer goods and beverages' },
    operations: { zh: '进口集装箱运输、报关与查验协调', en: 'Import container transport, customs clearance and inspection coordination' },
    sourcePages: [11],
  },
  {
    id: 'air-inland',
    title: { zh: '空运、内陆运输与仓储', en: 'Air freight, inland transport and warehousing' },
    description: {
      zh: '公司提供空运和仓储配套服务，资料中的内陆运输网络覆盖多个港口与省份，并提供陆运及配送服务。',
      en: 'Air freight and warehousing complement the company’s ocean freight services. The brochure also describes inland transport across multiple ports and provinces, including road transport and distribution.',
    },
    cargo: { zh: '进出口货物', en: 'Import and export cargo' },
    operations: { zh: '空运配套、内陆运输、配送及仓储', en: 'Air freight support, inland transport, distribution and warehousing' },
    sourcePages: [9, 11],
  },
];
