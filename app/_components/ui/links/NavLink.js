'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children, variant = 'navbar', orientation = 'horizontal' }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const borderClass =
    isActive
      ? orientation === 'vertical'
        ? 'border-l-4 border-primary-300 pl-4'
        : 'border-b-4 border-primary-300 pb-2'
      : '';

  // ⭐ Variants styling
  const variants = {
    navbar: `
      font-heading transition-colors
      hover:text-primary-600
      ${isActive ? 'text-primary-600 font-semibold' : 'text-primary-900'}
    `,

    sidebar: `
      flex items-center gap-4 py-3 px-5 rounded-md mx-3 mb-1 font-medium transition-all
      text-primary-200 hover:text-white hover:bg-primary-800/40
      ${isActive ? `${borderClass} bg-primary-800 text-white shadow-md` : ''}
    `,
  };

  return (
    <Link href={href} className={variants[variant]}>
      {children}
    </Link>
  );
}
