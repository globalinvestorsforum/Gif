import React from "react";
import { whoweare } from "../../constants";
import { Reveal } from "../../utils/Reveal";
const Experinces = () => {
  const experinces = whoweare.experinces;
  return (
    <section className="min-h-[500px] bg-white text-neutral-900 ">
      <div className="p-5 pt-10   md:p-20">
        <Reveal>
          <h1 className="text-2xl md:text-5xl text-blue-950 font-bold tracking-wide ">
            {experinces.heading}
          </h1>
        </Reveal>
        <Reveal>
          <p className="md:text-lg pt-5">{experinces.disc}</p>
        </Reveal>
        <div className="pt-10">
          <Reveal>
            <h1 className="text-blue-950 text-xl  md:text-2xl font-bold">
              {experinces.subheading1}
            </h1>
          </Reveal>
          <div className="md:flex md:p-10 p-5">
            <div className="md:w-1/3 p-2 flex justify-center items-center">
              <img
                className="md:w-[50%] w-[70%]"
                src={experinces.subHead1Img}
                alt=""
              />
            </div>
            <div className="md:w-2/3 flex-wrap md:flex justify-start items-center">
              <ul className="list-decimal pt-5">
                {experinces.subHead1List.map((list, index) => (
                  <Reveal key={index}>
                    <li className="md:text-lg" key={index}>
                      {list.list}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <Reveal>
            <h1 className="text-blue-950 text-xl md:text-2xl font-bold">
              {experinces.subheading2}
            </h1>
          </Reveal>
          <div className="md:flex  md:p-10 p-5">
            <div className="md:w-1/3 p-2 flex justify-center items-center">
              <img
                className="md:w-[50%] w-[60%]"
                src={experinces.subHead2Img}
                alt=""
              />
            </div>
            <div className="md:w-2/3 md:flex flex-wrap justify-start items-center">
              <ul className="list-decimal pt-5">
                {experinces.subHead2List.map((list, index) => (
                  <Reveal key={index}>
                    <li className="md:text-lg" key={index}>
                      {list.list}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="py-10">
          <Reveal>
            <p className="md:text-lg">{experinces.lastpara}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Experinces;
