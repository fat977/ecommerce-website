import toast from 'react-hot-toast';
import { supabase } from '../_lib/supabase';
import getUser from '../_lib/user';

export async function addToCart(productId) {
  const user = await getUser();
  if (!user) {
    throw new Error('You must be logged in');
  }

  // Check if item exists
  const { data: exists } = await supabase
    .from('cart')
    .select('*')
    .eq('userId', user.id)
    .eq('productId', productId)
    .maybeSingle();

  if (exists) {
    await supabase
      .from('cart')
      .update({ quantity: exists.quantity + 1 })
      .eq('id', exists.id);

    return { message: 'Updated quantity' };
  }

  const { error } = await supabase.from('cart').insert({
    userId: user.id,
    productId: productId,
    quantity: 1,
  });

  if (error) throw error;

  return { message: 'Added to cart' };
}

export async function getCart() {
  const user = await getUser()
  if (!user) return [];

  const { data: cart, error } = await supabase.from('cart').select('*').eq('userId', user.id);

  if (error) {
    toast.error(error)
    return [];
  }

  if (!cart || cart.length === 0) return [];

  // 3️⃣Cart product details
  const cartItems = await Promise.all(
    cart.map(async (item) => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${item.productId}`);
        const product = await res.json();
        return {
          productId: item.productId,
          name: product.title,
          price: product.price,
          image: product.thumbnail, 
          quantity: item.quantity,
        };
      } catch (err) {
        toast.error('Error fetching product', item.productId, err);
        return {
          productId: item.productId,
          name: 'Unknown',
          price: 0,
          image: null,
          quantity: item.quantity,
        };
      }
    })
  );

  return cartItems;
}



export async function deleteCartItem(productId) {

  const user = await getUser()

  if (!user) {
    throw new Error('Not authenticated');
  }

  const { error } = await supabase
    .from('cart')
    .delete()
    .eq('userId', user.id)
    .eq('productId', productId);

  if (error) throw error;

  return { success: true };
}
