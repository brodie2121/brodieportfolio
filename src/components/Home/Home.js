import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Github from "./Github";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
              </h1>
              <h1 className="heading-name">
                My name is
                <strong className="main-name"> Brodie Brock</strong> and I am an
                innovative full-stack developer who finds pleasure in acquiring
                proficiency in new languages and technologies as required.
              </h1>
              <div style={{ padding: 15, textAlign: "left" }}></div>
            </Col>
          </Row>
        </Container>
        <Github />
        <Home2 />
      </Container>
    </section>
  );
}
export default Home;
