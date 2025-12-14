'use client';
import BaseProductItem from '@/app/_components/products/BaseProductItem';
import BackBtn from '@/app/_components/ui/buttons/BackBtn';
import ButtonLink from '@/app/_components/ui/links/ButtonLink';
import { handleRemove } from '@/app/actions/removeItem';
import { useDrawer } from '@/app/contexts/DrawerContext';
import useTitle from '@/app/hooks/useTitle';
import { calculateTotalPrice } from '@/app/utils/calculateTotalPrice';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const QtyCart = dynamic(() => import('@/app/_components/ui/QtyCart'), { ssr: false });

function CartDetails() {
  useTitle('Cart');
  const { cartItems, setCartItems } = useDrawer();
  const totalPrice = calculateTotalPrice(cartItems);

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="grid gap-6 p-4 sm:p-6 md:p-8">
          <div className="cart w-full max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-white shadow-lg p-6">
            <div className="text-center py-10">
              <p className="text-gray-500 mb-4">Your cart is empty 🛒</p>
              <ButtonLink href="/" className="px-6 py-3">
                Continue Shopping
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8 p-4 sm:p-4 md:p-8 bg-gray-50 ">
          <div className="cart border-b lg:border-b-0 lg:border-r border-gray-300 pb-6 lg:pr-6">
            <h2 className="text-2xl flex  gap-3 items-center sm:text-3xl font-bold text-gray-800 mb-2">
              <BackBtn /> Shopping Cart ({cartItems.length})
            </h2>

            <div className="h-px w-full bg-gray-300 mb-4"></div>

            <div className="flex-1 overflow-y-auto space-y-4">
              {cartItems.map((item) => (
                <BaseProductItem
                  key={item.productId}
                  product={item}
                  extraComponent={<QtyCart productQty={item.quantity} />}
                  onRemove={() =>
                    handleRemove({
                      productId: item.productId,
                      type: 'cart',
                      setItems: setCartItems,
                    })
                  }
                />
              ))}
            </div>
          </div>

          {cartItems.length > 0 && (
            <div className="summary space-y-5 self-start lg:sticky lg:top-32 bg-white shadow-lg p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">Order Summary</h3>

              <div className="flex justify-between text-lg font-medium">
                <span>Total:</span>
                <span className="text-primary-600 font-bold">${totalPrice}</span>
              </div>

              <Link
                href={`/checkout`}
                className="mb-3 block w-full rounded-lg bg-primary-600 py-3 text-center text-white transition hover:bg-primary-700 disabled:opacity-50"
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default CartDetails;
