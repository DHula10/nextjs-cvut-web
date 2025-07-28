import { getLecturesBySlug } from "@/app/lib/apiRequests";
import WysiwygContent from "../../components/wysiwygContent";
import { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata>{
    const { data: lecture } = await getLecturesBySlug(params.slug);

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
            images: [`http://loclahost:8055//assets/${lecture.img}`],
        },
    };
}

export default async function LectureDetailPage({ params }: Props) {
    const { data: lecture, error } = await getLecturesBySlug(params.slug);

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
        <main className="mt-28 pl-7 pr-7 mb-30">
            <h3 className='mb-3'>{lecture.title}</h3>
            <div className="aspect-video overflow-hidden mt-5 mb-5 flex w-[60%]">
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