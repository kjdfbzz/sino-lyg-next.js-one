import type { Metadata } from 'next';
import { contactEmail, contactPhone, siteUrl, type Lang } from './content-data';
import { localizePath } from './localized-path';
import { companyProfile } from './company-profile';
import { cargoCategories, experienceServices, experienceUpdatedAt } from './experience-data';
import { factoryGalleries } from './factory-shipments';

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function languageUrls(path: string) {
  return {
    'zh-CN': absoluteUrl(localizePath(path, 'zh')),
    en: absoluteUrl(localizePath(path, 'en')),
    'x-default': absoluteUrl(localizePath(path, 'zh')),
  };
}

export function languageAlternates(path: string, lang: Lang): Metadata['alternates'] {
  return {
    canonical: absoluteUrl(localizePath(path, lang)),
    languages: languageUrls(path),
  };
}

const homepageCopy = {
  zh: {
    title: '连云港货代 · 青岛出口海运 | 港威国际物流 Bryce Lee',
    description:
      '李经理 Bryce Lee，港威国际物流连云港销售经理，为连云港与青岛出口客户提供整柜、拼箱、空运、拖车和报关方案，整理印度、中东和拉美航线的单证、费用与操作要求。',
  },
  en: {
    title: 'Lianyungang & Qingdao Freight | Global View Logistics · Bryce Lee',
    description:
      'Bryce Lee, Sales Manager at Global View Logistics in Lianyungang, helps China exporters plan FCL, LCL, air freight, trucking and customs from Lianyungang and Qingdao, with guides for India, the Middle East and Latin America.',
  },
};

export function homeMetadata(lang: Lang): Metadata {
  const copy = homepageCopy[lang];

  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: languageAlternates('/', lang),
    openGraph: {
      type: 'website',
      url: absoluteUrl(localizePath('/', lang)),
      locale: lang === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: [lang === 'zh' ? 'en_US' : 'zh_CN'],
      siteName: 'Bryce Logistics',
      title: copy.title,
      description: copy.description,
      images: [{ url: '/og-bryce-logistics.jpg', width: 1200, height: 630, alt: 'Bryce Logistics China export freight consulting' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: ['/og-bryce-logistics.jpg'],
    },
  };
}

export function homePageJsonLd(lang: Lang) {
  const url = absoluteUrl(localizePath('/', lang));
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: homepageCopy[lang].title,
    description: homepageCopy[lang].description,
    inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
    isPartOf: { '@id': absoluteUrl('/#website') },
    about: { '@id': absoluteUrl('/#organization') },
    mainEntity: { '@id': absoluteUrl('/#freight-service') },
  };
}

export const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': absoluteUrl('/#organization'),
      name: companyProfile.branchName.zh,
      legalName: companyProfile.branchName.zh,
      alternateName: companyProfile.branchName.en,
      url: companyProfile.corporateWebsite,
      parentOrganization: { '@id': absoluteUrl('/#parent-organization') },
      email: contactEmail,
      telephone: `+86${contactPhone}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '海滨大道2号阳光国际中心D-2601室',
        addressLocality: '连云港市',
        addressRegion: '江苏省',
        postalCode: companyProfile.postalCode,
        addressCountry: 'CN',
      },
      areaServed: ['China', 'India', 'Pakistan', 'Middle East', 'South America'],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Freight inquiry',
        telephone: `+86${contactPhone}`,
        email: contactEmail,
        availableLanguage: ['Chinese', 'English'],
      },
    },
    {
      '@type': 'Organization',
      '@id': absoluteUrl('/#parent-organization'),
      name: companyProfile.companyName.zh,
      legalName: companyProfile.companyName.zh,
      alternateName: [companyProfile.companyName.en, companyProfile.brand.zh, companyProfile.brand.en],
      url: companyProfile.corporateWebsite,
      sameAs: [companyProfile.networkProfile],
    },
    {
      '@type': 'Organization',
      '@id': absoluteUrl('/#supply-chain-company'),
      name: companyProfile.supplyChainCompanyName,
      legalName: companyProfile.supplyChainCompanyName,
    },
    {
      '@type': 'Service',
      '@id': absoluteUrl('/#freight-service'),
      name: 'China export freight consulting',
      serviceType: ['China export ocean freight', 'FCL and LCL freight forwarding', 'Trucking and inland haulage', 'Customs and documentation', 'Air freight and express'],
      provider: { '@id': absoluteUrl('/#organization') },
      broker: { '@id': absoluteUrl('/#person') },
    },
    {
      '@type': 'Person',
      '@id': absoluteUrl('/#person'),
      name: companyProfile.personName.en,
      alternateName: companyProfile.personName.zh,
      url: absoluteUrl('/about'),
      jobTitle: companyProfile.role.en,
      worksFor: { '@id': absoluteUrl('/#organization') },
      email: contactEmail,
      telephone: `+86${contactPhone}`,
      knowsAbout: ['China export freight', 'FCL and LCL shipping', 'Trucking', 'Customs documentation'],
    },
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      name: 'Bryce Logistics',
      url: absoluteUrl('/'),
      inLanguage: ['zh-CN', 'en'],
      publisher: { '@id': absoluteUrl('/#person') },
      about: { '@id': absoluteUrl('/#organization') },
    },
  ],
};

const aboutCopy = {
  zh: {
    title: '公司介绍与李经理 Bryce Lee | 港威国际物流连云港',
    description: '了解青岛港威国际物流有限公司及连云港业务联系单位，联系李经理 Bryce Lee，获取出口海运、空运、内陆运输与单证方案。办公地址、公司邮箱和国际电话均可直接查询。',
    breadcrumb: '公司与 Bryce',
  },
  en: {
    title: 'About Global View Logistics & Bryce Lee | Lianyungang',
    description: 'Meet Bryce Lee, Sales Manager at Global View Logistics in Lianyungang. Learn about the company and its ocean freight, air freight, inland transport and documentation services, with direct office and contact details.',
    breadcrumb: 'Company & Bryce',
  },
};

export function aboutMetadata(lang: Lang): Metadata {
  const copy = aboutCopy[lang];
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: languageAlternates('/about', lang),
    authors: [{ name: lang === 'zh' ? '李经理 Bryce Lee' : 'Bryce Lee', url: absoluteUrl(localizePath('/about', lang)) }],
    openGraph: {
      type: 'website',
      url: absoluteUrl(localizePath('/about', lang)),
      title: copy.title,
      description: copy.description,
      siteName: 'Bryce Logistics',
      locale: lang === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: [lang === 'zh' ? 'en_US' : 'zh_CN'],
      images: ['/og-bryce-logistics.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: ['/og-bryce-logistics.jpg'],
    },
  };
}

export function aboutPageJsonLd(lang: Lang) {
  const url = absoluteUrl(localizePath('/about', lang));
  const copy = aboutCopy[lang];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${url}#webpage`,
        url,
        name: copy.title,
        description: copy.description,
        inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
        dateModified: companyProfile.updatedAt,
        isPartOf: { '@id': absoluteUrl('/#website') },
        mainEntity: { '@id': absoluteUrl('/#person') },
        about: [
          { '@id': absoluteUrl('/#organization') },
          { '@id': absoluteUrl('/#parent-organization') },
          { '@id': absoluteUrl('/#supply-chain-company') },
        ],
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: lang === 'zh' ? '首页' : 'Home', item: absoluteUrl(localizePath('/', lang)) },
          { '@type': 'ListItem', position: 2, name: copy.breadcrumb, item: url },
        ],
      },
    ],
  };
}

