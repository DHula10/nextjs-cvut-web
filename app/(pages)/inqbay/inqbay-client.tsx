
'use client';
import styles from './inqbay.module.css';
import ArticleList from '@/app/(pages)/inqbay/components/articles/articleList';
import PodcastList from '@/app/(pages)/inqbay/components/podcasts/podcastList';
import LectureList from '@/app/(pages)/inqbay/components/lectures/lectureList';
import { useState, useEffect } from 'react';


import { getArticles, getCategories, getLectures, getPodcasts } from '@/app/lib/apiRequests';
import type { Categories, Articles, Podcasts, Lectures } from '@/app/lib/schema';
import TileSectionWrapper from './components/tileSectionWrapper';



const InqbayClient = () => {


  const [categories, setCategories] = useState<Categories[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [articles, setArticles] = useState<Articles[]>([]);
  const [articleOffset, setArticleOffset] = useState(10);
  const [articleTotal, setArticleTotal] = useState(0);
  const [isFetchingArticles, setIsFetchingArticles] = useState(false);
  const [articleError, setArticleError] = useState<string | null>(null);

  const [podcasts, setPodcasts] = useState<Podcasts[]>([]);
  const [podcastOffset, setPodcastOffset] = useState(10);
  const [podcastTotal, setPodcastTotal] = useState(0);
  const [isFetchingPodcasts, setIsFetchingPodcasts] = useState(false);
  const [podcastError, setPodcastError] = useState<string | null>(null);

  const [lectures, setLectures] = useState<Lectures[]>([]);
  const [lectureOffset, setLectureOffset] = useState(10);
  const [lectureTotal, setLectureTotal] = useState(0);
  const [isFetchingLectures, setIsFetchingLectures] = useState(false);
  const [lectureError, setLectureError] = useState<string | null>(null);

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
          setArticleError('Nepodařilo se načíst články.');
        } else {
          setArticles(articlesResponse.data as Articles[]);
          setArticleTotal(articlesResponse.total);
          setArticleOffset(articlesResponse.data.length);
        }

        // Handle podcasts
        if (podcastsResponse.error) {
          console.error('Error fetching podcasts:', podcastsResponse.error);
          setPodcastError('Nepodařilo se načíst podcasty.');
        } else {
          setPodcasts(podcastsResponse.data as Podcasts[]);
          setPodcastTotal(podcastsResponse.total);
          setPodcastOffset(podcastsResponse.data.length);
        }

        // Handle lectures
        if (lecturesResponse.error) {
          console.error('Error fetching lectures:', lecturesResponse.error);
          setLectureError('Nepodařilo se načíst přednášky.');
        } else {
          setLectures(lecturesResponse.data as Lectures[]);
          setLectureTotal(lecturesResponse.total);
          setLectureOffset(lecturesResponse.data.length);
        }

      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Nepodařilo se načíst data z CMS.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLoadMoreArticles = async () => {
    if (isFetchingArticles) return;

    setIsFetchingArticles(true);
    const response = await getArticles(articleOffset);
    if (!response.error && Array.isArray(response.data)) {
      setArticles(prev => {
        const existingIds = new Set(prev.map(a => a.id));
        const newUnique = response.data.filter(a => !existingIds.has(a.id));
        return [...prev, ...newUnique];
      });
      setArticleOffset(prev => prev + 10);
    } else {
      console.log("Chyba při načítání dalších článků:", response.error);
      setArticleError('Chyba při načítání dalších článků.')
    }
    setIsFetchingArticles(false);
  };


  const handleLoadMorePodcasts = async () => {
    if(isFetchingPodcasts) return;

    setIsFetchingPodcasts(true);
    const response = await getPodcasts(podcastOffset);
    if(!response.error && Array.isArray(response.data)) {
      setPodcasts(prev => {
        const existingIds = new Set(prev.map(p => p.id));
        const newUnique = response.data.filter(p => !existingIds.has(p.id));
        return [...prev, ...newUnique];
      });
      setPodcastOffset(prev => prev + 10);
    } else {
      console.log('Chyba při načítání dalších podcastů:', response.error);
      setPodcastError('Chyba při načítání dalších podcastů.');
    }
    setIsFetchingPodcasts(false);
  };

  const handleLoadMoreLectures = async () => {
    if(isFetchingLectures) return;

    setIsFetchingLectures(true);
    const response = await getLectures(lectureOffset);
    if(!response.error && Array.isArray(response.data)) {
      setLectures(prev => {
        const existingIds = new Set(prev.map(l => l.id));
        const newUnique = response.data.filter(l => !existingIds.has(l.id));
        return [...prev, ...newUnique];
      });
      setLectureOffset(prev => prev + 10);
    } else {
      console.log('Chyba při načítání dalších přednášek:', response.error);
      setLectureError('Chyba při načítání dalších přednášek.');
    }
    setIsFetchingLectures(false);
  };

  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.categoryId?.name === selectedCategory)
    : articles;

  const filteredTotal = selectedCategory
    ? articles.filter((a) => a.categoryId?.name === selectedCategory).length : articleTotal;

  if (loading) {
    return (
      <main className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-cvut-green border-t-transparent"></div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-lg">{error}</div>
      </main>
    );
  }

  return (

    <>
             {/*KATEGORIE FILTR*/}
      <section id='category' className='flex flex-col items-center mt-14'>
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
      
      {/* ČLÁNKY */}
      {articleError ? (
        <p className="text-red-500 text-center mt-10">{articleError}</p>
      ) : (
        <TileSectionWrapper
        title='Články'
        hasMore={filteredArticles.length < filteredTotal}
        onLoadMore={handleLoadMoreArticles}
      >
        <ArticleList articles={filteredArticles} />
        {isFetchingArticles && (
          <div className='w-full flex justify-center mt-4'>
            <div className='animate-spin rounded-full h-8 w-8 border-4 border-cvut-green border-t-transparent'></div>
          </div>
        )}
      </TileSectionWrapper>
      )}
      
      {/* PODCASTY */}
      {podcastError ? (
        <p className='text-red-500 text-center mt-10'>{podcastError}</p>
      ) : (
        <TileSectionWrapper
        title='Podcasty'
        hasMore={podcasts.length < podcastTotal}
        onLoadMore={handleLoadMorePodcasts}
      >
        <PodcastList podcasts={podcasts} />
        {isFetchingPodcasts && (
          <div className='w-full flex justify-center mt-4'>
            <div className='animate-spin rounded-full h-8 w-8 border-4 border-cvut-green border-t-transparent'></div>
          </div>
        )}
      </TileSectionWrapper>
      )}
      
      {/* PŘEDNÁŠKY */}
      {lectureError ? (
        <p className='text-red-500 text-center mt-10'>{lectureError}</p>
      ) : (
        <TileSectionWrapper
        title='Přednášky'
        hasMore={lectures.length < lectureTotal}
        onLoadMore={handleLoadMoreLectures}
      >
          <LectureList lectures={lectures}/>
          {isFetchingLectures && (
            <div className='w-full flex justify-center mt-4'>
              <div className='animate-spin rounded-full h-8 w-8 border-4 border-cvut-green border-t-transparent'></div>
            </div>
          )}
      </TileSectionWrapper>
      )}
    </>
  );
}

export default InqbayClient;