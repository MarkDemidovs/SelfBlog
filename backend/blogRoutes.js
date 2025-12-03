const express = require("express");
const router = express.Router();
const blogController = require("./blogController.js");

router.get("/", blogController.getAllArticles);

module.exports = router;