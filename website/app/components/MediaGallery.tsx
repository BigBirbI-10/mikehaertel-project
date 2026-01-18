'use client';

import { MediaFile } from '../lib/getAssets';
import { useState, useRef } from 'react';

interface MediaGalleryProps {
  media: MediaFile[];
  columns?: number;
}

export default function MediaGallery({ media, columns = 3 }: MediaGalleryProps) {
  return (
    <div
      className="grid gap-4 w-full"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
      }}
    >
      {media.map((item, index) => (
        <MediaItem key={`${item.path}-${index}`} item={item} />
      ))}
    </div>
  );
}

function MediaItem({ item }: { item: MediaFile }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  if (item.type === 'video') {
    return (
      <div
        className="relative overflow-hidden rounded-lg aspect-square bg-gray-900 cursor-pointer group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          src={item.path}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all">
            <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-100">
      <img
        src={item.path}
        alt={item.name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
