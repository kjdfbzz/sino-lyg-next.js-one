'use client';

import type { Lang } from './content-data';
import { usePreferredLanguage } from './use-language';

export default function PageLanguage({ lang }: { lang: Lang }) {
  usePreferredLanguage(lang);
  return null;
}
