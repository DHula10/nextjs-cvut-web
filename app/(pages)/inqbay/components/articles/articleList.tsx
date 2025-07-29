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
    onLoadMore: () => void;
};

export default function ArticleList({ articles, onLoadMore }: Props) {
    return (
        <section className={`${styles.articleList} min-w-[100%]`}>
            <h4 className="absolute">Články</h4>
            <div className="mt-15 flex gap-8 min-w-[100%]">
                {articles.map(article => (
                    <ArticleTile key={article.id} {...article} />
                ))}
            </div>
            <div className='w-full flex justify-end mt-10 right-5 absolute'>
                <button onClick={onLoadMore}
                        className='px-6 py-2 bg-cvut-green text-white font-bold
                                   rounded-lg hover:bg-[#8EA700] transition'>
                    Načíst další články
                </button>
            </div>
        </section>
    );
}