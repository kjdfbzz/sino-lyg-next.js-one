import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bryce Logistics | 中国出口国际货运顾问',
  description:
    'Bryce Logistics 提供中国出口整柜、拼箱、拖车、报关、海运和空运方案咨询，重点覆盖印巴、中东、南美等航线。',
  alternates: {
    canonical: 'https://www.sinolyg.com',
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
