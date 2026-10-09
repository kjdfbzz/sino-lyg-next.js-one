import AboutPage from '../AboutPage';
import { aboutMetadata, aboutPageJsonLd } from '../seo';

export const metadata = aboutMetadata('zh');

export default function ChineseAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd('zh')).replace(/</g, '\\u003c') }}
      />
      <AboutPage lang="zh" />
    </>
  );
}
