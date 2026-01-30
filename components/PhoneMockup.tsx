
import React, { useState, useEffect } from 'react';

interface PhoneMockupProps {
  images: string[];
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative mx-auto w-full max-w-[280px] aspect-[9/19] rounded-[2.5rem] border-[8px] border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden group">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-xl z-10"></div>
      
      {/* Screen Content */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`App Screen ${idx}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentIndex === idx ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default PhoneMockup;
