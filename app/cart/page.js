'use client';
import Link from 'next/link';
import Drawer from '../_components/ui/Drawer';
import { useDrawer } from '../contexts/DrawerContext';
import { calculateTotalPrice } from '../utils/calculateTotalPrice';
import ButtonLink from '../_components/ui/links/ButtonLink';

function Cart() {
  const { cartItems, setCartItems, setOpenDrawer ,openDrawer } = useDrawer();
  const totalPrice = calculateTotalPrice(cartItems);

  const isCartOpen = openDrawer === 'cart';

// Core step: If it's closed, don't render anything in the DOM
  if (!isCartOpen) {
    return null; 
  }
  return (
    <Drawer type="cart" items={cartItems} setItems={setCartItems}>
      <div className=" bg-white">
        {cartItems.length !== 0 && (
          <>
            {/* Total */}
            <div className="mb-5 flex items-center justify-between">
              <span className="text-lg font-semibold text-primary-900">Total:</span>
              <span className="text-xl font-bold text-primary-900">${totalPrice}</span>
            </div>
            {/* Checkout Button */}
            <ButtonLink
              href={`/checkout`}
              onClick={() => setOpenDrawer(null)}
              className="mb-3"
              full
            >
              Checkout
            </ButtonLink>

            {/* View cart Button */}
            <ButtonLink
              href={`/cart/details`}
              onClick={() => setOpenDrawer(null)}
              variant="outline"
              full
            >
              View Cart
            </ButtonLink>
          </>
        )}
      </div>
    </Drawer>
  );
}

export default Cart;
