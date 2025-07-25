'use client';
import styles from './inqbay.module.css';
import ArticleList from '@/app/(pages)/inqbay/components/articles/articleList';
import PodcastList from '@/app/(pages)/inqbay/components/podcasts/podcastList';
import LectureList from '@/app/(pages)/inqbay/components/lectures/lectureList';
import Button from '@/app/components/button';
import { useState, useEffect } from 'react';
import { getCategories } from '@/app/lib/apiRequests';
import { getArticles } from '@/app/lib/apiRequests';
import { getPodcasts } from '@/app/lib/apiRequests';
import { getLectures } from '@/app/lib/apiRequests';


type Category = {
  name: string;
}

type Article = {
  title: string;
  slug: string;
  content: string;
  img: string;
  categoryId?: { name: string } | null;
}

type Podcast = {
  title: string;
  author: string;
  link: string;
}

type Lecture = {
  title: string;
  content: string;
  img: string;
  slug: string;
}

const testArticles = [
  {
    id: 1,
    title: 'Jak se připravit na prezentaci s inverstory',
    contentText: 'Zjistěte, co jsou základní body pro získání financování, jak investory oslovit a co připravit na první schůzku.',
    imgHref: '/imgs/testArticle.jpg',
    category: 'Startup',
  },
  {
    id: 2,
    title: 'Jak se připravit na prezentaci s inverstory',
    contentText: 'Zjistěte, co jsou základní body pro získání financování, jak investory oslovit a co připravit na první schůzku.',
    imgHref: '/imgs/testArticle.jpg',
    category: 'Prezentace',
  },
  {
    id: 3,
    title: 'Jak se připravit na prezentaci s inverstory',
    contentText: 'Zjistěte, co jsou základní body pro získání financování, jak investory oslovit a co připravit na první schůzku.',
    imgHref: '/imgs/testArticle.jpg',
    category: 'Validace',
  },
  {
    id: 4,
    title: 'Jak se připravit na prezentaci s inverstory',
    contentText: 'Zjistěte, co jsou základní body pro získání financování, jak investory oslovit a co připravit na první schůzku.',
    imgHref: '/imgs/testArticle.jpg',
    category: 'Podnikání',
  },
  {
    id: 5,
    title: 'Jak se připravit na prezentaci s inverstory',
    contentText: 'Zjistěte, co jsou základní body pro získání financování, jak investory oslovit a co připravit na první schůzku.',
    imgHref: '/imgs/testArticle.jpg',
    category: 'Podnikání',
  },
  {
    id: 6,
    title: 'Jak se připravit na prezentaci s inverstory',
    contentText: 'Zjistěte, co jsou základní body pro získání financování, jak investory oslovit a co připravit na první schůzku.',
    imgHref: '/imgs/testArticle.jpg',
    category: 'Podnikání',
  },
];

const testPodcasts = [
  {
    title: 'Přes 85 % nápadů, které by mohly zlepšit svět skončí v šuplíku',
    author: 'Ing. Ondřej Durkáč, Scrum Master ČVUT',
    link: '#',
  },
  {
    title: 'Jak najít investora pro svůj projekt',
    author: 'Mgr. Jana Nováková, Angel Investor',
    link: '#',
  },
  {
    title: 'Úspěšné příběhy z ČVUT',
    author: 'Ing. Petr Svoboda',
    link: '#',
  },
  {
    title: 'Úspěšné příběhy z ČVUT',
    author: 'Ing. Petr Svoboda',
    link: '#',
  },
  {
    title: 'Úspěšné příběhy z ČVUT',
    author: 'Ing. Petr Svoboda',
    link: '#',
  },
  {
    title: 'Úspěšné příběhy z ČVUT',
    author: 'Ing. Petr Svoboda',
    link: '#',
  },
  {
    title: 'Úspěšné příběhy z ČVUT',
    author: 'Ing. Petr Svoboda',
    link: '#',
  },
  {
    title: 'Úspěšné příběhy z ČVUT',
    author: 'Ing. Petr Svoboda',
    link: '#',
  },
];

