import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../App.css";
import { AttendeesData } from "../../constants/AttendeeData";
import { useNavigate } from "react-router-dom";
import FeaturedSpeakers from '../../assets/AllAttendees/FeaturedSpeakers.jpg'

gsap.registerPlugin(ScrollTrigger);

function Speakers() {

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
    // navigate(`/gais/Speaker/${id}`);
  };

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-r from-[#963C96] via-[#F53232] to-[#FFBE5A] text-black"
    >
      {/* Header Section */}
      <div className="bg-black grid gap-4 grid-cols-1 md:grid-cols-2 items-center">
        <div className="header-content mx-6 md:pl-12 py-6 ">
          <h2 className="font-Antonio mb-4 uppercase text-white text-2xl lg:text-5xl">
          Featured Speakers 
          </h2>
          <p className="font-Archivo text-md lg:text-xl text-white leading-tight">
          Meet our AI experts and discover the future of artificial intelligence. These pioneers in research, innovation, and application will share their groundbreaking work, offer insights into the latest advancements, and explore the transformative potential of AI across industries. Prepare to be inspired by their vision and join the conversation that's defining the next generation of technology.
          </p>
          <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded mt-4 hover:bg-yellow-600 duration-300 self-center">
            Book Ticket
          </button>
        </div>
        <img
          className="header-image h-full object-cover"
          src={FeaturedSpeakers}
          alt=""
        />
      </div>

      {/* Attendees Grid */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 py-8 px-4 bg-gray-100"> */}
      <div className="w-full  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 py-8 px-6 md:px-16 ">

        {attendees
        .filter(person => person.role === "Speaker")
        .map((person, index) => (
          <div
            key={index} 
            onClick={() => handleCardClick(index)}
            className="attendee-card p-1 hue-rotate-30 hover:gradient-border hover:cursor-pointer group relative overflow-hidden rounded-xl"
          >
            {/* Gradient Border Container */}
            <div className="h-full bg-white bg-transparent shadow rounded-xl relative z-10">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  // className="w-full  group-hover:scale-125 duration-500 h-60 object-cover"
                  className="w-full group-hover:scale-110 duration-500 h-52 object-cover object-top"

                  src={person.personImage}
                  alt={person.name}
                />
              </div>
              <div className="flex px-2 pb-2">
                {/* <div className="flex flex-col justify-center w-1/3">
                  <img className="items-center bg-white" src={person.companyImage} alt={person.company} />
                </div> */}
                <div className="pl-4 pt-2 flex-1" style={{ font: "normal 0.75rem 'Inter', serif", lineHeight: "1rem" }}>
                <h2 className="font-bold font-Inter">{person.name}</h2>
                <p className="">{person.position}</p>
                <p className="">{person.company}</p>
              </div>
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

export default Speakers;
