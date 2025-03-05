import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// import { ArrowRight } from "lucide-react";
// import IntroBanner from "./IntroBanner";

const AIHealthcareBannerIntro = () => {

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
            duration: 1,
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
    <div ref={containerRef} className="max-w-9xl my-12 space-y-8 mx-8 lg:mx-20">
      
      {/* Two-card layout */}
      <div className="fade-slide flex flex-col gap-8 md:flex-row mb-4 relative">
        
        {/* First Card */}
        <div className=" flex-1 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg shadow-xl p-8 text-center text-white">
          <h2 className="text-4xl uppercase font-bold">AI in Healthcare</h2>
          <p className="text-xl font-semibold mt-2">USD 14.92B → USD 164.16B</p>
          <p className="mt-1 font-medium">2024 → 2030</p>
          <p className="mt-1 text-indigo-100">49.1% CAGR</p>
        </div>

        {/* Second Card */}
        <div className="fade-slide flex-1 relative py-8 lg:mt-0 text-sm md:text-md text-gray-950 lg:max-w-none rounded-xl p-4 md:p-8 shadow-lg overflow-hidden">
          {/* Mesh Gradient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.4),_rgba(59,130,246,0.3),_rgba(16,185,129,0.3))] opacity-90 blur-xl"></div>
          
          <p className="leading-snug p-2 md:p-4">
            The Global AI in healthcare market is projected to explode, reaching a staggering USD 164.16 billion by 2030, growing at an astounding CAGR of 49.1% from 2024's USD 14.92 billion. The summit presents a timely opportunity for stakeholders to engage with innovative technologies and strategies that are driving this growth.
          </p>
          <p className="text-gray-500 leading-tight text-sm text-left px-2 md:px-4 ">
        Source: Research and Markets (The World's largest market and Research Store).
      </p>
        </div>
      </div>

      

      {/* Introduction Section */}
      <div className="fade-slide relative bg-white rounded-xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center mb-2">
          <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 mr-4"></div>
          <h2 className="text-xl uppercase md:text-xl font-bold text-gray-800">
            Introduction: The AI Healthcare Summit
          </h2>
        </div>

        <div className=" text-gray-700">
          <p className="slide-left text-sm md:text-md">
          The AI Healthcare Summit is a pioneering event dedicated to exploring the latest trends and advancements in artificial intelligence and their impact on healthcare. With AI rapidly transforming the way healthcare is delivered, this summit brings together leading experts, cutting-edge startups, innovators, researchers, and practitioners from across the globe.
          </p>

          <p className="slide-left text-sm md:text-md py-2">
          Participants will share insights, knowledge, and experiences on how AI is shaping the healthcare landscape through interactive sessions, panel discussions, keynote speeches, and workshops. The healthcare landscape is undergoing a radical transformation, driven by the power of AI - revolutionizing everything from diagnostics and treatment to drug discovery and patient care.
          </p>

          <p className="slide-left text-sm md:text-md">
          Join us for this ground-breaking event and be a part of the conversation that is shaping the future of healthcare. This unparalleled opportunity will allow attendees to gain valuable knowledge on the latest advancements in AI and their practical applications in healthcare.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIHealthcareBannerIntro;
