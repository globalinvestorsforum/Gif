import React from "react";
import { Reveal } from "../../utils/Reveal";
import { RevealLeft } from "../../utils/RevealLeft";
import { RevealRight } from "../../utils/RevealRight";

const Threecards = () => {
  return (
    <section className="border-y border-neutral-500">
      <div className=" min-h-screen bg-gradient-to-r from-orange-700 to-purple-600 md:py-5 ">
        <div className=" lg:flex md:m-5">
          <div className="lg:w-1/3  pt-5">
            <div className="flex-wrap">
              <Reveal>
                <h1 className="md:px-10 px-5 md:pb-3 md:py-0 py-3 text-3xl md:text-4xl lg:text-4xl uppercase font-bold ">
                  Workshops
                </h1>
              </Reveal>
              <Reveal>
                <p className="md:px-10 px-5  pb-5  md:text-lg text-base ">
                  Dive deeper than theory. Get your hands dirty with immersive,
                  industry-specific workshops led by AI pioneers. Master
                  practical skills and unlock the true potential of AI in your
                  field. From healthcare to finance, marketing to robotics,
                  there's a workshop to ignite your AI journey.
                </p>
              </Reveal>
              <Reveal>
                <div className=" flex justify-center pt-3">
                  <img
                    className="lg:w-[85%] md:w-[95%] w-[100%]"
                    src="https://lh3.googleusercontent.com/d/1jRPQ467EPte508jbq4665FE1Vkh2K7WY"
                    alt=""
                  />
                </div>
              </Reveal>
            </div>
          </div>
          <div className="lg:w-1/3  flex flex-wrap  pt-5">
            <div className=" md:p-5 p-0  lg:order-none order-1">
              <Reveal>
                <img
                  className=""
                  src="https://lh3.googleusercontent.com/d/1jIz9d7ZeVTzG-2IGCKl3FhWz2S3bqoC7"
                  alt=""
                />
              </Reveal>
            </div>

            <Reveal>
              <h1 className="md:px-5 text-3xl md:text-4xl lg:text-4xl px-5 md:pb-3 md:py-0 py-3 uppercase font-bold ">
                Startup pitches
              </h1>
            </Reveal>
            <Reveal>
              <p className="md:px-5 px-5 pb-5 md:text-lg text-base ">
                Witness the future unfold before your eyes. Witness the
                brightest AI-powered startups pitch their groundbreaking
                solutions, from healthcare to finance to climate change. Get a
                front-row seat to disruptive innovation, spot the next unicorn,
                and network with the trailblazers shaping tomorrow.
              </p>
            </Reveal>
          </div>

          <div className="lg:w-1/3  pt-5">
            <Reveal>
              <h1 className="md:px-10 text-3xl md:text-4xl lg:text-4xl  px-5 md:pb-3 md:py-0 py-3 uppercase font-bold ">
                Innovative AI solutions
              </h1>
            </Reveal>
            <Reveal>
              <p className="md:px-10 px-5 pb-5 md:text-lg text-base ">
                <strong>See the future,</strong> now. Explore a showcase of
                cutting-edge AI applications and trends that are transforming
                industries.{" "}
                <strong>
                  Learn from experts, uncover hidden opportunities to leverage
                  AI in your business,
                </strong>{" "}
                and gain the competitive edge you need to thrive in the age of
                intelligence. From groundbreaking medical breakthroughs to
                groundbreaking marketing strategies, the future is here, waiting
                to be unlocked.
              </p>
            </Reveal>
            <Reveal>
              <div className=" p-0 flex lg:justify-end justify-center bottom-0  lg:order-none order-1">
                <img
                  className="w-[60%]"
                  src="https://lh3.googleusercontent.com/d/1DlFLosQhLvrRSqD4EJ_K8t65AznH4Fkp"
                  alt=""
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Threecards;
