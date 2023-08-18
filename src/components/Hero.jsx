import React, { useEffect, useState } from "react";
import hero from "../assets/images/hero.png";
import "./animate.css";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

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
      className="grid items-center grid-cols-1 py-24 mx-auto md:grid-cols-5 lg:grid-cols-3 justify-evenly max-w-7xl md:flex-row-reverse"
    >
      {/* <section
      id="home"
      className="flex flex-col items-center py-24 mx-auto justify-evenly max-w-7xl md:flex-row-reverse"
    > */}

      <div className="order-2 w-5/6 grid-cols-1 mx-auto border-2 border-red-600 md:order-1 md:col-span-3 lg:col-span-2 md:ml-10">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold leading-10 text-white md:text-5xl md:leading-normal text-fade-in">

            {" "}
            <span
              className={`text-slide-in ${animate ? "typing-animation" : ""}`}
            >
              <span className={`text-loading ${animate ? "animate__animated animate__fadeIn" : ""}`}>
                Mujahidul Islam
              </span>
            </span>
          </h1>
          <h4 className="mb-2 text-lg font-bold leading-7 text-gray-100 md:text-2xl md:leading-normal">
            MERN-Stack Developer
          </h4>
          <p className="mx-auto leading-6 text-justify text-slate-300">
            Diligent and detail-oriented Computer Science and Engineering graduate with a strong commitment for development and learning. Seeking a challenging position as a Web Developer at any reputable company to contribute to the growth of the organization as well as to expand my expertise.
          </p>
          <div className="flex">
            <AiOutlineTwitter className='mx-1 rounded-full bg-cyan-500' size={30} color="gold" />
            <AiFillGithub className='mx-1 bg-cyan-500' size={30} />
            <BsFacebook className='mx-1 rounded-full bg-cyan-500' size={30} color="gold" />
            <BsLinkedin className='mx-1 rounded-full bg-cyan-500' size={30} color="gold" />
          </div>

          <a href="./src/assets/Code_a_program.pdf" download>
            <button className={`btn bg-purple-600 my-5 p-2 sm:p-3 rounded ${animate ? "neon-animation" : ""}`}>
              Download Resume
            </button>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 order-1 w-8/12 grid-cols-1 mx-auto mb-8 sm:w-6/12 md:w-11/12 lg:w-10/12 xl:w-9/12 md:order-2 md:col-span-2 lg:col-span-1 md:mb-0 md:mr-10">
        <img
          src={hero}
          alt=""
          className={`md:w-6/6 rounded-full bg-purple-100 border-red-500 object-cover image-transition ${animate && "animate"
            }`}
        />
      </div>
    </section>
  );
};

export default Hero;
