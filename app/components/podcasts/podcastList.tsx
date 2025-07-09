'use client';

import PodcastTile from "./podcastTile";
import styles from './podcastList.module.css'


type Podcast = {
    title: string;
    speaker: string;
    link: string;
};

type Props = {
    podcasts: Podcast[];
};

export default function PodcastList({ podcasts }: Props) {
    return(
        <section className={`${styles.podcastList} p-16`}>
            <h4>Podcasty</h4>
            <div className="mt-5 flex gap-8">
                {podcasts.map((podcast, index) => (
                    <PodcastTile key={index} {...podcast} />
                ))}
            </div>
        </section>
    )
}