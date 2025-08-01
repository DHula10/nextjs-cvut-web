'use client';
import styles from './inqbay.module.css';
import ArticleList from '@/app/(pages)/inqbay/components/articles/articleList';
import PodcastList from '@/app/(pages)/inqbay/components/podcasts/podcastList';
import LectureList from '@/app/(pages)/inqbay/components/lectures/lectureList';
import Button from '@/app/components/button';
import { useState, useEffect } from 'react';

import { getArticles, getCategories, getLectures, getPodcasts } from '@/app/lib/apiRequests';
import type { Categories, Articles, Podcasts, Lectures } from '@/app/lib/schema';
import TileSectionWrapper from './components/tileSectionWrapper';

export default function InqbayPage() {

  const [categories, setCategories] = useState<Categories[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [articles, setArticles] = useState<Articles[]>([]);
  const [articleOffset, setArticleOffset] = useState(10);
  const [articleTotal, setArticleTotal] = useState(0);

  const [podcasts, setPodcasts] = useState<Podcasts[]>([]);
  const [podcastOffset, setPodcastOffset] = useState(10);


  const [lectures, setLectures] = useState<Lectures[]>([]);
  const [lectureOffset, setLectureOffset] = useState(10);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch all data in parallel
        const [categoriesResponse, articlesResponse, podcastsResponse, lecturesResponse] = await Promise.all([
          getCategories(),
          getArticles(0),
          getPodcasts(0),
          getLectures(0)
        ]);

        // Handle categories
        if (categoriesResponse.error) {
          console.error('Error fetching categories:', categoriesResponse.error);
        } else {
          setCategories(categoriesResponse.data as Categories[]);
        }

        // Handle articles
        if (articlesResponse.error) {
          console.error('Error fetching articles:', articlesResponse.error);
        } else {
          setArticles(articlesResponse.data as Articles[]);
          setArticleTotal(articlesResponse.total);
          setArticleOffset(articlesResponse.data.length);
        }

        // Handle podcasts
        if (podcastsResponse.error) {
          console.error('Error fetching podcasts:', podcastsResponse.error);
        } else {
          setPodcasts(podcastsResponse.data as Podcasts[]);
        }

        // Handle lectures
        if (lecturesResponse.error) {
          console.error('Error fetching lectures:', lecturesResponse.error);
        } else {
          setLectures(lecturesResponse.data as Lectures[]);
        }

      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLoadMoreArticles = async () => {
    const response = await getArticles(articleOffset);
    if(!response.error && Array.isArray(response.data)) {
      setArticles(prev => [...prev, ...response.data]);
      setArticleOffset(prev => prev + response.data.length);
    } else {
      console.log("Chyba při načítání dalších článků:", response.error);
    }
  };

  const handleLoadMorePodcasts = async () => {
    const response = await getPodcasts(podcastOffset);
    if(!response.error && Array.isArray(response.data)) {
      setPodcasts(prev => [...prev, ...response.data]);
      setPodcastOffset(prev => prev + 10);
    } else {
      console.error("Chyba při načítání dalších podcastů:", response.error);
    }
  };

  const handleLoadMoreLectures = async () => {
    const response = await getLectures(lectureOffset);
    if(!response.error && Array.isArray(response.data)) {
      setLectures(prev => [...prev, ...response.data]);
      setLectureOffset(prev => prev + 10);
    } else {
      console.error("Chyba při načítání dalších přednášek:", response.error);
    }
  };

  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.categoryId?.name === selectedCategory)
    : articles;

  const filteredTotal = selectedCategory
    ? articles.filter((a) => a.categoryId?.name === selectedCategory).length : articleTotal;

  if (loading) {
    return (
      <main className="flex justify-center items-center h-screen">
        <div>Načítám...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex justify-center items-center h-screen">
        <div>Error: {error}</div>
      </main>
    );
  }

  return (
    <main>
      <section className={`${styles.hero} flex flex-col h-svh justify-center pl-20 lg:pl-32 md:pt-10`}>
        <div className='relative flex flex-col gap-8 z-50'>
          <h6 className='text-cvut-green uppercase'>#transfer</h6>
          <h2 className='text-4xl font-bold md:max-w-3/4 uppercase lg:max-w-5/6 xl:max-w-3/4'>Opřete se o důvěryhodné zdroje ještě před realizací</h2>
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
            className={`bg-[#A0B10266] px-5 py-2 rounded-xl uppercase font-bold 
                      ${styles.categoryButton} ${selectedCategory === null ? 
                      'bg-cvut-green' : ''}`}
          >
            všechny kategorie
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`bg-[#A0B10266] px-5 py-2 uppercase rounded-xl font-bold 
                        ${styles.categoryButton} ${selectedCategory === cat.name ? 
                        'bg-cvut-green' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      <TileSectionWrapper
        title='Články'
        hasMore={filteredArticles.length < filteredTotal}
        onLoadMore={handleLoadMoreArticles}
        >
          <ArticleList articles={filteredArticles}/>
      </TileSectionWrapper>
      
      <PodcastList podcasts={podcasts} onLoadMore={handleLoadMorePodcasts}/>
      <LectureList lectures={lectures} onLoadMore={handleLoadMoreLectures}/>
      <section className={`${styles.uniLion} mt-30 mb-20`}>
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
            s vaším projektem a probereme potentiální postup.
          </p>

          <Button isLink label="Domluvit konzultaci" bgColor="g" href="https://outlook.office365.com/book/TransferVUT@campuscvut.onmicrosoft.com/?ismsaljsauthenabled=true" target="_blank" inverse />
        </article>
      </section>
    </main>
  );
}