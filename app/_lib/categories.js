export async function getCategories() {
  try {
    const res = await fetch('https://dummyjson.com/products/category-list', {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    throw new Error('Unable to load categories. Please try again later.');
  }
}

export async function getCategoryByName(categoryName) {
  try {
    const res = await fetch(`https://dummyjson.com/products/category/${categoryName}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch category: ${res.status}`);
    }

    const category = await res.json();
    return category;
  } catch (error) {
    console.error('Error fetching category:', error.message);
    throw new Error('Unable to load category. Please try again later.');
  }
}
