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
    onLoadMore: () => void;
};

export default function PodcastList({ podcasts, onLoadMore }: Props) {
    return(
        <section className={`${styles.podcastList} mt-10`}>
            <h4 className="absolute">Podcasty</h4>
            <div className="mt-15 flex gap-8 h-[fit]">
                {podcasts.map(podcast => (
                    <PodcastTile key={podcast.id} {...podcast} />
                ))}
            </div>
            <div className='w-full flex justify-end mt-10 right-5 absolute'>
                <button onClick={onLoadMore}
                        className='px-6 py-2 bg-cvut-green text-white font-bold
                                   rounded-lg hover:bg-[#8EA700] transition'>
                    Načíst další podcasty
                </button>
            </div>
        </section>
    )
}