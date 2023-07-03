import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Savoury Bite",
      github_link: "https://github.com/Mujahidul12628/savoury-bite",
      live_link: "https://superlative-kashata-685378.netlify.app/",
    },
    {
      img: project2,
      name: "Job Portal",
      github_link: "https://github.com/Mujahidul12628/React-Practice-Folder",
      live_link: "https://ubiquitous-sunshine-cce35e.netlify.app/",
    },
    {
      img: project3,
      name: "Toys Galaxy",
      github_link: "https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-Mujahidul12628",
      live_link: "https://toys-galaxy-9f997.web.app/",
    }
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-purple-600">Projects</span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">My awesome works</p>
      </div>
      <br />
      <div className="relative flex items-center max-w-6xl px-5 mx-auto">
        <div className="w-full ">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="w-full p-4 h-fit bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="my-4 text-xl">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="inline-block px-2 py-1 text-purple-600 bg-gray-800"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="inline-block px-2 py-1 text-purple-600 bg-gray-800"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Project;
