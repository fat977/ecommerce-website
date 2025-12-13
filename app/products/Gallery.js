'use client';

import { useState } from 'react';
import SkeletonImage from '../_components/ui/skeleton/SkeletonImage';

export default function Gallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex gap-4 w-full">
      {/* Thumbnails */}
      <div className="flex flex-col gap-3">
        {images.map((img, i) => (
          <SkeletonImage
            key={i}
            src={img}
            alt={`Thumbnail ${i + 1}`}
            width={60}
            height={60}
            priority={i === 0}
            onClick={() => setMainImage(img)}
            className={`
          h-16 w-16 cursor-pointer rounded-lg border-2 object-cover transition-all
          ${
            mainImage === img
              ? 'scale-105 border-yellow-500'
              : 'border-gray-300 hover:border-yellow-400'
          }
        `}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="relative w-full aspect-4/5 overflow-hidden rounded-xl border border-gray-300 bg-gray-50">
        <SkeletonImage
          src={mainImage}
          alt="Main Product Image"
         fill
          loading="eager"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}
