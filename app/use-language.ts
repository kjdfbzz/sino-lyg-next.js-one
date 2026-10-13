'use client';

import { useEffect } from 'react';
import type { Lang } from './content-data';

function persistLanguage(lang: Lang) {
  document.cookie = `bryce_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
  try {
    window.localStorage.setItem('bryce_lang', lang);
  } catch {
    // Blocked browser storage must not interrupt the language link.
  }
}

export function usePreferredLanguage(initialLang: Lang = 'zh') {
  useEffect(() => {
    persistLanguage(initialLang);
  }, [initialLang]);

  // Root layouts render the URL's language on the server; this only saves preferences.
  return [initialLang, persistLanguage] as const;
}
