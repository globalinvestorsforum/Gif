import React from "react";
import { Reveal } from "../../utils/Reveal";
const SummitCard = ({ intro, img, objList, impList, heading }) => {
  return (
    <div className="min-h-[600px] py-10">
      <div className="w-full  flex justify-center items-center  ">
        <img
          src={img}
          className="w-[100%] md:w-[90%] rounded-3xl h-[400px] object-cover relative"
          alt=""
        />
        <h1 className="absolute text-3xl md:text-5xl  text-white left-24 md:left-44  font-bold ">
          {heading}
        </h1>
      </div>
      <div className="md:px-32  px-2 py-2">
        <div className="pt-10 ">
          <Reveal>
            <h3 className="text-blue-950 font-bold text-3xl pb-5">
              INTRODUCTION
            </h3>
          </Reveal>
          <Reveal>
            <p className="md:text-lg">{intro}</p>
          </Reveal>
        </div>
        <div className=" flex pt-10">
          <div className=" w-1/2">
            <Reveal>
              <h3 className="text-blue-950 font-bold text-2xl md:text-3xl  md:p-3">
                OBJECTIVE
              </h3>
            </Reveal>
            <ul className="list-disc px-3 pt-2 md:pt-0 md:px-8">
              {objList.map((list, index) => (
                <Reveal key={index}>
                  <li key={index}>{list.content}</li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="w-1/2">
            <Reveal>
              <h3 className="text-blue-950 font-bold text-2xl md:text-3xl  md:p-3">
                IMPACT
              </h3>
            </Reveal>
            <ul className="list-disc px-3 pt-2 md:pt-0  md:px-8 ">
              {impList.map((list, index) => (
                <Reveal key={index}>
                  <li key={index}>{list.content}</li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummitCard;
