import React from 'react';
import Robot from '../../../assets/IndustryTracksImage/Robot2.png'
import './Retail.css';
import {useRef, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
export default function AgendasPage() {
  const navigate=useNavigate();
  const observerRef = useRef();
  
    useEffect(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              const animationType = entry.target.dataset.animation;
              if (animationType) {
                entry.target.classList.add(animationType);
              }
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );
  
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observerRef.current.observe(el));
  
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, []);
  return (
    <div className="bg-white min-h-screen" id="Robotics">
    <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
                         <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                           {/* Background Image - Replace with your image */}
                           <div 
                             className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                             style={{
                               backgroundImage: `url(${Robot})`, // Replace with your image URL
                             }}
                           >
                             {/* Dark overlay */}
                             <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                             
                             {/* Content */}
                             <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                                 AI in Robotics
                                
                               </h1>
                               <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                                 Exploring the intersection of AI and Robotics Industry.
                               </p>
                               <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300 w-fit" onClick={()=>{navigate("/gais/ticket")}}>
                                 Book Pass
                               </button>
                             </div>
                           </div>
                         </div>
                       </div>
      <h1 className="text-5xl font-bold text-black mb-8 tracking-wide animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Antonio, sans-serif'}} >AGENDAS</h1>
      
      <p className="text-gray-700 text-base leading-relaxed mb-8 animate-on-scroll" data-animation="fade-in-up" style={{fontFamily: 'Arial, sans-serif'}}>
        This track will explore how artificial intelligence is accelerating the evolution of robotics, enabling machines to 
        become more adaptive, autonomous, and intelligent. From industrial automation and collaborative robots 
        (cobots) to service robots, drones, and humanoids, AI is unlocking new possibilities across manufacturing, 
        healthcare, logistics, defense, agriculture, and beyond. Participants will discover how advancements in 
        computer vision, natural language processing, and machine learning are enhancing robotic perception, decision-
        making, and human-robot collaboration. The track will also address critical challenges, including ethics, safety, 
        regulation, and workforce transformation, providing a comprehensive outlook on how AI-driven robotics is 
        reshaping industries and society.
      </p>
     <div className="mb-8">
      <h2 className="text-3xl font-bold text-black mb-6 animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Arial, sans-serif'}}>SESSIONS:</h2>
         </div>           
      {/* Opening Keynote */}
     <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
  <h3 className="text-xl font-bold mb-2">Opening Keynote</h3>
  <p className="mb-1"><span className="font-bold">Topic:</span> AI + Robotics: Powering the Next Industrial and Social Revolution</p>
  <p className="mb-1"><span className="font-bold">Time:</span> 30 minutes</p>
  <p className="mb-4"><span className="font-bold">Overview:</span> How artificial intelligence is transforming robotics across industries, from automation to human-robot collaboration.</p>
</div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8 animate-on-scroll" data-animation="slide-in-left">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Autonomous Robotics: From Concept to Reality</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Exploring AI-driven autonomy in drones, self-driving vehicles, and intelligent systems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">AI-Powered Industrial Robotics</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Enhancing manufacturing, assembly lines, and predictive maintenance with intelligent robotic automation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">AI in Medical & Healthcare Robotics</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Surgical robots, rehabilitation devices, and patient-assistive robots powered by AI innovations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">How is AI Redefining Defense & Security Robotics?</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Autonomous defense systems, surveillance drones, and military applications of AI robotics.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Swarm Robotics & Collective Intelligence</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: How AI enables multiple robots to collaborate, coordinate, and solve complex tasks together.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 animate-on-scroll" data-animation="slide-in-right">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Can AI Make Robots Smarter, Safer, and More Adaptive?</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: The role of AI in decision-making, perception, and contextual awareness in robotic systems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Collaborative Robots (Cobots)</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: AI's role in enabling safe, efficient, and human-friendly robots that work alongside people.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Service & Consumer Robotics</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Home assistants, cleaning bots, and AI-driven personal robotics for daily life enhancement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">AI in Robotics for Agriculture</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Precision farming, automated harvesting, and crop monitoring through AI-enabled robotics.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Ethics & Human-Robot Interaction</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Addressing safety, ethics, and trust as AI-powered robots become integrated into society.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex gap-4 animate-on-scroll" data-animation="fade-in-up">
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference")}}>
    View All Tracks
  </button>
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl transform">
    More About Tracks
  </button>
</div>
    </div>
    </div>
  );
}