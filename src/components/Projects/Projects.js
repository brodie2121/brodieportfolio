import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import guess from "../../Assets/Projects/guessingGame.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TindCodr"
              description="TindCodr is a web application which allows junior and senior developers to connect with other developers in their geographic area. The application allows developers to add projects, post comments, and collaborate on new initiatives. TindCodr is a back-end based project using NodeJS, SQL, ExpressJS, JavaScript, HTML, and CSS."
              ghLink="https://github.com/brodie2121/TindCodr"
              //demoLink=
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Spraylogger"
              description="Spraylogger is an application that gives superintendents the ability to log their spraying records. The application allows grounds maintenance employees to enter and maintain turf spray logs, for ongoing reporting requirements. The application is built using NodeJS, MongoDB, and ReactJS. I am also using React Bootstrap for my CSS."
              ghLink="https://github.com/brodie2121/spraylogger"
              //demoLink=
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guess}
              isBlog={false}
              title="Guessing Game"
              description="Guessing Game is a Java-based Android game crafted in Android Studio. I created this game for a project in one of my University classes. Users are welcome to select a number range to challenge their intuition. Then, they will have ten chances to guess the correct number. In the face of incorrect guesses, dynamic clues guide them, suggesting whether to ascend or descend in their quest for the correct number."
              ghLink="https://github.com/brodie2121/GuessingGame"
              //demoLink=
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
