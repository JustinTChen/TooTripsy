import React from "react";
import { Container, Row } from "react-bootstrap";
import WorksTabs from "./WorksTabs"

function Gallery() {
  return (
    <>
      <Row>
        <Container fluid className="project-section">
            <h1 className="project-heading">
              Our <strong className="purple">Work </strong>
            </h1>
              <WorksTabs />
        </Container>
      </Row>
    </>
  );
}

export default Gallery;