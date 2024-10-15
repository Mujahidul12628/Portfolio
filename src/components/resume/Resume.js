import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);
  // const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex items-center justify-center text-center">
        <Title des="My Resume" />
      </div>
      <div>
        <ul className="grid w-full grid-cols-1 gap-3 rounded-md lg:gap-5 xl:gap-5 lg:grid-cols-3 xl:grid-cols-3">
          <li
            onClick={
              () =>
                setEducationData(false) &
                setSkillData(true) &
                setExperienceData(false)
              // setAchievementData(false)
            }
            className={`${
              skillData ? " rounded-lg" : "border-transparent"
            } resumeLi shadowQL`}
          >
            Professional Skills
          </li>
          <li
            onClick={
              () =>
                setEducationData(true) &
                setSkillData(false) &
                setExperienceData(false)
              // setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-cyan-500 rounded-lg "
                : "border-transparent"
            } resumeLi shadowQL`}
          >
            Education
          </li>

          <li
            onClick={
              () =>
                setEducationData(false) &
                setSkillData(false) &
                setExperienceData(true)
              // setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-cyan-500 rounded-lg"
                : "border-transparent"
            } resumeLi shadowQL`}
          >
            Experience
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {/* {achievementData && <Achievement />} */}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
