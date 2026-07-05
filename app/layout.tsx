import type { Metadata } from 'next';
import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sinolyg.com'),
  title: {
    default: 'Bryce Logistics | 中国出口海运空运拖车报关顾问',
    template: '%s | Bryce Logistics',
  },
  description:
    'Bryce Lee 提供中国出口整柜、拼箱、拖车、报关、空运和重点航线方案咨询，服务连云港、青岛及印巴、中东、南美等贸易航线。',
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
  authors: [{ name: 'Bryce Lee', url: 'https://www.sinolyg.com' }],
  creator: 'Bryce Lee',
  publisher: 'Bryce Logistics',
  alternates: {
    canonical: 'https://www.sinolyg.com',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.sinolyg.com',
    siteName: 'Bryce Logistics',
    title: 'Bryce Logistics | 中国出口海运空运拖车报关顾问',
    description:
      '连云港 Bryce Lee 帮外贸工厂和出口客户梳理整柜、拼箱、拖车、报关、空运和重点航线方案。',
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
      <body>{children}</body>
    </html>
  );
}
