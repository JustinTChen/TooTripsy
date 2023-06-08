import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">we like traveling.</span>
            <br />
              we also like <span className="purple">taking pictures</span> of and <span className="purple">filming</span> things.
            <br />
            <br />
            welcome to <span className="purple">TooTripsy.</span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
