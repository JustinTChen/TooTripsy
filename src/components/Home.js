import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeVideo from "../Assets/salesforce.mp4";
import Type from "./Type";

function Home() {
  return (
    <>
      <div className="main">
        <div className="overlay" />
        <video autoPlay loop muted className="video-background">
          <source src={homeVideo} type='video/mp4' />
        </video>
      </div>
    </>
  );
}

export default Home;
