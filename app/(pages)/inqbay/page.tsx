import type { Metadata } from 'next';
import styles from './inqbay.module.css';
import ArticleList from '@/app/components/articles/articleList';


export const metadata: Metadata = {
    title: 'Inqbay',
    description: 'Lorem Ipsum',
}

export default async function InqbayPage(){

    const articles = await getArticles();

    return (
        <main>
            <ArticleList articles={articles} />
        </main>
    );
}