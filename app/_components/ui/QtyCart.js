'use client';
import { useState } from 'react';
import Button from './buttons/Button';

function QtyCart({ productQty = 1 }) {
  const [qty, setQty] = useState(productQty);

  const increase = () => setQty((q) => q + 1);
  const decrease = () => setQty((q) => (q > 1 ? q - 1 : 1));
  return (
    <div className="flex max-w-sm flex-col gap-6">
      {/* Quantity Controls */}
      <div className="flex items-center gap-3 justify-between rounded-full bg-gray-100 px-4 py-2 shadow-sm">
        <Button
          onClick={decrease}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition hover:shadow-md active:scale-95"
        >
          <span className="text-xl font-semibold">−</span>
        </Button>

        <span className="text-xl font-semibold">{qty}</span>

        <Button
          onClick={increase}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition hover:shadow-md active:scale-95"
        >
          <span className="text-xl font-semibold">+</span>
        </Button>
      </div>
    </div>
  );
}

export default QtyCart;
