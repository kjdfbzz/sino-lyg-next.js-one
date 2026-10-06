import type { Lang } from './content-data';

export function localizePath(path: string, lang: Lang) {
  if (path.startsWith('#') || !path.startsWith('/')) {
    return path;
  }

  const basePath = path.replace(/^\/en(?=\/|\?|#|$)/, '') || '/';

  if (lang === 'zh') {
    return basePath;
  }

  return basePath === '/' ? '/en' : `/en${basePath}`;
}
