import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="green">Brodie Brock </span>
            from <span className="green"> Nashville, Tennessee.</span>
            <br /> I am a juinor at Western Kentucky University, and I am
            pursuing a degree in Computer Information Technology.
            <br />
            Additionally, I am currently employed as an assistant
            Superintendent.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Golfing
            </li>
            <li className="about-activity">
              <ImPointRight /> Hunting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling with my wife
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;