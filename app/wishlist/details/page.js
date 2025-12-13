'use client';
import BaseProductItem from '@/app/_components/products/BaseProductItem';
import BackBtn from '@/app/_components/ui/buttons/BackBtn';
import CartBtn from '@/app/_components/ui/buttons/CartBtn';
import ButtonLink from '@/app/_components/ui/links/ButtonLink';
import { handleRemove } from '@/app/actions/removeItem';
import { useDrawer } from '@/app/contexts/DrawerContext';
import useTitle from '@/app/hooks/useTitle';

function WishlistDetails() {
  useTitle('Wishlist');
  const { wishlistItems, setWishlistItems } = useDrawer();

  return (
    <div className="grid gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
      <div className="cart w-full max-w-full sm:max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-white shadow-lg p-4 sm:p-6 md:p-6">
        <div className="flex-1 overflow-y-auto space-y-4">
          {wishlistItems.length === 0 ? (
            <div className="flex flex-col items-center py-8">
              <p className="text-gray-500 mb-4">Your wishlist is empty 💔</p>

              <ButtonLink href="/" className="px-6 py-3">
                Continue Shopping
              </ButtonLink>
            </div>
          ) : (
            <>
              <h2 className="flex  gap-3 items-center text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                <BackBtn /> Wishlist Items ({wishlistItems.length})
              </h2>
              <div className="h-px w-full bg-gray-300 mb-4"></div>
              {wishlistItems.map((item) => (
                <BaseProductItem
                  key={item.productId}
                  product={item}
                  extraComponent={<CartBtn productId={item.productId} />}
                  onRemove={() =>
                    handleRemove({
                      productId: item.productId,
                      type: 'wishlist',
                      setItems: setWishlistItems,
                    })
                  }
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default WishlistDetails;
