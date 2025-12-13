export function groupCategories(categories) {
  const categoryImages = {
    men: '/categories/men.png',
    women: '/categories/women.png',
    tech: '/categories/tech.png',
    home: '/categories/home.png',
    beauty: '/categories/beauty.png',
    vehicles: '/categories/vehicles.png',
    sports: '/categories/sport.png',
    sunglasses: '/categories/sunglasses.png',
  };

  const groups = {
    men: {
      items: categories.filter((c) => c.startsWith('mens-')),
      image: categoryImages.men,
    },
    women: {
      items: categories.filter((c) => c.startsWith('womens-') || c.startsWith('tops')),
      image: categoryImages.women,
    },
    tech: {
      items: categories.filter((c) =>
        ['smartphones', 'laptops', 'tablets', 'mobile-accessories'].includes(c),
      ),
      image: categoryImages.tech,
    },
    home: {
      items: categories.filter((c) =>
        ['furniture', 'groceries', 'home-decoration', 'kitchen-accessories'].includes(c),
      ),
      image: categoryImages.home,
    },
    beauty: {
      items: categories.filter((c) => ['beauty', 'skin-care', 'fragrances'].includes(c)),
      image: categoryImages.beauty,
    },
    vehicles: {
      items: categories.filter((c) => ['motorcycle', 'vehicle'].includes(c)),
      image: categoryImages.vehicles,
    },
    sports: {
      items: categories.filter((c) => ['sports-accessories'].includes(c)),
      image: categoryImages.sports,
    },
    sunglasses: {
      items: categories.filter((c) => ['sunglasses'].includes(c)),
      image: categoryImages.sunglasses,
    },
  };

  return groups;
}
