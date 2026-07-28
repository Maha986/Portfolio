import React from "react";
import { RevealItem } from "../motion/Reveal";

export default function ExperienceCard(props) {
  return (
    <RevealItem as="div" className="timeline-row">
      <div className="timeline-year">
        {props.current && <span className="timeline-dot" />}
        {props.time}
      </div>
      <div>
        <div className="timeline-role">{props.title}</div>
        <div className="timeline-org">{props.company}</div>
        <p className="timeline-desc">{props.description}</p>
        {props.languages && (
          <div className="timeline-tags">
            {props.languages.split("|").map((tag) => (
              <span key={tag}>{tag.trim()}</span>
            ))}
          </div>
        )}
      </div>
    </RevealItem>
  );
}
