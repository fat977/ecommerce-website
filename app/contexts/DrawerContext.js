'use client';

import { createContext, useContext, useState } from 'react';

const DrawerContext = createContext();

export function DrawerProvider({ children, initialCart = [], initialWishlist = [] }) {
  const [cartItems, setCartItems] = useState(initialCart);
  const [wishlistItems, setWishlistItems] = useState(initialWishlist);
  const [openDrawer, setOpenDrawer] = useState(null);

  const toggleDrawer = (drawer) => {
    setOpenDrawer(openDrawer === drawer ? null : drawer);
  };

  const updateCart = (items) => setCartItems(items);
  const updateWishlist = (items) => setWishlistItems(items);

  const value = {
    cartItems,
    setCartItems,
    wishlistItems,
    setWishlistItems,
    openDrawer,
    setOpenDrawer,
    toggleDrawer,
    updateCart,
    updateWishlist,
  };

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
}

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (context === undefined) throw new Error('Context was used outside provider');
  return context;
}
