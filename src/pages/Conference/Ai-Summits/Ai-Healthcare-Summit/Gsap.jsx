// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const GsapAnimations = () => {
//   useEffect(() => {
//     // Fade-in Animation
//     gsap.from(".fade-in", { opacity: 0, duration: 1, ease: "power2.out" });

//     // Slide-in From Bottom
//     gsap.from(".slide-up", {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power3.out",
//     });

//     // Scale-in Effect
//     gsap.from(".scale-fade", {
//       opacity: 0,
//       scale: 0.8,
//       duration: 1,
//       ease: "back.out(1.7)",
//     });

//     // Staggered Animation (for multiple elements)
//     gsap.from(".stagger-item", {
//       opacity: 0,
//       y: 30,
//       stagger: 0.2,
//       duration: 1,
//       ease: "power2.out",
//     });

//     // Scroll-triggered Fade-in
//     gsap.utils.toArray(".scroll-fade").forEach((el) => {
//       gsap.from(el, {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         scrollTrigger: {
//           trigger: el,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       });
//     });

//     // Rotation Effect
//     gsap.from(".rotate-effect", {
//       opacity: 0,
//       rotation: 360,
//       duration: 1,
//       ease: "power3.out",
//     });

//     // Typing Effect
//     gsap.fromTo(
//       ".text-typing",
//       { width: "0%" },
//       { width: "100%", duration: 2, ease: "power2.inOut" }
//     );

//     // Hero Section Animation
//     gsap.from(".hero", {
//       opacity: 0,
//       scale: 1.2,
//       duration: 1.5,
//       ease: "power3.out",
//     });

//     // Infinite Bounce Animation
//     gsap.to(".bounce", {
//       y: -10,
//       duration: 0.5,
//       ease: "power1.inOut",
//       repeat: -1,
//       yoyo: true,
//     });

//     // Button Hover Effect
//     gsap.fromTo(
//       ".btn",
//       { scale: 1 },
//       {
//         scale: 1.1,
//         duration: 0.3,
//         ease: "power1.out",
//         repeat: -1,
//         yoyo: true,
//       }
//     );
//   }, []);

//   return (
//     <div className="gsap-container text-black">
//       <h1 className="fade-in">Fade-in Heading</h1>
//       <p className="slide-up">Slide-up paragraph.</p>
//       <div className="scale-fade">Scale & Fade-in Box</div>
//       <ul>
//         <li className="stagger-item">Staggered Item 1</li>
//         <li className="stagger-item">Staggered Item 2</li>
//         <li className="stagger-item">Staggered Item 3</li>
//       </ul>
//       <div className="scroll-fade">Scroll-triggered Content</div>
//       <img className="rotate-effect" src="icon.png" alt="Rotating Icon" />
//       <div className="text-typing">Typing Effect</div>
//       <section className="hero">Hero Section</section>
//       <button className="btn">Hover Me</button>
//       <div className="bounce">Bouncing Element</div>
//     </div>
//   );
// };

// export default GsapAnimations;


import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapAnimations = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /** ✨ Title Fade-in & Slide-up */
      gsap.utils.toArray(".fade-slide-title").forEach((title) => {
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
      gsap.utils.toArray(".slide-left-goal").forEach((goal) => {
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
      gsap.utils.toArray(".scale-in-reason").forEach((reason) => {
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
      gsap.utils.toArray(".slide-up-award").forEach((card) => {
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
    <div ref={containerRef} className="gsap-container">
      <h1 className="fade-slide-title">Title Animation</h1>
      <p className="slide-left-goal">Slide-left Goal</p>
      <div className="scale-in-reason">Scale-in Reason</div>
      <div className="slide-up-award">Award Slide-up</div>
    </div>
  );
};

export default GsapAnimations;
