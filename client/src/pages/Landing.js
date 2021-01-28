import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ControlledCarousel from "../components/Carousel";
import Directory from "../components/Directory";

function Landing() {
  return (
    <div>
      <Hero backgroundImage="walters.jpg">
        <h1>Walters Art Gallery</h1>
        <h2>xxxxxxxxxxxxxxxxxxxxxx</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>xxxxxxxxxxxxxxxxxxxx</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet diam tortor, id consequat mauris ullamcorper eu. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
          </Col>
        </Row>
        <ControlledCarousel />
        <Directory />
      </Container>
    </div>
  );
}

export default Landing;
