import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../App.css";
import { AttendeesData } from "../../constants/AttendeeData";
import { useNavigate } from "react-router-dom";
import ForParticipatingCompanies from '../../assets/AllAttendees/ForParticipatingCompanies.jpg'

gsap.registerPlugin(ScrollTrigger);

function Company() {

  const [attendees,setAttendees]=useState(AttendeesData)

  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text and button
      gsap.fromTo(
        ".header-content",
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          delay:0.3,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".header-content",
            start: "top 80%",
          },
        }
      );

      // Animate image
      gsap.fromTo(
        ".header-image",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          delay:0.2,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".header-image",
            start: "top 80%",
          },
        }
      );

      // Animate attendee cards
      gsap.utils.toArray(".attendee-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/attendee/${id}`);
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center bg-gradient-to-r from-purple-500 to-orange-500"    >
      {/* Header Section */}
      <div className="bg-black grid gap-4 grid-cols-1 md:grid-cols-2 items-center">
        <div className="header-content mx-6 md:pl-12 py-6">
          <h2 className="font-Antonio mb-4 uppercase text-white text-2xl lg:leading-tight lg:text-5xl">
          Meet Participating AI-Powered Companies

          </h2>
          <p className="font-Archivo text-lg lg:text-xl text-white">
          Meet the companies at the forefront of AI innovation. Our summit brings together a select group of organizations with deep expertise in artificial intelligence, from established tech giants to disruptive startups. The company's involvement highlights their commitment to advancing the field and exploring the transformative potential of AI.          </p>
          <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded mt-4 hover:bg-yellow-600 duration-300 self-center">
            Book Ticket
          </button>
        </div>
        <img
          className="header-image h-full object-cover"
          src={ForParticipatingCompanies}
          alt=""
        />
      </div>

      {/* Attendees Grid */}
      <div className="w-full  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 py-8 px-6 md:px-16 ">
        {attendees.map((person) => (
          <div
            key={person.id} 
            // onClick={() => handleCardClick(index)}
            className="attendee-card max-w-[200px] p-1  hover:gradient-border hover:cursor-pointer group relative overflow-hidden rounded-xl"
          >
            {/* Gradient Border Container */}
            <div className="h-full  bg-black shadow rounded-xl relative z-10">
              <div className=" overflow-hidden bg-white px-4 rounded-t-lg">
                <img
                  className="w-full max-w-[150px] group-hover:scale-75 duration-500 h-40 object-contain object-center p-4 "
                  src={person.companyImage}
                  alt={person.company}
                  onError={(e) => {
                    console.log(`Failed to load image for ${person.company}:`, person.companyImage);
                    // You can set a default image here if needed
                    // e.target.src = defaultCompanyImage;
                  }}
                />
              </div>
              <div className="p-2 rounded-b-xl pl-4 flex-1 " style={{ font: "normal 0.75rem 'Inter', serif", lineHeight: "1rem" }}>
                <h2 className=" font-bold font-Inter">{person.company}</h2>
                {/* <p className="text-gray-500">{person.position}</p>  */}
                {/* <p className="text-gray-700">{person.company}</p> */}
              </div>
            </div>
            <span
              aria-hidden
              className="absolute overflow-hidden inset-0 z-0 scale-[3.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:opacity-0 before:group-hover:opacity-100 before:animate-none before:group-hover:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Company;
