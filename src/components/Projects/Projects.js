import React from "react";
import ProjectCard from "./ProjectCards";
import { Reveal } from "../motion/Reveal";
import cloud3 from "../../Assets/Projects/cloud3.jpeg";
import proprogrammer from "../../Assets/Projects/Picture1.png";
import attire from "../../Assets/Projects/attire.png";
import notewise from "../../Assets/Projects/notewise.PNG";
import cloud3Demo from "../../Assets/Projects/videos/cloud3.mp4";
import proprogrammerDemo from "../../Assets/Projects/videos/proprogrammer.mp4";
import attireDemo from "../../Assets/Projects/videos/attire.mp4";
import notewiseDemo from "../../Assets/Projects/videos/notewise.mp4";
import idonatioDemo from "../../Assets/Projects/videos/iDonatio.mp4";
import univisionDemo from "../../Assets/Projects/videos/Univision.mp4";
import trackerDemo from "../../Assets/Projects/videos/tracker-fieldwork.mp4";
import metanoiaDemo from "../../Assets/Projects/videos/metanoia-2.mp4";
import inclusenseDemo from "../../Assets/Projects/videos/inclusense.mp4";
import adminDemo from "../../Assets/Projects/videos/Admin.mp4";

const WORK = [
  {
    title: "Inclusense — an accessibility widget",
    tag: "Next.js",
    languages: "Next.js · Node.js · MongoDB",
    description:
      "A single line of code that adds text resizing, high-contrast modes, text-to-speech, and screen-reader support to any website. Built in-house at Radium — a natural extension of the accessibility work behind Canon's design system.",
    liveLink: "https://inclusense.eu/",
    video: inclusenseDemo,
  },
  {
    title: "Radium — the agency's own site",
    tag: "Next.js",
    languages: "Next.js · Node.js · MongoDB",
    description:
      "The studio's own site — case studies, service pages, and the brand story for a digital agency working with clients like Canon Europe. Built and maintained as part of the in-house frontend team.",
    liveLink: "https://frontend.radiumagency.com/",
    emptyLabel: "Demo coming soon",
  },
  {
    title: "iDonatio — a giving platform",
    tag: "Bootstrap Studio",
    languages: "Bootstrap Studio · HTML · CSS",
    description:
      "A web portal for charities, religious organizations, and individuals to manage incoming donations, paired with a donor-facing app for secure giving, automated Gift Aid claims, and real-time tracking.",
    liveLink: "https://www.idonatio.com/",
    video: idonatioDemo,
  },
  {
    title: "UniVision — university selection, simplified",
    tag: "Bootstrap Studio",
    languages: "Bootstrap Studio · HTML · CSS",
    description:
      "An EdTech platform helping high-school students and their counselors compare 2,500+ universities, build watchlists, and get personalized recommendations, with an AI essay grader and a counselor-facing chatbot.",
    liveLink: "https://univision.hk/",
    video: univisionDemo,
  },
  {
    title: "Tracker — BCBA fieldwork documentation",
    tag: "React",
    languages: "React",
    description:
      "A documentation tool for Board Certified Behavior Analysts and their trainees, built to simplify BACB-compliant fieldwork tracking and keep the required seven years of records organized and secure.",
    instagram: "https://www.instagram.com/supervision_tracker/reels/",
    video: trackerDemo,
  },
  {
    title: "Metanoia — a Web3 community platform",
    tag: "React",
    languages: "React",
    description:
      "The frontend for an NFT-driven Web3 community brand, pairing a token-gated member experience with the kind of visual polish more commonly seen on traditional consumer products.",
    instagram: "https://www.instagram.com/metanoiacountry/",
    video: metanoiaDemo,
  },
  {
    title: "Admin Dashboard",
    tag: "React",
    languages: "React",
    description:
      "An internal admin dashboard for managing users, content, and day-to-day operations — the unglamorous but essential control room behind a production product.",
    video: adminDemo,
  },
];

const PERSONAL = [
  {
    imgPath: cloud3,
    title: "Cloud3 — a secure, decentralized cloud storage",
    tag: "React",
    languages: "React · Node.js · Tailwind CSS · Sequelize (MySQL) · IPFS · Blockchain",
    description:
      "A storage platform that enhances the privacy and availability of user data by storing it in encrypted form on IPFS and logging metadata on the blockchain, with a companion browser extension for key management.",
    video: cloud3Demo,
  },
  {
    imgPath: proprogrammer,
    title: "ProProgrammer — a full-stack learning platform",
    tag: "PHP",
    languages: "PHP · HTML · CSS · jQuery · MySQL",
    description:
      "A versatile web application with programming tutorials in written and video format, quizzes, assignments and certifications, chat, a note-keeping system, and an online library.",
    video: proprogrammerDemo,
    ghlink: "https://github.com/Maha986/ProProgrammers/",
  },
  {
    imgPath: attire,
    title: "Attire — a clothing e-commerce site",
    tag: "React",
    languages: "React · Material UI",
    description:
      "A complete, responsive UI for an online shopping experience — built with React and Material UI, focused on usability and visual polish across devices.",
    video: attireDemo,
    ghlink: "https://github.com/Maha986/The-Attire",
  },
  {
    imgPath: notewise,
    title: "NoteWise — a note management solution",
    tag: "MERN",
    languages: "React · Bootstrap · Node.js · MongoDB",
    description:
      "A full-stack MERN platform for managing notes on the cloud, letting users create, update, and organize their notes without the hassle of local storage.",
    video: notewiseDemo,
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
            Work I've <em>shipped</em>
          </Reveal>
          <Reveal className="projects-note" delay={0.2} style={{ marginTop: 22 }}>
            A mix of agency and client work from Radium, alongside a few
            personal projects built along the way.
          </Reveal>
        </div>
      </section>

      <div className="chapters">
        {WORK.map((project, i) => (
          <ProjectCard key={project.title} index={i} {...project} />
        ))}
      </div>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="section-head">
          <Reveal className="eyebrow">On my own time</Reveal>
          <Reveal as="h2" className="section-title" delay={0.1}>
            Personal projects
          </Reveal>
        </div>
      </section>

      <div className="chapters">
        {PERSONAL.map((project, i) => (
          <ProjectCard key={project.title} index={i} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
