'use client';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import dynamic from 'next/dynamic';

const Pagination = dynamic(() => import('../ui/Pagination'), { ssr: false });

export default function ProductList({ products }) {
  const searchParams = useSearchParams();
  const sortType = searchParams.get('sort');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // عدد العناصر في الصفحة

  const sortedProducts = useMemo(() => {
    let sorted = [...products];

    if (sortType === 'lowToHigh') sorted.sort((a, b) => a.price - b.price);
    else if (sortType === 'highToLow') sorted.sort((a, b) => b.price - a.price);

    return sorted;
  }, [sortType, products]);

  // items
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirst, indexOfLast);

  // total pages
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentItems.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="hover:shadow-xl transition-shadow rounded-lg bg-white dark:bg-primary-950 p-4"
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
          className="flex gap-2 text-primary-900 dark:text-primary-50"
          buttonClassName="px-4 py-2 rounded-md border border-primary-300 dark:border-primary-700 hover:bg-primary-200 dark:hover:bg-primary-800 transition"
          activeButtonClassName="bg-primary-500 text-white dark:bg-accent-600"
        />
      </div>
    </>
  );
}
