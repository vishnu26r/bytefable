import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  // Sample images - replace with your actual image URLs
  const images = [
    '/slide1.webp',
    '/slide2.webp',
    '/slide3.webp',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id='home' className="relative w-full h-screen max-h-[600px] overflow-hidden">
      {/* Image carousel */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 bg-black bg-opacity-40">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          Your Headline Here
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
          Your compelling subheading that captures attention and explains your value proposition
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          
          
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;