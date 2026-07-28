import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import myImg from "../../Assets/maha.png";
import { Reveal, RevealGroup, RevealItem } from "../motion/Reveal";
import Magnetic from "../motion/Magnetic";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaHackerrank } from "react-icons/fa";

const TEASER = [
  {
    n: "01",
    title: "Frontend development",
    desc: "Building and shipping production websites and web apps in React + Tailwind CSS.",
  },
  {
    n: "02",
    title: "Design systems & Storybook",
    desc: "Contributing to Canon's shared design system, prototyped in Storybook and checked for accessibility.",
  },
  {
    n: "03",
    title: "Full-stack delivery",
    desc: "APIs, databases and authentication tying the frontend to real data.",
  },
];

const SOCIALS = [
  { icon: <AiFillGithub />, label: "GitHub", href: "https://github.com/Maha986" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "https://www.linkedin.com/in/maha-javed" },
  { icon: <FaHackerrank />, label: "HackerRank", href: "https://www.hackerrank.com/mahajaved986" },
  { icon: <AiFillMail />, label: "Email", href: "mailto:mahajaved986@gmail.com" },
];

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="hero" ref={ref} id="home">
      <span className="hero-watermark" aria-hidden="true">MAHA</span>

      <motion.div className="hero-portrait" style={{ y: portraitY }}>
        <img src={myImg} alt="Maha Javed" />
      </motion.div>

      <motion.div className="hero-inner" style={{ opacity: heroOpacity }}>
        <Reveal className="eyebrow hero-eyebrow" delay={0.1}>
          Software Engineer &mdash; Based in Karachi
        </Reveal>

        <Reveal as="h1" className="hero-heading" delay={0.2}>
          Building interfaces people actually <em>enjoy</em> using.
        </Reveal>

        <Reveal className="hero-sub" delay={0.35}>
          I'm Maha Javed, a software engineer at <strong className="purple">Radium</strong> building
          production websites and web apps &mdash; including the design system
          and Storybook-driven frontend behind Canon's internal tools.
        </Reveal>

        <RevealGroup className="hero-meta" stagger={0.1}>
          <RevealItem className="hero-meta-item">
            Currently
            <strong>Radium, since 2023</strong>
          </RevealItem>
          <RevealItem className="hero-meta-item">
            Focus
            <strong>Frontend & web development</strong>
          </RevealItem>
          <RevealItem className="hero-meta-item">
            Stack
            <strong>React, Tailwind, Node.js</strong>
          </RevealItem>
        </RevealGroup>
      </motion.div>

      <div className="scroll-cue">
        <span className="scroll-cue-line" />
        Scroll
      </div>
    </section>
  );
}

function Teaser() {
  return (
    <section className="teaser">
      <div className="teaser-inner">
        <div>
          <Reveal className="eyebrow">What I do now</Reveal>
          <Reveal as="h2" className="teaser-heading" delay={0.1}>
            A quick look at what fills my days at Radium.
          </Reveal>
        </div>

        <RevealGroup as="ul" className="teaser-list" stagger={0.1}>
          {TEASER.map((item) => (
            <RevealItem as="li" key={item.n}>
              <span className="n">{item.n}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function Outro() {
  return (
    <section className="outro" id="contact">
      <div className="outro-inner">
        <Reveal className="eyebrow" style={{ justifyContent: "center" }}>
          Get in touch
        </Reveal>
        <Reveal as="h2" className="outro-heading" delay={0.1}>
          Got something worth <em>building</em>?
        </Reveal>
        <Reveal delay={0.2}>
          <Magnetic>
            <a
              href="mailto:mahajaved986@gmail.com"
              className="outro-email"
              data-cursor="Email"
            >
              mahajaved986@gmail.com
            </a>
          </Magnetic>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="outro-socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" data-cursor={s.label}>
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <Teaser />
      <Outro />
    </div>
  );
}

export default Home;
