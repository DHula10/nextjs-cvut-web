'use client';

import Link from 'next/link';
import styles from './podcastTile.module.css'

type PodcastProps = {
    title: string;
    slug: string;
    author: string;
    link: string;
};

export default function PodcastTile({ title, slug, author }: PodcastProps) {
    return (
        <Link href={`/inqbay/podcast/${slug}`} className={`${styles.podcastTile} bg-[#A0B10266] flex flex-col gap-3 text-start hover:scale-[1.03] transition cursor-pointer 
                                                    min-w-[90%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[40%] 2xl:min-w-[25%]`}>
            <article >
                <div>
                    <h6>{title}</h6>
                    <p className="body-s mt-3">{author}</p>
                </div>
                <span className="font-bold mt-8">POSLECHNOUT →</span>
            </article>
        </Link>
    )
}