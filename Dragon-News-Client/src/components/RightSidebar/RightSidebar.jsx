import { Button, ListGroup } from "react-bootstrap";
import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";
import "./RightSidebar.css";

import {
  Google,
  Github,
  Facebook,
  Twitter,
  Instagram,
} from "react-bootstrap-icons";

export default function RightSidebar() {
  return (
    <div>
      <div>
        <span className="rightSidebarTitle">Login With</span>
        <div style={{ margin: "10px 0px 20px 0px" }}>
          <Button
            variant="outline-primary"
            style={{ width: "98%", marginBottom: "10px" }}
          >
            {" "}
            <Google></Google>&nbsp; Login With Google
          </Button>
          <Button variant="outline-dark" style={{ width: "98%" }}>
            <Github /> &nbsp; Login With Github
          </Button>
        </div>
      </div>
      <div>
        <span className="findOnUs">Find Us On</span>
        <div style={{ margin: "10px 0px 20px 0px" }}>
          <ListGroup>
            <ListGroup.Item>
              {" "}
              <Facebook />
              &nbsp; &nbsp;Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Twitter />
              &nbsp;&nbsp; Twitter
            </ListGroup.Item>
            <ListGroup.Item>
              <Instagram />
              &nbsp;&nbsp; Instagram
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div
        className="qzonediv"
        style={{
          marginBottom: "20px",
          paddingBottom: "20px",
          paddingTop: "10px",
        }}
      >
        <span className="qzone">Q-Zone</span>
        <div className="text-center">
          <img src={qzone1} alt="Q-zone1" />
        </div>
        <div className="text-center">
          <img src={qzone2} alt="Q-zone2" />
        </div>
        <div className="text-center">
          <img src={qzone3} alt="Q-zone3" />
        </div>
      </div>
      <div className="newsletter">
        <div className="newsletterTitleDiv">
          <span className="newsletterTitle">
            {" "}
            Create an <br /> Amazing <br /> Newspaper
          </span>
        </div>
        <div className="newsletterDescDiv">
          <span className="newsletterDesc">
            Discover thousands of
            <br /> options, easy to <br />
            customize layouts, one-click
            <br /> to import demo and much more.
          </span>
        </div>
        <div className="text-center" style={{ paddingBottom: "20px" }}>
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
