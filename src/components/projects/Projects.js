import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title des="Projects" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
        <ProjectsCard
          title="Share Parking"
          des=" A platform for users to easily share and rent parking spaces, making urban parking simpler and more accessible."
          src={projectOne}
          link="https://www.google.com/"
          liveLink="https://parking-sharing-89ed9.web.app/"
          clientLink="https://github.com/Mujahidul12628/Parking-Share"
          serverLink="https://github.com/Mujahidul12628/Parking-Sharing-Server"
          techStack={[
            "React JS",
            "Node JS",
            "Express",
            "MongoDB",
            "SSL Commerce",
            "Firebase",
            "Vercel",
            "Nodemon",
          ]}
        />
        <ProjectsCard
          title="Virtual Academy "
          des=" An interactive online platform where children can learn about various sports, enhancing their skills and knowledge."
          src={projectTwo}
          link="https://www.youtube.com/"
          liveLink="https://virtual-academy-93114.web.app/"
          clientLink="https://github.com/Mujahidul12628/Virtual-Academy"
          serverLink="https://github.com/Mujahidul12628/Virtual-Academy-Server"
          techStack={[
            "React JS",
            "Tailwind CSS",
            "React Spring",
            "React Tab",
            "Node JS",
            "Express",
            "Firebase",
            "Vercel",
          ]}
        />
        <ProjectsCard
          title="Trek Vibes"
          des=" A travel website that provides users with curated trekking experiences, guiding them to explore stunning landscapes."
          src={projectThree}
          liveLink="https://trek-vibes.web.app/"
          clientLink="https://github.com/Mujahidul12628/Travel"
          serverLink="https://github.com/Mujahidul12628/Travel-Server"
          techStack={[
            "React JS",
            "Tailwind",
            "Countup",
            "Swiper JS",
            "Node JS",
            "Express",
            "Firebase",
            "Vercel",
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
