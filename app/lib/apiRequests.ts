import { rest, readItems } from '@directus/sdk';
import directus from '@/app/lib/directus';
import { Schema, Articles, Categories, Podcasts, Lectures } from './schema';

const BACKEND_URL = "http://localhost:8055/";

// Generic API wrapper with proper typing
const apiRequest = async <T extends keyof Schema>(
  collection: T, 
  options: any
): Promise<{ data: Schema[T] | [], error: any }> => {
  try {
    const response = await directus.request(readItems(collection, options));
    return { data: response as Schema[T], error: null };
  } catch (error) {
    console.error(`Error fetching ${collection}:`, error);
    return { data: [], error: error };
  }
};

export const getArticles = (): Promise<{ data: Articles[] | [], error: any }> => 
  apiRequest('articles', {
    fields: ['id', 'title', 'slug', 'content', 'img', 
      // @ts-ignore
      'categoryId.*'
    ],
    sort: ['-id'],
    limit: 10
  });

export const getCategories = (): Promise<{ data: Categories[] | [], error: any }> => 
  apiRequest('categories', {
    fields: ['id', 'name'],
    sort: ['-id']
  });

export const getPodcasts = (): Promise<{ data: Podcasts[] | [], error: any }> => 
  apiRequest('podcasts', {
    fields: ['id', 'title', 'author', 'link'],
    limit: 10
  });

export const getLectures = (): Promise<{ data: Lectures[] | [], error: any }> => 
  apiRequest('lectures', {
    fields: ['id', 'title', 'content', 'img', 'slug'],
    limit: 10
  });
