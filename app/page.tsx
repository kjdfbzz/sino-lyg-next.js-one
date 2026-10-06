import Home from './HomePageClient';
import { homeMetadata, homePageJsonLd } from './seo';

export const metadata = homeMetadata('zh');

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd('zh')) }} />
      <Home initialLang="zh" />
    </>
  );
}
