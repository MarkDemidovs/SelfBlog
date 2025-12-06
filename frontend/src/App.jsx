import { useEffect, useState } from "react";
import API from "./api/axiosConfig";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await API.get("/");
        setArticles(res.data.blogs);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setArticles([]);
      }
    };
    fetchArticles();
  }, []);

  const handleContentClick = (article) => {
   return (<>
   {article.content}</>)
  }
  return (
    <div>
      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <h2 onClick={() => {
                handleContentClick(article);
                setSelectedArticle(article);
              }}>{article.title}</h2>
              {selectedArticle === article && <p>{article.content}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
