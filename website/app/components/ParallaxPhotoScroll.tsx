'use client';

import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  aspect: 'landscape' | 'portrait';
  isVideo?: boolean;
}

// Media component that renders either image or video
function MediaItem({ photo, sizes }: { photo: Photo; sizes: string }) {
  if (photo.isVideo) {
    return (
      <video
        src={photo.src}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      className="object-cover"
      sizes={sizes}
    />
  );
}

export default function ParallaxPhotoScroll({ photos }: { photos: Photo[] }) {
  // Split photos into 3 rows
  const row1Photos = photos.filter((_, i) => i % 3 === 0);
  const row2Photos = photos.filter((_, i) => i % 3 === 1);
  const row3Photos = photos.filter((_, i) => i % 3 === 2);

  // Duplicate multiple times for smooth infinite scroll
  const row1Duplicated = [...row1Photos, ...row1Photos, ...row1Photos, ...row1Photos];
  const row2Duplicated = [...row2Photos, ...row2Photos, ...row2Photos, ...row2Photos];
  const row3Duplicated = [...row3Photos, ...row3Photos, ...row3Photos, ...row3Photos];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="space-y-4">
        {/* Row 1 - Scrolling left slowly */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-left-slow">
            {row1Duplicated.map((photo, idx) => (
              <div
                key={`row1-${idx}`}
                className="relative flex-shrink-0 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                style={{
                  width: photo.aspect === 'portrait' ? '280px' : '450px',
                  height: '350px'
                }}
              >
                <MediaItem photo={photo} sizes="(max-width: 768px) 280px, 450px" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling right at medium speed */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-right-medium">
            {row2Duplicated.map((photo, idx) => (
              <div
                key={`row2-${idx}`}
                className="relative flex-shrink-0 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                style={{
                  width: photo.aspect === 'portrait' ? '280px' : '450px',
                  height: '350px'
                }}
              >
                <MediaItem photo={photo} sizes="(max-width: 768px) 280px, 450px" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Scrolling left fast */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-left-fast">
            {row3Duplicated.map((photo, idx) => (
              <div
                key={`row3-${idx}`}
                className="relative flex-shrink-0 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                style={{
                  width: photo.aspect === 'portrait' ? '280px' : '450px',
                  height: '350px'
                }}
              >
                <MediaItem photo={photo} sizes="(max-width: 768px) 280px, 450px" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient overlays for fade effect on sides */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent pointer-events-none z-10"></div>
    </div>
  );
}
