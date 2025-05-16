import React from 'react';
import { Calendar, Brain, Activity, Users, TrendingUp, DollarSign, BarChart2, PieChart } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden ">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            />
          ))}
        </div>
      </div> */}

      <div className="container  px-8 md-px-20 py-16 md:py-12 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col  md:flex-row justify-between items-center">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-3/5 text-white">
            {/* <div className="inline-block px-4 py-2 bg-blue-600 bg-opacity-30 rounded-full mb-6">
              <span className="text-sm font-semibold tracking-wider uppercase">Global Event 2025</span>
            </div> */}
            
            {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The AI Healthcare <br/>
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 text-transparent bg-clip-text">Summit 2025</span>
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
              Exploring the future of healthcare through artificial intelligence, 
              with leading experts, innovators, and healthcare professionals.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold shadow-lg transform transition hover:scale-105">
                Register Now
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white rounded-lg font-bold transform transition hover:bg-white hover:bg-opacity-10">
                Learn More
              </button>
            </div> */}
            
            {/* Enhanced Statistics Section */}
            <div className="bg-gradient-to-r from-blue-900/60 to-indigo-900/60 p-6 rounded-xl backdrop-blur-sm border border-blue-500/30 shadow-lg">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <BarChart2 className="mr-2 text-cyan-400" />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-300 text-transparent bg-clip-text">Market Growth Explosion</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/10 p-4 rounded-lg border border-cyan-500/20 relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 opacity-10">
                    <DollarSign size={80} />
                  </div>
                  <p className="text-sm text-cyan-100 mb-1">Market Value by 2030</p>
                  <p className="text-3xl font-bold text-cyan-300">$164.16B</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="text-green-400 mr-1" size={16} />
                    <span className="text-green-400 text-sm">11x growth from 2024</span>
                  </div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg border border-cyan-500/20 relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 opacity-10">
                    <PieChart size={80} />
                  </div>
                  <p className="text-sm text-cyan-100 mb-1">Annual Growth Rate</p>
                  <p className="text-3xl font-bold text-cyan-300">49.1%</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="text-green-400 mr-1" size={16} />
                    <span className="text-green-400 text-sm">CAGR 2024-2030</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-white/20  items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xs text-cyan-100">The global AI in healthcare market is projected to explode, reaching a staggering USD 164.16 billion by 2030, growing at an astounding CAGR of 49.1% from 2024's USD 14.92 billion
                  </span>
                </div>
                <div className="text-xs py-2 text-white/70">
                Source: Research and Markets (The World's largest market and Research Store)                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Visual Element */}
          {/* <div className="w-full md:w-2/5 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-40"></div>
                  <div className="absolute inset-8 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain size={100} className="text-white" />
                  </div>
                </div>
              </div> 
              
               <div className="absolute top-0 right-0 bg-cyan-500 p-3 rounded-full shadow-lg animate-bounce">
                <Activity size={24} className="text-white" />
              </div>
              <div className="absolute bottom-10 left-0 bg-blue-600 p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: "0.5s" }}>
                <Calendar size={24} className="text-white" />
              </div>
              <div className="absolute bottom-0 right-12 bg-indigo-600 p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: "1s" }}>
                <Users size={24} className="text-white" />
              </div> 
             </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;