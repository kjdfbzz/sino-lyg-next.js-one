type LocalizedText = { zh: string; en: string };

export type FactoryGallery = {
  id: string;
  brand: LocalizedText;
  introduction: LocalizedText;
  images: {
    id: string;
    imageUrl: string;
    imageAlt: LocalizedText;
    sourceUrl: string;
    publishedAt: string;
  }[];
};

// Sources are retained for attribution and structured data, without outgoing gallery links.
// Manufacturer photos do not establish Global View Logistics as their shipment forwarder.
export const factoryGalleries: FactoryGallery[] = [
  {
    "id": "xugong",
    "brand": {
      "zh": "徐工集团",
      "en": "XCMG"
    },
    "introduction": {
      "zh": "工程机械制造商，图片展示连云港港口发运、集装箱运输与装船作业。",
      "en": "Construction machinery manufacturer. Photos show port dispatch, container transport and vessel loading in Lianyungang."
    },
    "images": [
      {
        "id": "xcmg-ship-quay",
        "imageUrl": "https://www.xcmg.com/lddp/upload/images/2021/07/22/9a3430f65ab74e729af30a08a12efb87.jpg",
        "imageAlt": {
          "zh": "中远圣保罗轮与码头岸桥",
          "en": "COSCO SAO PAULO alongside quay cranes"
        },
        "sourceUrl": "https://www.xcmg.com/lddp/news/news-detail-636568.htm",
        "publishedAt": "2021-07-21"
      },
      {
        "id": "xcmg-ship-terminal",
        "imageUrl": "https://www.xcmg.com/lddp/upload/images/2021/07/21/54ea9ad0e8c148338c0572d274522698.jpg",
        "imageAlt": {
          "zh": "集装箱船靠泊码头与红色岸桥",
          "en": "Container ship berthed beside red quay cranes"
        },
        "sourceUrl": "https://www.xcmg.com/lddp/news/news-detail-636568.htm",
        "publishedAt": "2021-07-21"
      },
      {
        "id": "xcmg-container-truck",
        "imageUrl": "https://www.xcmg.com/lddp/upload/images/2021/07/22/d7cd4a7a8293434baff9af41c8058c85.jpg",
        "imageAlt": {
          "zh": "带徐工和中远海运标识的集装箱拖车",
          "en": "Container truck carrying XCMG and COSCO SHIPPING markings"
        },
        "sourceUrl": "https://www.xcmg.com/lddp/news/news-detail-636568.htm",
        "publishedAt": "2021-07-21"
      },
      {
        "id": "xcmg-container-loading",
        "imageUrl": "https://www.xcmg.com/lddp/upload/images/2021/07/22/45d7885b4bb546689b193de55ab43b3b.jpg",
        "imageAlt": {
          "zh": "码头岸桥与集装箱拖车装船作业",
          "en": "Quay crane and container truck during vessel loading"
        },
        "sourceUrl": "https://www.xcmg.com/lddp/news/news-detail-636568.htm",
        "publishedAt": "2021-07-21"
      }
    ]
  },
  {
    "id": "foton",
    "brand": {
      "zh": "北汽福田",
      "en": "FOTON Motor"
    },
    "introduction": {
      "zh": "商用车制造商，图片展示福田皮卡港口集结、滚装登船与运输船舶。",
      "en": "Commercial vehicle manufacturer. Photos show FOTON pickups at the port, Ro-Ro boarding and a transport vessel."
    },
    "images": [
      {
        "id": "foton-pickup-boarding",
        "imageUrl": "https://www.fotonmotor.com/fotonmotor/58881c4d07f14cf3b8af671251c56eb5.png",
        "imageAlt": {
          "zh": "福田皮卡通过船尾跳板驶入滚装船",
          "en": "FOTON pickup boarding a Ro-Ro vessel via the stern ramp"
        },
        "sourceUrl": "https://www.fotonmotor.com/news/new-automaker-shipping-Integration-model-foton-motor-cosco--shping-special-transport-joint-venture-officially-launched.html",
        "publishedAt": "2026-03-27"
      },
      {
        "id": "foton-roro-vessel",
        "imageUrl": "https://www.fotonmotor.com/fotonmotor/cca55aaa5d7743dbb90192397337d484.png",
        "imageAlt": {
          "zh": "印有福田和中远海运标识的滚装船航行全景",
          "en": "Ro-Ro vessel underway with FOTON and COSCO SHIPPING markings"
        },
        "sourceUrl": "https://www.fotonmotor.com/news/new-automaker-shipping-Integration-model-foton-motor-cosco--shping-special-transport-joint-venture-officially-launched.html",
        "publishedAt": "2026-03-27"
      },
      {
        "id": "foton-pickups-port-lineup",
        "imageUrl": "https://www.fotonmotor.com/fotonmotor/c2da764b44344f74b3691fbb9f2000c9.png",
        "imageAlt": {
          "zh": "福田皮卡在港口场地列队，背景为码头起重机",
          "en": "FOTON pickups lined up in a port yard with quay cranes behind them"
        },
        "sourceUrl": "https://www.fotonmotor.com/news/new-automaker-shipping-Integration-model-foton-motor-cosco--shping-special-transport-joint-venture-officially-launched.html",
        "publishedAt": "2026-03-27"
      }
    ]
  },
  {
    "id": "liugong",
    "brand": {
      "zh": "柳工",
      "en": "LiuGong"
    },
    "introduction": {
      "zh": "工程机械制造商，图片展示柳工桩工设备在中东施工现场的应用。",
      "en": "Construction machinery manufacturer. Photos show LiuGong piling equipment in use at Middle East construction sites."
    },
    "images": [
      {
        "id": "liugong-piling-front",
        "imageUrl": "https://osmedia.liugong.com/wp-content/blogs.dir/4/files/2025/08/640-2-1024x768.jpg",
        "imageAlt": {
          "zh": "绿色桩工设备与现场施工人员",
          "en": "Green piling equipment and workers at a construction site"
        },
        "sourceUrl": "https://middleeast.liugong.com/news/liugong-machines-have-earned-widespread-acclaim-and-achieved-a-high-customer-repurchase-rate/",
        "publishedAt": "2025-07-01"
      },
      {
        "id": "liugong-piling-wide",
        "imageUrl": "https://osmedia.liugong.com/wp-content/blogs.dir/4/files/2025/08/640-1-768x1024.jpg",
        "imageAlt": {
          "zh": "工地上的高桅杆桩工设备全景",
          "en": "Full view of a tall-mast piling machine at a construction site"
        },
        "sourceUrl": "https://middleeast.liugong.com/news/liugong-machines-have-earned-widespread-acclaim-and-achieved-a-high-customer-repurchase-rate/",
        "publishedAt": "2025-07-01"
      },
      {
        "id": "liugong-piling-side",
        "imageUrl": "https://osmedia.liugong.com/wp-content/blogs.dir/4/files/2025/08/640-3-768x1024.jpg",
        "imageAlt": {
          "zh": "桩工设备侧面与钻孔套管",
          "en": "Side view of piling equipment and drilling casing"
        },
        "sourceUrl": "https://middleeast.liugong.com/news/liugong-machines-have-earned-widespread-acclaim-and-achieved-a-high-customer-repurchase-rate/",
        "publishedAt": "2025-07-01"
      },
      {
        "id": "liugong-piling-rear",
        "imageUrl": "https://osmedia.liugong.com/wp-content/blogs.dir/4/files/2025/08/640-4-768x1024.jpg",
        "imageAlt": {
          "zh": "桩工设备履带与钻孔装置后侧",
          "en": "Rear view of piling machine tracks and drilling equipment"
        },
        "sourceUrl": "https://middleeast.liugong.com/news/liugong-machines-have-earned-widespread-acclaim-and-achieved-a-high-customer-repurchase-rate/",
        "publishedAt": "2025-07-01"
      }
    ]
  }
];
