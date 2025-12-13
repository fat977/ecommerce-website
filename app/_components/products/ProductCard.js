"use client"
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { memo } from 'react';


const StarRating = dynamic(() => import('../ui/StarRating'), { ssr: false });
const CartBtn = dynamic(() => import('../ui/buttons/CartBtn'), { ssr: false });
const WishlistBtn = dynamic(() => import('../ui/buttons/WishlistBtn'), { ssr: false });

function ProductCard({ product, sale = false }) {
  return (
    <div className="relative shadow-lg text-primary-900 p-3 sm:p-4 transition-transform duration-300 flex flex-col gap-2.5">
      {/* product img  */}
      <div className="relative w-full aspect-4/5 mb-3 min-h-[150px] rounded-lg overflow-hidden will-change-transform">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        {sale && (
          <span className="absolute top-2 left-2 rounded-full bg-red-600 px-2 py-0.5 text-[10px] sm:text-xs font-bold shadow text-white border border-primary-500">
            {product.discountPercentage.toFixed()}%
          </span>
        )}
      </div>

      {/* product title  */}
      <h2 className="font-semibold text-sm sm:text-base md:text-lg mb-1 line-clamp-2 leading-snug">
        <Link
          href={`/products/${product.id}`}
          className="hover:text-primary-700 transition-colors"
        >
          {product.title}
        </Link>
      </h2>

      {/* rating */}
      <div className="flex items-center gap-1.5 mb-2 text-gray-700">
        <StarRating
          maxRating={5}
          size={18}
          color="#fcc419"
          defaultRating={product.rating}
        />
        <span className="text-xs sm:text-sm">({product.reviews.length})</span>
      </div>

      {/* price and buttons  */}
      <div className="flex justify-between items-center mt-auto gap-2">
        {sale ? (
          <div className="flex flex-col leading-tight">
            <span className="text-primary-500 text-base font-bold">
              ${((product.price * (100 - product.discountPercentage)) / 100).toFixed(2)}
            </span>
            <span className="text-gray-500 text-xs line-through">
              ${product.price.toFixed(2)}
            </span>
          </div>
        ) : (
          <span className="text-primary-500 text-base font-bold">
            ${product.price.toFixed(2)}
          </span>
        )}

        <div className="flex gap-1.5">
          <CartBtn productId={product.id} />
          <WishlistBtn productId={product.id} />
        </div>
      </div>
    </div>
  );
}

export default memo(ProductCard);
