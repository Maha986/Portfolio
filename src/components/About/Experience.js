import React from "react";
import ExperienceCard from "./ExperienceCard";
import ned from "../../Assets/ned.png";
import boossto from "../../Assets/boossto.jfif"
export default function Experience() {
  return (
    <div>
      <ExperienceCard
        imgPath={ned}
        company={"EAK Library @ NED"}
        languages={"JavaScript | Ajax | APIs"}
        title="Web Developer"
        description="Transferred NED University Library to utilize cost-free Google Books and Open
              Library APIs."
        time="March 2022"
      />

      <ExperienceCard
        imgPath={boossto}
        company={"Boossto Software"}
        languages={"PHP Laravel | HTML | CSS | MySQL"}
        title="Php Laravel Developer - Intern"
        description="Worked on Laravel Framework, perfomed Frontend and Backend tasks alongs with bugs correction."
        time="April 2022 - June 2022 "
      />
    </div>
  );
}
