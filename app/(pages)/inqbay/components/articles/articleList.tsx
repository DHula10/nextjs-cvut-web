import ArticleTile from "./articleTile";
import styles from './articleList.module.css'

type Article = {
    id: number;
    title: string;
    slug: string;
    content: string;
    img: string;
    categoryId?: { name: string } | null;
};

type Props = {
    articles: Article[];
};

export default function ArticleList({ articles, }: Props) {
    return (

        <div className={`flex gap-8 min-w-[100%]`}>
            {articles.map(article => (
                <ArticleTile key={`${article.id}-${article.slug}`} {...article} />
            ))}
        </div>
    );
}