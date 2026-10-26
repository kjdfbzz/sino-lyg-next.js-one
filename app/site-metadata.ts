import type { Metadata, Viewport } from 'next';
import { siteUrl, type Lang } from './content-data';
import { formatPageTitle } from './metadata-title';

export const siteViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const defaultCopy = {
  zh: {
    title: 'Bryce Logistics | 中国出口海运空运拖车报关顾问',
    description:
      '李经理 Bryce Lee，港威国际物流连云港销售经理，提供出口整柜、拼箱、拖车、报关、空运方案，服务连云港、青岛及印巴、中东、拉美等贸易航线。',
    keywords: ['中国出口货代', '连云港货代', '青岛货代', '国际海运', '整柜', '拼箱', '拖车报关', 'India shipping', 'Middle East freight', 'South America shipping'],
    author: '李经理 Bryce Lee',
    path: '/',
    aboutPath: '/about',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
  },
  en: {
    title: 'Bryce Logistics | China Export Freight Consultant',
    description:
      'Bryce Lee, Sales Manager at Global View Logistics in Lianyungang, supports FCL, LCL, trucking, customs and air freight from Lianyungang and Qingdao to India, Pakistan, the Middle East and Latin America.',
    keywords: ['China freight forwarder', 'Lianyungang freight forwarder', 'Qingdao freight forwarder', 'FCL shipping', 'LCL shipping', 'China export customs', 'India shipping', 'Middle East freight', 'South America shipping'],
    author: 'Bryce Lee',
    path: '/en',
    aboutPath: '/en/about',
    locale: 'en_US',
    alternateLocale: 'zh_CN',
  },
};

export function siteMetadata(lang: Lang): Metadata {
  const copy = defaultCopy[lang];

  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: formatPageTitle(copy.title) },
    description: copy.description,
    keywords: copy.keywords,
    authors: [{ name: copy.author, url: new URL(copy.aboutPath, siteUrl).toString() }],
    creator: 'Bryce Lee',
    publisher: 'Bryce Lee',
    verification: {
      ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
      other: {
        ...(process.env.BING_SITE_VERIFICATION ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } : {}),
        'baidu-site-verification': 'codeva-LpdoPMYi9v',
      },
    },
    openGraph: {
      type: 'website',
      locale: copy.locale,
      alternateLocale: [copy.alternateLocale],
      url: new URL(copy.path, siteUrl).toString(),
      siteName: 'Bryce Logistics',
      title: copy.title,
      description: copy.description,
      images: [{
        url: '/og-bryce-logistics.jpg',
        width: 1200,
        height: 630,
        alt: 'Bryce Logistics China export freight consultant',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: ['/og-bryce-logistics.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}
