import { NextResponse, type NextRequest } from 'next/server';

const localizableSections = new Set(['requirements', 'routes', 'guides']);
const publicFilePattern = /\.[^/]+$/;

function shouldSkip(pathname: string) {
  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/en') ||
    publicFilePattern.test(pathname)
  );
}

function isLocalizablePath(pathname: string) {
  if (pathname === '/') {
    return true;
  }

  const firstSegment = pathname.split('/').filter(Boolean)[0];
  return localizableSections.has(firstSegment);
}

function prefersChinese(acceptLanguage: string | null) {
  return (acceptLanguage || '').toLowerCase().includes('zh');
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldSkip(pathname) || !isLocalizablePath(pathname)) {
    return NextResponse.next();
  }

  const savedLanguage = request.cookies.get('bryce_lang')?.value;

  if (savedLanguage === 'zh') {
    return NextResponse.next();
  }

  if (savedLanguage === 'en' || !prefersChinese(request.headers.get('accept-language'))) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};
