import type { Metadata } from 'next';
import { siteUrl } from './content-data';
import { siteJsonLd } from './seo';
import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bryce Logistics | 中国出口海运空运拖车报关顾问',
    template: '%s | Bryce Logistics',
  },
  description:
    '李经理 Bryce Lee，港威国际物流连云港销售经理，提供出口整柜、拼箱、拖车、报关、空运方案，服务连云港、青岛及印巴、中东、拉美等贸易航线。',
  keywords: [
    '中国出口货代',
    '连云港货代',
    '青岛货代',
    '国际海运',
    '整柜',
    '拼箱',
    '拖车报关',
    'India shipping',
    'Middle East freight',
    'South America shipping',
  ],
  authors: [{ name: '李经理 Bryce Lee', url: 'https://www.sinolyg.com/about' }],
  creator: 'Bryce Lee',
  publisher: 'Bryce Lee',
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
    ...(process.env.BING_SITE_VERIFICATION ? { other: { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } } : {}),
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.sinolyg.com',
    siteName: 'Bryce Logistics',
    title: 'Bryce Logistics | 中国出口海运空运拖车报关顾问',
    description:
      '港威国际物流连云港李经理 Bryce Lee，为外贸工厂和出口客户梳理整柜、拼箱、拖车、报关、空运和航线方案。',
    images: [
      {
        url: '/og-bryce-logistics.jpg',
        width: 1200,
        height: 630,
        alt: 'Bryce Logistics China export freight consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryce Logistics | China Export Freight Consultant',
    description:
      'FCL, LCL, trucking, customs, air freight and trade-lane planning for China export shipments.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
