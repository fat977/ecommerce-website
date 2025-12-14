'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({
  href,
  children,
  variant = 'navbar',
  orientation = 'horizontal',
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const borderClass = isActive
    ? orientation === 'vertical'
      ? 'border-l-4 border-primary-300 pl-4'
      : 'border-b-4 border-primary-300 pb-2'
    : '';

  // تحديد الـ padding حسب orientation
  const orientationPadding =
    variant === 'sidebar' ? (orientation === 'vertical' ? 'px-5 mx-3' : 'px-3') : '';

  // ⭐ Variants styling
  const variants = {
    navbar: `
      font-heading transition-colors
      hover:text-primary-600
      text-primary-50
      ${isActive ? 'text-primary-600 font-semibold' : 'text-primary-900'}
    `,

    sidebar: `
      flex items-center gap-3 py-3 ${orientationPadding} rounded-md  my-1 font-medium transition-all
      text-primary-600 hover:text-white hover:bg-primary-800/40
      ${isActive ? `${borderClass} bg-primary-800 text-primary-50 shadow-md` : ''}
    `,
  };

  return (
    <Link href={href} className={variants[variant]}>
      {children}
    </Link>
  );
}
