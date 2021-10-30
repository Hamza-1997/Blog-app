import React from "react";
import "../Articles/ArticleList.styles.css";
import { Link } from "react-router-dom";

const ArticlesList = ({ article }) => {
  // const dispatch = useDispatch();
  // const viewss = useSelector((state) => state);
  return (
    <>
      <div className="article-card">
        <Link
          to={`/singleBlog/${article.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="article-image-container">
            <img src={article.Image} alt="" />
          </div>
          {/* <div className="view-count">views:{view}</div> */}
          <div className="article-info-container">
            <div className="article-title">{article.Title}</div>
            <div className="article-subtitle">{article.Subtitle}</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ArticlesList;
