import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Greetings, everyone! I'm Brodie Brock, hailing from the vibrant city
            of Nashville, Tennessee. Currently, I'm a junior student at Western
            Kentucky University, passionately pursuing a degree in Computer
            Information Technology.
            <br />
            <br />
            Additionally, I am currently employed as an assistant
            Superintendent.
            <br />
            <br />
            In addition to coding, I thoroughly enjoy indulging in activities
            such as golfing, hunting, and embarking on adventures with my
            beloved wife!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
