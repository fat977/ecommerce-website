"use client";
import { addToCart as addToCartAPI } from "@/app/actions/cart";
import { useDrawer } from "@/app/contexts/DrawerContext";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

function CartBtn({ productId,size }) {
  const { cartItems, setCartItems } = useDrawer();

  async function handleClick() {
    try {
      await addToCartAPI(productId); // call Supabase

      const exists = cartItems.find((i) => i.productId === productId);

      if (exists) {
        setCartItems(
          cartItems.map((i) =>
            i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i
          )
        );
       toast.success('Quantity is updated successfully !')
      } else {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        const product = await res.json();

        setCartItems([
          ...cartItems,
          {
            productId: product.id,
            name: product.title,
            price: product.price,
            image: product.thumbnail,
            quantity: 1,
          },
        ]);
        toast.success('Item is added to cart successfully !')
      }

    } catch (err) {
      toast.error(err.message)
    }
  }

  return <ShoppingCart size={size} onClick={handleClick} className="cursor-pointer" />;
}

export default CartBtn;
