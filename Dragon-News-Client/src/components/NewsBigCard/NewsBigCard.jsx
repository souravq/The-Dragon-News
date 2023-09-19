import { Card } from "react-bootstrap";
import "./NewsBigCard.css";
import {
  PersonCircle,
  Bookmark,
  Share,
  StarFill,
  Eye,
} from "react-bootstrap-icons";
import firstImage from "../../assets/editorsInsight1.png";

export default function NewsBigCard() {
  return (
    <Card style={{ marginBottom: "10px" }}>
      <div className="cardHeader">
        <div className="cardHeaderLeft">
          <PersonCircle />
          <div>
            <span>Awlad Hossain</span>
            <span>2022-08-21</span>
          </div>
        </div>
        <div>
          <Bookmark /> &nbsp;&nbsp;&nbsp;
          <Share />
        </div>
      </div>
      <Card.Body>
        <Card.Title>
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet
        </Card.Title>
        <Card.Img variant="top" src={firstImage} />

        <p>
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe,
          Joe Biden, Military, News, Russia, Security, UK, Ukraine, United
          States, Worthy News (Worthy News) – U.S. President Joe Biden has
          announced nearly $3 billion in new U.S. military a... Read More
        </p>
        <hr />
        <div className="cardFooter">
          <div>
            <StarFill color="#FF8C47" /> &nbsp;
            <StarFill color="#FF8C47" /> &nbsp;
            <StarFill color="#FF8C47" /> &nbsp;
            <StarFill color="#FF8C47" /> &nbsp;
            <StarFill color="#FF8C47" /> &nbsp;&nbsp;
            <span>4.6</span>
          </div>
          <div>
            <Eye />
            &nbsp;&nbsp;
            <span>500</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
