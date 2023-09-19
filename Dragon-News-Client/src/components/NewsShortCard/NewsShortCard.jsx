import { Card } from "react-bootstrap";
import firstImage from "../../assets/1.png";
import "./NewsShortCard.css";
import { Calendar } from "react-bootstrap-icons";

export default function NewsShortCard() {
  return (
    <Card
      style={{ width: "18rem", marginBottom: "10px", border: "0px solid red" }}
    >
      <Card.Img variant="top" src={firstImage} />
      <Card.Body>
        <p className="newsTitle">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="newsTag">Sports</span>
          <span className="newsDate">
            <Calendar /> Jan 4, 2022
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}
