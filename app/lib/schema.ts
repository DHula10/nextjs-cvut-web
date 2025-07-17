export interface Categories {
  name: string;
}

export interface categorySchema {
  categories: Categories[];
}

export interface Articles {
  id: number;
  title: string;
  contentText: string;
  imgHref: string;
  category: string;
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
  contentText: string;
  imgHref: string;
}

export interface lectureSchema {
  lectures: Lectures[];
}