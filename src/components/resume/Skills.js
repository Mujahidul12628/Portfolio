// import React from 'react'
// import { motion } from 'framer-motion';

// const Skills = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="flex flex-col w-full gap-10 lgl:flex-row lgl:gap-20"
//     >
//       <div className="w-full lgl:w-1/2">
//         <div className="flex flex-col gap-4 py-12 font-titleFont">
//           <p className="text-sm text-designColor tracking-[4px] uppercase">
//             Features
//           </p>
//           <h2 className="text-3xl font-bold md:text-4xl">Design Skill</h2>
//         </div>
//         <div className='className="flex flex-col w-full gap-6 mt-14'>
//           <div className="overflow-x-hidden">
//             <p className="text-sm font-medium uppercase">Photoshot</p>
//             <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
//               >
//                 <span className="absolute right-0 -top-7">100%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm font-medium uppercase">Figma</p>
//             <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute right-0 -top-7">90%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm font-medium uppercase">Adobe XD.</p>
//             <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute right-0 -top-7">60%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm font-medium uppercase">Adobe Illustrator</p>
//             <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute right-0 -top-7">70%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm font-medium uppercase">Design</p>
//             <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute right-0 -top-7">95%</span>
//               </motion.span>
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="w-full lgl:w-1/2">
//         <div className="flex flex-col gap-4 py-12 font-titleFont">
//           <p className="text-sm text-designColor tracking-[4px] uppercase">
//             Features
//           </p>
//           <h2 className="text-3xl font-bold md:text-4xl">Development Skill</h2>
//         </div>
//         <div className="flex flex-col gap-6">
//           <div className="overflow-x-hidden">
//             <p className="text-sm font-medium uppercase">React</p>
//             <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="relative w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
//               >
//                 <span className="absolute right-0 -top-7">100%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm font-medium uppercase">HTML 5</p>
//             <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute right-0 -top-7">95%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm font-medium uppercase">CSS3</p>
//             <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute right-0 -top-7">80%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm font-medium uppercase">JAVASCRIPT</p>
//             <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute right-0 -top-7">75%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm font-medium uppercase">SOFTWARE</p>
//             <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute right-0 -top-7">90%</span>
//               </motion.span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Skills
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  DiReact,
  DiNodejsSmall,
  DiPhotoshop,
  DiIllustrator,
  DiJavascript1,
  DiPostgresql,
} from "react-icons/di";
import {
  TbBrandFigma,
  TbBrandFirebase,
  TbBrandGithub,
  TbBrandTailwind,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiMui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
const skillsData = [
  {
    icon: <DiJavascript1 className="w-24 h-24 text-cyan-500" />,
    name: "JavaScript",
    confidence: "70",
  },
  {
    icon: <DiReact className="w-24 h-24 text-cyan-500" />,
    name: "React JS",
    confidence: 90,
  },
  {
    icon: <TbBrandNextjs className="w-24 h-24 text-cyan-500" />,
    name: "Next JS",
    confidence: 85,
  },

  {
    icon: <DiNodejsSmall className="w-24 h-24 text-cyan-500" />,
    name: "Node JS",
    confidence: 70,
  },
  {
    icon: <SiExpress className="w-24 h-24 text-cyan-500" />,
    name: "Express",
    confidence: 70,
  },
  {
    icon: <BiLogoMongodb className="w-24 h-24 text-cyan-500" />,
    name: "MongoDB",
    confidence: 70,
  },
  {
    icon: <DiPostgresql className="w-24 h-24 text-cyan-500" />,
    name: "Postgresql",
    confidence: 80,
  },
  {
    icon: <TbBrandFirebase className="w-24 h-24 text-cyan-500" />,
    name: "Firebase",
    confidence: 80,
  },
  {
    icon: <TbBrandGithub className="w-24 h-24 text-cyan-500" />,
    name: "GitHub",
    confidence: 90,
  },
  {
    icon: <SiMui size={20} className="w-24 h-24 text-cyan-500" />,
    name: "Material UI",
    confidence: 85,
  },
  {
    icon: <TbBrandBootstrap className="w-24 h-24 text-cyan-500" />,
    name: "Bootstrap",
    confidence: 95,
  },
  {
    icon: <TbBrandTailwind className="w-24 h-24 text-cyan-500" />,
    name: "Tailwind",
    confidence: 95,
  },

  {
    icon: <TbBrandFigma className="w-24 h-24 text-cyan-500" />,
    name: "Figma",
    confidence: 75,
  },
  {
    icon: <DiPhotoshop className="w-24 h-24 text-cyan-500" />,
    name: "Photoshop",
    confidence: 60,
  },
  {
    icon: <DiIllustrator className="w-24 h-24 text-cyan-500" />,
    name: "Illustrator",
    confidence: 50,
  },
];

const Skills = () => {
  return (
    <div id="skills" className="mx-auto max-w-7xl">
      <div className="flex items-center justify-center mb-5 md:mb-8">
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <h2 className="text-3xl font-bold md:text-4xl">Professional Skill</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {skillsData.map((skill, index) => (
          <div key={index} className="flip-container">
            <div className="relative border-2 rounded-md flip-card border-cyan-500 ">
              <div className="relative w-full h-full flip-card-inner">
                <div className="relative flex flex-col items-center justify-center p-4 ">
                  <div>{skill.icon}</div>
                  <div className="mt-2 text-center">{skill.name}</div>
                  <div className="absolute bottom-0 left-0 w-full bg-gray-200 rounded-md">
                    <div
                      className="h-2 rounded-md bg-cyan-500"
                      style={{ width: `${skill.confidence}%` }}
                    ></div>
                  </div>
                </div>
                {/* Back content here */}
                <div className="absolute inset-0 flex items-center justify-center text-white bg-gray-800 flip-card-back">
                  <CircularProgressbar
                    value={skill.confidence}
                    text={`${skill.confidence}%`}
                    styles={buildStyles({
                      textColor: "#00d1d1",
                      pathColor: "#00d1d1",
                      trailColor: "#333",
                    })}
                    className="w-28 h-28"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
