'use client';

import { useRef } from 'react';

type TileSectionWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export default function TileSectionWrapper({ title, children }: TileSectionWrapperProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (amount: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-10 min-w-[100%]">
      <h4 className="mb-4 ml-[5%]">{title}</h4>
      <div className="relative">
        <button
          className="absolute left-0 top-0 h-full w-24 
            bg-gradient-to-r from-cvut-white/90 to-transparent 
            z-10 flex items-center justify-center"
          onClick={() => scrollByAmount(-400)}
        >
          <div className="rounded-full bg-cvut-green w-12 h-12 flex items-center justify-center">
            <span className="text-white text-lg">‹</span>
          </div>
        </button>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scroll-smooth whitespace-nowrap px-[5%]"
        >
          {children}
        </div>

        <button
          className="absolute right-0 top-0 h-full w-24 
            bg-gradient-to-l from-cvut-white/90 to-transparent 
            z-10 flex items-center justify-center"
          onClick={() => scrollByAmount(400)}
        >
          <div className="rounded-full bg-cvut-green w-12 h-12 flex items-center justify-center">
            <span className="text-white text-lg">›</span>
          </div>
        </button>
      </div>
    </section>
  );
}
