const express = require("express");
const router = express.Router();
const blogController = require("./blogController.js");

const protectRoutes = (req, res, next) => {
  const key = req.headers["x-api-key"];
  if (!key || key !== process.env.API_KEY) {
    return res.status(403).json({ error: "Forbidden" });
  }
  next();
};

router.get("/", blogController.getAllArticles);

router.post("/", protectRoutes, blogController.createArticle);
router.delete("/:id", protectRoutes, blogController.deleteArticle);

module.exports = router;
