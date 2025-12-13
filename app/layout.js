import '@/app/_styles/globals.css';
import { Poppins, Roboto } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Footer from './_components/layout/Footer';
import Header from './_components/layout/header/Header';
import MobileNavbar from './_components/layout/mobile/MobileNav';
import MobileTopbar from './_components/layout/mobile/MobileTopbar';
import TopBar from './_components/layout/top-bar/TopBar';
import { getCart } from './actions/cart';
import { getWishlist } from './actions/wishlist';
import Cart from './cart/page';
import { DrawerProvider } from './contexts/DrawerContext';
import { DropdownContextProvider } from './contexts/DropdownContext';
import Wishlist from './wishlist/page';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto',
});

export const metadata = {
  title: {
    template: '%s | Trendify',
    default: 'Welcome | Trendify',
  },
  description:
    'Trendify is your ultimate online shopping destination, offering everything you need in one place — from fashion, beauty, and electronics to home essentials, fitness gear, and more. Discover high-quality products, unbeatable prices, and fast delivery you can trust.',
};

export default async function RootLayout({ children }) {
  const initialCart = await getCart();
  const initialWishlist = await getWishlist();

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} flex min-h-screen flex-col bg-gray-50`}
      >
        <DrawerProvider initialCart={initialCart} initialWishlist={initialWishlist}>
          <DropdownContextProvider>
            <TopBar className="fixed top-0 left-0 z-50 w-full" />
          </DropdownContextProvider>
          <Header className="fixed top-8 left-0 z-40 w-full" />

          <Cart />

          <Wishlist />

          <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
          <MobileTopbar />
          <main className="mt-0 md:mt-29 flex-1">{children}</main>
          {/* Bottom mobile navbar */}
          <MobileNavbar />
          <Footer />
        </DrawerProvider>
      </body>
    </html>
  );
}
