'use client';
import { useState } from 'react';
import Button from './buttons/Button';

function QtyCart({ productQty = 1 }) {
  const [qty, setQty] = useState(productQty);

  const increase = () => setQty((q) => q + 1);
  const decrease = () => setQty((q) => (q > 1 ? q - 1 : 1));
  return (
    <div className="flex max-w-xs sm:max-w-sm flex-col gap-4 sm:gap-6">
      {/* Quantity Controls */}
      <div
        className="
      flex items-center justify-between gap-2 sm:gap-3
      rounded-full bg-gray-100
      px-3 py-2 sm:px-4
      shadow-sm
    "
      >
        <Button
          onClick={decrease}
          className="
        flex items-center justify-center
        h-8 w-8 sm:h-10 sm:w-10
        rounded-full bg-white
        shadow transition
        hover:shadow-md active:scale-95
      "
        >
          <span className="text-lg sm:text-xl font-semibold">−</span>
        </Button>

        <span className="text-lg sm:text-xl font-semibold">{qty}</span>

        <Button
          onClick={increase}
          className="
        flex items-center justify-center
        h-8 w-8 sm:h-10 sm:w-10
        rounded-full bg-white
        shadow transition
        hover:shadow-md active:scale-95
      "
        >
          <span className="text-lg sm:text-xl font-semibold">+</span>
        </Button>
      </div>
    </div>
  );
}

export default QtyCart;
