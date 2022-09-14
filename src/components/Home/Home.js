import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Brodie Brock</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}></div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default Home;
