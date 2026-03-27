import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../../utils/Reveal";
import { RevealLeft } from "../../utils/RevealLeft";

const GaisCard = () => {
  return (
    <section
      className="h-[550px] bg-cover bg-center flex-wrap "
      style={{
        backgroundImage: `url(https://lh3.googleusercontent.com/d/1Hmx73Yx5mqBIEIbpEv_X000Nko6WsMq0)`,
      }}
    >
      <div className="px-10 md:px-20 pt-28">
        <RevealLeft>
          <h1 className="w-20 text-4xl md:text-5xl text-blue-950 font-extrabold ">
            GLOBAL ARTIFICIAL INTELLIGENCE SUMMIT.
          </h1>
        </RevealLeft>
        <Reveal>
          <p className="pt-5 text-xl text-blue-950 font-bold">
            BE A PART OF WORLDS'S LARGEST AI SUMMIT.
          </p>
        </Reveal>

        <div className="pt-10  ">
          <RevealLeft width="">
            <Link
              to={"https://www.global-investors-forum.com/"}
              className="border border-blue-950 bg-transparent p-3 text-blue-950 font-bold hover:bg-neutral-600"
            >
              EXPLORE MORE
            </Link>
          </RevealLeft>
        </div>
      </div>
    </section>
  );
};

export default GaisCard;
