import React from 'react';
import Healthcare2 from '../../../assets/IndustryTracksImage/HealthCare2.png'
import {useRef, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
const BiotechAgenda = () => {
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
    <div className="max-w-6xl mx-auto p-8 bg-white" id="HealthCare2">
         <div className="mb-16 animate-on-scroll" data-animation="fade-in-up">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                  {/* Background Image - Replace with your image */}
                                  <div 
                                    className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                                    style={{
                                      backgroundImage: `url(${Healthcare2})`, // Replace with your image URL
                                    }}
                                  >
                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                                    
                                    {/* Content */}
                                    <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                                        AI IN PHARMA, BIOTECH & LIFE SCIENCES
                          
                                      </h1>
                                      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                                        Accelerating Drug Discovery, Genomics, and Precision Medicine through AI
                                      </p>
                                      <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 w-fit hover:scale-105 hover:shadow-lg transform" onClick={()=>{navigate("/gais/ticket")}}>
                                        Book Pass
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6 tracking-wide animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Antonio, sans-serif'}}>
          AGENDAS
        </h1>
        
        <p className="text-gray-900 leading-relaxed text-base animate-on-scroll" data-animation="fade-in-up">
          This track examines how AI is accelerating innovation across pharma, biotech, and life sciences. 
          Participants will learn how AI is driving faster drug discovery, optimizing clinical trials, and enabling 
          breakthroughs in genomics and precision medicine. You will gain insights into how digital twins, lab 
          automation, and AI-powered bioinformatics are reshaping biomedical research, while also exploring the 
          challenges of regulation, compliance, and supply chain transformation.
        </p>
      </div>

      {/* Ideal Attendees Section */}
      <div className="mb-12 animate-on-scroll" data-animation="slide-in-left">
        <h2 className="text-2xl font-bold text-black mb-6">
          IDEAL ATTENDEES:
        </h2>
        
        <ul className="space-y-2 text-gray-900">
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>Care Providers:</strong> Physicians, nurses, therapists, general practitioners, specialists.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>Hospital Management:</strong> Clinical operations directors, CMOs (Chief Medical Officers), care coordinators.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>Patient Experience & Engagement Leaders:</strong> Heads of patient experience, telehealth managers.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>Health IT Teams:</strong> EHR managers, clinical data managers, digital transformation officers.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>AI Developers:</strong> Innovators building AI-powered diagnostic tools, decision support systems, and care apps.</span>
          </li>
        </ul>
      </div>

      {/* Topic Includes Section */}
      <div className="animate-on-scroll" data-animation="fade-in-up">
        <h2 className="text-2xl font-bold text-black mb-6">
          TOPIC INCLUDES:
        </h2>
        
        <ul className="space-y-2 text-gray-900">
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Can AI unlock faster and more cost-effective drug discovery?</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Repurposing existing drugs with AI – new cures for old molecules.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Optimizing clinical trials: Can AI transform patient recruitment and monitoring?</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Genomics & Precision Medicine – tailoring treatments with AI insights.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>How is AI reshaping proteomics and bioinformatics for biomedical research?</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Digital twins in life sciences: modeling human biology for breakthrough therapies.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Automating biomedical research with AI-powered lab systems.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Navigating compliance and safety: AI's role in regulatory affairs.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Intelligent supply chains – ensuring efficiency and resilience in pharma manufacturing.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>AI-driven biomedical devices: from diagnostics to personalized treatment tools.</span>
          </li>
        </ul>
      </div>
      <div className="mt-8 flex gap-4 animate-on-scroll" data-animation="fade-in-up">
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference")}}>
    View All Tracks
  </button>
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference/ai-pharmaceutical-summit")}}>
    More About Tracks
  </button>
</div>
    </div>
  );
};

export default BiotechAgenda;