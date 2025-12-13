'use client';
import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Luxury Fashion Buyer',
    text: 'Every detail reflects quality and elegance. This store redefines online shopping — I’m in love with every purchase!',
  },
  {
    name: 'Ahmed Saleh',
    role: 'Interior Designer',
    text: 'The packaging, product quality, and customer service are truly exceptional. It feels like a premium boutique experience.',
  },
  {
    name: 'Leila Martinez',
    role: 'Lifestyle Blogger',
    text: 'A seamless blend of sophistication and comfort. I’ve never enjoyed shopping online this much before!',
  },
];

function TestimonialCarouselSkeleton() {
  return (
    <div className="flex gap-10 overflow-x-hidden">
      <div className="w-full h-75 max-w-xl bg-gray-200 rounded-xl p-6 animate-pulse mx-auto">
       
      </div>
    </div>
  );
}

const Carousel = dynamic(() => import('./Carousel'), {
  ssr: false, 
  loading: () => <TestimonialCarouselSkeleton />,
});

export default function TestimonialsCarousel() {
  return (
    <Carousel
      type="testimonial"
      slides={testimonials}
      options={{
        pagination: { clickable: true },
        autoplay: { delay: 5000 },
        spaceBetween: 40,
        slidesPerView: 1,
      }}
    />
  );
}
