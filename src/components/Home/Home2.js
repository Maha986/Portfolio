import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaHackerrank } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> DISCOVER </span> MY JOURNEY
            </h1>
            <p className="home-about-body">
              I'm a software engineer with a passion for crafting <b className="purple"> innovative UI</b> and frontend experiences.
              <br />
              <br />I bring expertise in
              <i>
                <b className="purple"> React.js </b>
              </i>
              and a range of <i>
                <b className="purple"> CSS Frameworks </b>
              </i>
              <br />alongside proficiency in 
              <i>
                <b className="purple"> Node.js, PHP, and Laravel </b>
              </i>
              for backend development. 
              <br />
              <br />
              My enthusiasm for exploring new technologies drives my continuous growth in this ever-evolving field.
              <br />
              <br />
              <b className="purple">Let's connect </b>and create something amazing together.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row id="contact">
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Maha986"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mahajaved986@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail /> 
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/maha-javed"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.hackerrank.com/mahajaved986"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaHackerrank />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
