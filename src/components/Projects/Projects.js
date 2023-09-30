import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cloud3 from "../../Assets/Projects/cloud3.jpeg";
import proprogrammer from "../../Assets/Projects/Picture1.png"
import attire from "../../Assets/Projects/attire.png"
import notewise from "../../Assets/Projects/notewise.PNG"

function Projects() {
  
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud3}
              title="Cloud3 - A secure decentralized cloud storage"
              languages = "React | Nodejs | Tailwind CSS | Sequelize (MySQL) | IPFS | Blockchain"
              description="Storage platform which ehances the privacy and availability of the user data by storing data in encrypted form on IPFS and using Blockchain for important metadata. Using the Cloud3 browser extension for Key Management. Build with React.js, Tailwind CSS, Node.js and MySQL (sequelize). Also allows user to securely share the data."
              video={"cloud3"}

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proprogrammer}
              languages={"PHP | HTML | CSS | JQUERY | MySQL"}
              title="ProProgrammer - A comprehensive programming learning platform"
              description="Versatile web application that includes programming tutorials
              both in written and video format, quizzes, assignments and certifications, chat
              capabilities, a note-keeping system, and an online library. An extensive full-stack website employing PHP, HTML, CSS, jQuery, and
              MySQL"
              video={"proprogrammer"}
              ghlink = "https://github.com/Maha986/ProProgrammers/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attire}
              title="Attire: The clothing e-commerce site"
              languages={"React | Material UI"}
              description="Complete responsive and interactive UI for the online shopping site. This e-commerce platform is user-friendly and has aesthetically pleasing web pages. Used React.js along with Material UI to make this site."
              video={"attire"}

              ghlink="https://github.com/Maha986/The-Attire"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notewise}
              title="NoteWise: Your Comprehensive Note Management Solution"
              languages={"React | Bootstrap | Node js | MongoDB"}
              description="Full-stack platform for note management that allows the users to add the notes on the cloud and keep themselves from the hassle of notes keeping. It manages the notes and gives the options to update and delete notes whenever required."
              video={"notewise"}
              ghlink="https://github.com/Maha986/iNotebook" 
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
