import { Router } from "express";

const booksRouter = Router();

booksRouter.get("/", (req, res) => res.send("All books"));

booksRouter.get("/:bookId", (req, res) => {
  const { bookId: bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});

booksRouter.get("/:bookId/reserve", (req, res) => {
  const { bookId: bookId } = req.params;
  res.send(`Check reservation for book with ID: ${bookId}`);
});

booksRouter.post("/:bookId/reserve", (req, res) => {
  const { bookId: bookId } = req.params;
  res.send(`Reserve book with ID: ${bookId}`);
});

export default booksRouter;
