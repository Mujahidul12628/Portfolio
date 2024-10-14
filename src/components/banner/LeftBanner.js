import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import Banner from "./Banner.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

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
      <div className="flex flex-col gap-6 md:ml-2">
        <div className="">
          <div className="flex flex-col justify-center gap-2 mx-auto xs:gap-5 md:items-start md:justify-start">
            <h3 className="text-3xl font-bold text-center text-white sm:font-semibold sm:text-4xl md:text-5xl md:text-left">
              <span className="capitalize text-cyan-500">Mujahidul Islam</span>
            </h3>
            <h2 className="text-xl font-semibold text-center text-white xs:text-xl sm:text-2xl md:text-3xl md:text-left">
              a <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#04dada"
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

      <div className="flex justify-center my-5 md:justify-start ">
        <ul className="flex flex-wrap items-center justify-center gap-2 xs:gap-0 xs:justify-start example-2">
          <li className="icon-content">
            <a
              href="https://www.spotify.com/"
              aria-label="Linkedin"
              data-social="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="filled"></div>
              <FaLinkedinIn color="currentColor" />
            </a>
            <div className="tooltip">Linkedin</div>
          </li>
          <li className="icon-content">
            <a
              href="https://www.pinterest.com/"
              aria-label="Github"
              data-social="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="filled"></div>
              <FaGithub />
            </a>
            <div className="tooltip">Github</div>
          </li>
          <li className="icon-content">
            <a
              href="https://www.spotify.com/"
              aria-label="Facebook"
              data-social="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="filled"></div>
              <FaFacebookF />
            </a>
            <div className="tooltip">Facebook</div>
          </li>
          <li className="icon-content">
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              data-social="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="filled"></div>
              <FaInstagram />
            </a>
            <div className="tooltip">Instagram</div>
          </li>
          <li className="icon-content">
            <a
              href="https://www.discord.com/"
              aria-label="Discord"
              data-social="discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="filled"></div>
              <FaDiscord />
            </a>
            <div className="tooltip">Discord</div>
          </li>
        </ul>
      </div>

      {/* <div className="flex justify-center my-5 md:justify-start ">
        <a
          href="https://www.facebook.com/muzahidulislam.rony"
          target="_blank"
          title="Facebook"
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
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
      </div> */}
      <div className="flex justify-center md:justify-start">
        <a
          href="https://drive.google.com/file/d/1x2BpXGPDxFKiTNp5tV6Twi2tGrNfPS9h/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download="Resume of Mujahidul Islam.pdf"
        >
          {/* <button className="p-2 mx-auto my-5 text-white rounded md:ml-2 xl:ml-2 btn bg-cyan-500 sm:p-3">
            Download Resume
          </button> */}
          <button class="cssbuttons-io-button lg:mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
              ></path>
            </svg>
            <span> Download Resume</span>
          </button>
        </a>
      </div>

      {/* Media */}
      {/* <Media /> */}
    </div>
  );
};

export default LeftBanner;
