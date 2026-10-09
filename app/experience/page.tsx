import ExperiencePage from '../ExperiencePage';
import { experienceMetadata, experiencePageJsonLd } from '../seo';

export const metadata = experienceMetadata('zh');

export default function ChineseExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experiencePageJsonLd('zh')).replace(/</g, '\\u003c') }}
      />
      <ExperiencePage lang="zh" />
    </>
  );
}
