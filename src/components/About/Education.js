import React from 'react'
import EducationCard from './EducationCard'
import ned from "../../Assets/ned.png";
import bahria from "../../Assets/bahria.png";

export default function Education() {
  return (
    <div>
         <EducationCard
              imgPath={ned}
              cgpa={3.902}
              grade={"CGPA"}
              title="NED Univeristy of Engineering & Technology"
              description="Completed Bachelor's Degree in Software Engineering."
              time="2019-2023"
              merit="7th merit"
            />
            <EducationCard
              imgPath={bahria}
              cgpa={"88%"}
              grade={"Percentage"}
              title="Bahria College Karsaz"
              description="Completed Intermediate's Degree in Pre Engineering."
              time="2017-2019"
              merit="12th in Karachi Board"
            />
    </div>
  )
}
