import React from "react";
import Card from "react-bootstrap/Card";

export default function ExperienceCard(props) {
  return (
    <Card className="education-card">
      <Card.Img
        src={props.imgPath}
        alt="card-img"
        className="education-image"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text
          style={{ textAlign: "right", marginBottom: 0, color: "#c770f0" }}
        >
          {props.company}
        </Card.Text>
        <ul style={{listStyleType: "square"}} >
          <li>
            <Card.Text style={{ textAlign: "justify", marginBottom: 0 }}>
             {props.description}
            </Card.Text>
          </li>
          <li>
            <Card.Text style={{ textAlign: "justify", marginBottom: 0 }}>
              {props.time}
            </Card.Text>
          </li>
          <li>
            <Card.Text style={{ textAlign: "justify", marginBottom: 0 }}>
              {" "}
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#623686",
                  textDecorationThickness: 3,
                }}
              >
                {props.languages}
              </span>
            </Card.Text>
          </li>
        </ul>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
