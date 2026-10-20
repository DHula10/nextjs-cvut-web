import { getArticleBySlug } from "@/app/lib/apiRequests";
import { getDirectusAssetUrl } from "@/app/lib/directusAssets";
import WysiwygContent from '@/app/(pages)/inqbay/components/wysiwygContent';
import { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata>{
    const { slug } = await params;
    const { data: article } = await getArticleBySlug(slug);

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
            images: [getDirectusAssetUrl(article.img || '')],
        },
    };
}

export default async function ArticleDetailPage({ params }: Props) {
    const { slug } = await params;
    const { data: article, error } = await getArticleBySlug(slug);


    if(!article || error){
        return(
            <main>
                <h1>Článek nenalezen</h1>
                <p>Tento článek nebyl nalezen.</p>
            </main>
        );
    };

    return(
        <main className="mt-30 mb-20 mx-auto max-w-7xl px-4">
            <h3 className='mb-3'>{article.title}</h3>
            <span className={` bg-black text-white text-[15px] font-semibold px-3 py-1 w-fit rounded-[25px]`}>
                {article.categoryId?.name || 'Nezařazeno'}
            </span>
            <img src={getDirectusAssetUrl(article.img || '')} alt={article.title}
                 className='my-5 w-[100%] lg:w-[70%]'/>
            <WysiwygContent html={article.content}/>
        </main>
    )
}