import React,{ useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import Maritime from '../../../assets/IndustryTracksImage/Maritime.png'
import './Retail.css';
export default function MaritimeAgendasPage() {
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
    <div className="max-w-6xl mx-auto p-8 bg-white font-sans" id="Maritime">
      <div className="mb-16 animate-on-scroll" data-animation="fade-in-up">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  {/* Background Image - Replace with your image */}
                  <div 
                    className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url(${Maritime})`, // Replace with your image URL
                    }}
                  >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                        AI IN MARITIME &<br />
                        SUPPLY CHAIN
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                        AI-Powered Transformation for Maritime Operations, Ports & Supply Chain Networks
                      </p>
                      <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300 w-fit" onClick={()=>{navigate("/gais/ticket")}}>
                        Book Pass
                      </button>
                    </div>
                  </div>
                </div>
              </div>
      <h1 className="text-3xl sm:text-5xl font-bold text-black mb-8 animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Antonio, sans-serif'}}>AGENDAS</h1>
      
      <p className="text-gray-800 leading-relaxed mb-8 animate-on-scroll" data-animation="fade-in-up" style={{fontFamily: 'Arial, sans-serif'}}>
        This track will highlight how AI is redefining the maritime and supply chain industries—driving smarter 
        logistics, optimizing fleet management, enabling predictive maintenance, and improving port operations. 
        From enhancing global trade efficiency to ensuring resilience in supply chain networks, AI is unlocking 
        unprecedented opportunities for growth and innovation. By attending, participants will discover practical 
        ways to integrate AI into their operations, gain a competitive edge, and position themselves as leaders in the 
        future of maritime and supply chain transformation.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-on-scroll" data-animation="slide-in-left">SESSIONS:</h2>

      {/* Opening Keynote */}
      <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Opening Keynote</h3>
        <p className="text-gray-800 mb-1">The Future of AI-Powered Global Trade & Supply Chains</p>
        <p className="text-gray-800 mb-1"><strong>Time:</strong> 20 minutes</p>
        <p className="text-gray-800 mb-4"><strong>Overview:</strong> How AI is shaping smarter ports, efficient logistics, and resilient supply networks worldwide.</p>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6 animate-on-scroll" data-animation="slide-in-left">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">AI in Smart Ports: Creating Intelligent, Efficient, and Sustainable Port Operations</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: From automated cranes to real-time vessel tracking – how AI is making ports smarter.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Autonomous Shipping: Navigating the Future with AI-Powered Vessels</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: AI-driven navigation, collision avoidance, and autonomous fleet management.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">How Can AI Build Resilient and Adaptive Supply Chains in Times of Crisis?</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Exploring AI's role in managing disruptions, geopolitical risks, and climate-driven uncertainties.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Optimizing Trade Routes with AI</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Route planning, weather forecasting, and emissions reduction through predictive AI systems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">AI for Fraud Detection & Supply Chain Security</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Ensuring transparency, reducing risks, and securing global supply networks.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 animate-on-scroll" data-animation="slide-in-right">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Can AI Solve the Biggest Bottlenecks in Global Logistics?</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Tackling congestion, inefficiencies, and rising costs with AI-powered optimization.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Predictive Maintenance in Maritime Fleets</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Leveraging AI to reduce downtime, extend vessel lifecycles, and optimize maintenance schedules.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">AI in Warehouse & Inventory Management</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: AI-enabled robotics, demand forecasting, and digital twins for smarter inventory handling.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Is AI the Key to Achieving Green Shipping & Sustainable Supply Chains?</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: Reducing emissions, optimizing fuel usage, and achieving net-zero shipping with AI.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Collaborative Intelligence: AI, IoT, and Blockchain in Next-Gen Supply Chains</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Overview: How integrated technologies are transforming visibility, trust, and efficiency in logistics networks.
            </p>
          </div>
        </div>
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
}