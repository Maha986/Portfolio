import React from "react";
import ExperienceCard from "./ExperienceCard";
import { RevealGroup } from "../motion/Reveal";

export default function Experience() {
  return (
    <RevealGroup className="timeline" stagger={0.08}>
      <ExperienceCard
        company={"Radium"}
        languages={"React | Tailwind CSS | Storybook | REST APIs | Accessibility"}
        title="Software Engineer"
        description="Building and maintaining a design system for Canon that's shared across multiple departments, prototyping components in Storybook, and working on accessibility. Also build APIs and integrate them into React + Tailwind CSS projects across the frontend, backend, and database layers."
        time="Aug 2023 — Present"
        current
      />

      <ExperienceCard
        company={"EAK Library @ NED"}
        languages={"JavaScript | Ajax | APIs"}
        title="Web Developer"
        description="Transferred NED University Library to utilize cost-free Google Books and Open Library APIs."
        time="March 2022"
      />

      <ExperienceCard
        company={"Boossto Software"}
        languages={"PHP Laravel | HTML | CSS | MySQL"}
        title="PHP Laravel Developer — Intern"
        description="Worked on the Laravel framework, performing frontend and backend tasks alongside bug fixes."
        time="Apr — Jun 2022"
      />
    </RevealGroup>
  );
}
