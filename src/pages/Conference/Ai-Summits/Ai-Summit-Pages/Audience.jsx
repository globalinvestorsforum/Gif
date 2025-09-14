import React,{useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Stethoscope,
  Lightbulb,
  Rocket,
  Database,
  Landmark,
  GraduationCap,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AudienceDemographics = ({config}) => {
 

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
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
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
    <section ref={containerRef} className="py-30 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="slide-left text-3xl md:text-4xl uppercase font-bold mb-6 text-center bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
          Who Attends {config.title}?
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {config?.demographics.map((demo) => (
            <div
              key={demo.id}
              className=" slide-up w-48 h-72 relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${demo.bgColor} opacity-90`}
              ></div>

              <div className="absolute inset-0 p-3 flex flex-col  text-white">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-white bg-opacity-20 rounded-full">
                    {demo.icon}
                  </div>
                  <h3 className="text-sm font-bold leading-tight">
                    {demo.title}
                  </h3>
                </div>

                <p className="text-xs py-2 leading-tight text-white text-opacity-90">
                  {demo.description}
                </p>
                <p>WHY</p>
                <p className="text-xs py-5 leading-tight text-white text-opacity-90">
                  {demo.reason}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="fade-slide inline-block text-lg px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
            <Link  to="mailto:info@global-investors-forum.com">
                Join Our Diverse Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceDemographics;
