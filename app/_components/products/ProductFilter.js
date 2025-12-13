'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function ProductFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeSort = searchParams.get('sort') ?? 'default';

  function handleSort(e) {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (value === 'default') params.delete('sort');
    else params.set('sort', value);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-1 sm:flex-none sm:ml-auto">
      <div className="">
        <div className="relative w-full sm:w-auto">
          <select
            id="priceSort"
            value={activeSort}
            onChange={handleSort}
            className="
    appearance-none  sm:w-48
    rounded-lg  text-sm sm:text-base md:text-lg lg:text-xl
    text-primary-900 
    px-4 py-2.5 pr-10
    border border-primary-300 
    focus:outline-none focus:ring-2
    shadow-sm transition
  "
          >
            <option value="default" disabled hidden>
              Price
            </option>
            <option value="lowToHigh">Lowest → Highest</option>
            <option value="highToLow">Highest → Lowest</option>
          </select>

          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-primary-500 dark:text-primary-300">
            ▼
          </span>
        </div>
      </div>
    </div>
  );
}
