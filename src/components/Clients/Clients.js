import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Clients() {
  return (
    <>
      <Row style={{height: "10%"}} />
      <Row>
        <Container fluid className="project-section">
          <Container >
            <h1 className="project-heading">
            <strong className="purple">Brands </strong> We've Worked With
            </h1>
          </Container>
        </Container>
      </Row>
      <Particle />
    </>
  );
}

export default Clients;