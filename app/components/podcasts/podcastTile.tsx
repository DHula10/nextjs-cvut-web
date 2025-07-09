'use client';

import styles from './podcastTile.module.css'

type PodcastProps = {
    title: string;
    speaker: string;
    link: string;
};

export default function PodcastTile({ title, speaker, link }: PodcastProps) {
    return(
        <article className={`${styles.podcastTile} bg-[#A0B10266] flex flex-col gap-3 text-start hover:scale-[1.03] transition cursor-pointer`}>
            <h6>{title}</h6>
            <p className="body-s mt-3">{speaker}</p>
            <span className="font-bold mt-8">POSLECHNOUT →</span>
        </article>
    )
}