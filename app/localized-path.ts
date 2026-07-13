import type { Lang } from './content-data';

export function localizePath(path: string, lang: Lang) {
  if (path.startsWith('#') || lang === 'zh') {
    return path;
  }

  if (path === '/') {
    return '/en';
  }

  return path.startsWith('/en') ? path : `/en${path}`;
}
