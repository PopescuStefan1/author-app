import express from "express";
import authorRouter from "./routes/authorRouter.js";
import booksRouter from "./routes/booksRouter.js";
import indexRouter from "./routes/indexRouter.js";

const app = express();

app.use("/authors", authorRouter);
app.use("/books", booksRouter);
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
