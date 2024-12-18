import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div></div>
    // <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
    //   <div className="flex flex-col w-full h-full gap-8">
    //     <img className="w-32" src={logo} alt="logo" />
    //     <div className="flex gap-4">
    //       <span className="bannerIcon">
    //         <FaFacebookF />
    //       </span>
    //       <span className="bannerIcon">
    //         <FaTwitter />
    //       </span>
    //       <span className="bannerIcon">
    //         <FaLinkedinIn />
    //       </span>
    //     </div>
    //   </div>
    //   <div className="w-full h-full">
    //     <h3 className="text-xl tracking-wider uppercase text-designColor">
    //       Quick Link
    //     </h3>
    //     <ul className="flex flex-col gap-4 py-6 overflow-hidden font-medium font-titleFont">
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           About
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           Portfolio
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           Services
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           Blog
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           Contact
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="w-full h-full">
    //     <h3 className="text-xl tracking-wider uppercase text-designColor">
    //       RESOURCES
    //     </h3>
    //     <ul className="flex flex-col gap-4 py-6 overflow-hidden font-medium font-titleFont">
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           Authentication
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           System Status
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           Terms of Service
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           Pricing
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           Over Right
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="w-full h-full">
    //     <h3 className="text-xl tracking-wider uppercase text-designColor">
    //       DEVELOPERS
    //     </h3>
    //     <ul className="flex flex-col gap-4 py-6 overflow-hidden font-medium font-titleFont">
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           Documentation
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           Authentication
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           API Reference
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           Support
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //       <li>
    //         <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
    //           Open Source
    //           <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    //         </span>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Footer;
