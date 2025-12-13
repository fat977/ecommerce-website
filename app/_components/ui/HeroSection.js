import HeroSkeletonImage from './skeleton/HeroSkeletonImage';

export default function HeroSection({ imageSrc, title }) {
  return (
    <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full">
      <HeroSkeletonImage
        src={imageSrc}
        alt={title}
        fill
        
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover lg:object-fill"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center px-4">
          {title}
        </h1>
      </div>
    </section>
  );
}
