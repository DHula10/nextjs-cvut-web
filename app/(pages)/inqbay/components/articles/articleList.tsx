import ArticleTile from "./articleTile";
import styles from './articleList.module.css'

type Article = {
    title: string;
    slug: string;
    content: string;
    img: string;
    categoryId?: { name: string } | null;
};

type Props = {
    articles: Article[];
};

export default function ArticleList({ articles }: Props) {
    return (
        <section className={`${styles.articleList}`}>
            <h4 className="absolute">Články</h4>
            <div className="mt-15 flex gap-8">
                {articles.map((article, index) => (
                    <ArticleTile key={index} {...article} />
                ))}
            </div>
        </section>
    );
}