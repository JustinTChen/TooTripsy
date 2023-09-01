import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import cbsLogo from "../../Assets/logos/cbs.png"
import dreamsLMLogo from "../../Assets/logos/dreamsLM.png"
import gallowsPointLogo from "../../Assets/logos/gallows.png"
import fairmontESJLogo from "../../Assets/logos/fairmontESJ.png"
import foodcyLogo from "../../Assets/logos/foodcy.webp"
import philoVillasLogo from "../../Assets/logos/philoVillas.png"
import radwoodLogo from "../../Assets/logos/radwood.png"

function Clients() {
  return (
    <div style={{ paddingBottom: "10%", color: "#c6c6c6" }}>
      <Container fluid className="about-section">
        <Row>
          
            <Container>
              <h1 className="project-heading">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <strong>BRANDS </strong> WE'VE WORKED WITH
              </h1>
          </Container>
        </Row>
        <Row style={{ height: "20%", marginBottom: "10px"}}>
          <Col style={{ width: '12.5%' }}/>
          <Col md={5} style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25%', 
          }}>
              <img
              src={fairmontESJLogo}
              alt="fairmont el san juan"
              className="img-fluid"
              style={{ maxHeight: "250px" }}
              />
          </Col>
          <Col md={5} style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center', 
              width: '25%',
          }}>
              <img
              src={gallowsPointLogo}
              alt="gallows point"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
              />
          </Col>
          <Col md={5} style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25%',
          }}>
              <img
              src={cbsLogo}
              alt="cbs news"
              className="img-fluid"
              style={{ maxHeight: "250px" }}
              />
          </Col>
          <Col style={{ width: '12.5%' }}/>
        </Row>
        <Row style={{ height: "20%", marginBottom: "10px"}}>
        <Col style={{ width: '12.5%' }}/>
          <Col md={5} style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25%',
          }}>
              <img
              src={dreamsLMLogo}
              alt="dreams las mareas"
              className="img-fluid"
              style={{ maxHeight: "250px" }}
              />
          </Col>
          <Col md={5} style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25%',
          }}>
              <img
              src={philoVillasLogo}
              alt="philo villas"
              className="img-fluid"
              style={{ maxHeight: "250px" }}
              />
          </Col>
          <Col md={5} style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25%',
          }}>
              <img
              src={radwoodLogo}
              alt="radwood"
              className="img-fluid"
              style={{ maxHeight: "250px" }}
              />
          </Col>
          <Col style={{ width: '12.5%' }}/>
        </Row>
        <Row style={{ height: "20%", marginBottom: "10px"}}>
        <Col style={{ width: '12.5%' }}/>
          <Col md={5} style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25%',
          }}>
              <img
              src={foodcyLogo}
              alt="foodcy"
              className="img-fluid"
              style={{ maxHeight: "250px" }}
              />
          </Col>
          <Col md={5} style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25%',
          }}>
          </Col>
          <Col md={5} style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25%',
          }}>
          </Col>
          <Col style={{ width: '12.5%' }}/>
        </Row>
      </Container>
    </div>
  );
}

export default Clients;