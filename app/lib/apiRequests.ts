import { createDirectus, rest, readItems } from '@directus/sdk';
import type { categorySchema, articleSchema, podcastSchema, lectureSchema } from './schema';

const BACKEND_URL = "http://localhost:8055/";

export async function getCategories() {
  const client = createDirectus<categorySchema>(BACKEND_URL).with(rest());
  const response = await client.request(readItems('categories', {
    fields: ['name'],
    limit: 10
  }));
  return response;
}

export async function getArticles() {
  const client = createDirectus<articleSchema>(BACKEND_URL).with(rest());
  const response = await client.request(readItems('articles', {
    fields: ['id', 'title', 'contentText', 'imgHref', 'category'],
    limit: 10
  }));
  return response;
}

export async function getPodcasts() {
  const client = createDirectus<podcastSchema>(BACKEND_URL).with(rest());
  const response = await client.request(readItems('podcasts', {
    fields: ['title', 'author', 'link'],
    limit: 10
  }));
  return response;
}

export async function getLectures() {
  const client = createDirectus<lectureSchema>(BACKEND_URL).with(rest());
  const response = await client.request(readItems('lectures', {
    fields: ['title', 'contentText', 'imgHref'],
    limit: 10
  }));
  return response;
}
