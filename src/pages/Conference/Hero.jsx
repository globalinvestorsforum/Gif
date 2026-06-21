import React from "react";
import { Reveal } from "../../utils/Reveal";
import conferenceHeroBanner from '../../assets/conferenceHeroBanner1.jpg'
const Hero = () => {
  return (
    // <div className="hero w-full h-screen bg-no-repeat bg-cover md:bg-top bg-center  border-b border-neutral-800  "
    
    // style={{
    //   backgroundImage: `url(${conferenceHeroBanner})`,
    // }}>
    //   <div className="bg-transparent max-w-7xl mx-auto pt-20 px-6 ">
    //     <Reveal>
    //     <div className="flex flex-col items-center mt-6 lg:m-20  animate-slidein opacity-1 [--slidein-delay:300ms]">
    //       <h1 className=" text-3xl md:text-5xl uppercase lg:text-7xl text-center tracking-wide ">
    //         The Themes Defining the Future of AI.
    //       </h1>
    //       <p className="mt-10 text-lg text-center text-neutral-200 max-w-2xl animate-slidein [--slidein-delay:400ms]  opacity-1  ">
    //         We go beyond agendas. We define direction. Our themes are not sessions — they are signals of where the world is heading.
    //       </p>
    //     </div>
    //     </Reveal>
    //   </div>
    //   </div>
    <div
  className="relative w-full h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url(${conferenceHeroBanner})`,
  }}
>
  <div className="absolute inset-0 bg-black/50"></div>

  {/* <div className="relative z-10 max-w-7xl mx-auto h-full px-8"> */}
<div className="absolute left-10 md:left-20 bottom-24 md:bottom-32 z-10 max-w-2xl">

      <p className="text-white text-xl mb-4">
        2027 Agendas
      </p>

      <h1 className="text-white uppercase text-5xl md:text-7xl font-extralight leading-[0.95]">
        The Themes
        <br />
        Defining the Future
        <br />
        Of AI.
      </h1>

      <p className="mt-8 text-lg md:text-xl text-neutral-200 max-w-lg pr-6">
        We go beyond agendas. We define direction. Our themes are not
        sessions — they are signals of where the world is heading.
      </p>

    </div>
  {/* </div> */}
</div>
  );
};

export default Hero;
