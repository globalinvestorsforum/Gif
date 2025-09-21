import React from 'react';
import './Retail.css';
import Healthcare3 from '../../../assets/IndustryTracksImage/HealthCare3.png'
import {useRef, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
const HealthcarePolicyAgenda = () => {
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
    <div className="max-w-6xl mx-auto p-8 bg-white" id="HealthCare3">
      {/* Header */}
      <div className="mb-16">
                                      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                        {/* Background Image - Replace with your image */}
                                        <div 
                                          className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                                          style={{
                                            backgroundImage: `url(${Healthcare3})`, // Replace with your image URL
                                          }}
                                        >
                                          {/* Dark overlay */}
                                          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                                          
                                          {/* Content */}
                                          <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                                              AI in Healthcare Systems, Payors & Policy
                                
                                            </h1>
                                            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                                              Reshaping Insurance, Payors, and Public Health Governance through AI
                                            </p>
                                            <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 w-fit hover:scale-105 hover:shadow-lg transform" onClick={()=>{navigate("/gais/ticket")}}>
                                              Book Pass
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-black mb-6 tracking-wide animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Antonio, sans-serif'}}>
          AGENDAS
        </h1>
        
        <p className="text-gray-900 leading-relaxed text-base animate-on-scroll" data-animation="fade-in-up">
          Beyond the clinic and laboratory, AI is transforming the broader healthcare ecosystem — insurance, 
          economics, governance, and public health. This track addresses how payors and insurers are leveraging AI 
          for fraud detection and smarter pricing, how policymakers can ensure equitable and ethical AI adoption, 
          and how privacy-first approaches like federated learning are protecting sensitive health data. It also 
          explores AI's role in mental health, global health equity, and the creation of future-ready healthcare 
          systems that are both affordable and accessible.
        </p>
      </div>

      {/* Ideal Attendees Section */}
      <div className="mb-12 animate-on-scroll" data-animation="slide-in-left">
        <h2 className="text-2xl font-bold text-black mb-6">
          IDEAL ATTENDEES:
        </h2>
        
        <ul className="space-y-2 text-black">
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>Payors & Insurers:</strong> Executives from health insurance companies, claims managers, actuarial leaders.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>Healthcare Systems Executives:</strong> CEOs, COOs, CFOs, and strategy heads from hospitals and health networks.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>Policy Makers & Regulators:</strong> Government health officials, public health administrators, regulatory authorities.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>AI & Data Leaders:</strong> Chief Data Officers, AI policy researchers, digital health regulators.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span><strong>Consultants & Think Tanks:</strong> Healthcare economists, advisors, consultants shaping policy and payor models.</span>
          </li>
        </ul>
      </div>

      {/* Topic Includes Section */}
      <div className="animate-on-scroll" data-animation="fade-in-up">
        <h2 className="text-2xl font-bold text-black mb-6">
          TOPIC INCLUDES:
        </h2>
        
        <ul className="space-y-2 text-black">
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>How is AI reshaping insurance claims, fraud detection, and pricing models?</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Redefining healthcare economics – can AI make care more affordable?</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Predicting disease outbreaks: AI in population health and epidemiology.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Public health policy in the AI era – opportunities and risks.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Federated learning and privacy-first AI – the future of secure health data.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Breaking silos: How interoperability can unlock the true potential of AI in healthcare.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Can ethical and explainable AI restore trust in digital healthcare?</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>Mental health in focus: AI-powered therapy and behavioral monitoring.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>AI for global health equity – bridging gaps in underserved regions.</span>
          </li>
          <li className="flex items-start">
            <span className="text-black mr-2">•</span>
            <span>The future healthcare ecosystem – building AI-driven, patient-centric systems.</span>
          </li>
        </ul>
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
  );
};

export default HealthcarePolicyAgenda;