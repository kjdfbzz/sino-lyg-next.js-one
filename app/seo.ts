import type { Metadata } from 'next';
import { contactEmail, contactPhone, siteUrl, type Lang } from './content-data';
import { localizePath } from './localized-path';

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
    title: '连云港货代 · 青岛出口海运空运 | Bryce Logistics',
    description:
      'Bryce Lee 在连云港提供中国出口货运方案咨询，涵盖连云港与青岛整柜、拼箱、空运、拖车和报关，整理印度、巴基斯坦、中东和南美航线的单证、费用与操作要求。',
  },
  en: {
    title: 'China Freight Forwarding from Lianyungang & Qingdao | Bryce Logistics',
    description:
      'China export freight consulting with Bryce Lee in Lianyungang: FCL, LCL, air freight, trucking and customs from Lianyungang and Qingdao, with practical guides for India, Pakistan, the Middle East and South America.',
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
      '@type': 'ProfessionalService',
      '@id': absoluteUrl('/#organization'),
      name: 'Bryce Logistics',
      alternateName: 'Bryce Lee Freight Consultant',
      url: absoluteUrl('/'),
      image: absoluteUrl('/og-bryce-logistics.jpg'),
      email: contactEmail,
      telephone: `+86${contactPhone}`,
      address: { '@type': 'PostalAddress', addressLocality: 'Lianyungang', addressCountry: 'CN' },
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
      '@type': 'Service',
      '@id': absoluteUrl('/#freight-service'),
      name: 'China export freight consulting',
      serviceType: ['China export ocean freight', 'FCL and LCL freight forwarding', 'Trucking and inland haulage', 'Customs and documentation', 'Air freight and express'],
      provider: { '@id': absoluteUrl('/#organization') },
    },
    {
      '@type': 'Person',
      '@id': absoluteUrl('/#person'),
      name: 'Bryce Lee',
      url: absoluteUrl('/#about'),
      jobTitle: 'Freight forwarding consultant',
      email: contactEmail,
      knowsAbout: ['China export freight', 'FCL and LCL shipping', 'Trucking', 'Customs documentation'],
    },
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      name: 'Bryce Logistics',
      url: absoluteUrl('/'),
      inLanguage: ['zh-CN', 'en'],
      publisher: { '@id': absoluteUrl('/#organization') },
    },
  ],
};
