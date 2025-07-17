'use client';

import styles from './inqbay.module.css';
import ArticleList from '@/app/components/articles/articleList';
import PodcastList from '@/app/components/podcasts/podcastList';
import LectureList from '@/app/components/lectures/lectureList';
import Button from '@/app/components/button';
import { useState } from 'react';

const testArticles = [
  {
    id: 1,
    title: 'Jak se připravit na prezentaci s inversory',
    contentText: 'Zjistěte, co jsou základní body pro získání financování, jak investory oslovit a co připravit na první schůzku.',
    imgHref: '/imgs/testArticle.jpg',
    category: 'Startup',
  },
  {
    id: 2,
    title: 'Jak se připravit na prezentaci s inversory',
    contentText: 'Zjistěte, co jsou základní body pro získání financování, jak investory oslovit a co připravit na první schůzku.',
    imgHref: '/imgs/testArticle.jpg',
    category: 'Prezentace',
  },
  {
    id: 3,
    title: 'Jak se připravit na prezentaci s inversory',
    contentText: 'Zjistěte, co jsou základní body pro získání financování, jak investory oslovit a co připravit na první schůzku.',
    imgHref: '/imgs/testArticle.jpg',
    category: 'Validace',
  },
  {
    id: 4,
    title: 'Jak se připravit na prezentaci s inversory',
    contentText: 'Zjistěte, co jsou základní body pro získání financování, jak investory oslovit a co připravit na první schůzku.',
    imgHref: '/imgs/testArticle.jpg',
    category: 'Podnikání',
  },
];

const testPodcasts = [
  {
    title: 'Přes 85 % nápadů, které by mohly zlepšit svět skončí v šuplíku',
    speaker: 'Ing. Ondřej Durkáč, Scrum Master ČVUT',
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
]

export default function InqbayPage() {

  //const articles = await getArticles();
  //const podcasts = await getPodcasts();
  //const lectures = await getLectures();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = selectedCategory ? testArticles
                                              .filter((article) => article.category === selectedCategory) : testArticles;

  const uniqueCategories = Array.from(new Set(testArticles.map((article) => article.category)));

  return (
    <main>
      <section className={`${styles.hero} flex flex-col h-svh justify-center pl-20 lg:pl-32 md:pt-10`}>
        <div className='relative flex flex-col gap-8 z-50'>
          <h6 className='text-cvut-green'>#TRANSFER</h6>
          <h2 className='text-4xl font-bold md:max-w-3/4 lg:max-w-5/6 xl:max-w-3/4'>OPŘETE SE O DŮVERYHODNÉ ZDROJE JEŠTĚ PŘED REALIZACÍ</h2>
          <p className='body-l w-[75%]'>Připravili jsme pro vás bezplatnou digitální databázi se stovkami článků, přednášek, podcastů a nástrojů, které vám pomůžou začít smysluplně.</p>
          <Button isLink label="PROZKOUMAT KNIHOVNU ↓" bgColor="g" href="" inverse />
        </div>
      </section>

      {/*KATEGORIE FILTR*/}
      <section className='flex flex-col items-center py-14'>
        <h3>Zvolte téma</h3>
        <div className='mt-8 flex flex-wrap justify-center gap-3'>
          <button
            onClick={()=> setSelectedCategory(null)}
            className={`bg-[#A0B10266] px-5 py-2 rounded-xl font-bold ${
              selectedCategory === null ? 'bg-cvut-green' : ''}`}>
            VŠECHNY KATEGORIE
          </button>
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`bg-[#A0B10266] px-5 py-2 rounded-xl font-bold ${
                selectedCategory === category ? 'bg-cvut-green' : ''}`}>
              {category.toUpperCase()}
            </button>
          ))}        
        </div>
      </section>

      <ArticleList articles={filteredArticles} />
      <PodcastList podcasts={testPodcasts} />
      <LectureList lectures={testLectures} />
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