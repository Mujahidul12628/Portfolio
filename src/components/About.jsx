import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "15" },
    // { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          About <span className="text-purple-600">Me</span>
        </h3>
        <p className="my-3 text-lg text-gray-400">My introduction</p>
        <div className="flex flex-col-reverse items-center max-w-6xl gap-12 px-10 mx-auto md:flex-row md:gap-6">
          <div className="p-2">
            <div className="my-3 text-gray-300">
              <p className="mx-auto leading-7 text-justify">
                <p className="mx-auto leading-6 text-justify text-slate-300">
                  Diligent and detail-oriented Computer Science and Engineering graduate with a strong commitment for development and learning. Seeking a challenging position as a Web Developer at any reputable company to contribute to the growth of the organization as well as to expand my expertise.
                </p>
              </p>
              <div className="flex items-center mt-10 gap-7">
                {info.map((content) => (
                  <div className="mx-auto" key={content.text}>
                    <h3 className="text-2xl font-semibold text-white md:text-4xl">
                      {content.count}
                      <span className="text-purple-600">+</span>{" "}
                    </h3>
                    <span className="text-xs md:text-base">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/Code_a_program.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 mt-6 md:mt-0">
            <div className="relative w-11/12 h-full max-w-sm lg:w-96 sm:w-10/12 aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="object-cover w-full bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
