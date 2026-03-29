import React from "react";
import { membership } from "../../constants";
import { Link } from "react-router-dom";
import { Reveal } from "../../utils/Reveal";

const Hero = () => {
  const heading = membership[0].heading;
  const subheading = membership[1].subheading;
  const smallheading = membership[2].smallheading;
  const boldp1 = membership[3].boldp1;
  const p2 = membership[4].p2;

  return (
    <section>
      <div className="flex-wrap md:flex ">
        <div className="md:w-3/5 flex justify-center items-center ">
          <div className="md:w-full lg:px-52 p-10 ">
            <Reveal>
            <h1 className="text-3xl  md:text-5xl font-extrabold text-white animate-slidein [--slidein-delay:300ms]  opacity-1 ">
              {heading}
            </h1>
            <h2 className="text-xl md:text-2xl pt-5 w-56 md:w-44  font-bold text-white animate-slidein [--slidein-delay:400ms]  opacity-1 ">
              {subheading}
            </h2>
            <p className="text-lg pt-5 md:w-[80%] animate-slidein [--slidein-delay:500ms]  opacity-1 ">
              {smallheading}
            </p>
            </Reveal>
          </div>
        </div>
        <div className="md:w-2/5">
          <img
            className="md:h-[500px]"
            src="https://lh3.googleusercontent.com/d/1WDNnMRnkPSP9GKU85Bg5Uv3WE65nT5IY"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
