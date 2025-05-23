import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../../utils/Reveal";
const Banner = () => {
  return (
    <div
      className="relative border-b border-neutral-800 min-h-[500px] bg-cover"
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Fmeetend.png?alt=media&token=f82a7727-b172-4d00-96a8-13305323c7ae')`,
      }}
    >
      <div className="absolute flex  flex-col justify-center items-center px-4 w-full h-full text-start left-0 backdrop-blur-[3px] backdrop-brightness-50">
        <Reveal>
          <p className="md:text-3xl lg:text-3xl text-xl mx-auto  ">
            This is more than just an investment opportunity. it's a chance to
            shape the future of AI.
          </p>
        </Reveal>
        <Reveal>
          <h3 className=" max-w-5xl mt-8 md:mt-10  text-3xl md:text-4xl lg:text-5xl  tracking-wide mx-auto font-semibold ">
            Ready to join the future of AI?
          </h3>
        </Reveal>

        <Link
          to={"/gais/ticket"}
          className="bg-gradient-to-r my-8 from-orange-500 to-purple-600 lg:w-52 text-center md:w-44 sm:w-40 mx-auto py-2 px-3 font-semibold"
        >
          <Reveal width="">REGISTER NOW</Reveal>
        </Link>
        <Reveal>
          <p className="mt-2  md:w-2/3 sm:w-full p-3 md:text-[18px] text-neutral-200 mx-auto ">
            <span className="font-bold text-xl">Limited slots available!</span>{" "}
            Secure your spot and unlock the immense potential of the world's
            most transformative technology.
          </p>
        </Reveal>
        <Reveal>
          <p className="mx-auto md:text-[18px] text-center">
            Together, let's shape the future of AI, one breakthrough at a time.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default Banner;
