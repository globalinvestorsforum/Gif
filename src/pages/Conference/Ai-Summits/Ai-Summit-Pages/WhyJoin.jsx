import React, { useEffect, useRef } from "react";
import { Brain, Users, Lightbulb, Coins } from "lucide-react";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const WhyJoin = ({config}) => {
 const {params}=useParams();
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      /** ✨ Title Fade-in & Slide-up */
      gsap.utils.toArray(".fade-slide").forEach((title) => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      /** 🎯 Goals Slide-in from Left */
      gsap.utils.toArray(".slide-left").forEach((goal) => {
        gsap.fromTo(
          goal,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: goal,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      /** 🔥 Reasons Scale-in Effect */
      gsap.utils.toArray(".scale-in").forEach((reason) => {
        gsap.fromTo(
          reason,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: reason,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      /** 🏆 Award Cards Slide-up */
      gsap.utils.toArray(".slide-up").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="slide-left text-3xl lg:text-4xl uppercase font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Why Join {config.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config?.reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.number}
                className="slide-up group max-w-xl bg-white mx-auto overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-2 hover:border-gradient-to-r"
                style={{
                  borderImage: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to)) 1`,
                  "--tw-gradient-from": reason.gradientClass.includes(
                    "from-blue-600"
                  )
                    ? "#2563eb"
                    : reason.gradientClass.includes("from-purple-600")
                    ? "#9333ea"
                    : reason.gradientClass.includes("from-violet-600")
                    ? "#7c3aed"
                    : "#4f46e5",
                  "--tw-gradient-to": reason.gradientClass.includes(
                    "to-cyan-600"
                  )
                    ? "#0891b2"
                    : reason.gradientClass.includes("to-blue-600")
                    ? "#2563eb"
                    : reason.gradientClass.includes("to-purple-600")
                    ? "#9333ea"
                    : "#7c3aed",
                }}
              >
                <div className=" relative">
                  <img
                    src={reason.imgSrc}
                    alt={reason.title}
                    className="relative w-full h-48 object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                  />
                  <div className="absolute -bottom-4 right-6 w-12 h-12 bg-white rounded-xl shadow-xl flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                    <Icon
                      className="w-6 h-6"
                      color={reason.iconColor}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="absolute right-4 -bottom-2 h-4 w-4 bg-transparent border-white border-l-8 border-b-8 rounded-es-2xl"></div>
                  <div className="absolute right-16 -bottom-2 h-4 w-4 bg-transparent border-white border-r-8 border-b-8 rounded-ee-2xl"></div>

                  {/* Number badge */}

                  <div
                    className={`absolute top-6 left-6 w-12 h-12 shadow-xl rounded-full bg-white flex justify-center items-center transform  group-hover:rotate-6 transition-all duration-300 `}
                  >
                    <div
                      className={`bg-clip-text text-transparent m-2 my-2 w-full h-8 text-2xl text-center font-bold rounded-full bg-gradient-to-r ${reason.gradientClass}`}
                    >
                      {reason.number}
                    </div>
                    {/* <div className="absolute -right-2 bottom-4 h-4 w-4 bg-transparent border-white border-l-8 border-b-8 rounded-es-2xl"></div>
                  <div className="absolute -left-2 bottom-4 h-4 w-4 bg-transparent border-white border-r-8 border-b-8 rounded-ee-2xl"></div> */}
                  </div>
                </div>

                <div className="p-4 pt-4">
                  <div className="space-y-2">
                    <h3
                      className="text-md font-bold leading-tight text-gray-900 
  group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 
  group-hover:text-transparent bg-clip-text transition-colors duration-300"
                    >
                      {" "}
                      {reason.title}
                    </h3>
                    <p className=" text-sm text-gray-600 leading-tight">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
