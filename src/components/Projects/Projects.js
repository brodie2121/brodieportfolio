import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
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
        <p style={{ color: "white" }}>
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
              imgPath={editor}
              isBlog={false}
              title="Yardboys"
              description="YardBoys is a web application to give golf course superintendents the ability to create and manage daily job boards. The superintendent is able to create jobs for employees, record spray logs, and review historical job activity. The application has sign-up, login, and logout functionality, and is built using NodeJS, MySQL, and ReactJS."
              ghLink="https://github.com/brodie2121/yardboys"
              //demoLink=
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
