import React, { useEffect, useRef } from "react";
import { Reveal } from "../motion/Reveal";

function ChapterVideo({ src, poster, alt }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    // Respect reduced-motion preferences instead of forcing autoplay on everyone.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.preload = "metadata";
      return undefined;
    }
    let observer;
    // Defer attaching until after the first paint so layout has settled —
    // otherwise elements can briefly report an inaccurate position and
    // every video on the page ends up "in view" at once.
    const raf = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        },
        { threshold: 0.35 }
      );
      observer.observe(el);
    });
    return () => {
      cancelAnimationFrame(raf);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt}
      style={{ cursor: "pointer" }}
      onClick={(e) => {
        const v = e.currentTarget;
        if (v.paused) v.play().catch(() => {});
        else v.pause();
      }}
    />
  );
}

function ProjectCards(props) {
  const reversed = props.index % 2 === 1;

  return (
    <article className={`chapter ${reversed ? "is-reversed" : ""}`}>
      <span className="chapter-index" aria-hidden="true">
        {String(props.index + 1).padStart(2, "0")}
      </span>

      <div className="chapter-inner">
        <Reveal className="chapter-media" y={0} data-cursor="Project">
          {props.video ? (
            <ChapterVideo src={props.video} poster={props.imgPath} alt={props.title} />
          ) : props.imgPath ? (
            <img
              src={props.imgPath}
              alt={props.title}
              loading={props.index === 0 ? "eager" : "lazy"}
            />
          ) : (
            <div className="chapter-media-empty">
              <span>{props.emptyLabel || "No preview available"}</span>
            </div>
          )}

          {(props.video || props.imgPath) && (
            <div className="chapter-media-overlay">
              <span className="chapter-media-name">{props.title}</span>
              <span className="chapter-media-tag">{props.tag}</span>
            </div>
          )}
        </Reveal>

        <Reveal className="chapter-body" delay={0.1}>
          <div className="chapter-eyebrow">{props.languages}</div>
          <h3 className="chapter-title">{props.title}</h3>
          <p className="chapter-desc">{props.description}</p>

          <div className="chapter-links">
            {props.liveLink && (
              <a
                className="text-link"
                href={props.liveLink}
                target="_blank"
                rel="noreferrer"
                data-cursor="Visit"
              >
                Visit site <span className="arrow">&#8599;</span>
              </a>
            )}
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
            {props.instagram && (
              <a
                className="text-link"
                href={props.instagram}
                target="_blank"
                rel="noreferrer"
                data-cursor="Instagram"
              >
                View on Instagram <span className="arrow">&#8599;</span>
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </article>
  );
}
export default ProjectCards;
