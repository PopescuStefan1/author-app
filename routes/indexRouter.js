import { Router } from "express";

const indexRouter = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { links: links });
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
