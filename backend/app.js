const express = require("express");
const cors = require("cors");
const blogRoutes = require("./blogRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", blogRoutes);

module.exports = app;