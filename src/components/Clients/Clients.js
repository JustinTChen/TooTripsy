import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import cbsLogo from "../../Assets/logos/cbs.png"
import dreamsLMLogo from "../../Assets/logos/dreamsLM.png"
import gallowsPointLogo from "../../Assets/logos/gallows.png"
import fairmontESJLogo from "../../Assets/logos/fairmontESJ.png"

function Clients() {
  return (
    <>
      <Row style={{height: "10%"}} />
      <Row>
        <Container fluid className="project-section">
          <Container >
            <h1 className="project-heading">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <strong className="purple">Brands </strong> We've Worked With
            </h1>
          </Container>
        </Container>
      </Row>
      <Row>
        <Col md={5} style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '33%', 
        }}>
            <img
            src={fairmontESJLogo}
            alt="fairmont el san juan"
            className="img-fluid"
            style={{ maxHeight: "250px" }}
            />
        </Col>
        <Col md={5} style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            width: '33%',
        }}>
            <img
            src={gallowsPointLogo}
            alt="gallows point"
            className="img-fluid"
            style={{ maxHeight: "450px" }}
            />
        </Col>
        <Col md={5} style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '33%',
        }}>
            <img
            src={cbsLogo}
            alt="cbs news"
            className="img-fluid"
            style={{ maxHeight: "250px" }}
            />
        </Col>
      </Row>
      <Row>
        <Col md={5} style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '33%',
        }}>
            <img
            src={dreamsLMLogo}
            alt="dreams las mareas"
            className="img-fluid"
            style={{ maxHeight: "250px" }}
            />
        </Col>
      </Row>
      <Row style={{ paddingBottom: '5%' }}></Row>
      <Particle />
    </>
  );
}

export default Clients;