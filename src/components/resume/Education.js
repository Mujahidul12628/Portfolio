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
      <div className="w-full border border-orange-500">
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl font-bold md:text-4xl">Education Quality</h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <ResumeCard
            h="Bachelor of Science (B.Sc)"
            Institute="Daffodil International University  "
            department="Computer Science and Engineering"
            res="CGPA- 4.00 (Out of 4.00)"
            area=" (Dhaka, Bangladesh)"
            year="2019 - 2023"
          />
          <ResumeCard
            h="Higher School Certificate (HSC)"
            Institute="Institute : Noakhali Government College"
            major="Major : Science"
            res="Result  : GPA 4.75 (Out of 5.00)"
            year="Passing : 2017"
            board="Board   : Cumilla"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            h="Secondary School Certificate (SSC)"
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
