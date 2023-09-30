import React from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from 'react-bootstrap/ProgressBar';
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Maha Javed </span>
            from <span className="purple"> Pakistan.</span>
            <br /> I am a graduate of <span className="purple">Software Engineering </span>from NED University of Engineering & Technology.
            <br />
            
            <br />
            <br />
            My <span className="purple">proficiency</span>
          </p>
          <ul>
            <li className="about-activity">
            <ProgressBar variant="danger" now={100} label="Frontend Development" />
            </li>
            <li className="about-activity">
            <ProgressBar variant="warning" now={85} label="Backend Development" />
            </li>
            <li className="about-activity">
            <ProgressBar variant="info" now={90} label="Programming" />
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, Create with passion!"{" "}
          </p>
          <footer ></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
