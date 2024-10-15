import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({
  title,
  des,
  src,
  liveLink,
  clientLink,
  serverLink,
  techStack,
}) => {
  return (
    <div
      className=" w-full p-4   h-auto  rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-[#433f3f] to-[#013c3f] group hover:bg-gradient-to-b hover:from-[#00a1be] hover:gray-900npm run dev
    n transition-colors duration-1000 hover:gap-5"
    >
      <div className="w-full rounded-lg hover:border-spacing-4">
        <img
          className="w-full duration-300 cursor-pointer h-60 group-hover:scale-105"
          src={src}
          alt="src"
        />
      </div>
      <div className="flex flex-col w-full gap-5 mt-5 duration-300 cursor-pointer group-hover:scale-105">
        <div>
          <div className="">
            <h3 className="p-1 text-base font-semibold uppercase text-cyan-400">
              {title}
            </h3>
          </div>
          <p className="mt-3 text-sm tracking-wide duration-300 hover:text-gray-100">
            {des}
          </p>
          {/* <div className="flex flex-wrap items-center py-2 text-sm">
            <span> Technology:</span>
            <span className="px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box">
              React JS
            </span>
            <span className="px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box">
              Tailwind
            </span>
            <span className="px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box">
              Countup
            </span>
            <span className="px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box">
              Swiper JS
            </span>
            <span className="px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box">
              Node JS
            </span>
            <span className="px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box">
              Express
            </span>
            <span className="px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box">
              Firebase
            </span>
            <span className="px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box">
              Vercel
            </span>
          </div> */}
          <div className="flex flex-wrap items-center py-2 ">
            <span> Technology:</span>
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 pt-3 pb-5 ">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 px-3 py-1 text-sm tracking-wide rounded-sm sm:text-xs md:text-sm lg:text-md hover:border-2 hover:border-cyan-500 bg-cyan-600 hover:bg-cyan-9 00"
            >
              <span className="p-1 text-base text-white duration-300 cursor-pointer hover:text-designColor">
                <FaGlobe />
              </span>
              <span className="font-semibold">Live</span>
            </a>
            <a
              href={clientLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs border rounded-sm xs:text-sm sm:text-xs md:text-sm lg:text-md border-cyan-500 hover:bg-cyan-600"
            >
              <span>Github-Client</span>
            </a>
            <a
              href={serverLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs border rounded-sm xs:text-sm sm:text-xs md:text-sm lg:text-md border-cyan-500 hover:bg-cyan-600"
            >
              {/* <span className="inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor">
                    <BsGithub />
                  </span> */}
              <span>Github-Server</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
