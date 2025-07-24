export async function getArticles() {
  const res = await fetch('http://localhost:8055/items/articles?fields=id,title,contentText,imgHref,category&limit=10');
  if (!res.ok) {
    throw new Error('Chyba při načítání článků');
  }
  const data = await res.json();
  return data.data;
}

export async function getPodcasts(){
  const res = await fetch('http://localhost:8055/items/podcasts?fields=title,speaker,link&limit=10');
  if (!res.ok) {
    throw new Error('Chyba při načítání podcastů');
  }
  const data = await res.json();
  return data.data;
}

export async function getLectures(){
  const res = await fetch('http://localhost:8055/items/lectures?fields=id,title,contentText,imgHref&limit=10');
  if (!res.ok) {
    throw new Error('Chyba při načítání lekcí');
  }
  const data = await res.json();
  return data.data;
}

export async function getReferences(){
  const res = await fetch('http://localhost:8055/items/references');
  if (!res.ok) {
    throw new Error('Chyba při načítání referencí');
  }
  const data = await res.json();
  return data.data;
}