import React, { useState, useEffect, Suspense, lazy } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Cursor from "./components/motion/Cursor";
import ScrollProgress from "./components/motion/ScrollProgress";
import PageFade from "./components/motion/PageFade";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";

const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="route-fallback" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageFade><Home /></PageFade>} />
          <Route path="/project" element={<PageFade><Projects /></PageFade>} />
          <Route path="/about" element={<PageFade><About /></PageFade>} />
          <Route path="/resume" element={<PageFade><Resume /></PageFade>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <Cursor />
      <ScrollProgress />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
