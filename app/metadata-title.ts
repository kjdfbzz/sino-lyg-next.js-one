const titleSuffix = ' | Bryce Logistics';

export function formatPageTitle(title: string) {
  let baseTitle = title;

  while (baseTitle.endsWith(titleSuffix)) {
    baseTitle = baseTitle.slice(0, -titleSuffix.length);
  }

  const brandedTitle = `${baseTitle}${titleSuffix}`;
  return Array.from(brandedTitle).length <= 70 ? brandedTitle : baseTitle;
}
