import { rest, readItems } from '@directus/sdk';
import directus from '@/app/lib/directus';


const BACKEND_URL = "http://localhost:8055/";

export const getArticles = async () => {
  const articlesResponse = await directus.request(
    readItems('articles',
      {
        fields: ['id', 'title', 'slug', 'content', 'img', 
          // @ts-ignore
          'categoryId.*'
        ],
        sort: ['-id'],
        limit: 10
      }));
  return articlesResponse;
};

export const getCategories = async () => {
  const categoriesResponse = await directus.request(
    readItems('categories',
      {
        fields: ['id', 'name'],
        sort: ['-id'],
      }));
  return categoriesResponse;
};

export const getPodcasts = async () => {
  const podcastsResponse = await directus.request(
    readItems('podcasts',
      {
        fields: ['id', 'title', 'author', 'link'],
        limit: 10
      }));
  return podcastsResponse;
};

export const getLectures = async () => {
  const lecturesResponse = await directus.request(
    readItems('lectures',
      {
        fields: ['id', 'title', 'content', 'img', 'slug'],
        limit: 10
      }));
  return lecturesResponse;
};
