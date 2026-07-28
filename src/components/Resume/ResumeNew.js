import React, { useState, useEffect } from "react";
import pdf from "../../Assets/../Assets/Maha Javed Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Reveal } from "../motion/Reveal";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resume-page">
      <div className="resume-head">
        <div>
          <Reveal className="eyebrow">Resume</Reveal>
          <Reveal as="h1" className="section-title" delay={0.1}>
            The paper trail
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <a
            className="resume-download"
            href={pdf}
            target="_blank"
            rel="noreferrer"
            data-cursor="Download"
          >
            <AiOutlineDownload />
            Download CV
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="paper-card">
        <Document file={pdf} className="d-flex align-items-center flex-column">
          <Page pageNumber={1} scale={width > 786 ? 1.3 : 0.55} />
          <Page pageNumber={2} scale={width > 786 ? 1.3 : 0.55} />
        </Document>
      </Reveal>
    </div>
  );
}

export default ResumeNew;
