// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "中国到全球海运｜国际货代｜SINOLYG 物流 | Speed Logistics",
  description:
    "SINOLYG专注中国到全球的海运、空运、清关与供应链服务。优势航线覆盖印度、孟加拉、巴基斯坦、中东、非洲、南美。提供青岛、连云港、上海、宁波等主要港口一站式物流解决方案。",
  alternates: {
    canonical: "https://www.sinolyg.com",
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
