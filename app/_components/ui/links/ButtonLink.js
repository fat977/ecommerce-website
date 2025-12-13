import Link from 'next/link';

export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  full = false,
  onClick,
  className = '',
}) {
  const base = `rounded-lg py-3 text-center font-semibold transition`;

  const variants = {
    primary: `bg-primary-600 text-white hover:bg-primary-700`,
    outline: `border border-primary-600 text-primary-600 hover:bg-primary-700 hover:text-white`,
    accent: `bg-accent-500 text-white hover:bg-accent-600`,
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${
        full ? 'block w-full' : 'inline-block'
      } ${className}`}
    >
      {children}
    </Link>
  );
}
