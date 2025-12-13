export function getBreadcrumbs(categoryName) {
  const items = [{ label: "Home", href: "/" }];

  if (categoryName) {
    items.push({ label: categoryName, href: `/category/${categoryName}` });
  }

  return items;
}
