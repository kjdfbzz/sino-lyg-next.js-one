'use client';

import { useEffect, useState } from 'react';
import type { Lang } from './content-data';

const languageStorageKey = 'bryce_lang';

function normalizeLanguage(value: string | null | undefined): Lang | null {
  if (!value) {
    return null;
  }

  const normalized = value.toLowerCase();

  if (normalized.startsWith('zh')) {
    return 'zh';
  }

  if (normalized.startsWith('en')) {
    return 'en';
  }

  return null;
}

function detectBrowserLanguage(): Lang {
  if (typeof navigator === 'undefined') {
    return 'zh';
  }

  const languages =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  return languages.some((item) => normalizeLanguage(item) === 'zh') ? 'zh' : 'en';
}

function persistLanguage(lang: Lang) {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.cookie = `bryce_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
  }

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(languageStorageKey, lang);
  }
}

export function usePreferredLanguage(
  initialLang: Lang = 'zh',
  options: { detect?: boolean } = {},
) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const detect = options.detect ?? true;

  useEffect(() => {
    if (!detect) {
      setLangState(initialLang);
      persistLanguage(initialLang);
      return;
    }

    const stored =
      typeof window === 'undefined'
        ? null
        : normalizeLanguage(window.localStorage.getItem(languageStorageKey));
    const preferred = stored ?? detectBrowserLanguage();

    setLangState(preferred);
    persistLanguage(preferred);
  }, [detect, initialLang]);

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    persistLanguage(nextLang);
  };

  return [lang, setLang] as const;
}
