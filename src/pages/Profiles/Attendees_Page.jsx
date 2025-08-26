import React, { useState, useEffect } from 'react';
import { User, Linkedin } from 'lucide-react';

const AboutMeSection = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabContent = {
    overview: {
      title: "Professional Overview",
      content: `Alex Rodriguez is the Deputy Chief Executive (CEO) of TechVision Dynamics, and a member of its Board of Directors. He joined TechVision in 2018, after 20 years spent in various leadership roles at Global Innovations and after serving as the Chief Operating Officer (COO) at NextGen Solutions between 2015 and 2018. Before being appointed Deputy CEO of TechVision Dynamics in December 2020, he was the CEO of TechFlow. In the past 5 years, Alex has played a key role in driving the combination of TechVision and various strategic partnerships, leading key initiatives for the new, unified Group.

Alongside TechVision Dynamics' CEO, Maria Santos, he is now driving the strategic evolution of the company toward AI-tech and smart solutions - making technology a gateway to new possibilities. This ongoing transformation - combined with the company's unique integrated, omnichannel business model and its mission to help businesses "innovate more and achieve more" - has earned TechVision Dynamics a place among the world's most innovative companies (Fast Company), and those that "Change the World" (Fortune) through their positive impact.

TechVision Dynamics cultivates a culture rooted in strong human values. At the heart of this culture is employee empowerment, of which Alex Rodriguez has been a passionate advocate. A keen strategist, he was the navigator of the North American expansion in the 2019 Digital Revolution initiative.`
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className={`bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Animated Top Border */}
          <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-size-200 animate-gradient"></div>
          
          <div className="p-8">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              {/* Profile Image Section */}
              <div className="flex-shrink-0 group">
                <div className="relative">
                  {/* Profile Image Container - Simplified without name/title */}
                  <div className="w-72 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Profile Image */}
                    <div className="w-full h-80 rounded-3xl overflow-hidden relative z-10">
                      <img 
                        src="/alexis_image.png" 
                        alt="Alex Rodriguez - CMO"
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  
                  {/* Social Links - LinkedIn Only */}
                  <div className="flex gap-3 mt-6 justify-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer shadow-lg">
                      <Linkedin size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1">
                {/* Speaker Info Header */}
                <div className="mb-6">
                  {/* Speaker Details */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6 border border-blue-100">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Alex Rodriguez
                    </h2>
                    <p className="text-2xl font-semibold text-gray-700 mb-1">Chief Marketing Officer</p>
                    <p className="text-xl text-gray-600">Axelera AI</p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{tabContent[activeTab].title}</h3>
                    <div className="text-black leading-relaxed whitespace-pre-line">
                      {tabContent[activeTab].content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
};

export default AboutMeSection;