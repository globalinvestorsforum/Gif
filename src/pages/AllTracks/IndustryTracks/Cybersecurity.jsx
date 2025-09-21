import React, { useEffect, useRef } from 'react';
import {useNavigate} from "react-router-dom"
import Cybersecurity from '../../../assets/IndustryTracksImage/Cybersecurity.png'
import './Retail.css';
export default function MediaJournalismAIAgenda() {
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
    <div className="max-w-6xl mx-auto p-8 bg-white">
        <div className="mb-16 animate-on-scroll" data-animation="fade-in-up" id="Cybersecurity">
                                       <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                         {/* Background Image - Replace with your image */}
                                         <div 
                                           className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                                           style={{
                                             backgroundImage: `url(${Cybersecurity})`, // Replace with your image URL
                                           }}
                                         >
                                           {/* Dark overlay */}
                                           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                                           
                                           {/* Content */}
                                           <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                                             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                                               AI in Cybersecurity
                                 
                                             </h1>
                                             <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                                               Exploring AI's Role in Fortifying Cybersecurity
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
        This track will explore how AI is revolutionizing the cybersecurity landscape—detecting threats faster, 
        automating responses, enhancing resilience, and safeguarding digital ecosystems against ever-evolving cyber 
        risks. Attendees will gain insights into AI-powered security frameworks, real-world applications, and future 
        trends shaping the protection of critical data and infrastructure. Participants will also learn how to leverage 
        AI-driven cybersecurity strategies to strengthen their defenses, stay ahead of emerging threats, and secure a 
        leadership position in the digital-first marketplace.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-on-scroll" data-animation="slide-in-left">SESSIONS:</h2>

      <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Opening Keynote</h3>
        <div className="text-gray-800 mb-1"><span className="font-bold">Topic:</span> AI as the Next Frontier in Cybersecurity</div>
        <div className="text-gray-800 mb-1"><span className="font-bold">Time:</span> 30 minutes</div>
        <div className="text-gray-800"><span className="font-bold">Overview:</span> An exploration of how artificial intelligence is transforming cybersecurity practices, from threat intelligence to automated response systems, and why AI is becoming indispensable in safeguarding the digital economy.</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6 animate-on-scroll" data-animation="slide-in-left">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">AI-Driven Threat Intelligence</h3>
            <div className="text-gray-800"><span className="font-bold">Overview:</span> How AI analyzes global threats, detects anomalies, and enables proactive defense across networks and endpoints</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Attack Detection & Mitigation</h3>
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Innovations in rapid identification of malware, phishing, and intrusion attempts using deep learning and automation.</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Use of AI in Attacks</h3>
            
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Understanding adversarial AI techniques used by attackers and practical approaches for robust countermeasures</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Automated Security Operations </h3>
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Applying AI for continuous monitoring, automatic patch management, and streamlining incident response</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Cyber Resilience & Disaster Recovery</h3>
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Strategies for maintaining operations and quickly recovering services amidst cyber incidents</div>
          </div>
        </div>

        <div className="space-y-6 animate-on-scroll" data-animation="slide-in-right">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Zero Trust & Identity Management</h3>
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Next-generation authentication, multi-factor systems, and protecting digital identities across distributed environments</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">AI in Broadcasting & Live Media</h3>
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Enhancing sports broadcasting, real-time translation, and immersive viewing experiences</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Privacy and Security Controls for AI</h3>
            
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Addressing data privacy, compliance, and responsible AI deployment within security frameworks</div>
            
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fraud Prevention & Security Convergence</h3>
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Integrating cybersecurity with fraud reduction strategies to combat evolving digital threats</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Regulatory Outlook & Global Compliance</h3>
            
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Navigating emerging cybersecurity certification frameworks and international regulations for AI and security</div>
            
          </div>
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
}