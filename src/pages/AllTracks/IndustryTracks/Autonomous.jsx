import React, { useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom' 
import './Retail.css';
import Autonomous from '../../../assets/IndustryTracksImage/Autonomous_Sys.png'
const ConferenceAgenda = () => {
  const navigate=useNavigate()
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
    <div className="max-w-6xl mx-auto p-8 bg-white" id="Autonomous">
        <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
                                 <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                   {/* Background Image - Replace with your image */}
                                   <div 
                                     className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                                     style={{
                                       backgroundImage: `url(${Autonomous})`, // Replace with your image URL
                                     }}
                                   >
                                     {/* Dark overlay */}
                                     <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                                     
                                     {/* Content */}
                                     <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                                       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                                         AI IN AUTONOMOUS SYSTEMS
                                        
                                       </h1>
                                       <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                                         Driving Cross-Industry Transformation with Autonomous AI Solutions
                                       </p>
                                       <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300 w-fit" onClick={()=>{navigate('/gais/ticket')}}>
                                         Book Pass
                                       </button>
                                     </div>
                                   </div>
                                 </div>
                               </div>
      {/* Header */}
      <h1 className="text-3xl sm:text-5xl font-bold text-black mb-8 animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Antonio, sans-serif'}}>AGENDAS</h1>
      
      {/* Introduction Paragraph */}
      <p className="text-gray-700 leading-relaxed mb-8 animate-on-scroll" data-animation="fade-in-up">
        This track will explore how artificial intelligence is revolutionizing agriculture, enabling smarter, more 
        efficient, and sustainable farming practices. From precision farming and crop health monitoring to predictive 
        analytics for yield optimization and supply chain management, AI is transforming how food is grown, 
        managed, and delivered. Attendees will gain insights into how these innovations are improving productivity, 
        reducing resource wastage, and addressing global food security challenges. By understanding emerging 
        trends, overcoming adoption barriers, and learning from real-world case studies, participants will discover 
        how to leverage AI to drive innovation, sustainability, and competitive advantage in the agricultural sector.
      </p>
      
      {/* Sessions Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-on-scroll" data-animation="slide-in-left">SESSIONS:</h2>
      
      {/* Opening Keynote */}
      <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Opening Keynote</h3>
        <p className="text-gray-700 mb-1"><span className="font-semibold">Topic:</span> The Age of Autonomy: AI and the Future of Intelligent Systems</p>
        <p className="text-gray-700 mb-1"><span className="font-semibold">Time:</span> 30 minutes</p>
        <p className="text-gray-700"><span className="font-semibold">Overview:</span> Exploring how AI-driven autonomy is reshaping industries, societies, and economies—from self-driving cars and drones to robots, defense, and space exploration.</p>
      </div>
      
      {/* Session Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Autonomous Vehicles & Mobility */}
        <div className="mb-6 animate-on-scroll" data-animation="slide-in-left">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Autonomous Vehicles & Mobility</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>How is AI redefining the future of self-driving cars and public transport?</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Exploring perception, decision-making, and navigation systems that power safe, efficient, and reliable autonomous mobility.</span>
            </li>
          </ul>
        </div>
        
        {/* AI in Drones & Aerial Systems */}
        <div className="mb-6 animate-on-scroll" data-animation="slide-in-right">
          <h3 className="text-lg font-bold text-gray-800 mb-3">AI in Drones & Aerial Systems</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Can AI make drones smarter, safer, and more versatile?</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Applications in logistics, agriculture, defense, disaster response, and aerial monitoring through AI-powered autonomy.</span>
            </li>
          </ul>
        </div>
        
        {/* Robotics & Industrial Automation */}
        <div className="mb-6 animate-on-scroll" data-animation="slide-in-left">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Robotics & Industrial Automation</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>How is AI transforming robots into adaptive, collaborative systems?</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>AI-enabled robots for manufacturing, logistics, and healthcare—boosting efficiency, adaptability, and collaboration with humans.</span>
            </li>
          </ul>
        </div>
        
        {/* AI for Maritime & Aviation Autonomy */}
        <div className="mb-6 animate-on-scroll" data-animation="slide-in-right">
          <h3 className="text-lg font-bold text-gray-800 mb-3">AI for Maritime & Aviation Autonomy</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>How close are we to fully autonomous ships and aircraft?</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Leveraging AI in navigation, predictive maintenance, route optimization, and autonomous control for next-gen transportation.</span>
            </li>
          </ul>
        </div>
        
        {/* AI in Defense & Security Systems */}
        <div className="mb-6 animate-on-scroll" data-animation="slide-in-left">
          <h3 className="text-lg font-bold text-gray-800 mb-3">AI in Defense & Security Systems</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>What role will autonomous AI systems play in national security?</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Intelligent autonomous systems for surveillance, border security, and threat detection, while addressing ethical and safety concerns.</span>
            </li>
          </ul>
        </div>
        
        {/* Human-Machine Collaboration */}
        <div className="mb-6 animate-on-scroll" data-animation="slide-in-right" >
          <h3 className="text-lg font-bold text-gray-800 mb-3">Human-Machine Collaboration</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Will autonomous systems replace humans or empower them?</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>The rise of cobots, adaptive learning systems, and AI-driven decision support tools for human-AI synergy.</span>
            </li>
          </ul>
        </div>
        
        {/* AI in Space Exploration & Robotics */}
        <div className="mb-6 animate-on-scroll" data-animation="slide-in-left">
          <h3 className="text-lg font-bold text-gray-800 mb-3">AI in Space Exploration & Robotics</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Can AI lead the way in exploring beyond Earth?</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Autonomy in rovers, satellites, and space robotics to enable deep-space exploration and resource discovery.</span>
            </li>
          </ul>
        </div>
        
        {/* Ethical & Regulatory Challenges in Autonomy */}
        <div className="mb-6 animate-on-scroll" data-animation="slide-in-right">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Ethical & Regulatory Challenges in Autonomy</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Can society build trust in fully autonomous systems?</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Addressing safety, liability, transparency, and trust issues in deploying autonomous systems at scale.</span>
            </li>
          </ul>
        </div>
        
        {/* AI in Agriculture & Farming Robotics */}
        <div className="mb-6 animate-on-scroll" data-animation="slide-in-left">
          <h3 className="text-lg font-bold text-gray-800 mb-3">AI in Agriculture & Farming Robotics</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>How are autonomous farming robots changing food production?</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Self-driving tractors, AI harvesters, and drone-based monitoring systems transforming global agriculture.</span>
            </li>
          </ul>
        </div>
        
        {/* Future of Fully Autonomous Ecosystems */}
        <div className="mb-6 animate-on-scroll" data-animation="slide-in-right">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Future of Fully Autonomous Ecosystems</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Are we ready for a society powered by autonomous systems?</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2">•</span>
              <span>Imagining a future with interconnected autonomous mobility, infrastructure, and industries shaping smarter cities and economies</span>
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