import { MetadataRoute } from 'next'
import { getArticles, getLectures, getPodcasts } from '@/app/lib/apiRequests'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.transfer.cvut.cz';

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ingine`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/transfer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/inqbay`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/invoice`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  try {
    // Dynamic routes - Articles
    const { data: articles } = await getArticles(0)
    const articleRoutes: MetadataRoute.Sitemap = Array.isArray(articles) 
      ? articles.map((article) => ({
          url: `${baseUrl}/inqbay/article/${article.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }))
      : []

    // Dynamic routes - Lectures
    const { data: lectures } = await getLectures(0)
    const lectureRoutes: MetadataRoute.Sitemap = Array.isArray(lectures)
      ? lectures.map((lecture) => ({
          url: `${baseUrl}/inqbay/lecture/${lecture.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }))
      : []

    // Dynamic routes - Podcasts
    const { data: podcasts } = await getPodcasts(0)
    const podcastRoutes: MetadataRoute.Sitemap = Array.isArray(podcasts)
      ? podcasts.map((podcast) => ({
          url: `${baseUrl}/inqbay/podcast/${podcast.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }))
      : []

    return [...staticRoutes, ...articleRoutes, ...lectureRoutes, ...podcastRoutes]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return staticRoutes
  }
}
