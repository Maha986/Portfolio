import React from "react";
import ProjectCard from "./ProjectCards";
import { Reveal } from "../motion/Reveal";
import cloud3 from "../../Assets/Projects/cloud3.jpeg";
import proprogrammer from "../../Assets/Projects/Picture1.png";
import attire from "../../Assets/Projects/attire.png";
import notewise from "../../Assets/Projects/notewise.PNG";

const PROJECTS = [
  {
    imgPath: cloud3,
    title: "Cloud3 — a secure, decentralized cloud storage",
    languages: "React · Node.js · Tailwind CSS · Sequelize (MySQL) · IPFS · Blockchain",
    description:
      "A storage platform that enhances the privacy and availability of user data by storing it in encrypted form on IPFS and logging metadata on the blockchain, with a companion browser extension for key management.",
    video: "cloud3",
  },
  {
    imgPath: proprogrammer,
    title: "ProProgrammer — a full-stack learning platform",
    languages: "PHP · HTML · CSS · jQuery · MySQL",
    description:
      "A versatile web application with programming tutorials in written and video format, quizzes, assignments and certifications, chat, a note-keeping system, and an online library.",
    video: "proprogrammer",
    ghlink: "https://github.com/Maha986/ProProgrammers/",
  },
  {
    imgPath: attire,
    title: "Attire — a clothing e-commerce site",
    languages: "React · Material UI",
    description:
      "A complete, responsive UI for an online shopping experience — built with React and Material UI, focused on usability and visual polish across devices.",
    video: "attire",
    ghlink: "https://github.com/Maha986/The-Attire",
  },
  {
    imgPath: notewise,
    title: "NoteWise — a note management solution",
    languages: "React · Bootstrap · Node.js · MongoDB",
    description:
      "A full-stack MERN platform for managing notes on the cloud, letting users create, update, and organize their notes without the hassle of local storage.",
    video: "notewise",
    ghlink: "https://github.com/Maha986/iNotebook",
  },
];

function Projects() {
  return (
    <div>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="section-head">
          <Reveal className="eyebrow">Selected work</Reveal>
          <Reveal as="h1" className="section-title" delay={0.1}>
            Projects, <em>outside the day job</em>
          </Reveal>
          <Reveal className="projects-note" delay={0.2} style={{ marginTop: 22 }}>
            A few personal and academic projects I've built. My client work
            at Radium is under NDA, so it lives in the Experience section
            instead.
          </Reveal>
        </div>
      </section>

      <div className="chapters">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} index={i} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
