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
            <h4>Články</h4>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
                {articles.map(article => (
                    <ArticleTile key={article.id} {...article} />
                ))}
            </div>
        </section>
    );
}