const testLectures = [
  {
    id: 1,
    title: 'Případová studie zakladatele Magu',
    contentText: 'Jaké překážky jsme museli překonat a kolik času nám to zabralo.',
    imgHref: '/imgs/testLecture.jpg',
  },
  {
    id: 2,
    title: 'Případová studie zakladatele Magu',
    contentText: 'Jaké překážky jsme museli překonat a kolik času nám to zabralo.',
    imgHref: '/imgs/testLecture.jpg',
  },
  {
    id: 3,
    title: 'Případová studie zakladatele Magu',
    contentText: 'Jaké překážky jsme museli překonat a kolik času nám to zabralo.',
    imgHref: '/imgs/testLecture.jpg',
  },
  {
    id: 4,
    title: 'Případová studie zakladatele Magu',
    contentText: 'Jaké překážky jsme museli překonat a kolik času nám to zabralo.',
    imgHref: '/imgs/testLecture.jpg',
  },
  {
    id: 5,
    title: 'Případová studie zakladatele Magu',
    contentText: 'Jaké překážky jsme museli překonat a kolik času nám to zabralo.',
    imgHref: '/imgs/testLecture.jpg',
  },
  {
    id: 6,
    title: 'Případová studie zakladatele Magu',
    contentText: 'Jaké překážky jsme museli překonat a kolik času nám to zabralo.',
    imgHref: '/imgs/testLecture.jpg',
  },
]

export default function InqbayPage() {

  const [categories, setCategories] = useState<Category[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, articlesRes, podcastsRes, lecturesRes] = await Promise.all([
          getCategories(),
          getArticles(),
          getPodcasts(),
          getLectures(),
        ]);
        setCategories(categoriesRes);
        setArticles(articlesRes);
        setPodcasts(podcastsRes);
        setLectures(lecturesRes);
      } catch (error) {
        console.error('Chyba při načítání dat:', error);
      }
    };
    fetchData();
  }, []);

  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.categoryId?.name === selectedCategory)
    : articles;
  

  return (
    <main>
      <section className={`${styles.hero} flex flex-col h-svh justify-center pl-20 lg:pl-32 md:pt-10`}>
        <div className='relative flex flex-col gap-8 z-50'>
          <h6 className='text-cvut-green'>#TRANSFER</h6>
          <h2 className='text-4xl font-bold md:max-w-3/4 lg:max-w-5/6 xl:max-w-3/4'>OPŘETE SE O DŮVERYHODNÉ ZDROJE JEŠTĚ PŘED REALIZACÍ</h2>
          <p className='body-l w-[75%]'>Připravili jsme pro vás bezplatnou digitální databázi se stovkami článků, přednášek, podcastů a nástrojů, které vám pomůžou začít smysluplně.</p>
          <Button isLink label="PROZKOUMAT KNIHOVNU" bgColor="g" href="#category" inverse />
        </div>
      </section>

      {/*KATEGORIE FILTR*/}
       <section id='category' className='flex flex-col items-center py-14'>
        <h3>Zvolte téma</h3>
        <div className='mt-8 flex flex-wrap justify-center gap-3'>
          <button
            onClick={() => setSelectedCategory(null)}
            className={`bg-[#A0B10266] px-5 py-2 rounded-xl font-bold ${styles.categoryButton} ${selectedCategory === null ? 'bg-cvut-green' : ''}`}>
            VŠECHNY KATEGORIE
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`bg-[#A0B10266] px-5 py-2 rounded-xl font-bold ${styles.categoryButton} ${selectedCategory === cat.name ? 'bg-cvut-green' : ''}`}>
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      <ArticleList articles={filteredArticles} />
      <PodcastList podcasts={podcasts} />
      <LectureList lectures={lectures} />
      <section className={`${styles.uniLion} mt-10 mb-20`}>
        <div className='ml-[11%]'>
          <h4>Zjednodušte si život s UniLion</h4>
          <p className='body-l mt-5 w-[40%]'>
            Organizujte své studium, sledujte termíny a udržujte přehled o všem důležitém na jednom místě.
          </p>
          <div className={`${styles.storeButtons} mt-10`}>
            <a href="" className={styles.storeButton}><img src="/imgs/appStore.svg" alt="App Store" /></a>
            <a href="" className={styles.storeButton}><img src="/imgs/googlePlay.png" alt="Google Play" /></a>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-20">
        <article className={`${styles.realisationArticle} flex flex-col gap-5 items-center`}>
          <h3 className={`text-center min-w-full`}>
            Chcete probrat realizaci
            <br />
            vašeho nápadu s odborníkem?
          </h3>
          <p className={`body-l mb-10`}>
            Domluvme si online konzultaci, během které se seznámíme
            s vaším projektem a probereme potenciální postup.
          </p>

          {/* 
          nevím, jak na tom jsme s těmi komponentami, co je valid teďka
          <Calendly />
          */}
        </article>
      </section>
    </main>
  );
}