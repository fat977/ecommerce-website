'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HeroSkeletonImage({ src, alt, className = '', ...props }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <div className="absolute inset-0 bg-gray-300 overflow-hidden z-0">
          <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer" />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill
        onLoad={() => setLoading(false)}
        className={`absolute inset-0 transition-opacity duration-500 ${
          loading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        {...props}
      />
    </>
  );
}
