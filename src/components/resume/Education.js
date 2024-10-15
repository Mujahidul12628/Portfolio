import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col w-full gap-10 lgl:flex-row lgl:gap-20"
    >
      {/* part one */}
      <div className="w-full ">
        <div className="flex flex-col gap-4 py-5 lgl:py-12 font-titleFont">
          <h2 className="text-3xl font-bold text-center md:text-4xl">
            Education
          </h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <ResumeCard
            h="Bachelor of Science"
            Institute="Daffodil International University  "
            department="Computer Science and Engineering"
            res="CGPA- 4.00 (Out of 4.00)"
            area=" (Dhaka, Bangladesh)"
            year="2019 - 2023"
          />
          <ResumeCard
            h="Higher School Certificate"
            Institute="Institute : Noakhali Government College"
            major="Major : Science"
            res="Result  : GPA 4.75 (Out of 5.00)"
            year="Passing : 2017"
            board="Board   : Cumilla"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            h="Secondary School Certificate"
            Institute="Institute : AL Farooq Academy"
            major="Major : Science"
            res="Result  : GPA 4.5 (Out of 5.00)"
            year="Passing : 2015"
            board="Board   : Cumilla"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
