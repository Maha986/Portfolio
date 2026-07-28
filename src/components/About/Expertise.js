import React from "react";
import { MdWeb, MdLock } from "react-icons/md";
import { SiStorybook } from "react-icons/si";
import { FaUniversalAccess, FaServer } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { TbApi } from "react-icons/tb";
import { RevealGroup, RevealItem } from "../motion/Reveal";

const items = [
  {
    icon: <MdWeb />,
    title: "Frontend & Website Development",
    desc: "Building and shipping production websites and web applications with React and Tailwind CSS — my day-to-day work at Radium.",
  },
  {
    icon: <SiStorybook />,
    title: "Design Systems & Storybook",
    desc: "Contributing to a shared design system for Canon, prototyping components in Storybook before they ship into real, department-wide interfaces.",
  },
  {
    icon: <FaUniversalAccess />,
    title: "Accessibility",
    desc: "Auditing and improving components for accessibility, keyboard navigation, and screen-reader support.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Working across the stack to build server-side logic that supports frontend features end to end.",
  },
  {
    icon: <BsDatabase />,
    title: "Database Management",
    desc: "Designing and managing databases that power application data.",
  },
  {
    icon: <TbApi />,
    title: "API Integration",
    desc: "Building APIs and integrating them into React + Tailwind CSS applications across different projects at Radium.",
  },
  {
    icon: <MdLock />,
    title: "Authentication Systems",
    desc: "Implementing secure authentication and authorization flows for web applications.",
  },
];

function Expertise() {
  return (
    <RevealGroup className="index-list" stagger={0.05}>
      {items.map((item, i) => (
        <RevealItem as="div" className="index-row" key={item.title}>
          <span className="n">{String(i + 1).padStart(2, "0")}</span>
          <div className="index-row-main">
            <h3>{item.title}</h3>
            <p className="index-row-desc">{item.desc}</p>
          </div>
          <span className="index-row-icon">{item.icon}</span>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export default Expertise;
