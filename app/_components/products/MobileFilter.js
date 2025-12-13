'use client';
import { useState } from 'react';
import SideNavigation from '@/app/categories/[category]/CategoriesSideNavigation';
import Button from '../ui/buttons/Button';
import dynamic from 'next/dynamic';
const PriceFilter = dynamic(() => import('@/app/_components/products/ProductFilter'), {
  ssr: false,
});

export default function MobileFilters({ groupedCategories }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      
      <div className="flex items-center gap-4 mb-4 ">
        <PriceFilter />
        {/* categories for mobile screen*/}
        <Button
          onClick={() => setMobileOpen(true)}
          className="px-4 py-2 border border-primary-600 
      text-primary-600 hover:bg-primary-700 hover:text-white 
      rounded-lg 
      w-100
      md:hidden"
        >
          Categories
        </Button>
      </div>

      {mobileOpen && (
        <>
          {/* Overlay  */}
          <div
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm sm:hidden z-40"
          ></div>

          {/* Sidebar from bottom */}
          <div className="fixed inset-x-0 bottom-0 bg-primary-50 border-t border-primary-200 shadow-lg p-4 rounded-t-xl transition-transform duration-300 sm:hidden z-50">
            <SideNavigation
              groupedCategories={groupedCategories}
              onClose={() => setMobileOpen(false)}
            />
          </div>
        </>
      )}
    </>
  );
}
