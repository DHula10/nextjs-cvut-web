import type { Metadata } from 'next';
import styles from './inqbay.module.css';
import ArticleList from '@/app/components/articles/articleList';


export const metadata: Metadata = {
    title: 'Inqbay',
    description: 'Lorem Ipsum',
}

const testArticles = [
  {
    id: 1,
    title: 'Jak se připravit na prezentaci s inversory',
    contentText: 'Zjistěte, co jsou základní body pro získání financování, jak investory oslovit a co připravit na první schůzku.',
    imgHref: '/imgs/testArticle.jpg',
    category: 'Startup',
  },
  {
    id: 1,
    title: 'Jak se připravit na prezentaci s inversory',
    contentText: 'Zjistěte, co jsou základní body pro získání financování, jak investory oslovit a co připravit na první schůzku.',
    imgHref: '/imgs/testArticle.jpg',
    category: 'Prezentace',
  },
  {
    id: 1,
    title: 'Jak se připravit na prezentaci s inversory',
    contentText: 'Zjistěte, co jsou základní body pro získání financování, jak investory oslovit a co připravit na první schůzku.',
    imgHref: '/imgs/testArticle.jpg',
    category: 'Validace',
  },
  {
    id: 1,
    title: 'Jak se připravit na prezentaci s inversory',
    contentText: 'Zjistěte, co jsou základní body pro získání financování, jak investory oslovit a co připravit na první schůzku.',
    imgHref: '/imgs/testArticle.jpg',
    category: 'Podnikání',
  },
];

export default async function InqbayPage(){

    //const articles = await getArticles();

    return (
        <main>
            <ArticleList articles={testArticles} />
        </main>
    );
}