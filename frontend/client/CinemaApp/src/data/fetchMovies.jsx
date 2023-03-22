async function getMovies(limit, page) {
  const url = `http://localhost:3000/api/movies?limit=${limit}&$page=${page}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default getMovies;
