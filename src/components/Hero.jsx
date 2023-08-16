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
      className="flex flex-col items-center justify-center p-1 py-10 mx-auto max-w-7xl md:flex-row-reverse"
    >
      <div className="flex items-center justify-center flex-1 mb-8 md:mb-0">
        <img
          src={hero}
          alt=""
          className={`md:w-3/6 object-cover image-transition ${animate && "animate"
            }`}
        />
      </div>
      <div className="flex-1">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold leading-10 text-white md:text-5xl md:leading-normal text-fade-in">
            <span className="text-5xl text-purple-600 md:text-5xl">
              Hello!
              <br />
            </span>
            My Name is{" "}
            <span
              className={`text-slide-in ${animate ? "typing-animation" : ""}`}
            >
              <span className={`text-loading ${animate ? "animate__animated animate__fadeIn" : ""}`}>
                Mujahidul Islam
              </span>
            </span>
          </h1>
          <h4 className="mt-4 mb-2 text-lg font-bold leading-5 text-gray-600 md:text-2xl md:leading-normal">
            MERAN-Stack Developer
          </h4>
          <a href="./src/assets/Code_a_program.pdf" download>
            <button className={`btn bg-purple-600 p-4 rounded ${animate ? "neon-animation" : ""}`}>
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
