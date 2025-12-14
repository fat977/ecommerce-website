'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import ProductCard from '../../products/ProductCard';
import Button from '../buttons/Button';
import SkeletonImage from '../skeleton/SkeletonImage';
import HeroSkeletonImage from '../skeleton/HeroSkeletonImage';

/**
 * Generic Swiper Carousel Component
 * @param {Array} slides - array of slide data
 * @param {Object} options - Swiper options like pagination, navigation, autoplay
 * @param {String} type - 'testimonial' | 'banner' | 'product'
 * @param {Function} renderSlide - optional function to render custom slide
 */
export default function Carousel({ slides, options = {}, type = 'banner', renderSlide }) {
  return (
    <Swiper
      pagination={
         type !== 'product'? {dynamicBullets:true} :false
      }
      modules={[Pagination, Autoplay]}
      loop
      {...options}
      className="w-full"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          {renderSlide ? (
            renderSlide(slide)
          ) : type === 'testimonial' ? (
            <div className="bg-white shadow-lg rounded-3xl p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 text-center max-w-xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                “{slide.text}”
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
                <h4 className="text-gray-900 text-lg font-medium">{slide.name}</h4>
                <span className="text-sm text-gray-500">{slide.role}</span>
              </div>
            </div>
          ) : type === 'banner' ? (
            <div className="relative flex h-[50vh] sm:h-[60vh] md:h-[65vh] w-full items-end">
              {slide.image && (
                <HeroSkeletonImage
                  src={slide.image}
                  alt={slide.alt || 'slide'}
                  priority={i === 0}
                  className="object-cover lg:object-fill"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10" />

              {/* Content */}
              <div className="relative z-20 space-y-3 p-5 sm:pl-10 md:pl-20 pb-5 max-w-xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {slide.title}
                </h1>

                {slide.subtitle && (
                  <p className="text-white text-sm sm:text-base">{slide.subtitle}</p>
                )}

                {slide.buttonText && (
                  <Button variant="primary" size="lg">
                    {slide.buttonText}
                  </Button>
                )}
              </div>
            </div>
          ) : type === 'product' ? (
            <>
              <ProductCard key={slide.id} product={slide} />
            </>
          ) : null}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
