'use client';
import { Heart, Home, LogIn, ShoppingBag, ShoppingCart, User } from 'lucide-react';

import { useDrawer } from '@/app/contexts/DrawerContext';
import NavLink from '../../ui/links/NavLink';

export default function MobileNavbar({ userFirstName }) {
  const { cartItems, wishlistItems } = useDrawer();
  const links = [
    { href: '/', label: 'Home', icon: <Home size={22} /> },
    {
      href: '/categories/mens-shirts',
      label: 'Categories',
      icon: <ShoppingBag size={22} />,
    },
    {
      href: '/cart/details',
      items: cartItems,
      label: 'Cart',
      icon: <ShoppingCart size={22} />,
    },
    {
      href: '/wishlist/details',
      items: wishlistItems,
      label: 'Wishlist',
      icon: <Heart size={22} />,
    },
    userFirstName
      ? { href: '/account', label: 'Account', icon: <User size={22} /> }
      : { href: '/auth/signin', label: 'Login', icon: <LogIn size={22} /> },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-lg py-3 z-50">
      <div className="flex justify-around">
        {links.map((link) => {
          return (
            <NavLink variant="navbar" href={link.href} key={link.href}>
              <div className="relative flex flex-col items-center gap-1">
                {/* Icon wrapper */}
                <div className="relative">
                  {link.icon}

                  {link.items?.length > 0 && (
                    <span
                      className="
          absolute 
          -top-2 
          -right-3 
          flex h-5 w-5 items-center justify-center 
          rounded-full bg-red-600 text-white text-xs
        "
                    >
                      {link.items.length}
                    </span>
                  )}
                </div>

                <span>{link.label}</span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
