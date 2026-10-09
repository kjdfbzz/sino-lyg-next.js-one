type LocalizedText = { zh: string; en: string };

// Manufacturer reports are attributed to their publishers; they do not establish GWL as the carrier.
export const factoryShipments: {
  id: string;
  customerId: string;
  brand: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  publishedAt: string;
  imageUrl: string;
  sourceUrl: string;
  sourceName: LocalizedText;
  imageAlt: LocalizedText;
}[] = [
  {
    id: 'xcmg-lianyungang-south-america',
    customerId: 'xugong',
    brand: { zh: '徐工集团', en: 'XCMG' },
    title: { zh: '徐工设备从连云港发往南美', en: 'XCMG equipment sails from Lianyungang to South America' },
    summary: {
      zh: '2021 年 7 月 20 日，近千台徐工挖掘机、装载机和平地机从连云港港乘“中远圣保罗”轮发往南美。',
      en: 'On 20 July 2021, nearly 1,000 XCMG excavators, loaders and graders departed Lianyungang aboard COSCO SAO PAULO for South America.',
    },
    publishedAt: '2021-07-21',
    imageUrl: 'https://www.xcmg.com/lddp/upload/images/2021/07/22/9a3430f65ab74e729af30a08a12efb87.jpg',
    sourceUrl: 'https://www.xcmg.com/lddp/news/news-detail-636568.htm',
    sourceName: { zh: '徐工官网', en: 'XCMG official' },
    imageAlt: { zh: '徐工官网报道中的连云港码头中远圣保罗轮与岸桥', en: 'COSCO SAO PAULO and quay cranes at Lianyungang, from XCMG’s official shipment report' },
  },
  {
    id: 'foton-pickups-south-america',
    customerId: 'foton',
    brand: { zh: '北汽福田', en: 'FOTON Motor' },
    title: { zh: '600 辆福田皮卡集结，准备发往南美', en: '600 FOTON pickups prepared for South America' },
    summary: {
      zh: '福田报道，600 辆皮卡在港口集结，准备由“凯远口”轮发往南美。图片展示皮卡通过船尾跳板登船。',
      en: 'FOTON reported 600 pickups assembled at the port for shipment to South America aboard Kai Yuankou. The photo shows a pickup boarding the Ro-Ro vessel.',
    },
    publishedAt: '2026-03-27',
    imageUrl: 'https://www.fotonmotor.com/fotonmotor/58881c4d07f14cf3b8af671251c56eb5.png',
    sourceUrl: 'https://www.fotonmotor.com/news/new-automaker-shipping-Integration-model-foton-motor-cosco--shping-special-transport-joint-venture-officially-launched.html',
    sourceName: { zh: '福田官网', en: 'FOTON official' },
    imageAlt: { zh: '福田皮卡通过船尾跳板登上带有 FOTON 与 COSCO SHIPPING 标识的滚装船', en: 'FOTON pickup boarding a Ro-Ro vessel bearing FOTON and COSCO SHIPPING markings' },
  },
  {
    id: 'liugong-middle-east-deliveries',
    customerId: 'liugong',
    brand: { zh: '柳工', en: 'LiuGong' },
    title: { zh: '柳工桩工设备交付中东市场', en: 'LiuGong piling equipment delivered to the Middle East' },
    summary: {
      zh: '柳工中东官网报道，2025 年多台 SD26W、SD32W 桩工设备交付中东市场。配图展示设备在工地的应用。',
      en: 'LiuGong’s Middle East website reported deliveries of multiple SD26W and SD32W piling machines in 2025. The photo shows equipment in use at a construction site.',
    },
    publishedAt: '2025-07-01',
    imageUrl: 'https://osmedia.liugong.com/wp-content/blogs.dir/4/files/2025/08/640-2-1024x768.jpg',
    sourceUrl: 'https://middleeast.liugong.com/news/liugong-machines-have-earned-widespread-acclaim-and-achieved-a-high-customer-repurchase-rate/',
    sourceName: { zh: '柳工中东官网', en: 'LiuGong Middle East' },
    imageAlt: { zh: '柳工中东官方交付报道中的桩工设备工地应用照片', en: 'Piling equipment operating at a construction site, from LiuGong Middle East’s official delivery report' },
  },
];
