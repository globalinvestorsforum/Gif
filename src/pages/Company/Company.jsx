// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import "../App.css";
// import { AttendeesData } from "../../constants/AttendeeData";
// import { useNavigate } from "react-router-dom";
// import ForParticipatingCompanies from '../../assets/AllAttendees/ForParticipatingCompanies.jpg'

// gsap.registerPlugin(ScrollTrigger);

// function Company() {
//   // Add this right after your imports
// console.log("Raw AttendeesData length:", AttendeesData.length);
// console.log("Raw AttendeesData last 5 items:", AttendeesData.slice(-5));
// console.log("IDs greater than 50:", AttendeesData.filter(item => item.id > 50));
//   const [attendees,setAttendees]=useState(AttendeesData)

//   const containerRef = useRef(null);
  
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate text and button
//       gsap.fromTo(
//         ".header-content",
//         { opacity: 0, x: -100 },
//         {
//           opacity: 1,
//           x: 0,
//           delay:0.3,
//           duration: 1.5,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: ".header-content",
//             start: "top 80%",
//           },
//         }
//       );

//       // Animate image
//       gsap.fromTo(
//         ".header-image",
//         { opacity: 0, x: 50 },
//         {
//           opacity: 1,
//           x: 0,
//           delay:0.2,
//           duration: 1.5,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: ".header-image",
//             start: "top 80%",
//           },
//         }
//       );

//       // Animate attendee cards
//       gsap.utils.toArray(".attendee-card").forEach((card, index) => {
//         gsap.fromTo(
//           card,
//           { opacity: 0, scale: 0.8 },
//           {
//             opacity: 1,
//             scale: 1,
//             duration: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 90%",
//               toggleActions: "play none none none",
//             },
//           }
//         );
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);


  
//   const navigate = useNavigate();

//   const handleCardClick = (id) => {
//     navigate(`/attendee/${id}`);
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="flex flex-col items-center bg-gradient-to-r from-purple-500 to-orange-500"    >
//       {/* Header Section */}
//       <div className="bg-black grid gap-4 grid-cols-1 md:grid-cols-2 items-center">
//         <div className="header-content mx-6 md:pl-12 py-6">
//           <h2 className="font-Antonio mb-4 uppercase text-white text-2xl lg:leading-tight lg:text-5xl">
//           Meet Participating AI-Powered Companies

//           </h2>
//           <p className="font-Archivo text-lg lg:text-xl text-white">
//           Meet the companies at the forefront of AI innovation. Our summit brings together a select group of organizations with deep expertise in artificial intelligence, from established tech giants to disruptive startups. The company's involvement highlights their commitment to advancing the field and exploring the transformative potential of AI.          </p>
//           <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded mt-4 hover:bg-yellow-600 duration-300 self-center">
//             Book Ticket
//           </button>
//         </div>
//         <img
//           className="header-image h-full object-cover"
//           src={ForParticipatingCompanies}
//           alt=""
//         />
//       </div>

//       {/* Attendees Grid */}
//       <div className="w-full  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 py-8 px-6 md:px-16 ">
//         {attendees.map((person) => (
//           <div
//             key={person.id} 
//             // onClick={() => handleCardClick(index)}
//             className="attendee-card max-w-[200px] p-1  hover:gradient-border hover:cursor-pointer group relative overflow-hidden rounded-xl"
//           >
//             {/* Gradient Border Container */}
//             <div className="h-full  bg-black shadow rounded-xl relative z-10">
//               <div className=" overflow-hidden bg-white px-4 rounded-t-lg">
//                 <img
//                   className="w-full max-w-[150px] group-hover:scale-75 duration-500 h-40 object-contain object-center p-4 "
//                   src={person.companyImage}
//                   alt={person.company}
//                   onError={(e) => {
//                     console.log(`Failed to load image for ${person.company}:`, person.companyImage);
//                     // You can set a default image here if needed
//                     // e.target.src = defaultCompanyImage;
//                   }}
//                 />
//               </div>
//               <div className="p-2 rounded-b-xl pl-4 flex-1 " style={{ font: "normal 0.75rem 'Inter', serif", lineHeight: "1rem" }}>
//                 <h2 className=" font-bold font-Inter">{person.company}</h2>
//                 {/* <p className="text-gray-500">{person.position}</p>  */}
//                 {/* <p className="text-gray-700">{person.company}</p> */}
//               </div>
//             </div>
//             <span
//               aria-hidden
//               className="absolute overflow-hidden inset-0 z-0 scale-[3.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:opacity-0 before:group-hover:opacity-100 before:animate-none before:group-hover:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
//             ></span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Company;

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AttendeesData } from "../../constants/AttendeeData";
import { useNavigate } from "react-router-dom";
import ForParticipatingCompanies from "../../assets/AllAttendees/ForParticipatingCompanies.jpg";
import SEO from "../../components/SEO";

