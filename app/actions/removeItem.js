// /app/actions/removeItem.js
import { toast } from 'react-hot-toast';
import { deleteCartItem } from './cart';
import { deleteWishlistItem } from './wishlist';

/**
 * Removes an item from the cart or wishlist and updates the state.
 *
 * @param {Object} params
 * @param {number|string} params.productId - The ID of the item to remove
 * @param {'cart'|'wishlist'} params.type - The type of container to remove the item from
 * @param {Function} params.setItems - State setter function (setCartItems or setWishlistItems)
 * @param {Function} [params.setOpenDrawer] - Function to close the drawer (optional)
 * @param {boolean} [params.closeDrawer=true] - Whether to close the drawer after deletion
 */
export async function handleRemove({
  productId,
  type,
  setItems,
  setOpenDrawer,
  closeDrawer = true,
}) {
  try {
    if (type === 'cart') {
      await deleteCartItem(productId);
    } else if (type === 'wishlist') {
      await deleteWishlistItem(productId);
    }

    // Update the state
    setItems((prev) => prev.filter((item) => item.productId !== productId));

    // Close the drawer if needed
    if (closeDrawer && setOpenDrawer) setOpenDrawer(null);

    toast.success('Item is deleted successfully!');
  } catch (error) {
    console.error(error);
    toast.error('Failed to delete item.');
  }
}
