const { mongoose } = require("mongoose");
const { Schema, model } = mongoose;

let movieSchema = new Schema({
  _id: String,
  plot: String,
  genre: Array,
  runtime: Number,
  cast: Array,
  poster: String,
  title: String,
  fullplot: String,
  languages: Array,
  released: Date,
  directors: Array,
  rated: String,
  awards: Object,
  lastupdated: Date,
  year: Number,
  imdb: Object,
  countries: Array,
  type: String,
  tomatoes: Object,
});

const SourceMovie = model("SourceMovie", movieSchema);
module.exports = SourceMovie;
