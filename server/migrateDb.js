const { MongoClient } = require("mongodb");

const DB_URL =
  "mongodb+srv://theresagri:XcsNUtaP9GJdX3i@cluster0.jycu5sj.mongodb.net/";

/* let SourceMovie = require("./model/SourceMovie.js");

 */
const client = new MongoClient(DB_URL);

async function migrateMovies() {
  let skip = 0;

  const databaseOfSourceMovies = client.db("sample_mflix");
  const collectionOfSourceMovies = databaseOfSourceMovies.collection("movies");
  console.log(collectionOfSourceMovies);
  let movies = await collectionOfSourceMovies
    .find({
      poster: { $exists: true },
      type: "movie",
      "imdb.rating": { $gte: 8.5 },
    })
    .skip(skip)
    .limit(10)
    .toArray();

  const databaseOfFilms = client.db("cinema");
  const films = databaseOfFilms.collection("films");
  while (movies.length > 0) {
    for (const movie of movies) {
      const newFilm = {
        _id: movie._id,
        name: movie.title,
        plot: movie.plot,
        genres: movie.genres,
        duration: movie.runtime,
        year: movie.year,
        imdbRating: movie.imdb.rating,
        poster: movie.poster,
      };

      await films.insertOne(newFilm);
    }
    skip += 10;
    movies = await collectionOfSourceMovies
      .find({
        poster: { $exists: true },
        type: "movie",
        "imdb.rating": { $gte: 8.5 },
      })
      .skip(skip)
      .limit(10)
      .toArray();
  }
}

/* migrateMovies();
 */
