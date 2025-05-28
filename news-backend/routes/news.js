
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  const { q = "All", language = "en", page = 1, pageSize = 12 } = req.query;

  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q,
        language,
        page,
        pageSize,
        sortBy: "publishedAt",
        apiKey: process.env.NEWS_API_KEY
      }
    });

    const filteredArticles = response.data.articles.filter(article => article.title !== "[Removed]");

    res.json({
      ...response.data,
      articles: filteredArticles
    });
  } catch (error) {
    console.error("News API Error:", error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

module.exports = router;
