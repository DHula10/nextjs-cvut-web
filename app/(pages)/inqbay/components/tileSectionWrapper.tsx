"use client";

import Image from 'next/image';
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
    const [canScrollRight, setCanScrollRight] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    const updateScrollState = () => {
        const container = containerRef.current;
        if (!container) return;

        const { scrollLeft, scrollWidth, clientWidth } = container;
        const moreToRight = scrollLeft + clientWidth < scrollWidth - 20;
        setCanScrollRight(moreToRight);
    };

    // Scroll listener
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            updateScrollState();

            // Pokud jsme skoro na konci a máme co načíst, načti
            const { scrollLeft, scrollWidth, clientWidth } = container;
            if (scrollLeft + clientWidth >= scrollWidth - 20 && hasMore) {
                onLoadMore();
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [hasMore, onLoadMore]);

    // Zkontroluj možnost scrollu i po přidání nových článků
    useEffect(() => {
        const timeout = setTimeout(() => {
            updateScrollState();
        }, 300); // malá prodleva po DOM update
        return () => clearTimeout(timeout);
    }, [children]);

    const handleScrollRight = () => {
    const container = containerRef.current;
    if (container) {
        const scrollAmount = container.clientWidth * 0.8; // 80 % viditelné šířky
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setScrollPageNumber((prev) => prev + 1);
    }
};

const handleScrollLeft = () => {
    const container = containerRef.current;
    if (container) {
        const scrollAmount = container.clientWidth * 0.8;
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setScrollPageNumber((prev) => Math.max(prev - 1, 0));
    }
};

    return (
        <section id={title} className="flex flex-col min-h-fit min-w-full max-w-full mt-15">
            <h4 className="mb-4 ml-[5%]">{title}</h4>
            <div className="relative">
                {scrollPageNumber > 0 && (
                    <button
                        className="absolute left-0 top-0 h-full w-48 bg-gradient-to-r 
                                from-cvut-white/90 via-cvut-white/80 to-transparent z-10 flex items-center 
                                justify-center cursor-pointer"
                        onClick={handleScrollLeft}
                    >
                        <div className="rounded-full bg-cvut-green w-16 h-16 flex items-center justify-center shadow-2xl shadow-black text-cvut-white">
                            <Image src="/icons/chevron-left.svg" alt="Chevron left" width={32} height={32} /> 
                        </div>
                    </button>
                )}

                <div
                    ref={containerRef}
                    className="overflow-x-auto scrollbar-none"
                >
                    {children}
                </div>

                {(hasMore || canScrollRight) && (
                    <button
                        className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l 
                                from-cvut-white/100 via-cvut-white/80 to-transparent z-10 flex items-center 
                                justify-center cursor-pointer"
                        onClick={handleScrollRight}
                    >
                        <div className="rounded-full bg-cvut-green w-16 h-16 flex items-center justify-center shadow-2xl shadow-black text-cvut-white">
                            <Image src="/icons/chevron-right.svg" alt="Chevron right" width={32} height={32} /> 
                        </div>
                    </button>
                )}
            </div>
        </section>
    );
}
