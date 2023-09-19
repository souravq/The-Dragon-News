import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <Container>
      <div className="text-center header">
        <img src={logo} alt="logo" />
        <p className="tagline">Journalism Without Fear or Favour</p>
        <p className="dayDate">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div
        className="latestNews"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Button variant="danger">Latest</Button>&nbsp;&nbsp;
        <Marquee>
          <span>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...Match Highlights: Germany vs Spain
            — as it happened ! Match Highlights: Germany vs Spain as...
          </span>
        </Marquee>
      </div>
      <br />
      <Navbar style={{ backgroundColor: "#FFF" }} data-bs-theme="light">
        <Container className="text-center">
          <Nav className="me-auto text-center" style={{ marginLeft: "530px" }}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <div style={{ marginRight: "10px" }}>
            <span>Welcome User</span>
          </div>
          <div>
            <Button variant="dark">Login</Button>
          </div>
        </Container>
      </Navbar>
    </Container>
  );
}
