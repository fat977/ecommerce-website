'use client';
import { useDrawer } from '@/app/contexts/DrawerContext';
import { Heart, ShoppingCart } from 'lucide-react';
import Button from '../../ui/buttons/Button';
import AccountDropdown from '../top-bar/dropdown/AccountDropdown';
import dynamic from 'next/dynamic';

const SearchBar = dynamic(() => import('./SearchBar'), { ssr: false });
function Actions({ userFirstName }) {
  const { cartItems, wishlistItems, toggleDrawer } = useDrawer();
  const icons = [
    {
      type: 'cart',
      items: cartItems,
      icon: <ShoppingCart className="cursor-pointer" />,
    },
    {
      type: 'wishlist',
      items: wishlistItems,
      icon: <Heart className=" cursor-pointer" />,
    },
  ];

  return (
    <ul className="flex gap-5 items-center mt-2 text-primary-900">
      <li>
        {' '}
        <SearchBar />
      </li>
      {icons.map((icon) => (
        <li key={icon.type}>
          <Button className="relative" onClick={() => toggleDrawer(icon.type)}>
            {icon.icon}
            {icon.items.length > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white text-xs">
                {icon.items.length}
              </span>
            )}
          </Button>
        </li>
      ))}

      {userFirstName  && (
        <li className="mb-2">
          <AccountDropdown user={ userFirstName } />
        </li>
      )}
    </ul>
  );
}

export default Actions;
