const db = require("./db.js");

const fetchAllArticles = async () => {
    const result = await db.query("SELECT * FROM posts");
    return result.rows;
}

module.exports = {
    fetchAllArticles
}