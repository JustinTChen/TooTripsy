import React from "react";

import ContactForm from "./ContactForm"

import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
    return(
        <>
            <Row style={{height: "10%"}} />
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }} >
                <Container fluid className="project-section">
                    <h1 className="project-heading">
                        Contact Us!
                    </h1>
                </Container>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }} >
                <ContactForm></ContactForm>
            </Row>
        </>
    )
}