import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send(`Home page`);
});

indexRouter.get("/about", (req, res) => {
  res.send(`About page`);
});

indexRouter.get("/contact", (req, res) => {
  res.send(`Contact page`);
});

indexRouter.get("*", (req, res) => {
  res.send(`Not found page`);
});

export default indexRouter;
