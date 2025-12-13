'use client';
import dynamic from 'next/dynamic';

function ProductGridSkeleton({ slides = 5 }) {
  return (
    <div className="flex gap-4 overflow-x-hidden">
      {[...Array(slides)].map((_, i) => (
        <div
          key={i}
          className="min-w-[45%] sm:min-w-[30%] lg:min-w-[22%] bg-gray-200 rounded-lg h-60 animate-pulse shrink-0"
        >
          {/* صورة المنتج */}
          <div className="h-40 bg-gray-300 rounded-t-lg"></div>
          {/* عنوان */}
          <div className="h-4 mt-2 mx-2 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 mt-1 mx-2 bg-gray-300 rounded w-1/2"></div>
          {/* سعر */}
          <div className="h-4 mt-2 mx-2 bg-gray-300 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  
  );
}
const Carousel = dynamic(() => import('./Carousel'), {
  ssr: false,
  loading: () => <ProductGridSkeleton />,
});

export default function ProductCarousel({ products }) {
  return (
    <Carousel
      type="product"
      slides={products}
      options={{
        slidesPerView: 2,
        spaceBetween: 16,
        navigation: true,
        loop: true,
        breakpoints: {
          640: { slidesPerView: 3, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
          1280: { slidesPerView: 5, spaceBetween: 24 },
        },
      }}
    />
  );
}
