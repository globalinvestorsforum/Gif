import React, { useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import Autotech from '../../../assets/IndustryTracksImage/Autotech.png'
import './Retail.css';
export default function AutomotiveAIAgenda() {
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
    <div className="max-w-6xl mx-auto p-8 bg-white" id="Autotech">
        <div className="mb-16 animate-on-scroll" data-animation="fade-in-up">
                       <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                         {/* Background Image - Replace with your image */}
                         <div 
                           className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                           style={{
                             backgroundImage: `url(${Autotech})`, // Replace with your image URL
                           }}
                         >
                           {/* Dark overlay */}
                           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                           
                           {/* Content */}
                           <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                               AI in Autotech
                 
                             </h1>
                             <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                               Exploring the Future of AI and IOT in the Automobile Industry
                             </p>
                             <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300 w-fit" onClick={()=>{navigate("/gais/ticket")}}>
                               Book Pass
                             </button>
                           </div>
                         </div>
                       </div>
                     </div>
      <h1 className="text-5xl font-bold text-black mb-6 animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Antonio, sans-serif'}}>AGENDAS</h1>
      
      <p className="text-gray-700 mb-8 leading-relaxed animate-on-scroll" data-animation="fade-in-up">
        This track will explore how artificial intelligence and IoT are transforming the automotive industry, 
        enabling smarter, safer, and more sustainable mobility solutions. From autonomous driving and connected 
        vehicles to predictive maintenance and personalized in-car experiences, AI is reshaping how vehicles are 
        designed, produced, and operated. Attendees will gain insights into how these technologies are improving 
        efficiency, enhancing safety, and delivering superior customer experiences. By understanding emerging 
        trends, addressing implementation challenges, and learning from real-world applications, participants will 
        discover how to harness AI to drive innovation, competitiveness, and future growth in the rapidly evolving 
        automotive sector.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-on-scroll" data-animation="slide-in-left">SESSIONS:</h2>

      <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Opening Keynote</h3>
        <div className="mb-1  text-gray-800"><span className="font-bold  text-gray-800">Topic:</span> Driving the Future – AI & IoT in Automotive</div>
        <div className="mb-1  text-gray-800"><span className="font-bold  text-gray-800">Time:</span> 30 minutes</div>
        <div><span className="font-bold  text-gray-800">Overview:</span> Discover how AI and IoT are transforming vehicles into intelligent, connected, and autonomous machines. This session will highlight breakthroughs in safety, efficiency, and user experience, preparing participants to navigate and lead in the next era of mobility.</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6 animate-on-scroll" data-animation="slide-in-left">
          <div>
            <div className="font-bold text-gray-800 mb-2">Topic: Autonomous Vehicles – The Next Era of Mobility</div>
            <div className=" text-gray-800"><span className="font-bold  text-gray-800">Overview:</span> How AI is transforming self-driving technology, enabling real-time perception, decision-making, navigation, and safety systems. Includes exploration of regulatory challenges, ethics, and the roadmap for widespread adoption.</div>
          </div>

          <div>
            <div className="font-bold text-gray-800 mb-2">Topic: Intelligent Transportation Systems & Connected Infrastructure</div>
            <div className=" text-gray-800" ><span className="font-bold  text-gray-800">Overview:</span> How AI and IoT work together for smarter traffic management, integrated infrastructure, and enhanced safety through vehicle connectivity.</div>
          </div>

          <div>
            <div className="font-bold text-gray-800 mb-2">Topic: AI & Sustainability in Automotive Innovation</div>
            <div className=" text-gray-800"><span className="font-bold  text-gray-800">Overview:</span> Leveraging AI for electric and hybrid vehicle development, sustainable manufacturing, and energy-efficient design to meet environmental goals.</div>
          </div>

          <div>
            <div className="font-bold text-gray-800 mb-2">Topic: Data Analytics & Machine Learning in Automotive Design and Testing</div>
            <div className=" text-gray-800"><span className="font-bold  text-gray-800">Overview:</span> Using AI-driven simulations, big data analytics, and machine learning to optimize design, improve testing, and boost performance.</div>
          </div>
        </div>

        <div className="space-y-6 animate-on-scroll" data-animation="slide-in-right">
          <div>
            <div className="font-bold text-gray-800 mb-2">Topic: AI-Powered Manufacturing & Supply Chain Optimization</div>
            <div className=" text-gray-800"><span className="font-bold  text-gray-800">Overview:</span> The role of AI in streamlining automotive production, enhancing quality control, optimizing logistics, and enabling predictive maintenance to minimize downtime.</div>
          </div>

          <div>
            <div className="font-bold text-gray-800 mb-2">Topic: Enhancing Customer Experience with AI</div>
            <div className=" text-gray-800"><span className="font-bold  text-gray-800">Overview:</span> AI-powered personalization in vehicles, including virtual assistants, adaptive infotainment systems, and AR-based driver interfaces.</div>
          </div>

          <div>
            <div className="font-bold text-gray-800 mb-2">Topic: Cybersecurity for Connected and Autonomous Vehicles</div>
            <div className=" text-gray-800"><span className="font-bold  text-gray-800">Overview:</span> How AI detects and mitigates cyber threats, protecting both passenger safety and data privacy in connected vehicles.</div>
          </div>

          <div>
            <div className="font-bold text-gray-800 mb-2">Topic: V2X Communication and AI for Smart Mobility (Optional)</div>
            <div className=" text-gray-800"><span className="font-bold  text-gray-800">Overview:</span> How AI enables Vehicle-to-Everything communication, improving traffic coordination, reducing congestion, and integrating vehicles into smart cities</div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex gap-4 animate-on-scroll" data-animation="fade-in-up">
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference")}}>
    View All Tracks
  </button>
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference/ai-Next-Gen-Autotech-Conference")}}>
    More About Tracks
  </button>
</div>
    </div>
  );
}