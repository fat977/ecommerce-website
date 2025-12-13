'use client';

import Carousel from './Carousel';
const banners = [
  {
    title: 'Just Dropped: Your Next Obsession.',
    subtitle:
      'Explore the latest Fall/Winter collection designed exclusively for the modern you.',
    buttonText: 'Shop Now',
    image: '/home-banners/fashions.png',
    alt: 'fashion',
  },
  {
    title: 'The Art of Cozy Living.',
    subtitle: 'Curated essentials to make your house feel like home.',
    buttonText: 'Shop Now',
    image: '/home-banners/decorations.png',
    alt: 'decoration',
  },
  {
    title: 'The Evolution of Smart Audio.',
    subtitle: ' Experience noise cancellation and clarity like never before.',
    buttonText: 'Shop Now',
    image: '/home-banners/techs.png',
    alt: 'tech',
  },
  {
    title: 'JFLASH SALE: Up to 60% Off!',
    subtitle: 'Ends in 12 hours. Don&apos;t wait—shop your favorites now.',
    buttonText: 'Shop Now',
    image: '/home-banners/offer.png',
    alt: 'offers',
  },
];


export default function HomeCarousel() {
  return (
    <Carousel
      type="banner"
      slides={banners}
      options={{
        navigation: true,
        slidesPerView: 1,
      }}
    />
  );
}
