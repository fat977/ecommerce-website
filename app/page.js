import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './_components/products/ProductCard';
import HomeCarousel from './_components/ui/carousel/HomeCarousel';
import ButtonLink from './_components/ui/links/ButtonLink';
import { getCategories } from './_lib/categories';
import { getFlashSaleProducts, getRandomProducts } from './_lib/products';
import { groupCategories } from './categories/[category]/groupCategories';

export default async function Home() {
//fetch all data
  const [bestSellerProducts, newProducts, categories, flashSaleProducts] =
    await Promise.all([
      getRandomProducts(5, 'best_seller'), // يفترض وجود معلمة لجلب النوع المحدد
      getRandomProducts(5, 'new_arrival'),
      getCategories(),
      getFlashSaleProducts(),
    ]);

  const groupedCategories = groupCategories(categories);

  return (
    <>
      {/* Carousel */}
      <HomeCarousel slides={groupedCategories.carousel || []} />

      {/* Categories */}
      <section className="mx-4 sm:mx-6 md:mx-10 lg:mx-14 my-8 sm:my-10">
        <h2 className="mb-10 text-primary-800 text-3xl font-bold">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {Object.entries(groupedCategories).map(([group, data]) => {
            const items = data.items || [];
            const image = data.image;
            if (!items.length || items.length < 3) return null;

            return (
              <div
                className="bg-primary-800 p-5 shadow-xl rounded-xl flex flex-col md:flex-row items-start gap-4 h-full"
                key={group}
              >
                <div className="w-full md:w-1/3 relative h-40 md:h-52 lg:h-40">
                  <Image
                    src={image}
                    alt={group}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover shadow-md rounded-lg"
                    loading="lazy" 
                  />
                </div>

                <div className="flex flex-col h-full w-full rounded-lg space-y-2 justify-center flex-1">
                  <h1 className="text-3xl uppercase font-bold text-primary-50 mb-1">
                    {group}
                  </h1>

                  <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                      <Link
                        key={index}
                        className="text-sm mb-2 hover:text-primary-500 text-primary-100 font-semibold transition-colors"
                        href={`/categories/${encodeURIComponent(item)}`}
                      >
                        {item.replace(/^.+-/, '')}
                      </Link>
                    ))}
                  </div>

                  <ButtonLink href="/" className="mt-auto">
                    Explore
                  </ButtonLink>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Best Sellers */}
      <Section title="Best Sellers" products={bestSellerProducts} />

      {/* New Arrivals */}
      <Section title="New Arrivals" products={newProducts} />

      {/* Flash Sale */}
      <Section title="Flash Sale" products={flashSaleProducts} sale />
    </>
  );
}

// Component for products section to avoid repetition
function Section({ title, products, sale = false }) {
  return (
    <section className="mx-4 sm:mx-6 md:mx-10 lg:mx-14 my-8 sm:my-10">
      <h2 className="mb-8 text-primary-800 text-2xl sm:text-3xl font-bold">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} sale={sale} />
        ))}
      </div>
    </section>
  );
}
