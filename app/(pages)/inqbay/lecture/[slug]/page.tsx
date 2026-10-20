import { getLecturesBySlug } from "@/app/lib/apiRequests";
import { getDirectusAssetUrl } from "@/app/lib/directusAssets";
import WysiwygContent from "../../components/wysiwygContent";
import { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata>{
    const { slug } = await params;
    const { data: lecture } = await getLecturesBySlug(slug);

    if(!lecture){
        return{
            title: 'Přednáška nenalezena',
            description: 'Požadovaná přednáška nebyla nalezena.',
        };
    };

    return {
        title: lecture.title,
        description: lecture.content.replace(/<[^>]*>/g, ''). slice(0, 150),
        openGraph: {
            images: [getDirectusAssetUrl(lecture.img || '')],
        },
    };
}

export default async function LectureDetailPage({ params }: Props) {
    const { slug } = await params;
    const { data: lecture, error } = await getLecturesBySlug(slug);

    if(!lecture || error ){
        return(
            <main>
                <h1>Přednáška nenalezena</h1>
                <p>Tato přednáška nebyla nalezena.</p>
            </main>
        );
    };

    const getEmbededUrl = (link: string): string => {
        try {
            const url = new URL(link);
            const id = url.searchParams.get("v");

            if(!id) return link;

            return `https://www.youtube.com/embed/${id}`;
        } catch {
            return link;
        }
    };

    return(
        <main className="mt-30 mb-20 mx-auto max-w-7xl px-4">
            <h3 className='mb-3'>{lecture.title}</h3>
            <div className="aspect-video overflow-hidden mt-5 mb-5 flex w-[100%] lg:w-[70%]">
                <iframe src={getEmbededUrl(lecture.link)}
                        title={lecture.title}
                        allowFullScreen
                        className="w-full">
                </iframe>
            </div>
            <WysiwygContent html={lecture.content}/>
        </main>
    );
}