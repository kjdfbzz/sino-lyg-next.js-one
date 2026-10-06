'use client';

import { useEffect } from 'react';
import type { Lang } from './content-data';

function persistLanguage(lang: Lang) {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
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

  // The URL owns the language; saved preferences never replace page content.
  return [initialLang, persistLanguage] as const;
}
