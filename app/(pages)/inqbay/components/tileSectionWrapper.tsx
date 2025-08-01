"use client";

import { useEffect, useRef, useState } from "react";

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
    const [scrollPageNumber, setScrollPageNumber] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // automatické spuštění onLoadMore při scrollu na konec
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = container;

            // Pokud jsme skoro na konci a máme co načítat
            if (scrollLeft + clientWidth >= scrollWidth - 20 && hasMore) {
                onLoadMore();
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [hasMore, onLoadMore]);

    const handleScrollRight = () => {
        const container = containerRef.current;
        if (container) {
            container.scrollBy({ left: 400, behavior: "smooth" });
            setScrollPageNumber((prev) => prev + 1);
        }
    };

    const handleScrollLeft = () => {
        const container = containerRef.current;
        if (container) {
            container.scrollBy({ left: -400, behavior: "smooth" });
            setScrollPageNumber((prev) => Math.max(prev - 1, 0));
        }
    };

    return (
        <section className="relative min-w-full max-w-full py-10">
            <h4 className={`mb-4 ml-[5%]`}>{title}</h4>

            <div className="relative">
                {scrollPageNumber > 0 && (
                    <button
                        className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-cvut-white/90 to-transparent z-10 flex items-center justify-center cursor-pointer"
                        onClick={handleScrollLeft}
                    >
                        <div className="rounded-full bg-cvut-green w-12 h-12 flex items-center justify-center">
                            <span className="text-white text-lg">‹</span>
                        </div>
                    </button>
                )}

                <div
                    ref={containerRef}
                    className="overflow-x-auto scrollbar-none flex gap-8 min-w-full px-[5%]"
                >
                    {children}
                </div>

                {hasMore && (
                    <button
                        className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-cvut-white/90 to-transparent z-10 flex items-center justify-center cursor-pointer"
                        onClick={handleScrollRight}
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