const experienceCopy = {
  zh: {
    title: '合作客户与工厂展示 | 港威国际物流 · 连云港与青岛货代',
    description: '了解港威合作客户与机械、车辆、钢材等运输服务，浏览徐工、福田和柳工的设备、港口发运与海外应用图片。联系李经理 Bryce Lee 沟通整柜、特种箱和项目货需求。',
    breadcrumb: '合作客户与工厂展示',
  },
  en: {
    title: 'Customers & Factory Gallery | Global View Logistics',
    description: 'Explore Global View customers, ocean freight and project cargo services, alongside equipment, port shipment and overseas application photos from XCMG, FOTON and LiuGong. Contact Bryce Lee for shipment planning.',
    breadcrumb: 'Customers & factory gallery',
  },
};

export function experienceMetadata(lang: Lang): Metadata {
  const copy = experienceCopy[lang];
  const url = absoluteUrl(localizePath('/experience', lang));
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: languageAlternates('/experience', lang),
    authors: [{ name: lang === 'zh' ? '李经理 Bryce Lee' : 'Bryce Lee', url: absoluteUrl(localizePath('/about', lang)) }],
    openGraph: {
      type: 'website', url, title: copy.title, description: copy.description,
      siteName: 'Bryce Logistics',
      locale: lang === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: [lang === 'zh' ? 'en_US' : 'zh_CN'],
      images: [{ url: factoryGalleries[0].images[0].imageUrl, alt: factoryGalleries[0].images[0].imageAlt[lang] }],
    },
    twitter: { card: 'summary_large_image', title: copy.title, description: copy.description, images: [factoryGalleries[0].images[0].imageUrl] },
  };
}

export function experiencePageJsonLd(lang: Lang) {
  const url = absoluteUrl(localizePath('/experience', lang));
  const copy = experienceCopy[lang];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage', '@id': `${url}#webpage`, url,
        name: copy.title, description: copy.description,
        inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
        dateModified: experienceUpdatedAt,
        isPartOf: { '@id': absoluteUrl('/#website') },
        author: { '@id': absoluteUrl('/#person') },
        about: [
          { '@id': absoluteUrl('/#parent-organization') },
          ...cargoCategories.map((category) => ({ '@type': 'Thing', name: category[lang] })),
        ],
        citation: { '@type': 'CreativeWork', name: 'Global View Logistics company brochure', inLanguage: 'es' },
        mainEntity: [{ '@id': `${url}#factory-gallery` }, { '@id': `${url}#service-experience` }],
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'ItemList', '@id': `${url}#service-experience`,
        name: lang === 'zh' ? '业务服务' : 'Logistics services',
        itemListElement: experienceServices.map((service, index) => ({
          '@type': 'ListItem', position: index + 1,
          item: {
            '@type': 'Service', '@id': `${url}#${service.id}`,
            name: service.title[lang], description: service.description[lang],
            provider: { '@id': absoluteUrl('/#parent-organization') },
          },
        })),
      },
      {
        '@type': 'ItemList', '@id': `${url}#factory-gallery`,
        name: lang === 'zh' ? '客户工厂与设备图片' : 'Customer factories & equipment',
        itemListElement: factoryGalleries.map((factory, index) => ({
          '@type': 'ListItem', position: index + 1,
          item: {
            '@type': 'ImageGallery', '@id': `${url}#${factory.id}`, name: factory.brand[lang],
            description: factory.introduction[lang],
            image: factory.images.map((photo) => ({
              '@type': 'ImageObject', contentUrl: photo.imageUrl,
              caption: photo.imageAlt[lang], datePublished: photo.publishedAt,
              creditText: factory.brand[lang],
              isBasedOn: photo.sourceUrl,
            })),
          },
        })),
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: lang === 'zh' ? '首页' : 'Home', item: absoluteUrl(localizePath('/', lang)) },
          { '@type': 'ListItem', position: 2, name: copy.breadcrumb, item: url },
        ],
      },
    ],
  };
}
