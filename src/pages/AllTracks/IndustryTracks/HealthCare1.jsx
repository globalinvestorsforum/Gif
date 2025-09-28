import React from 'react';
import Healthcare1 from '../../../assets/IndustryTracksImage/HealthCare1.png'
import {useRef,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
const HealthcareAgenda = () => {
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
    <div className="max-w-6xl mx-auto p-8 bg-white" id="HealthCare1">
        <div className="mb-16 animate-on-scroll" data-animation="fade-in-up">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                          {/* Background Image - Replace with your image */}
                          <div 
                            className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                            style={{
                              backgroundImage: `url(${Healthcare1})`, // Replace with your image URL
                            }}
                          >
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                            
                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                                AI IN HEALTHCARE & MEDICAL TECHNOLOGIES
                  
                              </h1>
                              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                                Reinventing Care Delivery with AI-powered Diagnosis, Monitoring, and Smart Hospitals
                              </p>
                              <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300 w-fit" onClick={()=>{navigate("/gais/ticket")}}>
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
        
        <p className="text-gray-700 text-base leading-relaxed mb-8 animate-on-scroll" data-animation="fade-in-up">
          AI is rapidly transforming the way healthcare is delivered, from diagnosis to patient monitoring and 
          hospital operations. This track explores how intelligent systems are enhancing clinical decision-making, 
          enabling faster and more accurate diagnostics, and improving patient engagement through telemedicine, 
          virtual assistants, and wearables. Discussions will highlight how AI can predict risks before symptoms 
          appear, personalize care, and reshape the hospital of the future into a smart, efficient, and patient-centric 
          environment.
        </p>
      </div>

      {/* Ideal Attendees Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 animate-on-scroll" data-animation="slide-in-left">
          IDEAL ATTENDEES:
        </h2>
        
        <ul className="space-y-2 text-gray-900">
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>Healthcare Providers:</strong> Hospital executives, physicians, surgeons, clinicians, medical directors.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>Technology Leaders:</strong> Chief AI Officers, Chief Digital Officers, CIOs, CTOs, AI/ML scientists.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>MedTech & Pharma:</strong> R&D heads, product managers, innovation leads in medical devices and pharma.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>Researchers & Academics:</strong> AI in medicine researchers, bioinformatics experts, university labs.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>Startups & Innovators:</strong> Founders/CEOs of digital health, telemedicine, and wearable tech startups.</span>
          </li>
        </ul>
      </div>

      {/* Topic Includes Section */}
      <div>
        <h2 className="text-2xl font-bold text-black mb-6">
          TOPIC INCLUDES:
        </h2>
        
        <ul className="space-y-2 text-gray-900">
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>How can AI-driven Clinical Decision Support Systems transform physician decision-making?</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Accelerating early detection and precision diagnosis with Diagnostic AI.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>What hidden biomarkers can AI uncover through Radiomics?</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Digital Pathology: AI for next-generation histology and cellular analysis.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Beyond video calls: How AI is elevating telemedicine into intelligent care.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>From chatbot to co-pilot: The evolution of virtual health assistants.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Is continuous AI monitoring the key to preventive healthcare?</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Personalized health insights powered by wearable technologies.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Can AI predict patient risk before symptoms appear?</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>The intelligent hospital of the future: optimizing operations and patient care with AI.</span>
          </li>
        </ul>
      </div>
       <div className="mt-8 flex gap-4 animate-on-scroll" data-animation="fade-in-up">
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-colors duration-300" onClick={()=>{navigate("/gais/conference")}}>
    View All Tracks
  </button>
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-colors duration-300">
    More About Tracks
  </button>
</div>
    </div>
  );
};

export default HealthcareAgenda;