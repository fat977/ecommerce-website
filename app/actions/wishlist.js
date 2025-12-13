import { supabase } from '../_lib/supabase';
import getUser from '../_lib/user';

/**
 * Adds a product to the user's wishlist.
 * @param {number|string} productId - ID of the product to add
 * @returns {Promise<{message: string, added?: boolean}>}
 */
export async function addToWishlist(productId) {
  const user = await getUser();
  if (!user) {
    throw new Error('You must be logged in');
  }

  // Check if the item already exists in the wishlist
  const { data: exists, error: checkError } = await supabase
    .from('wishlist')
    .select('productId')
    .eq('userId', user.id)
    .eq('productId', productId)
    .single();

  if (checkError) console.error(checkError);

  if (exists) {
    return { message: 'Item already exists!', added: false };
  }

  // Insert the new wishlist item
  const { error } = await supabase.from('wishlist').insert({
    userId: user.id,
    productId,
  });

  if (error) throw error;

  return { message: 'Added to wishlist', added: true };
}

/**
 * Fetches the current user's wishlist items with product details.
 * @returns {Promise<Array<{productId: number|string, name: string, price: number, image: string|null}>>}
 */
export async function getWishlist() {
  const user = await getUser();
  if (!user) return [];

  const { data: wishlist, error } = await supabase
    .from('wishlist')
    .select('*')
    .eq('userId', user.id);

  if (error) {
    console.error(error);
    return [];
  }

  if (!wishlist || wishlist.length === 0) return [];

  // Fetch product details for each wishlist item
  const wishlistItems = await Promise.all(
    wishlist.map(async (item) => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${item.productId}`);
        const product = await res.json();
        return {
          productId: item.productId,
          name: product.title,
          price: product.price,
          image: product.thumbnail || null,
        };
      } catch (err) {
        console.error('Error fetching product', item.productId, err);
        return {
          productId: item.productId,
          name: 'Unknown',
          price: 0,
          image: null,
        };
      }
    }),
  );

  return wishlistItems;
}

/**
 * Deletes a product from the user's wishlist.
 * @param {number|string} productId - ID of the product to remove
 * @returns {Promise<{success: boolean}>}
 */
export async function deleteWishlistItem(productId) {
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  const { error } = await supabase
    .from('wishlist')
    .delete()
    .eq('userId', user.id)
    .eq('productId', productId);

  if (error) throw error;

  return { success: true };
}
