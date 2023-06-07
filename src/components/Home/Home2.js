import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { SocialIcons } from "../SocialIcons";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND <span className="purple"> US </span> ON</h1>
            <SocialIcons></SocialIcons>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
