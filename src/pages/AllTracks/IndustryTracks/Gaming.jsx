import React,{ useEffect, useRef } from 'react';
import {useNavigate} from "react-router-dom"
import Game from '../../../assets/IndustryTracksImage/Game_Background.png'
import './Retail.css';
const ConferenceAgenda = () => {
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
    <div className="max-w-6xl mx-auto p-8 bg-white" id="Gaming">
        <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
                                 <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                   {/* Background Image - Replace with your image */}
                                   <div 
                                     className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                                     style={{
                                       backgroundImage: `url(${Game})`, // Replace with your image URL
                                     }}
                                   >
                                     {/* Dark overlay */}
                                     <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                                     
                                     {/* Content */}
                                     <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                                       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                                         AI In Sports, Entertainment, & Gaming
                                        
                                       </h1>
                                       <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                                        Driving Cross-Industry Transformation with Autonomous AI Solutions
                                       </p>
                                       <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300 w-fit" onClick={()=>{navigate("/gais/ticket")}}>
                                         Book Pass
                                       </button>
                                     </div>
                                   </div>
                                 </div>
                               </div>
      {/* Header */}
      <h1 className="text-5xl font-bold text-black mb-8 animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Antonio, sans-serif'}}>AGENDAS</h1>
      
      {/* Introduction Paragraph */}
      <p className="text-gray-700 leading-relaxed mb-8 animate-on-scroll" data-animation="fade-in-up">
        This track will explore how artificial intelligence and emerging technologies are transforming the gaming industry by enhancing creativity, gameplay, user experience, and development efficiency. Learn how studios, developers, creative technologists, and cloud platforms are using AI to deliver adaptive gameplay, automate production, improve graphics, support player communities, and innovate game design. From procedural content generation to generative storytelling and immersive virtual worlds, this track will help game studios, publishers, and interactive media leaders understand how to harness new technologies for the next era of gaming.
      </p>
      
      {/* Sessions Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-on-scroll" data-animation="slide-in-left">SESSIONS:</h2>
      
      {/* Opening Keynote */}
      <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Opening Keynote</h3>
        <p className="text-gray-700 mb-1"><span className="font-semibold">Topic:</span> The Future of Gaming: AI-Powered Worlds and Experiences</p>
        <p className="text-gray-700 mb-1"><span className="font-semibold">Time:</span> 30 minutes</p>
        <p className="text-gray-700"><span className="font-semibold">Overview:</span> A visionary look at how AI and advanced tech are reshaping gaming—from dynamic storytelling and smarter NPCs to lifelike graphics and collaborative play. Discover the evolving relationship between technology, player creativity, and the power of community-driven experiences as the world of games expands beyond the screen.</p>
      </div>
      
      {/* Session Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Autonomous Vehicles & Mobility */}
        <div className="mb-6 animate-on-scroll" data-animation="slide-in-left">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Adaptive Gameplay & Intelligent Design</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Leveraging AI to tailor in-game experiences, adaptive difficulty, and content for each player’s skill and style.</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>How machine learning, neural networks, and generative techniques create infinite maps, new levels, and unique quests.</span>
            </li>
          </ul>
        </div>
        
        
        <div className="mb-6 animate-on-scroll" data-animation="slide-in-right">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Production Efficiency & Creativity Tools</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Using AI to identify bugs, optimize playability, and streamline quality assurance.</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>How AI transforms creative workflows in graphics, motion, and audio design for richer worlds.</span>
            </li>
          </ul>
        </div>
        
        {/* AI for Maritime & Aviation Autonomy */}
        <div className="mb-6 animate-on-scroll" data-animation="slide-in-left">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Next-Gen Tech & Platforms</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>The role of infrastructure, AI, and new codecs in enabling seamless, device-agnostic gaming.</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Creating engaging virtual environments, multiplayer interactions, and mixed-reality experiences using AI.</span>
            </li>
          </ul>
        </div>
        
        {/* AI in Defense & Security Systems */}
        <div className="mb-6 animate-on-scroll" data-animation="slide-in-right">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Community, Ethics & Future Skills</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Enhancing player engagement through AI-powered matchmaking, moderation, and social features.</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Addressing fairness, transparency, and wellbeing in AI-driven systems and experiences.</span>
            </li>
          </ul>
        </div>
        
       
       
      </div>
      <div className="mt-8 flex gap-4 animate-on-scroll" data-animation="fade-in-up">
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference")}}>
    View All Tracks
  </button>
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:shadow-xl transform">
    More About Tracks
  </button>
</div>
    </div>
  );
};

export default ConferenceAgenda;