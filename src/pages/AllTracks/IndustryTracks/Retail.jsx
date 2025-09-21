import React, { useEffect, useRef } from 'react';
import {useNavigate} from "react-router-dom"
import RetailBack from '../../../assets/IndustryTracksImage/Retail&Ecommerce.png';
import './Retail.css';
const AgendaPage = () => {
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
    <div className="bg-white min-h-screen" id="Retail">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* CARD */}
        <div  className="mb-16 animate-on-scroll" data-animation="fade-in-up">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Background Image - Replace with your image */}
            <div 
              className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${RetailBack})`, // Replace with your image URL
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                  AI in Retail &<br />
                  E-commerce
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                  AI-Powered Innovation for the Future of Retail and Online Commerce
                </p>
                <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 w-fit hover:scale-105 hover:shadow-lg transform" onClick={()=>{navigate("/gais/ticket")}}>
                  Book Pass
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-black mb-6 tracking-wide animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Antonio, sans-serif'}}>
            AGENDAS
          </h1>
          
          <p className="text-gray-700 text-base leading-relaxed mb-8 animate-on-scroll" data-animation="fade-in-up" style={{fontFamily: 'Arial, sans-serif'}}>
            This track will explore how Artificial Intelligence is redefining retail and online commerce, enabling brands to 
            deliver hyper-personalized shopping experiences, predict consumer behavior, optimize inventory, and 
            enhance operations across the value chain. From AI-driven pricing and targeted marketing to virtual try-ons, 
            automated product recommendations, and real-time fraud detection, AI is unlocking new levels of efficiency, 
            engagement, and growth. Attendees will gain insights into the latest AI-powered innovations shaping the 
            future of retail and e-commerce and learn how to harness these technologies for competitive advantage.
          </p>
        </div>

        {/* Sessions Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Arial, sans-serif'}}>
            SESSIONS:
          </h2>
          
          {/* Opening Keynote */}
          <div className="mb-6 animate-on-scroll" data-animation="fade-in-up">
            <div className="mb-2">
              <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Opening Keynote</span>
            </div>
            <div className="mb-1">
              <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Topic: </span>
              <span className="text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>The Future of AI in Retail & E-Commerce</span>
            </div>
            <div className="mb-2">
              <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Duration: </span>
              <span className="text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>30 mins</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed" style={{fontFamily: 'Arial, sans-serif'}}>
              Visionary insights on how AI is transforming the customer journey, logistics, 
              marketing, and operations across the retail landscape.
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-8 animate-on-scroll" data-animation="slide-in-left">
            
            {/* Personalized Shopping at Scale */}
            <div>
              <div className="flex items-start mb-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{fontFamily: 'Arial, sans-serif'}}>
                    Personalized Shopping at Scale
                  </h3>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Topic: </span>
                    <span className="text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>AI-Powered Personalization: Beyond Recommendations</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Overview: </span>
                    <span className="text-gray-700 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>
                      Discover how AI is transforming shopping experiences through dynamic customer profiling, 
                      hyper-personalized journeys, and predictive analytics—empowering brands to connect with 
                      customers like never before.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI-Powered Visual Commerce */}
            <div>
              <div className="flex items-start mb-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{fontFamily: 'Arial, sans-serif'}}>
                    AI-Powered Visual Commerce
                  </h3>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Topic: </span>
                    <span className="text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>From Text to Visuals: AI's Role in Image Search & Virtual Try-On</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Overview: </span>
                    <span className="text-gray-700 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>
                      Learn how computer vision enables visual product search, how AR/VR powers virtual fitting 
                      rooms, and how generative AI enhances the customer experience.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Generative AI in Retail Content */}
            <div>
              <div className="flex items-start mb-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{fontFamily: 'Arial, sans-serif'}}>
                    Generative AI in Retail Content
                  </h3>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Topic: </span>
                    <span className="text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Automating Creativity: AI in Product Descriptions, Ads & Social Content</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Overview: </span>
                    <span className="text-gray-700 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>
                      Discover how AI automates product listings, generates ad creatives, and supports A/B 
                      testing with dynamic generative content.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Predictive Consumer Insights */}
            <div>
              <div className="flex items-start mb-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{fontFamily: 'Arial, sans-serif'}}>
                    Predictive Consumer Insights
                  </h3>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Topic: </span>
                    <span className="text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>How Can AI Anticipate the Next Move in Consumer Behaviour Through Behavioral Forecasting?</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Overview: </span>
                    <span className="text-gray-700 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>
                      Learn how AI predicts customer lifetime value, identifies churn risks, and applies market basket 
                      analysis for strategic decision-making.
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-8 animate-on-scroll" data-animation="slide-in-right">
            
            {/* AI in Retail Operations & Inventory */}
            <div>
              <div className="flex items-start mb-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{fontFamily: 'Arial, sans-serif'}}>
                    AI in Retail Operations & Inventory
                  </h3>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Topic: </span>
                    <span className="text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Smarter Shelves: AI-Driven Inventory and Demand Forecasting</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Overview: </span>
                    <span className="text-gray-700 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>
                      Explore how machine learning optimizes inventory, enhances supply 
                      chain visibility, and uses predictive AI to prevent stockouts and overstock 
                      situations.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversational AI & Customer Support */}
            <div>
              <div className="flex items-start mb-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{fontFamily: 'Arial, sans-serif'}}>
                    Conversational AI & Customer Support
                  </h3>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Topic: </span>
                    <span className="text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Building Retail Chatbots That Actually Sell</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Overview: </span>
                    <span className="text-gray-700 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>
                      Understand how AI chatbots deliver 24/7 engagement, how multilingual assistants 
                      reach wider audiences, and how AI reduces support costs while improving satisfaction.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI in Payments & Fraud Detection */}
            <div>
              <div className="flex items-start mb-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{fontFamily: 'Arial, sans-serif'}}>
                    AI in Payments & Fraud Detection
                  </h3>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Topic: </span>
                    <span className="text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>How Can AI Secure Transactions and Fight Fraud in Real Time?</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Overview: </span>
                    <span className="text-gray-700 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>
                      Explore real-time fraud detection through anomaly detection, advanced biometric 
                      and behavioral authentication, and AI in payment optimization
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI-Driven Pricing and Promotions */}
            <div>
              <div className="flex items-start mb-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{fontFamily: 'Arial, sans-serif'}}>
                    AI-Driven Pricing and Promotions
                  </h3>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Topic: </span>
                    <span className="text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>The Science of Dynamic Pricing: Real-Time Optimization with AI</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Overview: </span>
                    <span className="text-gray-700 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>
                      Understand how AI models enable competitive pricing, adjust prices in real-time 
                      based on demand, and optimize campaigns and discounts.
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* AI Ethics and Privacy */}
        <div className="mt-8 animate-on-scroll" data-animation="fade-in-up">
          <div className="flex items-start mb-3">
            <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1" style={{fontFamily: 'Arial, sans-serif'}}>
                AI Ethics and Privacy in Retail
              </h3>
              <div className="mb-2">
                <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Topic: </span>
                <span className="text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Balancing Personalization with Privacy</span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Overview: </span>
                <span className="text-gray-700 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>
                  A 30-minute panel discussion with data scientists, legal experts, and CMOs on ensuring 
                  responsible AI use, building customer trust, and complying with regulations like GDPR.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Keynote */}
        <div  className="mt-8 pt-4 animate-on-scroll" data-animation="fade-in-up">
          <div className="mb-2">
            <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Closing Keynote</span>
          </div>
          <div className="mb-1">
            <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Topic: </span>
            <span className="text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>AI-First Retail: What's Next?</span>
          </div>
          <div className="mb-2">
            <span className="font-bold text-gray-900" style={{fontFamily: 'Arial, sans-serif'}}>Overview: </span>
            <span className="text-gray-700 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>
              A 30-minute keynote by a leading retail technologist or futurist, sharing insights on emerging AI 
              innovations—from autonomous stores to AI-driven product development.
            </span>
          </div>
        </div>
        <div className="mt-8 flex gap-4 animate-on-scroll" data-animation="fade-in-up">
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference")}}>
    View All Tracks
  </button>
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference/ai-Powered-Retail-E-commerce-Conclave-summit")}}>
    More About Tracks
  </button>
</div>
      </div>
    </div>
  );
};

export default AgendaPage;