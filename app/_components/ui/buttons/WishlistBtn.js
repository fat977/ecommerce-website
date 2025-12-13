'use client';
import { addToWishlist } from '@/app/actions/wishlist';
import { useDrawer } from '@/app/contexts/DrawerContext';
import { Heart } from 'lucide-react';
import toast from 'react-hot-toast';

function WishlistBtn({ productId }) {
  const { wishlistItems, setWishlistItems } = useDrawer();

  async function handleClick() {
    try {
      await addToWishlist(productId); // call Supabase

      const exists = wishlistItems.find((i) => i.productId === productId);

      if (exists) {
        toast('This item is already in your wishlist!', {
          icon: '⚠️', 
        });
        return; 
      } else {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        const product = await res.json();

        setWishlistItems([
          ...wishlistItems,
          {
            productId: product.id,
            name: product.title,
            price: product.price,
            image: product.thumbnail,
          },
        ]);
      }

      toast.success('Item is added to wishlist successfully !')
    } catch (err) {
      toast.error(err.message)
    }
  }

  return <Heart onClick={handleClick} className="cursor-pointer" />;
}

export default WishlistBtn;
