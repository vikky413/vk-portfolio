import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey everyone, I'm <span className="purple">Vikram Singh </span>
            from <span className="purple"> Satna, India.</span>
            <br />I graduated from Lakshmi Narain College of Technology, Bhopal, with a B.Tech degree. 
            <br />
            Currently, I have been working for <span className="purple">Persistent Systems Limited Company </span> as a <span className="purple"> Software Engineer </span>.
            <br />
            <br />
              In my role, I was part of the <span className="purple">Constellation Brands </span> Project as a <span className="purple"> front-end developer </span> and worked on implementing <span className="purple">  responsive design, optimizing web performance </span>overall, increasing the user experience for clients, and building <span className="purple"> reusable components </span> for future use using React JS. Validate the data taken from APIs and databases, then validate both data sets using NodeJS. Also tested the <span className="purple">performance and load testing </span> of the APIs using the K6 tool.
            <br />
              <br />
          
          </p>
         

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vikram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
