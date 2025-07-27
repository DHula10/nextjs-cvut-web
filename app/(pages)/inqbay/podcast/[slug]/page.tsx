import { getPodcastBySlug } from "@/app/lib/apiRequests";
import { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { data: podcast } = await getPodcastBySlug(params.slug);

    if (!podcast) {
        return {
            title: 'Podcast nenalezen',
            description: 'Požadovaný podcast nebyl nalezen.',
        };
    };

    return {
        title: podcast.title,
        description: `Poslechněte si podcast od ${podcast.author}`,
    };
}

export default async function PodcastDetailPage({ params }: Props) {
    const { data: podcast, error } = await getPodcastBySlug(params.slug);

    if (!podcast || error) {
        return (
            <main>
                <h1>Podcast nenalezen</h1>
                <p>Tento podcast nebyl nalezen.</p>
            </main>
        );
    };

    const getEmbedUrl = (link: string): string => {
    try {
        const url = new URL(link);
        const id = url.searchParams.get("v");

        if (!id) return link; // fallback na původní link

        return `https://www.youtube.com/embed/${id}`;
    } catch {
        return link;
    }
};


    return (
        <main className="mt-28 pl-7 pr-7 mb-30">
            <h3 className='mb-3'>{podcast.title}</h3>
            <span className={` bg-black text-white text-[15px] font-semibold px-3 py-1 w-fit rounded-[25px]`}>
               {podcast.author}
            </span>
            <div className="aspect-video w-full overflow-hidden mt-5">
                <iframe src={getEmbedUrl(podcast.link)}
                        title={podcast.title}
                        allowFullScreen
                        className="h-[80%] w-full">
                </iframe>
            </div>
        </main>
    )
}