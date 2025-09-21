import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Retail.css';
import Agriculture from '../../../assets/IndustryTracksImage/Agriculture.png'
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
    <div className="max-w-6xl mx-auto p-8 bg-white text-gray-800 font-sans" id="Agriculture">

      {/* Page 1 */}
      <div className="min-h-screen">
        <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
                 <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                   {/* Background Image - Replace with your image */}
                   <div 
                     className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                     style={{
                       backgroundImage: `url(${Agriculture})`, // Replace with your image URL
                     }}
                   >
                     {/* Dark overlay */}
                     <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                     
                     {/* Content */}
                     <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                         AI in Agriculture 
                        
                       </h1>
                       <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                         Reaping the Benefits of Artifical Intelligence in Agricuture.
                       </p>
                       <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300 w-fit" onClick={()=>{navigate('/gais/ticket')}}>
                         Book Pass
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
        <h1 className="text-5xl font-bold text-black mb-8 tracking-wide animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Antonio, sans-serif'}}>AGENDAS</h1>
        
        <p className="text-lg leading-relaxed mb-8 text-justify animate-on-scroll" data-animation="fade-in-up">
          This track will explore how artificial intelligence is revolutionizing agriculture, enabling smarter, more 
          efficient, and sustainable farming practices. From precision farming and crop health monitoring to predictive 
          analytics for yield optimization and supply chain management, AI is transforming how food is grown, 
          managed, and delivered. Attendees will gain insights into how these innovations are improving productivity, 
          reducing resource wastage, and addressing global food security challenges. By understanding emerging 
          trends, overcoming adoption barriers, and learning from real-world case studies, participants will discover 
          how to leverage AI to drive innovation, sustainability, and competitive advantage in the agricultural sector.
        </p>

        <h2 className="text-3xl font-bold text-black mb-6 animate-on-scroll" data-animation="slide-in-left">SESSIONS:</h2>

        {/* Opening Keynote */}
        <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
          <h3 className="text-xl font-bold mb-2">Opening Keynote</h3>
          <p className="mb-1"><span className="font-bold">Topic:</span> Cultivating the Future: How AI is Transforming Agriculture from Farm to Fork.</p>
          <p className="mb-1"><span className="font-bold">Time:</span> 30 minutes</p>
          <p className="mb-4"><span className="font-bold">Overview:</span> An exploration of how artificial intelligence is revolutionizing farming practices, boosting yields, enabling climate-smart agriculture, and shaping the global food ecosystem.</p>
        </div>

        {/* Two Column Layout for Sessions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8 animate-on-scroll" data-animation="slide-in-left">
            <div>
              <h3 className="text-lg font-bold mb-2">Precision Agriculture – Solving the Challenge of Maximizing Yields with Minimal Resources</h3>
              <p className="text-sm leading-relaxed"><span className="font-bold">Overview:</span> Exploring how AI-powered precision farming uses data from satellites, drones, and IoT sensors to optimize water, fertilizer, and pesticide use, enabling farmers to increase productivity while reducing environmental impact.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Early Pest and Disease Detection – Stopping Crop Loss Before It Starts</h3>
              <p className="text-sm leading-relaxed"><span className="font-bold">Overview:</span> Understanding AI's role in detecting pests and diseases through image recognition and predictive analytics to prevent large-scale damage and minimize pesticide overuse.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">AI for Livestock Welfare and Productivity</h3>
              <p className="text-sm leading-relaxed"><span className="font-bold">Overview:</span> Leveraging AI to monitor animal health, optimize feeding, and detect early signs of illness, ensuring better yields and animal welfare.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Autonomous Farm Robotics – Reimagining Labor in Agriculture</h3>
              <p className="text-sm leading-relaxed"><span className="font-bold">Overview:</span> Examining AI-driven harvesting robots, autonomous tractors, and automated planting systems that address labor shortages and increase efficiency.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Food Safety in the Age of AI</h3>
              <p className="text-sm leading-relaxed"><span className="font-bold">Overview:</span> How AI can detect contamination, monitor quality, and ensure compliance with food safety standards throughout the supply chain.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">AI-Powered Smart Irrigation – Ending Water Wastage</h3>
              <p className="text-sm leading-relaxed"><span className="font-bold">Overview:</span> How AI uses soil moisture data and weather forecasts to deliver the right amount of water at the right time, conserving water while boosting crop health.</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 animate-on-scroll" data-animation="slide-in-right">
            <div>
              <h3 className="text-lg font-bold mb-2">Can AI Predict the Future of Harvests?</h3>
              <p className="text-sm leading-relaxed"><span className="font-bold">Overview:</span> A deep dive into AI models that analyze weather patterns, soil conditions, and crop data to forecast yields and plan harvesting schedules with higher accuracy.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Smart Soil Health Management</h3>
              <p className="text-sm leading-relaxed"><span className="font-bold">Overview:</span> How AI-driven soil analysis can guide nutrient management, improve fertility, and enhance long-term sustainability of farmland.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Tackling the Global Food Waste Problem with AI Supply Chain Optimization</h3>
              <p className="text-sm leading-relaxed"><span className="font-bold">Overview:</span> How AI improves traceability, reduces inefficiencies, and ensures timely delivery of fresh produce from farms to consumers.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Climate-Smart Agriculture with AI</h3>
              <p className="text-sm leading-relaxed"><span className="font-bold">Overview:</span> Using AI to help farmers adapt to extreme weather, changing seasons, and unpredictable environmental conditions.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Bridging the Knowledge Gap – Helping Smallholder Farmers Adopt AI Tools</h3>
              <p className="text-sm leading-relaxed"><span className="font-bold">Overview:</span> How to make AI accessible, affordable, and usable for farmers in developing regions.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Transforming Data into Decisions – AI Analytics for Agriculture</h3>
              <p className="text-sm leading-relaxed"><span className="font-bold">Overview:</span> Discussing how farmers can turn raw data from multiple sources into actionable insights that drive profitability and innovation.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">The Data Drought Problem – How to Collect Quality Agricultural Data</h3>
              <p className="text-sm leading-relaxed"><span className="font-bold">Overview:</span> Overcoming the challenge of poor data availability and fragmented records in agriculture.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div className="min-h-screen mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8 animate-on-scroll" data-animation="slide-in-left">
            <div>
              <h3 className="text-lg font-bold mb-2">AI-Driven Vertical Farming & Controlled Environment Agriculture Innovations in AI</h3>
              <p className="text-sm leading-relaxed"><span className="font-bold">Overview:</span> Innovations in AI-powered indoor farming, hydroponics, and aeroponics to boost urban food production.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">AI in Agricultural Policy & Subsidy Optimization</h3>
              <p className="text-sm leading-relaxed">Using AI to help governments design better subsidies, crop insurance, and policy interventions.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Market Price Forecasting & Farmer Profitability</h3>
              <p className="text-sm leading-relaxed">How AI can predict market demand and prices to help farmers sell at the right time for better margins.</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 animate-on-scroll" data-animation="slide-in-right">
            <div>
              <h3 className="text-lg font-bold mb-2">Carbon Farming & Sustainability Credits with AI</h3>
              <p className="text-sm leading-relaxed">Using AI to measure and verify carbon sequestration in agricultural land for sustainability incentives.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Next-Gen Seed Breeding with AI</h3>
              <p className="text-sm leading-relaxed">Leveraging AI in genetic research to develop climate-resilient, disease-resistant, and high-yield crop varieties.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Blockchain + AI for Agriculture Traceability</h3>
              <p className="text-sm leading-relaxed">Combining AI analytics with blockchain records to ensure transparency from farm to fork.</p>
            </div>
          </div>
        </div>
         <div className="mt-8 flex gap-4 animate-on-scroll" data-animation="fade-in-up">
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-600 transition-colors duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate('/gais/conference')}}>
    View All Tracks
  </button>
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-600 transition-colors duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference/ai-agriculture-summit")}}>
    More About Tracks
  </button>
</div>
      </div>
      
    </div>
  );
};

export default ConferenceAgenda;