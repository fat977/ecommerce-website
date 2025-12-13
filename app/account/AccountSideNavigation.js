'use client';

import { Heart, LogOut, LogOutIcon, Settings, User, WalletCards } from 'lucide-react';
import Button from '../_components/ui/buttons/Button';
import NavLink from '../_components/ui/links/NavLink';

const navLinks = [
  {
    name: 'My Account',
    href: '/account',
    icon: <User className="h-5 w-5 text-primary-600" />,
  },
  {
    name: 'Orders',
    href: '/account/orders',
    icon: <WalletCards className="h-5 w-5 text-primary-600" />,
  },
  {
    name: 'Wishlist',
    href: '/wishlist/details',
    icon: <Heart className="h-5 w-5 text-primary-600" />,
  },
  {
    name: 'Settings',
    href: '/',
    icon: <Settings className="h-5 w-5 text-primary-600" />,
  },
];

function AccountSideNavigation({ orientation = 'vertical' }) {
  const isVertical = orientation === 'vertical';

  return (
    <nav
      className={`
        ${isVertical ? 'w-full sm:w-64 border-r' : 'w-full h-16 border-b'} 
        border-primary-800 bg-primary-950 bg-linear-to-b from-primary-950 to-primary-900
      `}
    >
      <ul
        className={`flex ${isVertical ? 'flex-col h-full pt-6' : 'flex-row justify-around items-center h-full'} text-lg`}
      >
        {navLinks.map((link) => (
          <li key={link.name} className={`${isVertical ? '' : 'flex-1'}`}>
            <NavLink
              href={link.href}
              variant="sidebar"
              orientation={`${isVertical ? 'vertical' : 'horizontal'}`}
            >
              <span className="text-xl opacity-90">{link.icon}</span>
              {isVertical && <span>{link.name}</span>}
            </NavLink>
          </li>
        ))}
        {/*  Horizontal */}
        {!isVertical && (
          <li className="flex-1 px-4">
            <form id="logout-form" action="/api/auth/signout" method="post">
              <Button
                type="submit"
                variant="primary" // ← ستايل مختلف للأفقي
                size="md"
                className=" rounded-md py-3 px-5"
              >
                <span className="flex items-center justify-center gap-2">
                  <LogOut size={18} />
                </span>
              </Button>
            </form>
          </li>
        )}

        {isVertical && (
          <>
            {/* Divider Line */}
            <li className="mt-auto mb-4 px-6">
              <div className="h-px w-full bg-primary-700/60"></div>
            </li>

            {/* Logout Button */}
            <li className="px-6 pb-6">
              <form id="logout-form" action="/api/auth/signout" method="post">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="block w-full rounded-lg py-3 text-center mt-6"
                >
                  <span className="flex items-center justify-center gap-3">
                    <LogOut />
                    Logout
                  </span>
                </Button>
              </form>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default AccountSideNavigation;
