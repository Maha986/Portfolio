import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaHackerrank, FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed and Enhanced by Maha Javed</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Template by <a href="https://github.com/soumyajit4419/Portfolio" className="purple">Soumyajit</a> </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                  href="https://github.com/Maha986"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="mailto:mahajaved986@gmail.com"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.linkedin.com/in/maha-javed"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.hackerrank.com/mahajaved986"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaHackerrank />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
