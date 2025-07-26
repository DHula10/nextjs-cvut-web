import { getArticles } from "@/app/lib/apiRequests";
import WysiwygContent from "../components/wysiwygContent";
import { Metadata } from "next";

type Props = { params: {slug: string} };

export async function generateMetadata({ params }: Props): Promise<Metadata>{
    const { data: articles } = await getArticles();
    const article = articles.find((a) => a.slug === params.slug);

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

export async function generateStaticParams() {
    const { data: articles } = await getArticles();
    return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticleDetailPage({ params }: Props) {
    const { data: articles } = await getArticles();
    const article = articles.find((a) => a.slug === params.slug);

    if(!article){
        return(
            <main>
                <h1>Článek nenalezen</h1>
                <p>Tento článek nebyl nalezen.</p>
            </main>
        );
    };

    return(
        <main className="mt-30">
            <h3>{article.title}</h3>
            <span>
                {article.categoryId?.name || 'Nezařazeno'}
            </span>
            <img src={`http://localhost:8055/assets/${article.img}`} alt={article.title}/>
            <WysiwygContent html={article.content}/>
        </main>
    )
}