import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    <section
      id="home"
      // className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
      className="w-full pt-10 pb-10 flex flex-col-reverse justify-around gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border border-red-500"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;