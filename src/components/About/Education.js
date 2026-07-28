import React from "react";
import EducationCard from "./EducationCard";
import { RevealGroup } from "../motion/Reveal";

export default function Education() {
  return (
    <RevealGroup className="timeline" stagger={0.08}>
      <EducationCard
        cgpa={3.902}
        grade={"CGPA"}
        title="NED University of Engineering & Technology"
        description="Completed Bachelor's Degree in Software Engineering."
        time="2019 – 2023"
        merit="7th merit"
      />
      <EducationCard
        cgpa={"88%"}
        grade={"Percentage"}
        title="Bahria College Karsaz"
        description="Completed Intermediate's Degree in Pre Engineering."
        time="2017 – 2019"
        merit="12th in Karachi Board"
      />
    </RevealGroup>
  );
}
