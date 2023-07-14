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
            Currently, I'm working as a <span className="purple"> Software Engineer </span>at<span className="purple">Persistent Systems Limited.</span>
            <br />
              In my role, I contribute to an exciting Ecommerce project where I primarily work with React for frontend development. Additionally, I specialize in performance and load testing using tools like k6 and Webdriver.io.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

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
