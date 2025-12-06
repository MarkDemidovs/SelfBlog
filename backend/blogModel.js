const db = require("./db.js");

const fetchAllArticles = async () => {
    const result = await db.query("SELECT * FROM posts");
    return result.rows;
}

const addArticle = async ({ title, content }) => {
    const result = await db.query(`INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *`, [title, content]);

    return result.rows[0];
}
module.exports = {
    fetchAllArticles,
    addArticle
}