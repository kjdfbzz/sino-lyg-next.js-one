import type { ArticleLang } from './content-data';

export function localizePath(path: string, lang: ArticleLang) {
  if (path.startsWith('#') || !path.startsWith('/')) {
    return path;
  }

  const basePath = path.replace(/^\/(?:en|es)(?=\/|\?|#|$)/, '') || '/';

  if (lang === 'zh') {
    return basePath;
  }

  return basePath === '/' ? `/${lang}` : `/${lang}${basePath}`;
}
