import ArticleTeaser from "./ArticleTeaser";
import { Article } from "../Interfaces";
import articles from "../data/articleData";

const Articles = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {articles.map((article: Article) => (
          <div className="col-md-4 mb-4" key={article.title}>
            <ArticleTeaser {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
