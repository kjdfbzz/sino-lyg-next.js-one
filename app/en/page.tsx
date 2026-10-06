import Home from '../HomePageClient';
import { homeMetadata, homePageJsonLd } from '../seo';

export const metadata = homeMetadata('en');

export default function EnglishHome() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd('en')) }} />
      <Home initialLang="en" />
    </>
  );
}
