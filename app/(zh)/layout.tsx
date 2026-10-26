import SiteLayout from '../SiteLayout';
import { siteMetadata, siteViewport } from '../site-metadata';

export const metadata = siteMetadata('zh');
export const viewport = siteViewport;

export default function ChineseRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteLayout lang="zh">{children}</SiteLayout>
      </body>
    </html>
  );
}
