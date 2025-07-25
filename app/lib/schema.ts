export interface Categories {
  name: string;
}

export interface categorySchema {
  categories: Categories[];
}

export interface Articles {
  title: string;
  slug: string;
  content: string;
  img: string;
  categoryId: { name: string };
}

export interface articleSchema {
  articles: Articles[];
}

export interface Podcasts {
  title: string;
  author: string;
  link: string;
}

export interface podcastSchema {
  podcasts: Podcasts[];
}

export interface Lectures {
  title: string;
  content: string;
  img: string;
  slug: string;
}

export interface lectureSchema {
  lectures: Lectures[];
}