import React, { useEffect, useRef } from 'react';
import {useNavigate} from "react-router-dom"
import Energy from '../../../assets/IndustryTracksImage/Energy.png'
import './Retail.css';
export default function EnergyAIAgenda() {
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
    <div className="max-w-6xl mx-auto p-8 bg-white" id="Energy">
        <div className="mb-16 animate-on-scroll" data-animation="fade-in-up">
                               <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                 {/* Background Image - Replace with your image */}
                                 <div 
                                   className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                                   style={{
                                     backgroundImage: `url(${Energy})`, // Replace with your image URL
                                   }}
                                 >
                                   {/* Dark overlay */}
                                   <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                                   
                                   {/* Content */}
                                   <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                                       AI IN ENERGY
                         
                                     </h1>
                                     <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                                       Transforming the Energy Industry through AI and Machine Learning
                                     </p>
                                     <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300 w-fit" onClick={()=>{navigate("/gais/ticket")}}>
                                       Book Pass
                                     </button>
                                   </div>
                                 </div>
                               </div>
                             </div>
      {/* Page 1 */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6 animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Antonio, sans-serif'}}>AGENDAS</h1>
        
        <p className="text-gray-700 mb-8 leading-relaxed animate-on-scroll" data-animation="fade-in-up">
          This track will explore how artificial intelligence and machine learning are revolutionizing the energy sector, 
          from renewable energy and smart grids to oil, gas, and utilities. Learn how AI is optimizing energy production, 
          predicting equipment failures, enhancing efficiency, and enabling smarter energy management. Attendees 
          will gain insights into how to leverage AI to accelerate the transition to clean energy, improve sustainability, 
          reduce operational costs, and stay at the forefront of the rapidly evolving energy market.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-on-scroll" data-animation="slide-in-left">SESSIONS:</h2>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-2 animate-on-scroll" data-animation="fade-in-up">Opening Keynote</h3>
          <div className=" text-gray-800  mb-1"><span className="font-bold">Topic:</span> Cultivating the Future: How AI is Transforming Agriculture from Farm to Fork.</div>
          <div className=" text-gray-800  mb-1"><span className="font-bold">Time:</span> 30 minutes</div>
          <div className=" text-gray-800 "><span className="font-bold">Overview:</span> An exploration of how artificial intelligence is revolutionizing farming practices, boosting yields, enabling climate-smart agriculture, and shaping the global food ecosystem.</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6 animate-on-scroll" data-animation="slide-in-left">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Grids and Energy Management</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• How Can AI Make Power Grids Smarter, Faster, and More Reliable?</li>
                <li>• Using AI for real-time energy distribution, predictive balancing, and intelligent demand-response systems.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Predictive Maintenance and Asset Management</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• From Downtime to Uptime: How AI Predicts Failures Before They Happen.</li>
                <li>• Machine learning models for preventive maintenance in turbines, power plants, and transmission systems.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Energy Trading and Market Analysis</h3>
              <div className="text-gray-800 font-semibold mb-2">Impact-focused:</div>
              <ul className="space-y-2 text-gray-700">
                <li>• Trading on Tomorrow's Data: AI in Energy Markets</li>
                <li>• Predictive analytics for price forecasting, market simulation, and portfolio optimization.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Grid Cybersecurity and Threat Detection</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• The Invisible War: Using AI to Protect Energy Infrastructure from Cyber Threats</li>
                <li>• Threat modeling, anomaly detection, and rapid response mechanisms.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Energy Data Analytics and Insights</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Turning Energy Data into Energy Dollars</li>
                <li>• Big data + AI for smarter energy forecasting, customer insights, and consumption personalization.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI in Nuclear Energy – Precision, Safety, and Efficiency</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• How AI is improving reactor monitoring, predictive risk assessment, and operational efficiency.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 animate-on-scroll" data-animation="slide-in-right">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Renewable Energy Integration</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• The Renewable Rush: Can AI Solve the Intermittency Challenge of Solar and Wind?</li>
                <li>• AI-driven forecasting, storage optimization, and seamless integration into legacy grids.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Energy Optimization and Efficiency</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Is AI the Key to Unlocking Net-Zero Energy Waste?</li>
                <li>• Leveraging optimization algorithms to increase efficiency from generation to consumption.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Energy Storage and Grid Resilience</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Beyond the Battery: Can AI Build a Truly Resilient Energy Grid?</li>
                <li>• AI models for battery performance, renewable storage, and disaster recovery readiness.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Carbon Emission Reduction and Climate Change Mitigation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AI as the Climate Hero: Can Technology Decarbonize the Energy Sector Fast Enough?</li>
                <li>• Tracking, analyzing, and reducing emissions with AI-powered planning tools.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Policy, Regulation, and Ethical Considerations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AI in Energy: Who Sets the Rules, and Who Benefits?</li>
                <li>• Policies for safe adoption, data governance, and workforce transformation.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI-Driven Hydrogen Economy</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Can Artificial Intelligence Accelerate the Green Hydrogen Revolution?</li>
                <li>• Optimizing production, storage, and transportation of hydrogen energy.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6 animate-on-scroll" data-animation="slide-in-left">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Decentralized Energy Systems and AI-Powered Microgrids</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Power to the People: How AI is Driving the Rise of Decentralized Energy</li>
                <li>• AI in microgrid management, peer-to-peer energy trading, and rural electrification.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI for Energy Workforce Transformation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Will AI Replace or Reinvent the Energy Workforce?</li>
                <li>• Reskilling, human-AI collaboration, and ethical shifts in the future of energy jobs.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 animate-on-scroll" data-animation="slide-in-right">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI for Climate Risk Prediction and Disaster Preparedness</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Using AI to forecast extreme weather events and safeguard critical energy infrastructure.</li>
              </ul>
            </div>
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