import React, { useEffect, useState } from "react";
import cardImage from "../../assets/card-image.png";
import "../Articles/ArticleList.styles.css";
import ArticlesList from "./ArticlesList";
import axios from "axios";

const Articles = () => {
  useEffect(() => {
    getArticles();
  }, []);
  const [articles, setArticles] = useState();
  // const [items, setItems] = useState();
  const [showItems, setShowItems] = useState(6);
  let baseUrl = "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs";

  const handleShowMore = () => {
    showItems >= articles.length
      ? setShowItems(showItems)
      : setShowItems(showItems + 6);
  };

  const getArticles = async () => {
    try {
      const response = await axios.get(baseUrl);
      console.log(response.data);
      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const routeToArticle = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="article-container">
        {articles?.slice(0, showItems)?.map((article) => (
          <ArticlesList
            article={article}
            key={article.id}
            routeToArticle={routeToArticle}
          />
        ))}
      </div>
      <button onClick={handleShowMore} className="load-more-btn">
        Show More
      </button>
    </>
  );
};

export default Articles;
