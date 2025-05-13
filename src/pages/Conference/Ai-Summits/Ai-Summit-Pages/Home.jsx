import React,{useRef, useEffect} from "react";
import { Calendar, MapPin, Users, Brain, Heart, Activity, ChevronRight, ArrowRight } from 'lucide-react';
import surgury from '../../../../assets/HealthcareSummit/surgury.png'
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Home({config}) {
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
          { opacity: 0, x: -50 },
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

  const navigate = useNavigate();

  const handleClick =()=>{
    navigate('/gais/ticket')
  }

  const handleAgendaClick = () => {
    navigate('/gais/conference/ai-healthcare-summit/all-agendas') 
  }
  
  return (
    <div ref={containerRef}>
      <div className="flex flex-row justify-between bg-gradient-to-br from-teal-50 via-blue-50 to-white">
        <div className="relative h-[calc(100vh-86px)] w-full ">
            <img className="object-cover w-full h-full brightness-75" src={config?.bgImage} alt="" />
        </div>
      
        <div className="absolute top-0 left-0 h-[calc(100vh-86px)] flex flex-row justify-start items-center pt-32 pb-16 px-6 sm:px- lg:px-16 ">
          <div className="slide-up text-center md:text-left">
            {/* <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent font-semibold">
              March 2025
            </span> */}
            <h1 className="mt-4 text-4xl uppercase font-bold text-gray-50 lg:text-7xl">
            {config.title.split(" ",1)[0]}  <br />
            {config.title.slice(config.title.split(" ",1)[0].length+1)}
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
              {config.introductionText}
            </p>
            <div className="mt-10 flex justify-center md:justify-start gap-4">
            <button onClick={handleClick} className={config.registerButtonCSS}>
            Register Now
                {/* <ChevronRight className="ml-2 h-5 w-5" /> */}
              </button>
              <button onClick={handleAgendaClick} className={config.scheduleButtonCSS}>
                View Schedule
              </button>
            </div>
          </div>
        </div>
        
      </div>


    </div>
  );
}

export default Home;
