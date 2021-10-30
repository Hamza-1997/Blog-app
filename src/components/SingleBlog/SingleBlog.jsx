import axios from "axios";
import React, { useEffect, useState } from "react";
import "../SingleBlog/SingleBlog.style.css";
import { useParams } from "react-router";

const SingleBlog = (props) => {
  const { id } = useParams();
  const [article, setArticle] = useState();
  let baseUrl = "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs";

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSingleBlog();
  }, []);
  return (
    <>
      {article && (
        <div className="single-blog-container">
          <div className="info-header-container">
            <div className="info-header">
              <h3>{article.Title}</h3>
              <p>{article.Subtitle}</p>
            </div>
          </div>
          <div className="image-container">
            <img src={article.Image} alt="" />
          </div>
          <div className="article-container">
            <p>{article.Article}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleBlog;
