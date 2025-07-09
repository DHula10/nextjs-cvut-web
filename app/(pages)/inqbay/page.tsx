import type { Metadata } from 'next';
import styles from './inqbay.module.css';
import ArticleList from '@/app/components/articles/articleList';
import PodcastList from '@/app/components/podcasts/podcastList';


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

const testPodcasts = [
    {
        title: 'Přes 85 % nápadů, které by mohly zlepšit svět skončí v šuplíku',
        speaker: 'Ing. Ondřej Durďák, Scrum Master ČVUT',
        link: '#',
    },
    {
        title: 'Jak najít investora pro svůj projekt',
        speaker: 'Mgr. Jana Nováková, Angel Investor',
        link: '#',
    },
    {
        title: 'Úspěšné příběhy z ČVUT',
        speaker: 'Ing. Petr Svoboda',
        link: '#',
    },
];

export default async function InqbayPage(){

    //const articles = await getArticles();
    //const podcasts = await getPodcasts();

    return (
        <main>
            <ArticleList articles={testArticles} />
            <PodcastList podcasts={testPodcasts} />
        </main>
    );
}