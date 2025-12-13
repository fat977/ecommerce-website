import { useDrawer } from '@/app/contexts/DrawerContext';
import { PlusIcon, Trash2, X } from 'lucide-react';
import Image from 'next/image';
import Button from './buttons/Button';
import { handleRemove } from '@/app/actions/removeItem';
import { addToCart } from '@/app/actions/cart';
import CartBtn from './buttons/CartBtn';
import Link from 'next/link';

export default function Drawer({ type, items, setItems, children }) {
  const { openDrawer, toggleDrawer } = useDrawer();
  const isOpen = openDrawer === type;
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => toggleDrawer(type)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-96 transform flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-xl font-semibold text-primary-900">
            {type === 'cart' ? 'Your Cart' : 'Your Wishlist'}
          </h2>

          <button
            className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
            onClick={() => toggleDrawer(type)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-gray-500">
              {type === 'cart' ? 'Your cart is empty' : 'Your wishlist is empty'}
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.name}
                className="mb-5 flex items-start gap-4 rounded-lg border border-gray-100 p-3 shadow-sm transition hover:shadow-md"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={65}
                  height={65}
                  className="h-16 w-16 rounded-md object-cover"
                />

                <div className="flex flex-1 flex-col">
                  <p className="font-semibold text-primary-900">
                  <Link href={`/products/${item.productId}`}>{item.name}</Link>
                </p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  <p className="mt-1 font-bold text-primary-700">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  {/* Remove */}
                  <button
                    onClick={() =>
                      handleRemove({
                        productId: item.productId,
                        type,
                        setItems,
                        setOpenDrawer: toggleDrawer,
                      })
                    }
                    className="rounded-full bg-red-50 p-2 text-red-500 transition hover:bg-red-100"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  {/* Add to cart (wishlist only) */}
                  {type === 'wishlist' && (
                    <button className="rounded-full bg-primary-50 p-2 text-primary-500 transition hover:bg-primary-100">
                      <CartBtn size={18} productId={item.productId} />
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer injected children */}
        <div className=" bg-gray-50 p-5">{children}</div>
      </div>
    </>
  );
}
