import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactPlayer from "react-player";
import { Reveal } from "../motion/Reveal";
import attire_demo from "../../Assets/Projects/videos/attire.mp4";
import cloud3_demo from "../../Assets/Projects/videos/cloud3.mp4";
import notewise_demo from "../../Assets/Projects/videos/notewise.mp4";
import proprogrammers_demo from "../../Assets/Projects/videos/proprogrammer.mp4";

const DEMOS = {
  attire: attire_demo,
  cloud3: cloud3_demo,
  notewise: notewise_demo,
  proprogrammer: proprogrammers_demo,
};

function ProjectCards(props) {
  const [show, setShow] = useState(false);
  const reversed = props.index % 2 === 1;

  return (
    <article className={`chapter ${reversed ? "is-reversed" : ""}`}>
      <span className="chapter-index" aria-hidden="true">
        {String(props.index + 1).padStart(2, "0")}
      </span>

      <div className="chapter-inner">
        <Reveal className="chapter-media" y={0} data-cursor={props.video ? "View demo" : "Project"}>
          <img
            src={props.imgPath}
            alt={props.title}
            onClick={() => props.video && setShow(true)}
            style={{ cursor: props.video ? "pointer" : "default" }}
          />
          {props.video && <span className="chapter-media-tag">Watch demo</span>}
        </Reveal>

        <Reveal className="chapter-body" delay={0.1}>
          <div className="chapter-eyebrow">{props.languages}</div>
          <h3 className="chapter-title">{props.title}</h3>
          <p className="chapter-desc">{props.description}</p>

          <div className="chapter-links">
            {props.ghlink && (
              <a
                className="text-link"
                href={props.ghlink}
                target="_blank"
                rel="noreferrer"
                data-cursor="GitHub"
              >
                View on GitHub <span className="arrow">&#8599;</span>
              </a>
            )}
            {props.video && (
              <a
                className="text-link"
                href="#watch"
                onClick={(e) => {
                  e.preventDefault();
                  setShow(true);
                }}
                data-cursor="Watch"
              >
                Watch demo <span className="arrow">&#8599;</span>
              </a>
            )}
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="lightbox-close" onClick={() => setShow(false)} aria-label="Close">
              &#10005;
            </button>
            <ReactPlayer url={DEMOS[props.video]} width="90%" height="80%" controls playing />
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
export default ProjectCards;
