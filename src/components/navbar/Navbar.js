import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img className="w-1/4 rounded-full" src={logo} alt="logo" />
      </div>
      <div>
        <ul className="items-center hidden gap-6 mdl:inline-flex lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className={`text-base font-normal tracking-wide duration-300 cursor-pointer xl:p-1 ${
                activeLink === link
                  ? "text-designColor"
                  : "text-slate-100 hover:text-cyan-300"
              }`}
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-100} // Adjust the offset if needed
                duration={500}
                onSetActive={() => setActiveLink(link)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="inline-flex items-center justify-center w-10 h-10 text-xl rounded-full cursor-pointer bg-slate-900 mdl:hidden text-cyan-400"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="relative flex flex-col gap-8 py-2">
              <div>
                <img className="w-16" src={logo} alt="logo" />
                <p className="mt-2 text-sm text-justify text-gray-400">
                  To attain something you've never achieved, you must undertake
                  actions you've never pursued.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-cyan-500"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onSetActive={() => setActiveLink(item.link)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* <div className="flex flex-col gap-4">
                <h2 className="mb-4 text-base uppercase font-titleFont">
                  Find me in
                </h2>
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute text-2xl text-gray-400 duration-300 cursor-pointer top-4 right-4 hover:text-designColor"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
