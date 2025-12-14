// components/products/BaseProductItem.jsx
import React from 'react';
import Button from '@/app/_components/ui/buttons/Button';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function BaseProductItem({ product, extraComponent, onRemove }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3 min-w-0">
      {/* Left: Image + Info */}
      <div className="flex items-center gap-3 min-w-0">
        <Link href={`/products/${product.productId}`} className="block shrink-0">
          <div className="relative w-16 h-12 sm:w-20 sm:h-14 rounded-md overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 80px"
              className="object-cover"
            />
          </div>
        </Link>

        {/* Text */}
        <div className="flex flex-col min-w-0">
          <p
            className="text-sm sm:text-base font-medium leading-tight truncate"
            title={product.name}
          >
            {product.name} {product.quantity && `(${product.quantity})`}
          </p>
          <p className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 sm:gap-3 justify-end shrink-0">
        {extraComponent}

        <Button onClick={() => onRemove(product.productId)} className="p-2">
          <Trash2 className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
        </Button>
      </div>
    </div>
  );
}
