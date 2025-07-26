export interface Categories {
  id: number;
  name: string;
}
export interface Articles {
  id: number;
  title: string;
  slug: string;
  content: string;
  img: string;
  categoryId: { name: string };
}

export interface Podcasts {
  id: number;
  title: string;
  author: string;
  link: string;
}

export interface Lectures {
  id: number;
  title: string;
  content: string;
  img: string;
  slug: string;
}

export interface References {
  id: number;
  Company_Name: string;
  Reference_Message: string;
}

export interface Schema {
  references: References[];
  categories: Categories[];
  articles: Articles[];
  podcasts: Podcasts[];
  lectures: Lectures[];
}