import React, { useEffect, useState } from "react";
import hero from "../assets/images/hero.png";

import "./animate.css";

import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGooglePlusCircular, TiSocialTwitterCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";

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
      className="grid items-center grid-cols-1 mt-5 md:mt-10 py-12 mx-auto md:grid-cols-5 lg:grid-cols-3 justify-evenly max-w-7xl md:flex-row-reverse"
    >
      <div className="order-2 w-5/6 grid-cols-1 mx-auto md:order-1 md:col-span-3 lg:col-span-2 md:ml-10">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold leading-10 text-white md:text-5xl md:leading-normal text-fade-in">

            {" "}
            <span className={`text-slide-in ${animate ? "typing-animation" : ""}`}>
              <span className={`text-loading ${animate ? "animate__animated animate__fadeIn animate-duration-1000" : ""} text-cyan-500`}>
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
          <div className="flex justify-center my-2 sm:justify-start">

            <a href="https://www.facebook.com/muzahidulislam.rony" target="_blank"><TiSocialFacebookCircular className='mr-1 rounded-full text-cyan-500' size={50} /></a>

            <a href="https://www.linkedin.com/in/mujahidulislam628/" target="_blank"><TiSocialLinkedinCircular className='mr-1 rounded-full text-cyan-500' size={50} /></a>

            <a href="https://github.com/Mujahidul12628/" target="_blank" className="flex items-center justify-center mx-1">

              <FiGithub className='p-1 border-4 rounded-full border-cyan-500 text-cyan-500' size={40} />

            </a>





            <TiSocialGooglePlusCircular className='mr-1 rounded-full text-cyan-500' size={50} />
            <TiSocialTwitterCircular className='mr-1 rounded-full text-cyan-500' size={50} />
            {/* <VscGithub className='mr-1 rounded-full text-cyan-500' size={40} /> */}


          </div>

          {/* <a href="./src/assets/Code_a_program.pdf" download>
            <button className={`btn bg-cyan-500 my-5 p-2 sm:p-3 rounded ${animate ? "neon-animation" : ""}`}>
              Download Resume
            </button>
          </a> */}

          <a href="https://drive.google.com/file/d/1x2BpXGPDxFKiTNp5tV6Twi2tGrNfPS9h/view?usp=sharing" target="_blank" rel="noopener noreferrer" download="Resume of Mujahidul Islam.pdf">
            <button className="btn bg-cyan-500 my-5 p-2 sm:p-3 rounded">
              Download Resume
            </button>
          </a>

        </div>
      </div>
      <div className="flex items-center justify-center flex-1 order-1 w-8/12 grid-cols-1 p-5 mx-auto mb-8 border-8 border-blue-500 rounded-full border-opacity-10 sm:w-6/12 md:w-11/12 lg:w-10/12 xl:w-9/12 md:order-2 md:col-span-2 lg:col-span-1 md:mb-0 md:mr-10">
        <img
          src={hero}
          alt=""
          className={`md:w-6/6 rounded-full object-cover image-transition ${animate && "animate"
            }`}
        />
      </div>
    </section>
  );
};

export default Hero;
