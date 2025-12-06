const blogModel = require("./blogModel.js");

const getAllArticles = async (req, res) => {
    try {
        const blogs = await blogModel.fetchAllArticles();
        res.json({ blogs });
    } catch (err){
        res.status(500).json({ error: "Failed to fetch articles" });
    }
}
const createArticle = async (req, res) => {
    const {title, content } = req.body;
    if (!title || !content) return res.status(400).json({ error: "Title and content, which are required, haven't been entered!" });

    try {
        const newArticle = await blogModel.addArticle({ title, content });
        res.status(201).json({ article: newArticle });    
    } catch (error) {
        res.status(500).json({ error: "Failed to create article! check asynchronous function createArticle::blogController.js !" });
    }
}

const deleteArticle = async (req, res) => {
    console.log("wip");
}
module.exports = {
    getAllArticles,
    createArticle,
    deleteArticle
}