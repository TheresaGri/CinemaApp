const mongoose = require("mongoose");
const { Schema, model } = mongoose;

let filmSchema = new Schema({
  _id: String,
  plot: String,
  name: String,
  genres: Array,
  duration: Number,
  year: Number,
  imdbRating: Number,
  poster: String,
});

const Film = model("Film", filmSchema);
module.exports = Film;
