import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import cbsLogo from "../../Assets/logos/cbs.png"
import dreamsLogo from "../../Assets/logos/dreams.png"
import gallowsPointLogo from "../../Assets/logos/gallows.png"
import fairmontLogo from "../../Assets/logos/fairmont.png"
import foodcyLogo from "../../Assets/logos/foodcy.webp"
import philoVillasLogo from "../../Assets/logos/philoVillas.png"
import radwoodLogo from "../../Assets/logos/radwood.png"

function Clients() {
  return (
    <div style={{ paddingBottom: "10vh", color: "#c6c6c6" }}>
      <Container fluid className="client-section">
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
              alignItems: 'center',
              width: '25%', 
          }}>
              <img
              src={fairmontLogo}
              alt="fairmont el san juan"
              className="img-clients"
              />
          </Col>
          <Col md={5} style={{ 
              alignItems: 'center',
              width: '25%',
          }}>
              <img
              src={gallowsPointLogo}
              alt="gallows point"
              className="img-clients"
              />
          </Col>
          <Col md={5} style={{ 
              alignItems: 'center',
              width: '25%',
          }}>
              <img
              src={cbsLogo}
              alt="cbs news"
              className="img-clients"
              />
          </Col>
          <Col style={{ width: '12.5%' }}/>
        </Row>
        <Row style={{ height: "20%", marginBottom: "10px"}}>
        <Col style={{ width: '12.5%' }}/>
          <Col md={5} style={{ 
              alignItems: 'center',
              width: '25%',
          }}>
              <img
              src={dreamsLogo}
              alt="dreams las mareas"
              className="img-clients"
              style={{ transform: 'scale(0.85)' }}
              />
          </Col>
          <Col md={5} style={{ 
              alignItems: 'center',
              width: '25%',
          }}>
              <img
              src={philoVillasLogo}
              alt="philo villas"
              className="img-clients"
              style={{ transform: 'scale(0.65)' }}
              />
          </Col>
          <Col md={5} style={{ 
              alignItems: 'center',
              width: '25%',
          }}>
              <img
              src={radwoodLogo}
              alt="radwood"
              className="img-clients"
              style={{ transform: 'scale(0.65)' }}
              />
          </Col>
          <Col style={{ width: '12.5%' }}/>
        </Row>
        <Row style={{ height: "20%", marginBottom: "10px"}}>
        <Col style={{ width: '12.5%' }}/>
          <Col md={5} style={{ 
              alignItems: 'center',
              width: '25%',
          }}>
              <img
              src={foodcyLogo}
              alt="foodcy"
              className="img-clients"
              />
          </Col>
          <Col md={5} style={{ 
              alignItems: 'center',
              width: '25%',
          }}>
          </Col>
          <Col md={5} style={{ 
              alignItems: 'center',
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