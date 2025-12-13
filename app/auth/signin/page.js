"use client"
import SigninForm from '@/app/_components/forms/SigninForm';
import { signInAction } from '@/app/actions/auth';
import { getCart } from '@/app/actions/cart';
import { getWishlist } from '@/app/actions/wishlist';
import { useDrawer } from '@/app/contexts/DrawerContext';
import useTitle from '@/app/hooks/useTitle';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

function SignIn() {
  useTitle('Sign In')
  const { updateCart, updateWishlist } = useDrawer();
  const router = useRouter();

  const handleLogin = async (formData) => {
    const res = await signInAction(formData);
    if (res.success) {
      // fetch cart and wishlist after login
      const cart = await getCart(res.user.id);
      const wishlist = await getWishlist(res.user.id);
      updateCart(cart);
      updateWishlist(wishlist);
      router.push('/')
    } else {
      toast.error(res.message)
    }
  }
  return (
    <div className="mx-auto my-10 w-full max-w-xl px-7">
      <SigninForm handleLogin={handleLogin} />
    </div>
  );
}

export default SignIn;
