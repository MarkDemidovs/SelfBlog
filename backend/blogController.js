const blogModel = require("./blogModel.js");

const getAllArticles = async (req, res) => {
    try {
        const blogs = await blogModel.fetchAllArticles();
        res.json({ blogs });
    } catch (err){
        console.error('Error fetching articles:', err.message);
        res.status(500).json({ error: "Failed to fetch articles", details: err.message });
    }
}
const createArticle = async (req, res) => {
    const {title, content } = req.body;
    if (!title || !content) return res.status(400).json({ error: "Title and content, which are required, haven't been entered!" });

    try {
        const newArticle = await blogModel.addArticle({ title, content });
        res.status(201).json({ article: newArticle });    
    } catch (err) {
        console.error('Error creating article:', err.message);
        res.status(500).json({ error: "Failed to create article", details: err.message });
    }
}

const deleteArticle = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedArticle = await blogModel.removeArticle(id);
        res.status(200).json({ message: deletedArticle });
    } catch (err) {
        console.error('Error deleting article:', err.message);
        res.status(500).json({ error: "Failed to delete article", details: err.message});
    }
}
module.exports = {
    getAllArticles,
    createArticle,
    deleteArticle
}