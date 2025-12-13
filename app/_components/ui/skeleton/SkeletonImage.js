// components/SkeletonImage.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SkeletonImage({
  src,
  alt,
  className = '',
  wrapperClass = '',
  ...props
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className} ${wrapperClass}`}>
      {/* Skeleton Gradient مع Animation */}
      {loading && (
        <div className="absolute inset-0 bg-gray-300  overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
        </div>
      )}

      {/* img */}
      <Image
        src={src}
        alt={alt}
        className={`object-cover transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setLoading(false)}
        {...props}
      />
    </div>
  );
}
