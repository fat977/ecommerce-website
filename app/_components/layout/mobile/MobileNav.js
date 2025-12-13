import { Heart, Home, LogIn, ShoppingBag, ShoppingCart, User } from 'lucide-react';
import NavLink from '../../ui/links/NavLink';
import getUser from '@/app/_lib/user';

export default async function MobileNavbar() {
   const user = await getUser();
  const links = [
    { href: '/', label: 'Home', icon: <Home size={22} /> },
    {
      href: '/categories/mens-shirts',
      label: 'Categories',
      icon: <ShoppingBag size={22} />,
    },
    { href: '/cart/details', label: 'Cart', icon: <ShoppingCart size={22} /> },
    { href: '/wishlist/details', label: 'Wishlist', icon: <Heart size={22} /> },
     user
    ? { href: '/account', label: 'Account', icon: <User size={22} /> }
    : { href: '/auth/signin', label: 'Login', icon: <LogIn size={22} /> },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-lg py-2 z-50">
      <div className="flex justify-around">
        {links.map((link) => {
          return (
            <NavLink
              href={link.href}
              key={link.href}
              className="flex flex-col items-center text-xs"
            >
              <div className={` flex flex-col items-center gap-1`}>
                {link.icon}
                <span>{link.label}</span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
