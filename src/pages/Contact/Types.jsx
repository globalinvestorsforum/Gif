import React from "react";
import { contactus } from "../../constants";
import { FaArrowDown } from "react-icons/fa";
import { RevealLeft } from "../../utils/RevealLeft";
import { Reveal } from "../../utils/Reveal";

const Types = () => {
  return (
    <section className="bg-white text-neutral-900">
      <div className="md:p-20 p-10">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-extrabold">Contact Us</h1>
        </Reveal>
      </div>
      <div class="grid grid-cols-1 divide-y gap-3 divide-neutral-950">
        <div></div>
        {contactus.map((item, index) => (
          <div
            key={index}
            className="flex-wrap md:flex justify-around items-center p-5"
          >
            <RevealLeft key={index}>
              <h3 className="text-2xl font-bold w-72">{item.name}</h3>
            </RevealLeft>
            <Reveal>
              <p className="md:w-96 text-lg">{item.desc}</p>
            </Reveal>

            <a
              href={item.link}
              className=" w-52  md:w-64 mt-5 flex justify-center items-center border border-black p-2   hover:text-white hover:bg-black"
            >
              <Reveal>
                <span className="flex justify-center gap-3 items-center ">
                  {item.buttonName} <FaArrowDown />
                </span>
              </Reveal>
            </a>
          </div>
        ))}
        <div></div>
      </div>
    </section>
  );
};

export default Types;
