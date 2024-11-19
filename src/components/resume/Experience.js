import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="grid grid-cols-1 gap-10 py-12 xl:grid-cols-2 font-titleFont"
    >
      <div>
        <div className="">
          <h2 className="text-2xl font-bold md:text-3xl">Job Experience</h2>
        </div>
        <div className="flex flex-col w-full mt-5">
          <ResumeCard
            h="Trainee Software Engineer"
            company="ERA INFOTECH LTD ( Dhaka, Bangladesh ) "
            time="(January 2024 - June 2024)"
            responsibility="Responsibility :"
            li1="☑ Next.js for the frontend, with a focus on responsive design and user experience."
            li2="☑ Developed and maintained scalable backend systems with Node.js and Express.js"
            li3="☑ Utilized Material-UI for styling, ensuring consistent and visually appealing interfaces"
            li4="☑ Designed and administered PostgreSQL databases using PGAdmin4 for optimal performance"
            contribution="Contribution :"
            p1="❖ Project RDCD : Contributed to the development of a comprehensive system to manage the activities of the Rural Development Cooperative Division, streamlining operations and improving efficiency."
            p2="❖ Project BONDHON: Marriage registration platform aimed at modernizing the government-authorized registration process, introducing technological solutions to enhance accessibility and transparency."
          />
        </div>
      </div>
      <div>
        <div className="">
          <h2 className="font-semibold text-2xl md:text-3xl">
            Training Experience
          </h2>
        </div>
        <div className="flex flex-col w-full gap-5 mt-5 ">
          <ResumeCard
            h="Complete Web Development"
            company="Programming Hero "
            time="( January 2023 - July 2023 )"
            responsibility="Learning :"
            li1="◉ Focusing on comprehensive web development with an emphasis on both frontend and backend technologies."
            li2="◉ Technologies Learned HTML, CSS, Javascript,React, Tailwind CSS, Node.js, MongoDB, Express.js"
            li3="◉ Proficient in building and debugging web applications, with hands-on experience through 12 practical projects"
          />
          <ResumeCard
            h="Reactive Accelerator"
            company="Learn With Sumit "
            time=" April 2023  "
            responsibility="Learning :"
            li1="◉ Focusing on advanced web development techniques with a focus on modern JavaScript frameworks"
            li2="◉ Technologies Learned  React.js, Next.js, UI Design, Redux."
            li3="◉ Expertise in building interactive and scalable web applications with advanced state management"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
