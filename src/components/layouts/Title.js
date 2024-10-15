import React from "react";

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm font-light tracking-wide uppercase bg-cyan-50">
        {title}
      </h3>
      <h1 className="text-4xl font-bold text-gray-300 capitalize md:text-5xl">
        {des}
      </h1>
    </div>
  );
};

export default Title;
