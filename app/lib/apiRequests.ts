export async function getArticles() {
  const res = await fetch('http://localhost:8055/items/articles?fields=id,title,contentText,imgHref,category&limit=10');
  if (!res.ok) {
    throw new Error('Chyba při načítání článků');
  }
  const data = await res.json();
  return data.data;
}
