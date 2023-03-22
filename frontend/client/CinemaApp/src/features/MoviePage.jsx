import "./MoviePage.css";
import Button from "../components/Button";
import { useEffect, useState } from "react";

export default function MoviePage() {
  async function getMovies(limit, page, title) {
    const url = `http://localhost:3000/api/movies?limit=${limit}&page=${page}&title=${title}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  const [limit, setLimit] = useState(20);
  const totalPagesArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState("");
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      let movies = await getMovies(limit, page, title);
      setFilms(movies);
    }
    loadMovies();
  }, [limit, page, title]);

  console.log(films);

  function handlePageClick(pageNumber) {
    let number = pageNumber - 1;
    setPage(number);
  }

  function handleSearch(event) {
    console.log(event.target.value);
    if (event.target.value !== "") {
      setTitle(event.target.value);
      setLimit(0);
    } else {
      setTitle("");
      setLimit(20);
    }
  }

  return (
    <div className="movies_container">
      <input
        type="text"
        placeholder="Search a movie"
        className="searchField"
        onChange={handleSearch}
      ></input>
      <div className="movieList">
        {films.map((movie) => (
          <div key={movie.id}>
            <img className="moviePosters" src={movie.poster} alt={movie.name} />
            <p>{movie.name}</p>
          </div>
        ))}
      </div>
      <div className="container_buttonsMovieList">
        {totalPagesArray.map((pageNumber) => (
          <Button
            key={pageNumber}
            className="paginationButtons"
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </Button>
        ))}
      </div>
    </div>
  );
}
