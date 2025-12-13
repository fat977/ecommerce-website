// components/products/BaseProductItem.jsx
import React from 'react';
import Button from '@/app/_components/ui/buttons/Button';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';

export default function BaseProductItem({
  product,
  extraComponent, // QtyCart or CartBtn
  onRemove,
}) {
  return (
    <div className="mb-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="relative w-20 h-14 rounded-md overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col ml-3">
          <p className="font-medium">
            {product.name} {product.quantity && `(${product.quantity})`}
          </p>
          <p className="text-gray-500">${product.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        {extraComponent}
        <Button onClick={() => onRemove(product.productId)}>
          {/* delete */}
          <Trash2 className="h-5 w-5 text-red-500" />
        </Button>
      </div>
    </div>
  );
}
