const blogModel = require("./blogModel.js");

const getAllArticles = async (req, res) => {
    try {
        const blogs = await blogModel.fetchAllArticles();
        res.json({ blogs });
    } catch (err){
        res.status(500).json({ error: "Failed to fetch articles" });
    }
}

module.exports = {
    getAllArticles
}