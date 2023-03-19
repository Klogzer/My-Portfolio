import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { ArticleTeaserItem } from "../Interfaces";


const ArticleTeaser = ({ title, author, date, description, url }: ArticleTeaserItem) => {
    return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{`By ${author}`}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Link to={url}>
          <Button variant="primary">Read More</Button>
        </Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{date}</small>
      </Card.Footer>
    </Card>
  );
};

export default ArticleTeaser;
