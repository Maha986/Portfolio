import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { to: "/", label: "Home", n: "01" },
  { to: "/about", label: "About", n: "02" },
  { to: "/project", label: "Work", n: "03" },
  { to: "/resume", label: "Resume", n: "04" },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  function goContact() {
    setOpen(false);
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }

  return (
    <>
      <nav className={`nav-root ${scrolled ? "is-scrolled" : ""}`}>
        <Link to="/" className="nav-brand" data-cursor="Home">
          Maha Javed<span>.</span>
        </Link>

        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? "active" : ""}
                data-cursor={link.label}
              >
                <span className="n">{link.n}</span>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); goContact(); }} data-cursor="Say hi">
              <span className="n">05</span>
              Contact
            </a>
          </li>
        </ul>

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="nav-overlay-links">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                >
                  <Link to={link.to}>
                    <span className="n">{link.n}</span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * LINKS.length, duration: 0.5 }}
              >
                <a href="#contact" onClick={(e) => { e.preventDefault(); goContact(); }}>
                  <span className="n">05</span>
                  Contact
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
