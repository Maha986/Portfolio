import React from "react";

export default function Marquee({ items, speed = 28, className = "" }) {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {[...items, ...items].map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="marquee-dot">&middot;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
