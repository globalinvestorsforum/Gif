import React from "react";
import { homepage } from "../../constants";
import { Reveal } from "../../utils/Reveal";
const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://lh3.googleusercontent.com/d/1a6b48eOPrQvTPDUZzDv8yUL3Fi_Eo9h3)`,
                // backgroundImage: `url(/woman_background.png)`,

      }}
    >
      <Reveal>
      <h2 className="md:p-24 p-5 pt-24 md-pt-0 text-3xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-10  w-1/2  animate-slidein [--slidein-delay:300ms]  opacity-1 ">
        IT'S A PLATFORM WHERE BUSINESS GETS DONE NOT JUST DISCUSSED.
      </h2>
      </Reveal>
    </section>
  );
};

export default Hero;
