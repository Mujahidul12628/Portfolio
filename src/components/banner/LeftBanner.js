import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialGooglePlusCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col w-full lgl:w-1/2">
      <div className="flex flex-col gap-5 md:ml-2">
        <div className="">
          <div className="flex flex-col justify-center gap-2 mx-auto xs:gap-5 md:items-start md:justify-start">
            <h3 className="text-3xl font-bold text-center text-white sm:font-semibold sm:text-4xl md:text-5xl md:text-left">
              <span className="capitalize text-designColor">
                Mujahidul Islam
              </span>
            </h3>
            <h2 className="text-xl font-semibold text-center text-white xs:text-xl sm:text-2xl md:text-3xl md:text-left">
              a <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
              />
            </h2>
          </div>
        </div>
        <p className="text-sm leading-6 tracking-wide text-justify sm:text-base font-bodyFont">
          Diligent and detail-oriented Computer Science and Engineering graduate
          with a strong commitment for development and learning. Seeking a
          challenging position as a Web Developer at any reputable company to
          contribute to the growth of the organization as well as to expand my
          expertise.
        </p>
      </div>

      <div className="flex justify-center mt-5 md:justify-start ">
        <a
          href="https://www.facebook.com/muzahidulislam.rony"
          target="_blank"
          title="Facebook"
        >
          <TiSocialFacebookCircular
            className="mr-1 rounded-full text-cyan-500"
            size={50}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/mujahidulislam628/"
          target="_blank"
          title="LinkedIn"
        >
          <TiSocialLinkedinCircular
            className="mr-1 rounded-full text-cyan-500"
            size={50}
          />
        </a>

        <a
          href="https://github.com/Mujahidul12628/"
          target="_blank"
          className="flex items-center justify-center mx-1"
          title="GitHub"
        >
          <FiGithub
            className="p-1 border-4 rounded-full border-cyan-500 text-cyan-500"
            size={40}
          />
        </a>
        <TiSocialGooglePlusCircular
          className="mr-1 rounded-full text-cyan-500"
          size={50}
          title="Google"
        />
        <TiSocialTwitterCircular
          className="mr-1 rounded-full text-cyan-500"
          size={50}
          title="Twitter"
        />
        {/* <VscGithub className="mr-1 rounded-full text-cyan-500" size={40} /> */}
      </div>
      <div className="flex justify-center md:justify-start">
        <a
          href="https://drive.google.com/file/d/1x2BpXGPDxFKiTNp5tV6Twi2tGrNfPS9h/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download="Resume of Mujahidul Islam.pdf"
        >
          <button className="p-2 mx-auto my-5 text-white rounded md:ml-2 xl:ml-2 btn bg-cyan-500 sm:p-3">
            Download Resume
          </button>
        </a>
      </div>

      {/* Media */}
      {/* <Media /> */}
    </div>
  );
};

export default LeftBanner;
