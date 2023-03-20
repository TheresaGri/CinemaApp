const express = require("express");
const app = express();
const moviesRouter = require("./routers/movies.js");
app.use("/api/movies", moviesRouter);

app.listen(3000);
