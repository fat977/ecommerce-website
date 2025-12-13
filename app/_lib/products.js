export async function getProductById(productId) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${productId}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.status}`);
    }

    const product = await res.json();
    return product;
  } catch (error) {
    console.error('Error fetching product:', error.message);
    throw new Error('Unable to load product. Please try again later.');
  }
}

export async function getProducts() {
  try {
    const res = await fetch('https://dummyjson.com/products?limit=140', {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const data = await res.json();
    const products = data.products;
    return products;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw new Error('Unable to load products. Please try again later.');
  }
}

export async function getFlashSaleProducts() {
  const fieldsToSelect = 'id,title,price,discountPercentage,thumbnail,category,reviews';
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=140&select=${fieldsToSelect}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const data = await res.json();
    const products = data.products;
    const flashSaleProducts = products.filter((p) => p.discountPercentage > 18.5);
    return flashSaleProducts;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw new Error('Unable to load products. Please try again later.');
  }
}

export async function getSimilarProducts(category, excludeId) {
  try {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const data = await res.json();
    return data.products.filter((pro) => pro.id !== excludeId);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw new Error('Unable to load products. Please try again later.');
  }
}

export async function getRandomProducts() {
  const fieldsToSelect = 'id,title,price,discountPercentage,thumbnail,category,reviews';
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=140&select=${fieldsToSelect}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const data = await res.json();
    const products = data.products;
    const shuffled = products.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    return selected;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw new Error('Unable to load products. Please try again later.');
  }
}

export async function searchProducts(query) {
  if (!query) return [];

  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`, {
    cache: 'no-store',
  });

  const data = await res.json();
  return data.products || [];
}
