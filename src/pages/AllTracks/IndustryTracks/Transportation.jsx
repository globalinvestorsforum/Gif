import React,{ useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import Transportation from '../../../assets/IndustryTracksImage/Transportation.png'
export default function TransportationAgendasPage() {
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
    <div className="max-w-6xl mx-auto p-8 bg-white font-sans" id="Transportation">
       <div className="mb-16 animate-on-scroll" data-animation="fade-in-up">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  {/* Background Image - Replace with your image */}
                  <div 
                    className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url(${Transportation})`, // Replace with your image URL
                    }}
                  >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                        AI in Transportation
          
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                        Navigating a new era of Smart Mobility.
                      </p>
                      <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300 w-fit" onClick={()=>{navigate("/gais/ticket")}}>
                        Book Pass
                      </button>
                    </div>
                  </div>
                </div>
              </div>
      <h1 className="text-5xl font-bold text-black mb-8 animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Antonio, sans-serif'}}>AGENDAS</h1>
      
      <p className="text-gray-800 leading-relaxed mb-8 animate-on-scroll" data-animation="fade-in-up">
        This track will examine how artificial intelligence is revolutionizing the transportation industry, driving a shift 
        toward safer, smarter, and more sustainable mobility solutions. From autonomous vehicles and intelligent traffic 
        management systems to predictive maintenance, logistics optimization, and AI-powered public transport, the 
        future of mobility is being shaped by data-driven innovation. Attendees will explore how AI is enhancing safety, 
        reducing congestion, lowering emissions, and creating seamless travel experiences for individuals and 
        businesses alike. The track will also address key challenges such as regulatory frameworks, infrastructure 
        readiness, cybersecurity, and ethical considerations, offering a holistic view of how AI is set to redefine global 
        transportation.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-on-scroll" data-animation="slide-in-left">SESSIONS:</h2>

      {/* Opening Keynote */}
      <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Opening Keynote</h3>
        <p className="text-gray-800 mb-1"><strong>Topic:</strong> AI at the Wheel: Shaping the Future of Transportation & Smart Mobility</p>
        <p className="text-gray-800 mb-1"><strong>Time:</strong> 30 minutes</p>
        <p className="text-gray-800 mb-6"><strong>Overview:</strong> How artificial intelligence is transforming public transport, aviation, railways, and urban mobility systems.</p>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6 animate-on-scroll" data-animation="slide-in-left">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Autonomous Vehicles & Mobility</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Exploring perception, decision-making, and navigation systems that power safe, efficient, and reliable autonomous mobility.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">AI in Railways: Smarter, Safer, and More Reliable Operations</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Predictive maintenance, route optimization, and AI-powered monitoring for modern rail transport.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Can AI End Traffic Congestion in Growing Urban Cities?</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Using AI to design adaptive traffic control, smart signals, and congestion forecasting.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Smart Mobility-as-a-Service (MaaS)</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Integrating ride-sharing, public transport, and autonomous vehicles into seamless AI-powered urban mobility platforms.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Sustainable & Green Transportation with AI</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Reducing emissions, improving fuel efficiency, and supporting clean transportation initiatives.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 animate-on-scroll" data-animation="slide-in-right">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">How is AI Redefining Public Transportation Systems for Smart Cities?</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Real-time scheduling, passenger flow optimization, and AI-driven traffic management.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Optimizing Aviation with AI</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: From flight route efficiency to predictive safety checks, AI's role in reshaping the aviation industry.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">AI for Logistics & Freight Transportation</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Enhancing trucking, cargo tracking, and last-mile delivery through intelligent systems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Is AI the Key to Achieving Zero-Accident Transportation?</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Advanced driver-assistance systems (ADAS), safety monitoring, and predictive accident prevention.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">AI and Human-Centric Transportation</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Balancing automation with safety, accessibility, and inclusive mobility solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex gap-4 animate-on-scroll" data-animation="fade-in-up">
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference")}}>
    View All Tracks
  </button>
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference/ai-AI-Driven-Transporatation-Summit")}}>
    More About Tracks
  </button>
</div>
    </div>
  );
}