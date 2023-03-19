import { ArticleTeaser } from "./";
import { Article } from "../Interfaces";
import { articleData } from "../data";

const Articles = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {articleData.map((article: Article) => (
          <div className="col-md-4 mb-4" key={article.title}>
            <ArticleTeaser {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
