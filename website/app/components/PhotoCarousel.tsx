'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  aspect: 'landscape' | 'portrait';
}

export default function PhotoCarousel({ photos }: { photos: Photo[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, photos.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-[600px] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
      {/* Main Image */}
      <div className="relative h-full w-full">
        {photos.map((photo, idx) => (
          <div
            key={photo.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className={`${
                photo.aspect === 'portrait'
                  ? 'object-contain'
                  : 'object-cover'
              } transition-transform duration-700 ${
                idx === currentIndex ? 'scale-100' : 'scale-105'
              }`}
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors"
        aria-label="Previous photo"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors"
        aria-label="Next photo"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              setIsAutoPlaying(false);
            }}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to photo ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
