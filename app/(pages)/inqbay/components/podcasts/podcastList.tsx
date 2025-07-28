'use client';

import PodcastTile from "./podcastTile";
import styles from './podcastList.module.css'


type Podcast = {
    id: number;
    title: string;
    slug: string;
    author: string;
    link: string;
};

type Props = {
    podcasts: Podcast[];
};

export default function PodcastList({ podcasts }: Props) {
    return(
        <section className={`${styles.podcastList}`}>
            <h4 className="absolute">Podcasty</h4>
            <div className="mt-15 flex gap-8 h-[20vh]">
                {podcasts.map(podcast => (
                    <PodcastTile key={podcast.id} {...podcast} />
                ))}
            </div>
        </section>
    )
}