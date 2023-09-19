import { Col, Container, Row } from "react-bootstrap";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import HomeNewsPage from "../HomeNewsPage/HomeNewsPage";

export default function LandingPage() {
  return (
    <Container style={{marginTop:"30px"}}>
      <Row>
        <Col>
            <LeftSidebar/>
        </Col>
        <Col xs={6}>
            <HomeNewsPage/>
        </Col>
        <Col>
            <RightSidebar/>
        </Col>
      </Row>
    </Container>
  )
}
