import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";

import YouTube from 'react-youtube';

import { INTRO_VIDEO } from '../../constants.js'
import Type from "../Type";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <Type />
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          WHO WE <strong className="purple"> ARE </strong>
        </h1>
        <YouTube videoId={INTRO_VIDEO} />
        
      </Container>
    </Container>
  );
}

export default About;
