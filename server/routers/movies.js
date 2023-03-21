const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const express = require("express");
const moviesRouter = express.Router();

mongoose.connect(
  "mongodb+srv://theresagri:XcsNUtaP9GJdX3i@cluster0.jycu5sj.mongodb.net/cinema"
);

const Film = require("../model/Film.js");

//each query should be limited to return at most 20 results -->how to do this
//extra task: you can implement pagination to make more results available



moviesRouter.get("/", async (req, res) => {
  try {
    let query = {};
    let movies;
    if (req.query["year"] !== undefined) {
      query = { year: req.query["year"] };
    }
    if (req.query["title"] !== undefined) {
      query = { name: { $regex: req.query["title"], $options: "i" } };
    }

    movies = await Film.find(query);

    res.json(movies);
  } catch (error) {
    console.error(error);
  }
});

moviesRouter.get("/:id", async (req, res) => {
  try {
    let movieById = await Film.findById(req.params.id);
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
