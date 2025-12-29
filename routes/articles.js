const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const filePath = path.join(__dirname, "../articles.json");

// GET all articles
router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.json(data);
});

// POST new article
router.post("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const newArticle = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content,
    status: req.body.status
  };

  data.push(newArticle);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.json({ message: "Article added successfully" });
});

module.exports = router;