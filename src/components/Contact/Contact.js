import React from "react";

import ContactForm from "./ContactForm"
import logo from "../../Assets/tt.png"

import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
    return(
        <Container fluid className="contact-section">
            <img src={logo} style={{ width: "15%", height: "15%", justifyContent: "center" }}></img>
            <Row style={{ height: "20%", justifyContent: "center", paddingBottom: "10px" }} >
                    <h1 className="project-heading">
                        <strong>Contact Us!</strong>
                    </h1>
            </Row>
            <Row style={{ height: "70%", justifyContent: "center", paddingBottom: "10px" }} >
                <ContactForm></ContactForm>
            </Row>
        </Container>
    )
}