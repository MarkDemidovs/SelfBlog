import { useEffect, useState } from "react";
import API from "./api/axiosConfig";

export default function App() {
  const [articles, setArticles] = useState([]);

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

  return (
    <div>
      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
