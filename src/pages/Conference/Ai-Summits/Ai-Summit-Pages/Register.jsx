import React,{useEffect,useRef} from "react";
import { useNavigate } from "react-router-dom";
import ticketImg from '../../../../assets/HealthcareSummit/ticket.png'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Register() {
  const navigate = useNavigate();

  const handleClick =()=>{
    navigate('/gais/ticket')
  }

  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /** ✨ Title Fade-in & Slide-up */
      // gsap.utils.toArray(".fade-slide").forEach((title) => {
      //   gsap.fromTo(
      //     title,
      //     { opacity: 0, y: 50 },
      //     {
      //       opacity: 1,
      //       y: 0,
      //       duration: 1.5,
      //       stagger: 0.2,
      //       ease: "power3.out",
      //       scrollTrigger: {
      //         trigger: title,
      //         start: "top 90%",
      //         toggleActions: "play none none none",
      //       },
      //     }
      //   );
      // });

      /** 🎯 Goals Slide-in from Left */
      // gsap.utils.toArray(".slide-left").forEach((goal) => {
      //   gsap.fromTo(
      //     goal,
      //     { opacity: 0, x: -30 },
      //     {
      //       opacity: 1,
      //       x: 0,
      //       duration: 1,
      //       stagger: 0.2,
      //       ease: "power2.out",
      //       scrollTrigger: {
      //         trigger: goal,
      //         start: "top 90%",
      //         toggleActions: "play none none none",
      //       },
      //     }
      //   );
      // });

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
    <div ref={containerRef} className=" flex flex-col items-center justify-center bg-white px-6 py-20">
      <div className="slide-up flex flex-col items-center justify-center ">
      <img className="w-1/2" src={ticketImg} alt="" />
      <h2 className="text-2xl uppercase md:text-4xl font-bold text-gray-800 text-center">
        Hold Your Ticket for  
        <span className="block text-transparent uppercase bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
          The AI-Healthcare Summit
        </span>
      </h2>
      <p className="mt-4 text-gray-700 text-center max-w-md">
        Join us for an exclusive event where The AI meets healthcare innovation.
      </p>
      </div>
      
      <button onClick={handleClick} className=" scale-in mt-6 px-6 py-3 text-lg font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-teal-600 to-blue-600 hover:shadow-2xl hover:scale-105 active:scale-95">
         Register Now
      </button>
    </div>
  );
}
