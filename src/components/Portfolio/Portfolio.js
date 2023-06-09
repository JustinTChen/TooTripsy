import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import WorksTabs from "./WorksTabs"

function Portfolio() {
  return (
    <>
      <Row style={{height: "10%"}} />
      <Row>
        <Container fluid className="project-section">
          <Container >
            <h1 className="project-heading">
              Our <strong className="purple">Work </strong>
            </h1>
              <WorksTabs />
          </Container>
        </Container>
      </Row>
      <Particle />
    </>
  );
}

export default Portfolio;