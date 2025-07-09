'use client';

type PodcastProps = {
    title: string;
    speaker: string;
    link: string;
};

export default function PodcastTile({ title, speaker, link }: PodcastProps) {
    return(
        <article className="bg-[#A0B10266] rounded-2xl px-10 py-6 flex flex-col gap-3 text-start hover:scale-[1.03] transition cursor-pointer">
            <h6>{title}</h6>
            <p>{speaker}</p>
            <span>POSLECHNOUT →</span>
        </article>
    )
}