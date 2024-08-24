import React from "react";

const ResumeCard = ({
  h,
  area,
  session,
  title,
  subTitle,
  department,
  result,
  des,
  hhh,
  degree,
  Institute,
  major,
  year,
  board,
  res,
  time,
  company,
  responsibility,
  li1,
  li2,
  li3,
  li4,
  key,
  contribution,
  p1,
  p2,
}) => {
  return (
    <div className="flex flex-col w-full h-auto gap-5 my-5 border border-green-500">
      <div className="flex flex-col justify-center w-full gap-6 p-4 bg-black rounded-lg bg-opacity-20 lgl:px-10 lgl:gap-10">
        <div className="flex flex-col justify-between gap-4 lgl:flex-row lgl:gap-0 lgl:items-center">
          <div className="py-5">
            <p className="flex items-center justify-start px-2 py-2 text-xl font-medium bg-black bg-opacity-25 rounded-lg text-designColor shadow-shadowOne">
              {h}
            </p>
            <h3 className="text-xl font-semibold text-blue-500 md:text-2xl ">
              {degree}
            </h3>
            <h3 className="text-xl font-semibold text-blue-500 md:text-2xl">
              {title}
            </h3>
            <p className="mt-2 text-lg font-medium text-white">{subTitle}</p>
            <p className="mt-2 text-lg font-medium text-white">{Institute}</p>
            <p className="text-white ">{area}</p>
            <p className="mt-2 text-lg text-white">{department}</p>

            <div>
              <p className="mt-2 font-normal ">{major}</p>
              <p className="mt-2 ">{year}</p>
              <p className="mt-2 ">{res}</p>
              <p className="mt-2 ">{board}</p>
            </div>
            <p className="mt-2 text-lg text-yellow-500">{hhh}</p>
            <div>
              <p className="mt-2 text-lg font-medium text-green-500">
                {result}
              </p>
              <p className="mt-2 text-lg font-medium text-green-500">
                {session}
              </p>
            </div>
            <div>
              <p className="mt-2 text-lg text-purple-500">{company}</p>
              <p className="mt-2 ">{time}</p>
              <div>
                <p className="mt-6 font-medium text-green-500">
                  {responsibility}
                </p>

                <p className="mt-2 text-sm text-justify">{li1}</p>
                <p className="mt-2 text-sm ">{li2}</p>
                <p className="mt-2 text-sm ">{li3}</p>
                <p className="mt-2 text-sm ">{li4}</p>
              </div>
              <div>
                <p className="mt-6 font-medium text-green-500">
                  {contribution}
                </p>
                <p className="mt-2 text-sm text-justify">{p1}</p>
                <p className="mt-2 text-sm ">{p2}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <p className="text-sm font-medium text-purple-400 md:text-base">
          {des}
        </p> */}
      </div>
    </div>
  );
};

export default ResumeCard;
