import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SocialIcons } from './SocialIcons'

function Footer() {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <Container fluid className="footer">
      <Row>
        <Col style={{ width: "33%" }}/>
        <Col className="footer-body" style={{ width: "33%" }}>
          <SocialIcons></SocialIcons>
        </Col>
        <Col className="footer-copywright" style={{ width: "33%", justifyContent: "center", verticalAlign: "middle"}}>
          <h3>Copyright © {year} TooTripsy LLC.</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
