import db from "../db.js";

import asyncHandler from "express-async-handler";
import CustomNotFoundError from "../errors/CustomNotFoundError.js";

const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params;

  try {
    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
      throw new CustomNotFoundError("Author not found");
    }

    res.send(`Author Name: ${author.name}`);
  } catch (error) {
    console.error("Error retrieving author:", error);
    res.status(500).send("Internal Server Error");
  }
});

export { getAuthorById };
