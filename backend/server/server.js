const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const moviesRouter = require("./routers/movies.js");
const commentsRouter = require("./routers/comments.js");

app.use("/api/movies", moviesRouter);
app.use("/api/comments", commentsRouter);

app.listen(3000);
