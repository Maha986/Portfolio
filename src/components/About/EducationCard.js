import React from "react";
import { RevealItem } from "../motion/Reveal";

export default function EducationCard(props) {
  return (
    <RevealItem as="div" className="timeline-row">
      <div className="timeline-year">{props.time}</div>
      <div>
        <div className="timeline-role">{props.title}</div>
        <div className="timeline-org">{props.merit}</div>
        <p className="timeline-desc">{props.description}</p>
        <div className="timeline-tags">
          <span>
            {props.grade}: {props.cgpa}
          </span>
        </div>
      </div>
    </RevealItem>
  );
}
