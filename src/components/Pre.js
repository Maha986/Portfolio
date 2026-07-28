import React, { useEffect, useState } from "react";

function Pre({ load }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (!load) return undefined;
    const start = Date.now();
    const duration = 1000;
    let raf;

    function tick() {
      const elapsed = Date.now() - start;
      const next = Math.min(100, Math.round((elapsed / duration) * 100));
      setPct(next);
      if (next < 100) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [load]);

  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <div className="preloader-inner">
        <span className="preloader-mark">
          Maha Javed<span>.</span>
        </span>
        <div className="preloader-bar">
          <div className="preloader-bar-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="preloader-pct">{String(pct).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

export default Pre;
