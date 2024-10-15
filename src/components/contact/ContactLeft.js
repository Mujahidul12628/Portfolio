import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="object-cover w-full mb-2 rounded-lg "
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-bold text-white">Mujahidul Islam </h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base tracking-wide text-gray-400">
          A dedicated Developer with experience in designing and delivering
          reliable, scalable web applications
        </p>
        <p className="flex items-center gap-2 text-base text-gray-400">
          Phone: <span className="text-lightText">01626609516</span>
        </p>
        <p className="flex items-center gap-2 text-base text-gray-400">
          Email:{" "}
          <span className="text-lightText">mujahidul.islam3422@gmail.com</span>
        </p>
        <p className="flex items-center gap-2 text-base text-gray-400">
          Location: <span className="text-lightText">Dhaka, Bangladesh</span>
        </p>
      </div>
      {/* <div className="flex flex-col gap-4">
        <h2 className="mb-4 text-base uppercase font-titleFont">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default ContactLeft;
