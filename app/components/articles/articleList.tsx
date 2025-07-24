import ArticleTile from "./articleTile";
import styles from './articleList.module.css'

type Article = {
    id: number;
    title: string;
    contentText: string;
    imgHref: string;
    category: string;
};

type Props = {
    articles: Article[];
};

export default function ArticleList({ articles }: Props){
    return (
        <section className={`${styles.articleList}`}>
            <h4 className="absolute">Články</h4>
            <div className="mt-15 grid md:grid-cols-3 lg:grid-cols-4 gap-8">
                {articles.map(article => (
                    <ArticleTile key={article.id} {...article} />
                ))}
            </div>
        </section>
    );
}