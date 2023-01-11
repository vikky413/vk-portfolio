import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cypress from "../../Assets/Projects/cypress.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import mart from "../../Assets/Projects/mart.png"
import k6 from "../../Assets/Projects/k6.png";
import suvidha from "../../Assets/Projects/suvidha.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suvidha}
              isBlog={false}
              title="Suvidha"
              description="Suvidha is a smart crowed management application.Due to Covid-19 Outbreak conditions social distancing becomes very necessary to control the pandemic.It can be used by large scale business and malls to properly manage their customers with social distancing,we used React Native, Node Js,Firebase realtime database and IBM Cloud Functions technologies for this."
              ghLink="https://github.com/vikky413/suvidha"
              demoLink="https://www.youtube.com/watch?v=HYGX2y25o6M"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="VKCHAT"
              description="Real-Time Chat(VKCHAT) is powered by Socket.IO. is a web application that allows multiple users to have a private and public chat. This app allows one to one chat online and its fast and easy to use. For this  application I have used HTML CSS and JAVASCRIPT technologies."
              ghLink="https://github.com/vikky413/ChatAPP"
              demoLink="https://chat-app-eta-lake.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mart}
              isBlog={false}
              title="Mart App"
              description="This project deals with developing a Virtual website ‘E-commerce Website’. It provides the user with a list of the various products available for purchase in the store. For the convenience of online shopping, a shopping cart is provided to the user. After the selection of the goods, it is sent for the order confirmation process. The system is implemented using Javascript framework Next Js."
              ghLink="https://github.com/vikky413/Mart-App"
              demoLink="https://vkmart.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Password Management System"
              description="It allows the user to add account information for different accounts he holds on the internet. Password Management System basically stores the user name and password details in an encrypted format in the database. The encryption is managed by blow fish algorithm. The user has to login to the system."
              ghLink="https://github.com/vikky413/Password_Management"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cypress}
              isBlog={false}
              title="Web Api & Rest Api Performance Testing using Cypress"
              description="We used Petstore Swagger rest api for cypress automation testing performed Create, Update, Put and Delete operation and for web api used Ecommerce api."
              ghLink="https://github.com/vikky413/EcommerceCypressDemo"
              demoLink="https://github.com/vikky413/democypress/blob/main/cypress/videos/NopeApi.cy.js.mp4" 
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={k6}
              isBlog={false}
              title="Rest Api Performance Testing using K6"
              description="K6 rest Api performance testing we use Petstore api(It's simply adaptable for testing and troubleshooting APIs. Swagger UI presents APIs in a browser,thus it is extra intuitive compared to other) For Rest APIFramework testing using k6 we perform some operations like post get update and delete."
              ghLink="https://github.com/vikky413/k6demo"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={k6}
              isBlog={false}
              title="Web Api(MountSinai) Performance Testing using K6"
              description="K6 web Api performance testing we use mountsinai web api,I have test many operation like search all thing, book appointment, find doctor and also locations."
              ghLink="https://github.com/vikky413/k6test"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          
         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
