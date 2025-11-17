import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../App.css";
import { AttendeesData } from "../../constants/AttendeeData";
import { useNavigate } from "react-router-dom";
import FeaturedSpeakers from "../../assets/AllAttendees/FeaturedSpeakers.jpg";

gsap.registerPlugin(ScrollTrigger);

function Speakers() {
  const [attendees, setAttendees] = useState(AttendeesData);

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
          delay: 0.3,
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
          delay: 0.2,
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
      className="speakers-page min-h-screen bg-[#020617] text-white py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero / Header */}
        <div className="header-section grid gap-10 lg:grid-cols-2 items-center mb-16">
          {/* Text side */}
          <div className="header-content">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-300 mb-3">
              Global AI Summit · Berlin
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold uppercase leading-tight mb-4">
              Speakers Lineup
            </h1>

            <p className="text-sm md:text-base text-slate-300 mb-6">
              Stay tuned — the official list of speakers for the Global AI
              Summit Berlin will be{" "}
              <span className="font-semibold text-blue-200">featured soon</span>
              .
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/60 bg-blue-500/10 text-xs uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
                Curation in progress
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-slate-500/70 text-[11px] uppercase tracking-[0.18em] text-slate-300">
                World-class AI Leaders
              </span>
            </div>

            <p className="text-xs md:text-sm text-slate-400 mb-8">
              We’re finalizing a lineup of founders, researchers, policy makers,
              and practitioners shaping the future of AI. Check back soon for
              the full speaker reveal.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/global-investors-forum/",
                    "_blank"
                  )
                }
                className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-sm font-medium transition-colors"
              >
                Get Speaker Updates
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="px-6 py-2.5 rounded-full border border-slate-600 text-sm font-medium hover:bg-slate-800/60 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>

          {/* Image side */}
          <div className="header-image">
            <div className="relative">
              <img
                src={FeaturedSpeakers}
                alt="Global AI Summit Featured Speakers Coming Soon"
                className="w-full rounded-3xl border border-slate-700/80 object-cover shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
              />

              <div className="absolute -top-4 -left-4 px-3 py-1 rounded-full bg-emerald-500 text-xs font-semibold shadow-lg">
                2026 Edition
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[11px] text-slate-200">
                <span className="px-2 py-1 rounded-full bg-black/70 border border-slate-700">
                  Berlin · March-2026
                </span>
                <span className="px-2 py-1 rounded-full bg-black/70 border border-slate-700">
                  On-site · Global Delegates
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Panel */}
        <div className="coming-soon-panel rounded-3xl border border-dashed border-slate-700 bg-slate-900/70 px-6 py-10 md:px-10 md:py-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3">
            Speakers · Coming Soon
          </p>

          <h2 className="text-2xl md:text-3xl uppercase font-semibold mb-4">
            The official speakers list is under wraps (for now).
          </h2>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-8">
            Our curation team is locking in visionary leaders across{" "}
            <span className="font-medium text-blue-200">
              GenAI, MLOps, Responsible AI, Product, and Policy
            </span>
            . We’ll unveil the lineup in phases — watch this space.
          </p>

          <div className="grid gap-4 md:grid-cols-3 text-left text-xs md:text-sm text-slate-200">
            <div className="attendee-card rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                Track 01
              </p>
              <h3 className="font-semibold mb-1">Global AI Leaders</h3>
              <p className="text-slate-300">
                CEOs, founders, and chief scientists from top AI-native
                companies.
              </p>
            </div>

            <div className="attendee-card rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                Track 02
              </p>
              <h3 className="font-semibold mb-1">Hands-on Practitioners</h3>
              <p className="text-slate-300">
                Engineers, architects, and builders scaling real-world AI
                systems.
              </p>
            </div>

            <div className="attendee-card rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                Track 03
              </p>
              <h3 className="font-semibold mb-1">Policy & Ethics Voices</h3>
              <p className="text-slate-300">
                Regulators, ethicists, and ecosystem leaders shaping responsible
                AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    // Actuall code for featured speakers page is commented below
    // <div
    //   ref={containerRef}
    //   className="bg-gradient-to-r from-[#963C96] via-[#F53232] to-[#FFBE5A] text-black"
    // >
    //   {/* Header Section */}
    //   <div className="bg-black grid gap-4 grid-cols-1 md:grid-cols-2 items-center">
    //     <div className="header-content mx-6 md:pl-12 py-6 ">
    //       <h2 className="font-Antonio mb-4 uppercase text-white text-2xl lg:text-5xl">
    //       Featured Speakers
    //       </h2>
    //       <p className="font-Archivo text-md lg:text-xl text-white leading-tight">
    //       Meet our AI experts and discover the future of artificial intelligence. These pioneers in research, innovation, and application will share their groundbreaking work, offer insights into the latest advancements, and explore the transformative potential of AI across industries. Prepare to be inspired by their vision and join the conversation that's defining the next generation of technology.
    //       </p>
    //       <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded mt-4 hover:bg-yellow-600 duration-300 self-center">
    //         Book Ticket
    //       </button>
    //     </div>
    //     <img
    //       className="header-image h-full object-cover"
    //       src={FeaturedSpeakers}
    //       alt=""
    //     />
    //   </div>

    //   {/* Attendees Grid */}
    //   {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 py-8 px-4 bg-gray-100"> */}
    //   <div className="w-full  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 py-8 px-6 md:px-16 ">

    //     {attendees
    //     .filter(person => person.role === "Speaker")
    //     .map((person, index) => (
    //       <div
    //         key={index}
    //         onClick={() => handleCardClick(index)}
    //         className="attendee-card p-1 hue-rotate-30 hover:gradient-border hover:cursor-pointer group relative overflow-hidden rounded-xl"
    //       >
    //         {/* Gradient Border Container */}
    //         <div className="h-full bg-white bg-transparent shadow rounded-xl relative z-10">
    //           <div className="overflow-hidden rounded-t-lg">
    //             <img
    //               // className="w-full  group-hover:scale-125 duration-500 h-60 object-cover"
    //               className="w-full group-hover:scale-110 duration-500 h-52 object-cover object-top"

    //               src={person.personImage}
    //               alt={person.name}
    //             />
    //           </div>
    //           <div className="flex px-2 pb-2">
    //             {/* <div className="flex flex-col justify-center w-1/3">
    //               <img className="items-center bg-white" src={person.companyImage} alt={person.company} />
    //             </div> */}
    //             <div className="pl-4 pt-2 flex-1" style={{ font: "normal 0.75rem 'Inter', serif", lineHeight: "1rem" }}>
    //             <h2 className="font-bold font-Inter">{person.name}</h2>
    //             <p className="">{person.position}</p>
    //             <p className="">{person.company}</p>
    //           </div>
    //           </div>
    //         </div>
    //         <span
    //           aria-hidden
    //           className="absolute overflow-hidden inset-0 z-0 scale-[3.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:opacity-0 before:group-hover:opacity-100 before:animate-none before:group-hover:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
    //         ></span>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default Speakers;
