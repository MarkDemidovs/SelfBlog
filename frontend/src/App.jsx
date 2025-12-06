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
    <>
    <a href="https://markdemidovs.github.io/PersonalWebsite/"><button>i'll go back now</button></a>
    <p><small>*tip: click any of the titles to open the content of the article.</small></p>
    <div>
      {articles.length === 0 ? (
        <p>Loading..</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <h2 className="clickableTitle" onClick={() => {
                handleContentClick(article);
                setSelectedArticle(article);
              }}>{article.title}</h2>
              {selectedArticle === article && <p>{article.content}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
}
