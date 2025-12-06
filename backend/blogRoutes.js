const express = require("express");
const router = express.Router();
const blogController = require("./blogController.js");

router.get("/", blogController.getAllArticles);

router.post("/", blogController.createArticle);

router.delete("/:id", blogController.deleteArticle);

module.exports = router;