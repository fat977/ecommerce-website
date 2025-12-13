import Image from 'next/image';
import TestimonialsCarousel from '../_components/ui/carousel/TestimonialsCarousel';
import Button from '../_components/ui/buttons/Button';
import { Sparkles, TruckElectric, Users } from 'lucide-react';
import HeroSection from '../_components/ui/HeroSection';

export const metadata = {
  title: 'About',
};

function Page() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection imageSrc="/about-us.png" title=" About Us" />

      {/* Our Story & Values */}
      <div className="flex flex-col lg:flex-row justify-center gap-10 p-8 max-w-6xl mx-auto">
        {/* Our Story */}
        <div className="flex-1 border-b lg:border-b-0 lg:border-r border-primary-200 pr-0 lg:pr-8 pb-6 lg:pb-0">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Story</h3>
          <p className="text-gray-700 mb-3">
            Born from a passion for elegance and excellence, our brand was created to
            redefine the online shopping experience. We believe that true luxury lies in
            quality, attention to detail, and the art of simplicity.
          </p>
          <p className="text-gray-700 mb-3">
            From fashion and beauty to home, electronics, and lifestyle — we bring
            together a carefully curated selection of premium products that reflect modern
            sophistication.
          </p>
          <p className="text-gray-700">
            Every collection is designed to inspire confidence, comfort, and timeless
            style, because you deserve nothing less than exceptional.
          </p>
        </div>

        {/* Our Values */}
        <div className="flex-1 pl-0 lg:pl-8">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Values</h3>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>
              Excellence: We hold ourselves to the highest standards in every product and
              every detail
            </li>
            <li>
              Integrity: We value honesty, transparency, and long-term trust with our
              customers
            </li>
            <li>
              Elegance: Our design philosophy embraces refinement, balance, and beauty in
              simplicity
            </li>
            <li>
              Innovation: We continuously evolve to bring you the best of modern
              technology and design
            </li>
            <li>
              Customer Care: Every order, every message, every moment — handled with care
              and respect
            </li>
          </ul>
        </div>
      </div>

      {/* Building Trust */}
      <div className="bg-primary-800 text-white py-8 sm:py-12 px-4 sm:px-6 my-8 sm:my-10  max-w-6xl mx-auto shadow-lg">
        <h3 className="text-center text-xl sm:text-2xl font-bold mb-6">Building Trust</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-500">
          <div className="p-6 flex flex-col items-center gap-4 justify-center">
            <p>50,000+ happy customers </p>
            <span>
              <Users size="50" />
            </span>
          </div>
          <div className="p-6 flex flex-col items-center gap-4 justify-center">
            <p>5-star rated products</p>
            <span>
              <Sparkles size="50" />
            </span>
          </div>
          <div className="p-6 flex flex-col items-center gap-4 justify-center">
            <p>Worldwide shipping</p>
            <span>
              <TruckElectric size="50" />
            </span>
          </div>
        </div>
      </div>

      {/* Meet Our Founders */}
      <div className="bg-primary-800 text-white py-8 sm:py-12 px-4 sm:px-6 my-8 sm:my-10  max-w-6xl mx-auto shadow-lg">
        <h3 className="text-center text-xl sm:text-2xl font-bold mb-6">
          Meet our founders
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-400">
          <div className="p-6">Founder 1</div>
          <div className="p-6">Founder 2</div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="my-8 sm:my-10 max-w-6xl mx-auto px-4 sm:px-6">
        <h3 className="text-center text-primary-900 text-xl sm:text-2xl font-bold mb-6">
          Testimonials
        </h3>
        <TestimonialsCarousel />
      </div>

      {/* Call to Action */}
      <div className="bg-primary-800 text-white py-8 sm:py-12 px-4 sm:px-6 my-8 sm:my-10  max-w-6xl mx-auto shadow-lg text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-6">
          Ready to experience the difference?
        </h3>
        <Button
          variant="primary"
          size="lg"
          className="bg-accent-600 hover:bg-accent-700 px-6 sm:px-8 py-3 sm:py-4 transition rounded-lg"
        >
          Shop our best sellers
        </Button>
      </div>
    </>
  );
}

export default Page;
