const axios = require("axios");

const API = "http://localhost:5000/articles";

async function updateArticle() {
  try {
    const res = await axios.get(API);
    const article = res.data[0];

    const referenceArticles = [
      {
        title: "How AI is Changing Customer Support",
        url: "https://example.com/ai-customer-support"
      },
      {
        title: "Future of Chatbots in Business",
        url: "https://example.com/chatbots-business"
      }
    ];

    const updatedArticle = {
      title: article.title + " (SEO Optimized)",
      content: `
${article.content}

---  

## Enhanced Content

This article has been enhanced using insights from top-ranking blogs
to improve readability, structure, and SEO.

---  

## References
1. ${referenceArticles[0].title} - ${referenceArticles[0].url}
2. ${referenceArticles[1].title} - ${referenceArticles[1].url}
`,
      status: "updated"
    };

    await axios.post(API, updatedArticle);
    console.log("✅ SEO optimized article published");
  } catch (err) {
    console.error(err.message);
  }
}

updateArticle();