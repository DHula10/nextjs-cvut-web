"use client";
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CarouselItem from './carouselItem'
import './embla-carousel.css'
import { DotButton } from './DotButton';
import { useDotButton } from './useDotButton'
import { readItems } from '@directus/sdk';
import directus from '@/app/lib/directus';
import type { References } from '@/app/lib/schema';

export function Carousel() {
    const [references, setReferences] = useState<References[]>([]);
    const [loading, setLoading] = useState(true);
    
    const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false })
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [autoplay])
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    useEffect(() => {
        const fetchReferences = async () => {
            try {
                const result = await directus.request(
                    readItems('references', {
                        fields: ['id', 'sortId', 'companyName', 'companyMessage', 'logo', 'img'],
                        sort: ['sortId'],
                    })
                );
                setReferences(result);
            } catch (error) {
                console.error('Error fetching references:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchReferences();
    }, []);

    const handleDotClick = useCallback((index: number) => {
        if (emblaApi) {
            emblaApi.plugins().autoplay.stop()
            emblaApi.scrollTo(index)
        }
    }, [emblaApi])

    if (loading) {
        return <div>Loading references...</div>;
    }

    return (
        <>
            <div className="embla w-[100%] xl:w-[80%] 2xl:w-[60%]" ref={emblaRef}>
                <div className="embla__container">
                    {references.map((ref) => (
                        <CarouselItem 
                            key={ref.id}
                            companyName={ref.companyName} 
                            companyMessage={ref.companyMessage} 
                            imageUrl={'http://localhost:8055/assets/' + ref.img}
                            logoUrl={'http://localhost:8055/assets/' + ref.logo}
                        />
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center gap-3">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => handleDotClick(index)}
                        selected={index === selectedIndex}
                    />
                ))}
            </div>
        </>
    )
}