import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SocialIcons } from './SocialIcons'

function Footer() {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <Container fluid className="footer" style= {{ position: "absolute", bottom: "0px" }}>
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} TooTripsy</h3>
        </Col>
        <Col md="4" className="footer-body">
          <SocialIcons></SocialIcons>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
