import Link from 'next/link';

export default function TextLink({ href, children, underline = false, className = '' }) {
  return (
    <Link
      href={href}
      className={`text-accent-500 hover:text-accent-600 transition-colors text-sm 
        ${underline ? 'underline' : ''} 
        ${className}`}
    >
      {children}
    </Link>
  );
}
