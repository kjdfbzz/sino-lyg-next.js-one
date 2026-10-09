import AboutPage from '../../AboutPage';
import { aboutMetadata, aboutPageJsonLd } from '../../seo';

export const metadata = aboutMetadata('en');

export default function EnglishAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd('en')).replace(/</g, '\\u003c') }}
      />
      <AboutPage lang="en" />
    </>
  );
}
