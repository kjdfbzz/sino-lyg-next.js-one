import SiteLayout from '../SiteLayout';
import { siteMetadata, siteViewport } from '../site-metadata';

export const metadata = siteMetadata('en');
export const viewport = siteViewport;

export default function SpanishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
