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
            <div className="flex gap-8 min-w-[100%] min-h-fit pl-[5%] pb-5 pt-5">
                {podcasts.map(podcast => (
                    <PodcastTile key={podcast.id} {...podcast} />
                ))}
            </div>
    )
}