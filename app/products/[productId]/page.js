import Breadcrumbs from '@/app/_components/navigation/Breadcrumbs';
import QtyCart from '@/app/_components/ui/QtyCart';
import StarRating from '@/app/_components/ui/StarRating';
import Button from '@/app/_components/ui/buttons/Button';
import ProductCarousel from '@/app/_components/ui/carousel/ProductCarousel';
import { getProductById, getSimilarProducts } from '@/app/_lib/products';
import { getBreadcrumbs } from '@/app/utils/getBreadcrumbs';
import Gallery from '../Gallery';
import ProductTabs from '../ProductTabs';


export async function generateMetadata({ params }) {
  // unwrap the params promise
  const { productId } = await params;

  if (!productId) return { title: 'Products' };

  // fetch  from API
  try {
    const res = await fetch(`https://dummyjson.com/products/${productId}`, {
      cache: 'no-store',
    });
    if (!res.ok) return { title: 'Products' };
    const product = await res.json();
    return { title: product?.title || 'Products' };
  } catch (error) {
    console.error('Error fetching product:', error);
    return { title: 'Products' };
  }
}

async function Page({ params }) {
  const { productId } = await params;
  const product = await getProductById(productId);
  const items = getBreadcrumbs(product.category);

// Add the product name as the last element
  items.push({ label: product.title });

  const similarProducts = await getSimilarProducts(product.category, product.id);

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs items={items} />

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 sm:p-7">
        {/* Gallery */}
        <Gallery images={product.images} />

        {/* Details */}
        <div className="details space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
            <StarRating
              maxRating={5}
              size={20}
              color="#fcc419"
              defaultRating={product.rating}
            />
            <span>({product.reviews.length} ratings)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            {product.discountPercentage > 0 && (
              <p className="text-gray-500 line-through text-sm sm:text-base">
                ${product.price}
              </p>
            )}
            <p className="text-primary-600 text-xl sm:text-2xl font-semibold">
              $
              {(
                product.price -
                (product.discountPercentage / 100) * product.price
              ).toFixed(2)}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base">{product.description}</p>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <QtyCart productQty={product.quantity} />
            <Button variant="primary" className="w-full rounded-full" size="lg">
              Add to Cart
            </Button>
          </div>

          {/* Availability */}
          <p className="text-gray-600 text-sm sm:text-base">
            Availability: {product.availabilityStatus}
          </p>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-10 sm:mt-12 px-4 sm:px-7">
        <ProductTabs product={product} />
      </div>

      {/* Similar Products */}
      {similarProducts?.length > 0 && (
        <section className="px-4 sm:px-7 py-10 sm:py-14 bg-gray-50">
          <h2 className="mb-10 sm:mb-8 text-2xl sm:text-3xl md:text-3xl font-bold text-primary-900">
            Similar Products
          </h2>
         <ProductCarousel products={similarProducts} />
        </section>
      )}
    </>
  );
}

export default Page;
