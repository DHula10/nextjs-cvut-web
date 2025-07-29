import { rest, readItems } from '@directus/sdk';
import directus from '@/app/lib/directus';
import { Schema, Articles, Categories, Podcasts, Lectures } from './schema';
import { error } from 'console';

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

export const getArticleBySlug = (
  slug: string
): Promise<{ data: Articles | null; error: any }> => {
  return apiRequest('articles', {
    fields: ['id', 'title', 'slug', 'content', 'img', 'categoryId.*'],
    filter: {
      slug: {
        _eq: slug,
      },
    },
    limit: 1,
  }).then(({ data, error }) => {
    return {
      data: Array.isArray(data) && data.length > 0 ? data[0] : null,
      error,
    };
  });
};


export const getCategories = (): Promise<{ data: Categories[] | [], error: any }> => 
  apiRequest('categories', {
    fields: ['id', 'name'],
    sort: ['-id']
  });

export const getPodcasts = (offset = 0): Promise<{ data: Podcasts[] | [], error: any }> => 
  apiRequest('podcasts', {
    fields: ['id', 'title', 'slug', 'author', 'link'],
    limit: 10,
    offset
  });

export const getPodcastBySlug = (
  slug: string
): Promise<{ data: Podcasts | null; error: any }> => {
  return apiRequest('podcasts', {
    fields: ['id', 'title', 'slug', 'author', 'link'],
    filter: {
      slug: {
        _eq: slug,
      },
    },
    limit: 1,
  }).then(({ data, error }) => {
    return {
      data: Array.isArray(data) && data.length > 0 ? data[0] : null,
      error,
    };
  });
};

export const getLectures = (offset = 0): Promise<{ data: Lectures[] | [], error: any }> => 
  apiRequest('lectures', {
    fields: ['id', 'title', 'content', 'img', 'slug', 'link'],
    limit: 10,
    offset
  });

export const getLecturesBySlug = (
  slug: string
): Promise<{ data: Lectures | null; error: any }> => {
  return apiRequest('lectures', {
    fields: ['id', 'title', 'content', 'img', 'slug', 'link'],
    fitler: {
      slug: {
        _eq: slug,
      },
    },
    limit: 1,
  }).then(({ data, error }) => {
    return {
      data: Array.isArray(data) && data.length > 0 ? data[0] : null,
      error,
    };
  });
};
