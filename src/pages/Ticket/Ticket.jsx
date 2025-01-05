import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const TicketSection = () => {
  const tickets = [
    {
      title: "One-Day Pass",
      price: "€730 + VAT",
      originalPrice: "€900",
      discount: "Save €170 off the late price, with 18.89% Discount.",
      link:"https://rzp.io/l/xcuXXJF",
      buttonText: "Book Now",
      detailsText: "What's Included ↓",
      includes: [
        "Access to all Scheduled session, including networking events and conferences.",
      ],
    },
    {
      title: "Standard Pass",
      price: "€1140 + VAT",
      originalPrice: "€3000",
      discount: "Save €1860 off the late price, with a 62% Discount.",
      link:"https://rzp.io/l/j4sDHOHp",
      buttonText: "Book Now",
      detailsText: "What's Included ↓",
      includes: [
        "Access to all Scheduled session, including networking events and lunch on both days.",
      ],
    },
    {
      title: "VIP Pass",
      price: "€2999 + VAT",
      originalPrice: "€5999",
      discount: "Save €3000 off the late price, with a 50% Discount.",
      link:"https://rzp.io/rzp/jbdMC56",
      buttonText: "Book Now",
      detailsText: "What's Included ↓",
      includes: [
        "Exclusive access to all conference sessions, networking events, and lunch.",
        "Priority seating with reserved front-row seats.",
        "24/7 Customer services.",
        "Exclusive post-event access to speaker materials (slides and videos, subject to speaker consent).",
      ],
    },
    {
      title: "Guest Visitor Startup Pass",
      price: "€1899 + VAT",
      originalPrice: "€3899",
      discount: "Save €2000 off the late price, with a 51% Discount.",
      link:"https://rzp.io/rzp/ee1lOiRlh",
      buttonText: "Book Now",
      detailsText: "What's Included ↓",
      includes: [
        "Comprehensive access to all conference sessions, networking events, and lunch.",
        "Includes strategic promotional opportunities for startups and award nominees.",
        "Pass issuance subject to applicant evaluation by the GIF.",
      ],
    },
  ];

  const additionalInfo = [
    {
      title:
        "Government Officials, Academic, Student, Charity & Association Discount:",
      description:
        "To qualify for a discounted ticket, you must be affiliated with a government entity, academic institution, charitable organization, or association. Please note that this discount is subject to verification.",
      buttonText: "Apply Now",
      link:"/gais/Registration",
    },
    {
      title: "Group Bookings:",
      description:
        "Bring your team to the forefront of AI innovation. Group bookings offer exclusive discounts, personalized support, and unparalleled networking opportunities. Unlock significant discounts on bulk ticket purchases now.",
      buttonText: "Contact GAIS Registration Team",
      link:"/gais/contact",
    },
  ];

  const timelineEvents = [
    { label: "Early Bird", date: "2025-02-15" },
    { label: "Regular", date: "" },
    { label: "Late Price", date: "" },
  ];

  const today = new Date();
  const updatedEvents = timelineEvents.map((event, index) => {
    const eventDate = new Date(event.date);
    const isActive = today <= eventDate;
    return {
      ...event,
      isActive,
      dynamicColor: isActive ? "bg-yellow-500" : "bg-white",
    };
  });

  const [openIncludes, setOpenIncludes] = useState(null);

   
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // gsap.fromTo(
      //   ".header",
      //   { width: "0%" },
      //   { width: "100%", duration: 1, ease: "power3.inOut",
      //     scrollTrigger: {
      //       trigger: ".headerr",
      //       start: "top 90%",
      //       toggleActions: "play none none none",
      //     },
      //    }
      // );

      // gsap.fromTo(
      //   ".timeline-bar",
      //   { width: "0%" },
      //   { width: "100%", duration: 1, ease: "power3.inOut",
      //     scrollTrigger: {
      //       trigger: ".timeline-bar",
      //       start: "top 90%",
      //       toggleActions: "play none none none",
      //     },
      //    }
      // );
  
      // gsap.fromTo(
      //   ".timeline-label",
      //   { opacity: 0, scale: 0.2, y:-50 },
      //   { opacity: 1, scale: 1, y:0, stagger: 0.2, duration: 0.6, ease: "back.out(1.7)",scrollTrigger: {
      //     trigger: ".timeline-label",
      //     start: "top 90%",
      //     toggleActions: "play none none none",
      //   }, }
      // );

      gsap.utils.toArray(".ticket-card").forEach((card, index) => {
              gsap.fromTo(
                card,
                { opacity: 0, scale: 0.8 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 1,
                  stagger: 0.2,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none none",
                  },
                }
              );
            });

            gsap.utils.toArray(".additional-info-card").forEach((card, index) => {
              gsap.fromTo(
                card,
                { opacity: 0, scale: 0.8 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 1,
                  stagger:0.2,
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

    return () => ctx.revert(); // Clean up GSAP context on component unmount
  }, []);


  return (
    <section ref={containerRef} className=" py-12 text-white bg-gradient-to-r from-purple-800 to-pink-800" 
        
    // style = {{
    //   backgroundImage: `url("https://i.redd.it/503sbcw0wn001.jpg")`,
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center",
    //   height: "100%",
    //   width: "100%",
    // }}
    >
      <div className=" header mx-auto px-4">
        <h2 className="text-4xl lg:text-7xl font-Antonio uppercase font-bold text-center mb-6">
          Main Conference Tickets
        </h2>
        <p className="text-center font-Antonio uppercase text-lg lg:text-3xl mb-12 text-transparent bg-gradient-to-r from-teal-400  via-yellow-400 to-red-400 bg-clip-text">Your Pass To the Future of AI, Immerse Yourself in the AI Ecosystem.</p>
        

        {/* Timeline */}
        <div className="timeline-bar flex items-center space-x-2">
        {updatedEvents.map((event, index) => (
          <div
            key={index}
            className={` h-2 transition-all ${event.dynamicColor}`}
            style={{ width: `${100 / updatedEvents.length}%` }}
          ></div>
        ))}
      </div>
      <div className="flex flex-row mt-4">
        {updatedEvents.map((event, index) => (
          <div key={index} className="flex-1 timeline-label">
            <p
              className={`text-center text-md font-semibold ${
                event.isActive ? "text-yellow-400":"text-white"
              }`}
            >
              {event.label}
            </p>
            {
              index===0?
              <p className={`flex-1 text-center text-md ${
                event.isActive ? "text-yellow-400":"text-white"
              }`}>
               {/* {event.date} */}
               15th February
            </p>
            :""
            }
          </div>
        ))}
      </div>

        {/* Ticket Cards */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tickets.map((ticket, index) => (
            
            <div
              key={index}
              className="ticket-card font-Archivo"
            >
              <div className="bg-black/70 backdrop:blur-md shadow-lg p-6 rounded-lg flex flex-col text-center ">
              <h3 className="text-xl font-bold uppercase mb-4">
                {ticket.title}
              </h3>
              <p className="text-3xl font-bold text-yellow-400">
                {ticket.price}
              </p>
              <p className="text-xl text-white font-semibold line-through">
                {ticket.originalPrice}
              </p>
              <p className=" text-sm mt-2">{ticket.discount}</p>
              <a href={ticket.link}>
              <button className="bg-gradient-to-r from-orange-500 to-purple-500 text-white py-2 px-4 rounded mt-4 hover:bg-yellow-500 duration-300 self-center">
                {ticket.buttonText}
              </button>
              </a>
              <button
                className=" font-semibold text-sm mt-2 self-center"
                onClick={() =>
                  setOpenIncludes(openIncludes === index ? null : index)
                }
              >
                {openIncludes === index ?"What's Included ↑": "What's Included ↓"}
                
              </button>             
              </div>

                <div className="bg-gradient-to-r from-orange-500 to-purple-500 rounded-b-lg -mt-4">
                {openIncludes === index && (
                <div className="flex flex-col shadow-md z-10">
                  {/* <div className="flex flex-row-reverse justify-between">
                  <button
                    className=" py-2 px-4 text-black font-bold bg-yellow-500 text-right "
                    onClick={() => setOpenIncludes(null)}
                  >
                    X
                  </button>
                  <h4 className="flex-1 pt-2 text-lg font-bold ">Includes:</h4>
                  </div> */}
                  <ul className=" p-6 pl-8 pt-2 text-left">
                    {ticket.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="">
                        <li className="list-disc text-sm mt-1">
                        {item}
                      </li>
                      </div>
                    ))}
                  </ul>
                  
                </div>
              )}
                </div>

            </div>
          ))}
        </div>



        {/* Additional Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {additionalInfo.map((info, index) => (
            <div
              key={index}
              className="additional-info-card text-left font-Archivo bg-black/70 backdrop:blur-md p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <h4 className="text-xl font-bold">{info.title}</h4>
              <p className=" text-sm mt-4">{info.description}</p>
              <Link to={info.link} className="mr-auto">
              <button className="bg-gradient-to-r from-orange-500 to-purple-500 text-white py-2 px-4 rounded mt-4  hover:bg-yellow-500 duration-300">
                {info.buttonText}
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default TicketSection;