gsap.registerPlugin(ScrollTrigger);

function Company() {
  const [attendees, setAttendees] = useState(AttendeesData);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header content
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

      // Animate header image
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

      // Animate company category cards
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

  const handleCardClick = (id) => {
    // Navigate to company details when available
    // navigate(`/company/${id}`);
  };

  return (
    <div
      ref={containerRef}
      className="companies-page min-h-screen bg-[#020617] text-white py-16 px-4"
    >
      <SEO
        title="Participating Companies — Global AI Summit"
        description="Discover the leading AI companies, innovative startups, and infrastructure providers at the Global AI Summit."
        url="https://www.global-investors-forum.com/gais/companies"
      />

      <div className="max-w-6xl mx-auto">
        {/* Hero / Header Section */}
        <div className="header-section grid gap-10 lg:grid-cols-2 items-center mb-16">
          {/* Text side */}
          <div className="header-content">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-300 mb-3">
              Global AI Summit · Berlin
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold uppercase leading-tight mb-4">
              Participating Companies
            </h1>

            <p className="text-sm md:text-base text-slate-300 mb-6">
              Discover the companies shaping the future of AI. Our summit brings
              together a select group of organizations with deep expertise in
              artificial intelligence, from established tech giants to disruptive
              startups. Stay tuned for the full roster of participating
              companies.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/60 bg-blue-500/10 text-xs uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
                Curation in progress
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-slate-500/70 text-[11px] uppercase tracking-[0.18em] text-slate-300">
                Leading AI Companies
              </span>
            </div>

            <p className="text-xs md:text-sm text-slate-400 mb-8">
              We're bringing together enterprise leaders, innovative startups,
              and infrastructure providers to showcase cutting-edge AI solutions.
              Check back soon for the complete company reveal.
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
                Discover Companies
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
                src={ForParticipatingCompanies}
                alt="Global AI Summit Participating Companies Coming Soon"
                className="w-full rounded-3xl border border-slate-700/80 object-cover shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
              />

              <div className="absolute -top-4 -left-4 px-3 py-1 rounded-full bg-emerald-500 text-xs font-semibold shadow-lg">
                2026 Edition
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[11px] text-slate-200">
                <span className="px-2 py-1 rounded-full bg-black/70 border border-slate-700">
                  Berlin · October-2026
                </span>
                <span className="px-2 py-1 rounded-full bg-black/70 border border-slate-700">
                  100+ Companies
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Panel */}
        <div className="coming-soon-panel rounded-3xl border border-dashed border-slate-700 bg-slate-900/70 px-6 py-10 md:px-10 md:py-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3">
            Companies · Coming Soon
          </p>

          <h2 className="text-2xl md:text-3xl uppercase font-semibold mb-4">
            The official company roster is coming soon.
          </h2>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-8">
            We're assembling an elite group of innovators across{" "}
            <span className="font-medium text-blue-200">
              AI infrastructure, enterprise solutions, startups, and service
              providers
            </span>
            . We'll unveil the complete lineup in phases — watch this space.
          </p>

          <div className="grid gap-4 md:grid-cols-3 text-left text-xs md:text-sm text-slate-200">
            <div className="attendee-card rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                Category 01
              </p>
              <h3 className="font-semibold mb-1">Enterprise AI Leaders</h3>
              <p className="text-slate-300">
                Established tech giants and Fortune 500 companies deploying
                enterprise-scale AI solutions.
              </p>
            </div>

            <div className="attendee-card rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                Category 02
              </p>
              <h3 className="font-semibold mb-1">Innovative AI Startups</h3>
              <p className="text-slate-300">
                Disruptive founders and early-stage companies breaking new ground
                in AI applications.
              </p>
            </div>

            <div className="attendee-card rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                Category 03
              </p>
              <h3 className="font-semibold mb-1">AI Infrastructure</h3>
              <p className="text-slate-300">
                Platforms, tooling, and compute providers building the backbone
                of modern AI systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
