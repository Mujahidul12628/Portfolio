import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="relative flex items-center justify-center w-full border border-red-600 lgl:w-1/2">
      <img
        className="w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      {/* <div className="absolute bottom-0 w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#913038] to-[#1954a0] shadow-shadowOne flex justify-center items-center rounded-full"></div> */}

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[250px] h-[250px] lgl:w-[420px] lgl:h-[420px] bg-gradient-to-r from-[#1f1c1c] to-[#243346] shadow-shadowOne flex justify-center items-center clip-octagon"></div>
    </div>
  );
};

export default RightBanner;
