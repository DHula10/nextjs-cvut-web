'use client';

import { useRef, useEffect, useState } from "react";

type TileSectionWrapperProps = {
    title: string;
    children: React.ReactNode;
    hasMore: boolean;
    onLoadMore: () => void;
};

export default function TileSectionWrapper({
    title,
    children,
    hasMore,
    onLoadMore,
}: TileSectionWrapperProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Sleduj změnu scrollu
  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollContainerRef.current;
    if (!container) return;
    container.addEventListener('scroll', updateScrollButtons);
    return () => {
      container.removeEventListener('scroll', updateScrollButtons);
    };
  }, [children]);

  const scrollByAmount = 300;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -scrollByAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
    }
    onLoadMore();
  };

  return (
    <section className={`relative py-10`}>
      <h4 className={`mb-4 ml-[5%]`}>{title}</h4>
      <div className="relative">
        {/* Levá šipka */}
        {canScrollLeft && (
          <button
            className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-cvut-white/90 to-transparent z-10 flex items-center justify-center cursor-pointer"
            onClick={scrollLeft}
          >
            <div className="rounded-full bg-cvut-green w-12 h-12 flex items-center justify-center">
              <span className="text-white text-lg">‹</span>
            </div>
          </button>
        )}

        {/* Obsah */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scroll-smooth px-[5%]"
        >
          {children}
        </div>

        {/* Pravá šipka */}
        {canScrollRight && (
          <button
            className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-cvut-white/90 to-transparent z-10 flex items-center justify-center cursor-pointer"
            onClick={scrollRight}
          >
            <div className="rounded-full bg-cvut-green w-12 h-12 flex items-center justify-center">
              <span className="text-white text-lg">›</span>
            </div>
          </button>
        )}
      </div>
    </section>
  );
}

