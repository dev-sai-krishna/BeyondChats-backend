const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const URL = "https://beyondchats.com/blogs/";

async function scrapeBlogs() {
  const response = await axios.get(URL);
  const $ = cheerio.load(response.data);

  const data = JSON.parse(fs.readFileSync("articles.json", "utf-8"));

  $("a").slice(0, 5).each((i, el) => {
    const title = $(el).text().trim();

    if (title.length > 10) {
      data.push({
        id: Date.now() + i,
        title: title,
        content: "Content will be updated later",
        isUpdated: false
      });
    }
  });

  fs.writeFileSync("articles.json", JSON.stringify(data, null, 2));
  console.log("Scraping completed");
}

scrapeBlogs();