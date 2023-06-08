import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TabbedContainer from "./TabbedContainer"

function Portfolio() {
  return (
    <>
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Our <strong className="purple">Work </strong>
        </h1>
          <TabbedContainer>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <p>test</p>
            </Row>
          </TabbedContainer>
      </Container>
    </Container>
    <Particle />
    </>
  );
}

export default Portfolio;