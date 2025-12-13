'use client';
import Link from 'next/link';
import Drawer from '../_components/ui/Drawer';
import { useDrawer } from '../contexts/DrawerContext';
import ButtonLink from '../_components/ui/links/ButtonLink';

function Wishlist() {
  const { wishlistItems, setWishlistItems, setOpenDrawer,openDrawer } = useDrawer();
  const isWishlistOpen = openDrawer === 'wishlist';

// Core step: If it's closed, don't render anything in the DOM
  if (!isWishlistOpen) {
    return null; 
  }
  return (
    <Drawer type="wishlist" items={wishlistItems} setItems={setWishlistItems}>
      <div className=" bg-gray-50">
        {wishlistItems.length !== 0 && (
          <ButtonLink href="/wishlist/details" full variant='outline' onClick={() => setOpenDrawer(null)}>
            View Wishlist
          </ButtonLink>
        )}
      </div>
    </Drawer>
  );
}

export default Wishlist;
