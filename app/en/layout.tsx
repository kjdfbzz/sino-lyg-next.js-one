import SiteLayout from '../SiteLayout';
import { siteMetadata, siteViewport } from '../site-metadata';

export const metadata = siteMetadata('en');
export const viewport = siteViewport;

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteLayout lang="en">{children}</SiteLayout>
      </body>
    </html>
  );
}
