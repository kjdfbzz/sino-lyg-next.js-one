import ExperiencePage from '../../ExperiencePage';
import { experienceMetadata, experiencePageJsonLd } from '../../seo';

export const metadata = experienceMetadata('en');

export default function EnglishExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experiencePageJsonLd('en')).replace(/</g, '\\u003c') }}
      />
      <ExperiencePage lang="en" />
    </>
  );
}
