import { rest, readItems } from '@directus/sdk';
import directus from '@/app/lib/directus';
import { Schema, Articles, Categories, Podcasts, Lectures } from './schema';

const apiRequest = async <T extends keyof Schema>(
  collection: T, 
  options: any
): Promise<{ data: Schema[T] | [], error: any }> => {
  try {
    const response = await directus.request(readItems(collection, options));
    console.log(`Načítám: ${collection}`);
    return { data: response as Schema[T], error: null };
  } catch (error) {
    console.error(`Error fetching ${collection}:`, error);
    return { data: [], error: error };
  }
};

const getCount = async (collection: keyof Schema): Promise<number> => {
  try {
    const res = await fetch(`http://localhost:8055/items/${collection}?meta=total_count`);
    const json = await res.json();
    console.log(`Celkový počet položek ${collection}:`, json.meta.total_count);
    return json.meta.total_count ?? 0;
  } catch(error) {
    console.error(`Error counting ${collection}:`, error);
    return 0;
  }
}

export const getArticles = async (offset = 0): Promise<{
  data: Articles[] | [];
  total: number;
  error: any;
}> => {
  const { data, error } = await apiRequest('articles', {
    fields: ['id', 'title', 'slug', 'content', 'img', 'categoryId.*'],
    sort: ['-id'],
    limit: 10,
    offset
  });
  const total = await getCount('articles');
  return { data, error, total };
}

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

export const getPodcasts = async (offset = 0): Promise<{ 
  data: Podcasts[] | []; 
  total: number;
  error: any;
}> => {
  const { data, error } = await apiRequest('podcasts', {
    fields: ['id', 'title', 'slug', 'author', 'link'],
    limit: 10,
    offset
  });
  const total = await getCount('podcasts');
  return { data, error, total };
}
  

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

export const getLectures = async (offset = 0): Promise<{
  data: Lectures[] | [];
  total: number;
  error: any;
}> => {
  const { data, error } = await apiRequest('lectures', {
    fields: ['id', 'title', 'content', 'img', 'slug', 'link'],
    limit: 10,
    offset
  });
  const total = await getCount('lectures');
  return { data, error, total };
}

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
