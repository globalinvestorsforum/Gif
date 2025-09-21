import Manufacturing from '../../../assets/IndustryTracksImage/Manufacturing.png'
import './Retail.css';
import React, { useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom'
export default function ManufacturingAIAgenda() {
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
    
    <div className="max-w-6xl mx-auto p-8 bg-white" id="Manufacturing">
        <div className="mb-16 animate-on-scroll" data-animation="fade-in-up">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                          {/* Background Image - Replace with your image */}
                          <div 
                            className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                            style={{
                              backgroundImage: `url(${Manufacturing})`, // Replace with your image URL
                            }}
                          >
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                            
                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                                AI in Manufacturing
                              </h1>
                              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                                Accelerating Industry 4.O with AI.
                              </p>
                              <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300 w-fit" onClick={()=>{navigate("/gais/ticket")}}>
                                Book Pass
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
      <h1 className="text-5xl font-bold text-black mb-6 animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Antonio, sans-serif'}}>AGENDAS</h1>
      
      <p className="text-gray-700 mb-8 leading-relaxed">
        This track will explore how artificial intelligence is driving the next wave of innovation in manufacturing, ushering 
        in the era of Industry 4.0. Discover how manufacturers are using AI to optimize production lines, predict 
        equipment failures before they happen, improve quality control, and streamline supply chains. From robotics 
        and computer vision to generative design and digital twins, this track will help manufacturing leaders 
        understand how to leverage AI to boost efficiency, reduce costs, and maintain a competitive edge in a rapidly 
        evolving market.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-on-scroll" data-animation="slide-in-left">SESSIONS:</h2>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-2 animate-on-scroll" data-animation="fade-in-up">Opening Keynote</h3>
        <div className="mb-1"><span className="font-bold">Topic:</span> The Future of AI in Manufacturing: From Smart Factories to Autonomous Production</div>
        <div className="mb-1"><span className="font-bold">Time:</span> 30 minutes</div>
        <div><span className="font-bold">Overview:</span> A visionary look at how AI, IoT, and robotics are shaping Industry 4.0 and paving the way for fully autonomous manufacturing systems.</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">AI-Driven Production Optimization</h3>
          <ul className="space-y-4 animate-on-scroll" data-animation="slide-in-left">
            <li>
              <div className="font-bold">Predictive Maintenance: Reducing Downtime & Maximizing Output</div>
              <div className="text-gray-700">– How AI-powered predictive models save costs and extend machinery life.</div>
            </li>
            <li>
              <div className="font-bold">Process Automation: Achieving 24/7 Efficiency</div>
              <div className="text-gray-700">– Implementing computer vision, robotics, and real-time analytics for streamlined operations.</div>
            </li>
            <li>
              <div className="font-bold">Digital Twins for Production Excellence</div>
              <div className="text-gray-700">– Creating virtual replicas of machines, processes, and factories for real-time optimization.</div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">AI for Supply Chain & Logistics</h3>
          <ul className="space-y-4 animate-on-scroll" data-animation="slide-in-right">
            <li>
              <div className="font-bold">Smart Supply Chains: Demand Forecasting & Inventory Management</div>
              <div className="text-gray-700">– Using AI to forecast demand shifts and automate stock replenishment.</div>
            </li>
            <li>
              <div className="font-bold">Autonomous Logistics & Fleet Management</div>
              <div className="text-gray-700">– Optimizing routes, reducing fuel use, and improving delivery timelines with AI.</div>
            </li>
            <li>
              <div className="font-bold">Resilient Supply Chains with AI Risk Management</div>
              <div className="text-gray-700">– Using AI for real-time disruption detection and supplier risk assessment.</div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainable Manufacturing with AI</h3>
          <ul className="space-y-4 animate-on-scroll" data-animation="slide-in-left">
            <li>
              <div className="font-bold">Energy Efficiency through AI Optimization</div>
              <div className="text-gray-700">– Reducing energy costs and carbon footprint in production.</div>
            </li>
            <li>
              <div className="font-bold">Circular Economy & Waste Reduction</div>
              <div className="text-gray-700">– Leveraging AI for sustainable material usage and waste management.</div>
            </li>
            <li>
              <div className="font-bold">AI for Carbon Footprint Tracking & ESG Reporting</div>
              <div className="text-gray-700">– Automating sustainability compliance and real-time environmental monitoring.</div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Control & Product Innovation</h3>
          <ul className="space-y-4 animate-on-scroll" data-animation="slide-in-right">
            <li>
              <div className="font-bold">AI-Powered Quality Assurance</div>
              <div className="text-gray-700">– Real-time defect detection and visual inspection using machine learning.</div>
            </li>
            <li>
              <div className="font-bold">AI-Accelerated R&D in Manufacturing</div>
              <div className="text-gray-700">– How generative AI and digital twins are speeding up prototyping and innovation.</div>
            </li>
            <li>
              <div className="font-bold">Mass Customization with AI</div>
              <div className="text-gray-700">– Leveraging AI to create personalized products at industrial scale.</div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4" >Human + AI Collaboration</h3>
          <ul className="space-y-4 animate-on-scroll" data-animation="slide-in-left">
            <li>
              <div className="font-bold">AI-Augmented Workforce</div>
              <div className="text-gray-700">– How AI-powered tools enhance human productivity and safety on the shop floor.</div>
            </li>
            <li>
              <div className="font-bold">Reskilling for the AI Era</div>
              <div className="text-gray-700">– Strategies for upskilling manufacturing teams to work alongside AI systems.</div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Cybersecurity & Data Governance in Manufacturing</h3>
          <ul className="space-y-4 animate-on-scroll" data-animation="slide-in-right">
            <li>
              <div className="font-bold">Protecting Industrial AI Systems from Cyber Threats</div>
              <div className="text-gray-700">– Securing OT, IoT, and AI models in connected factories.</div>
            </li>
            <li>
              <div className="font-bold">Data Strategy for AI Success</div>
              <div className="text-gray-700">– Managing manufacturing data pipelines for accuracy, security, and compliance.</div>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 animate-on-scroll" data-animation="fade-in-up">Panel Discussion</h3>
        <ul className="space-y-2">
          <li>• Scaling AI in Manufacturing: Challenges, ROI, and Workforce Transformation</li>
          <li>• From Pilot to Plant-wide AI Deployment: Lessons from Industry Leaders</li>
        </ul>
      </div>
       <div className="mt-8 flex gap-4 animate-on-scroll" data-animation="fade-in-up">
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference")}}>
    View All Tracks
  </button>
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference/AI-Manufaturing-Summit")}}>
    More About Tracks
  </button>
</div>
    </div>
  );
}