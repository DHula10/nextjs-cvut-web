import { getArticleBySlug } from "@/app/lib/apiRequests";
import WysiwygContent from '@/app/(pages)/inqbay/components/wysiwygContent';
import { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata>{
    const { data: article } = await getArticleBySlug(params.slug);

    if(!article){
        return{
            title: 'Článek nenalezen',
            description: 'Požadovaný článek nebyl nalezen.',
        };
    };

    return {
        title: article.title,
        description: article.content.replace(/<[^>]*>/g, ''). slice(0, 150),
        openGraph: {
            images: [`http://localhost:8055//assets/${article.img}`],
        },
    };
}

export default async function ArticleDetailPage({ params }: Props) {
    const { data: article, error } = await getArticleBySlug(params.slug);


    if(!article || error){
        return(
            <main>
                <h1>Článek nenalezen</h1>
                <p>Tento článek nebyl nalezen.</p>
            </main>
        );
    };

    return(
        <main className="mt-40 mb-20 mx-auto max-w-7xl px-4">
            <h3 className='mb-3'>{article.title}</h3>
            <span className={` bg-black text-white text-[15px] font-semibold px-3 py-1 w-fit rounded-[25px]`}>
                {article.categoryId?.name || 'Nezařazeno'}
            </span>
            <img src={`http://localhost:8055/assets/${article.img}`} alt={article.title}
                 className='mx-auto my-10 h-[500px]'/>
            <WysiwygContent html={article.content}/>
        </main>
    )
}