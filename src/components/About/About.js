import React from "react";
import { Reveal, RevealGroup, RevealItem } from "../motion/Reveal";
import Marquee from "../motion/Marquee";
import Education from "./Education";
import Experience from "./Experience";
import Expertise from "./Expertise";

const STATS = [
  { value: "2023", label: "Joined Radium" },
  { value: "Canon", label: "Design system client" },
  { value: "NED", label: "BE, Software Engineering" },
  { value: "Karachi", label: "Based in, Pakistan" },
];

const TECH = [
  "React",
  "Tailwind CSS",
  "Redux",
  "Storybook",
  "JavaScript",
  "Node.js",
  "Express",
  "PHP",
  "MongoDB",
  "MySQL",
  "Git",
];

function About() {
  return (
    <div>
      <section className="about-hero">
        <div className="statement">
          <Reveal className="eyebrow">About</Reveal>
          <Reveal as="h1" className="statement-text" delay={0.1}>
            I build <em>websites and web applications</em> &mdash; from the
            interface down to the data behind it. At{" "}
            <strong>Radium</strong>, that includes the design system{" "}
            <strong>Canon's</strong> teams build on every day.
          </Reveal>
        </div>

        <RevealGroup className="stat-strip" stagger={0.08}>
          {STATS.map((s) => (
            <RevealItem as="div" className="stat" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="section">
        <div className="section-head">
          <Reveal className="eyebrow">What I do at Radium</Reveal>
          <Reveal as="h2" className="section-title" delay={0.1}>
            Design systems, <em>end to end</em>
          </Reveal>
        </div>
        <Expertise />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal className="eyebrow" style={{ marginBottom: 24 }}>
          Toolbox
        </Reveal>
        <Marquee items={TECH} speed={32} />
      </section>

      <section className="section">
        <div className="section-head">
          <Reveal className="eyebrow">Journey</Reveal>
          <Reveal as="h2" className="section-title" delay={0.1}>
            Experience
          </Reveal>
        </div>
        <Experience />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <Reveal className="eyebrow">Background</Reveal>
          <Reveal as="h2" className="section-title" delay={0.1}>
            Education
          </Reveal>
        </div>
        <Education />
      </section>
    </div>
  );
}

export default About;
