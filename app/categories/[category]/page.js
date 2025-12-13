import { getCategoryByName, getCategories } from '@/app/_lib/categories';
import ProductList from '@/app/_components/products/ProductList';
import MobileFilters from '@/app/_components/products/MobileFilter';
import { groupCategories } from './groupCategories';

export async function generateMetadata({ params }) {
  const { category } = await params;

  if (!category) return { title: 'Categories' };

  const categoryName = category
    .split('-')
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${categoryName}`,
  };
}

async function Page({ params }) {
  const { category } = await params;
  const data = await getCategoryByName(category);
  const products = data.products;

  const categories = await getCategories();
  const groupedCategories = groupCategories(categories);

  return (
    <div className="px-4 sm:px-6 md:px-8">
      <h1 className="mb-4 text-xl sm:text-2xl md:text-3xl font-semibold capitalize">
        {category} Products
      </h1>

      {/* Client Component for mobile */}
      <MobileFilters groupedCategories={groupedCategories} />

      {/* Product List */}
      <ProductList products={products} />
    </div>
  );
}

export default Page;
