import React from "react";
import { Container, Row } from "react-bootstrap";
import WorksTabs from "./WorksTabs"

function Gallery() {
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
    </>
  );
}

export default Gallery;