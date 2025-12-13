'use client';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../_components/ui/buttons/Button';
import { handleRemove } from '../actions/removeItem';
import { useDrawer } from '../contexts/DrawerContext';
import { calculateTotalPrice } from '../utils/calculateTotalPrice';
import ButtonLink from '../_components/ui/links/ButtonLink';
import dynamic from 'next/dynamic';

const CheckoutForm = dynamic(() => import('../_components/forms/CheckoutForm'), { ssr: false });

function Checkout({ user }) {
  const { cartItems, setCartItems } = useDrawer();
  const subTotal = calculateTotalPrice(cartItems);
  const shipping = 50;

  if (cartItems.length === 0) {
    return (
      <div className="py-20 text-center">
        <zz className="text-3xl font-bold mb-4">Your cart is empty 🛒</zz>
        <ButtonLink href="/" className="py-3 px-6">
          {' '}
          Continue Shopping
        </ButtonLink>
      </div>
    );
  }

  return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-8 bg-gray-50 min-h-screen">
      {/* SHIPPING INFO */}
      <div className="shipping-info bg-white shadow-lg rounded-xl p-6 border border-gray-200">
        <zz className="text-2xl font-bold mb-4">Shipping Information</zz>

        <CheckoutForm user={user} />
      </div>

      {/* ORDER SUMMARY */}
      <div className="order-summary bg-white shadow-lg rounded-xl p-4 sm:p-6 border border-gray-200 h-max sm:sticky sm:top-30">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

        {/* ITEMS LIST */}
        <div className="space-y-4 max-h-72 sm:max-h-80 overflow-y-auto pr-2">
          {cartItems.map((item) => (
            <div
              key={item.productId}
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b pb-4"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={70}
                height={70}
                className="rounded-lg object-cover"
              />

              <div className="flex-1">
                <p className="font-semibold line-clamp-2">
                  <Link
                    href={`/products/${item.productId}`}
                    className="hover:text-primary-600"
                  >
                    {item.name}
                  </Link>
                </p>
                <p className="text-gray-500">Qty: {item.quantity}</p>
                <p className="text-gray-700 font-medium">${item.price.toFixed(2)}</p>

                <Button
                  onClick={() =>
                    handleRemove({
                      productId: item.productId,
                      type: 'cart',
                      setItems: setCartItems,
                    })
                  }
                  className="mt-2 text-red-600 hover:text-red-800 text-sm"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY TOTALS */}
        <div className="mt-6 space-y-2 text-lg">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span className="font-semibold">${subTotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping:</span>
            <span className="font-semibold">${shipping.toFixed(2)}</span>
          </div>

          <div className="flex justify-between border-t pt-3 text-xl font-bold">
            <span>Total:</span>
            <span className="text-primary-600">${(subTotal + shipping).toFixed(2)}</span>
          </div>
        </div>

        {/* CHECKOUT BUTTON */}
        <ButtonLink href="/checkout/payment" full className="mt-4 sm:mt-6 py-2 sm:py-3">
          Proceed to Payment
        </ButtonLink>
      </div>
    </div>
  );
}

export default Checkout;
