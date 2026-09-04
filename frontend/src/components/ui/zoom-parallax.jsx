'use client';

import { useScroll, useTransform, useSpring, motion } from 'framer-motion';
import { useRef } from 'react';

export function ZoomParallax({ images }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // Smooth out the scroll progress to eliminate jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70, // lowered stiffness for a softer glide
    damping: 40,   // increased damping to prevent bouncing
    restDelta: 0.001
  });

  const scale4 = useTransform(smoothProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(smoothProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(smoothProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(smoothProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(smoothProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, alt, title, description, date }, index) => {
          const scale = scales[index % scales.length];

          return (
            <motion.div
              key={index}
              style={{ scale }}
              // Added will-change-transform to force GPU acceleration
              className={`pointer-events-none absolute top-0 flex h-full w-full items-center justify-center will-change-transform
                ${index === 1 ? '[&>div]:!-top-[20vh] [&>div]:!left-[10vw] [&>div]:!w-[50vw] md:[&>div]:!-top-[30vh] md:[&>div]:!left-[5vw] md:[&>div]:!h-[30vh] md:[&>div]:!w-[35vw]' : ''} 
                ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[20vw] [&>div]:!w-[40vw] md:[&>div]:!-top-[10vh] md:[&>div]:!-left-[25vw] md:[&>div]:!h-[45vh] md:[&>div]:!w-[20vw]' : ''} 
                ${index === 3 ? '[&>div]:!left-[25vw] [&>div]:!w-[40vw] md:[&>div]:!left-[27.5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[25vw]' : ''} 
                ${index === 4 ? '[&>div]:!top-[20vh] [&>div]:!left-[10vw] [&>div]:!w-[35vw] md:[&>div]:!top-[27.5vh] md:[&>div]:!left-[5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[20vw]' : ''} 
                ${index === 5 ? '[&>div]:!top-[20vh] [&>div]:!-left-[25vw] [&>div]:!w-[45vw] md:[&>div]:!top-[27.5vh] md:[&>div]:!-left-[22.5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[30vw]' : ''} 
                ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!w-[30vw] md:[&>div]:!top-[22.5vh] md:[&>div]:!left-[25vw] md:[&>div]:!h-[15vh] md:[&>div]:!w-[15vw]' : ''} 
              `}
            >
              <div className="pointer-events-auto group relative h-[20vh] w-[45vw] min-w-[120px] min-h-[120px] md:h-[25vh] md:w-[25vw] md:min-w-0 md:min-h-0 overflow-hidden rounded-2xl cursor-pointer ring-1 ring-white/10 hover:ring-[var(--leaf-500)]/50 transition-all duration-500 hover:scale-110 hover:z-50 hover:shadow-[0_0_40px_var(--leaf-500)]">
                <img
                  src={src || '/placeholder.svg'}
                  alt={alt || `Parallax image ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                
                {/* Hover overlay with details - Restored backdrop-blur-sm but added transform-gpu and backface-hidden for rendering performance */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-2 md:p-4 text-center transform-gpu backface-hidden will-change-transform">
                  <h3 className="font-display text-base md:text-lg lg:text-xl text-white tracking-tight mb-1 md:mb-2 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {title || 'Event Title'}
                  </h3>
                  {date && (
                    <div className="font-mono text-[9px] md:text-[10px] lg:text-xs uppercase tracking-[0.18em] text-[var(--leaf-500)] mb-1 md:mb-2 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
                      {date}
                    </div>
                  )}
                  {description && (
                    <p className="font-sans text-white/80 text-[10px] md:text-xs leading-tight md:leading-relaxed translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-150 ease-out max-w-[95%]">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
