import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm mx-4 sm:mx-6 md:mx-8 lg:mx-15 my-6 sm:my-8 lg:my-10"
    >
      <ol className="flex items-center flex-wrap gap-2 text-primary-600 dark:text-primary-200">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {!isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-primary-900 transition-colors capitalize font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-primary-900 dark:text-white capitalize">
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronRight
                  size={16}
                  className="text-primary-400 dark:text-primary-600"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
