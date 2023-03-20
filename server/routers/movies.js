const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const express = require("express");
const moviesRouter = express.Router();

mongoose.connect(
  "mongodb+srv://theresagri:XcsNUtaP9GJdX3i@cluster0.jycu5sj.mongodb.net/cinema"
);

const Film = require("../model/Film.js");

moviesRouter.get("/", async (req, res) => {
  try {
    let query = {};
    let movies;
    if (req.query["year"] !== undefined) {
      query = {year: req.query["year"]}
    }
    if (req.query["title"] !== undefined) {
      query = {name: req.query["title"]};
    }

    movies = await Film.find(query);

    res.json(movies);
  } catch (error) {
    console.error(error);
  }
});
 // funktioniert nicht, gibt null zurück 
moviesRouter.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    let movieById = await Film.findById(req.params.id);
    console.log(movieById);
    if (movieById === null) {
      res.status(404).json({ error: "Movie not found" });
    } else {
      res.json(movieById);
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = moviesRouter;
