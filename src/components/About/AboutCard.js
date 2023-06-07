import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Placeholder</span>
            <br />
            Placeholder
            <br />
            <br />
            placeholder
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
