import React, { useEffect, useState } from "react";
import hero from "../assets/images/hero.png";
import "./animate.css";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];

  return (
    <section
      id="home"
      className="flex flex-col items-center py-24 mx-auto justify-evenly max-w-7xl md:flex-row-reverse"
    >
      <div className="flex items-center justify-center flex-1 mb-8 border-2 border-red-600 md:mb-0">
        <img
          src={hero}
          alt=""
          className={`md:w-3/6 object-cover image-transition ${animate && "animate"
            }`}
        />
      </div>
      <div className="flex-1 border-2 border-red-600">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold leading-10 text-white md:text-5xl md:leading-normal text-fade-in">
            <span className="text-2xl text-white md:text-4xl">
              My Self
              <br />
            </span>
            {" "}
            <span
              className={`text-slide-in ${animate ? "typing-animation" : ""}`}
            >
              <span className={`text-loading ${animate ? "animate__animated animate__fadeIn" : ""}`}>
                Mujahidul Islam
              </span>
            </span>
          </h1>
          <h4 className="mb-2 text-lg font-bold leading-5 text-gray-600 md:text-2xl md:leading-normal">
            MERAN-Stack Developer
          </h4>
          <p className="mx-auto leading-7 text-justify text-slate-300">
            Diligent and detail-oriented Computer Science and Engineering graduate with a strong commitment for development and learning. Seeking a challenging position as a Web Developer at any reputable company to contribute to the growth of the organization as well as to expand my expertise.
          </p>
          <a href="./src/assets/Code_a_program.pdf" download>
            <button className={`btn bg-purple-600 my-5 p-3 rounded ${animate ? "neon-animation" : ""}`}>
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
