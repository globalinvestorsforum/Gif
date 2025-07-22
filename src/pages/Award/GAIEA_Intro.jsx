import React, { useState, useEffect } from 'react';

const GAIEA = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Image paths for different viewports
  const desktopImage = "/woman_background.png";
  const mobileImage = "/woman_mobile_background.png"; // Your cropped mobile version
  
  // Detect screen size and set appropriate background
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint in Tailwind
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const currentImage = isMobile ? mobileImage : desktopImage;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image - Responsive */}
      <div
        className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundSize: 'cover',
          backgroundPosition: isMobile ? 'center top' : 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#2a2a2a',
          width: '100%',
          height: '100%'
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-opacity-40 z-10 transition-all duration-700"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          
          {/* Left Content */}
          <div className="text-white space-y-6 lg:space-y-8 animate-fade-in-up">
            
            {/* Logo Image - Fixed to preserve original shape */}
            <div className="inline-block transform transition-all duration-500 hover:scale-105 hover:rotate-1">
              <div className="relative group">
                <img 
                  src="/GAIEA_NEW_logo.png" 
                  alt="The Global AI Excellence Award 2025-26" 
                  className="w-auto h-40 sm:h-45 md:h-50 lg:h-55 xl:h-60 max-w-none object-contain transition-all duration-300 group-hover:brightness-110 drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
                  }}
                  onError={(e) => {
                    console.error('Logo image failed to load. Please ensure gaiea_logo.png is in the public folder.');
                    // Fallback styling if image fails to load
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<div class="w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 lg:w-72 lg:h-90 xl:w-80 xl:h-100 bg-gradient-to-br from-purple-800 via-blue-800 to-pink-700 rounded-2xl shadow-2xl flex items-center justify-center"><span class="text-white font-bold text-center">GAIEA<br/>LOGO</span></div>';
                  }}
                />
                {/* Optional glow effect for the logo */}
                <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"></div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wide drop-shadow-lg transition-all duration-700 hover:text-yellow-400 hover:tracking-wider animate-slide-in-right cursor-default">
              GAIEA 2025-26
            </h1>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-8 lg:mt-12">
              
              {/* World's Largest */}
              <div className="space-y-2 lg:space-y-3 transform transition-all duration-500 hover:scale-110 hover:translate-y-2 animate-fade-in-up group cursor-pointer" style={{animationDelay: '0.2s'}}>
                <h3 className="text-gray-400 font-semibold text-sm sm:text-base lg:text-lg transition-all duration-700 animate-text-glow group-hover:text-yellow-300 group-hover:text-xl group-hover:scale-105" style={{animationDelay: '0.5s'}}>#World's Largest AI Awards Program</h3>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed transition-all duration-300 group-hover:text-white">
                  Recognizing groundbreaking contributions shaping the global AI ecosystem.
                </p>
              </div>

              {/* Global Participation */}
              <div className="space-y-2 lg:space-y-3 transform transition-all duration-500 hover:scale-110 hover:translate-y-2 animate-fade-in-up group cursor-pointer" style={{animationDelay: '0.4s'}}>
                <h3 className="text-gray-400 font-semibold text-sm sm:text-base lg:text-lg transition-all duration-700 animate-text-glow group-hover:text-yellow-300 group-hover:text-xl group-hover:scale-105" style={{animationDelay: '0.7s'}}>#100+ Countries, Unmatched Participation</h3>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed transition-all duration-300 group-hover:text-white">
                  GAIEA brings together the highest number of AI organizations ever engaged in a single global platform.
                </p>
              </div>

              {/* Zero Fees */}
              <div className="space-y-2 lg:space-y-3 transform transition-all duration-500 hover:scale-110 hover:translate-y-2 animate-fade-in-up group cursor-pointer" style={{animationDelay: '0.6s'}}>
                <h3 className="text-gray-400 font-semibold text-sm sm:text-base lg:text-lg transition-all duration-700 animate-text-glow group-hover:text-yellow-300 group-hover:text-xl group-hover:scale-105" style={{animationDelay: '0.9s'}}>#Zero Nomination Fees</h3>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed transition-all duration-300 group-hover:text-white">
                  offering you a chance to be recognized globally without any upfront fees or hidden cost.
                </p>
              </div>

              {/* Sectors */}
              <div className="space-y-2 lg:space-y-3 transform transition-all duration-500 hover:scale-110 hover:translate-y-2 animate-fade-in-up group cursor-pointer" style={{animationDelay: '0.8s'}}>
                <h3 className="text-gray-400 font-semibold text-sm sm:text-base lg:text-lg transition-all duration-700 animate-text-glow group-hover:text-yellow-300 group-hover:text-xl group-hover:scale-105" style={{animationDelay: '1.1s'}}>#40+ Sectors, Full-Spectrum Recognition</h3>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed transition-all duration-300 group-hover:text-white">
                  The only AI award initiative honoring industry-specific excellence across healthcare, finance, energy, manufacturing, and more.
                </p>
              </div>

            </div>

            {/* Call to Action Text */}
            <div className="space-y-3 lg:space-y-4 mt-8 lg:mt-12 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed transition-all duration-500 hover:text-gray-100 hover:scale-[1.02] transform origin-left">
                This is your moment to stand alongside the world's most innovative AI organizations. 
                Awards are <span className="font-semibold text-yellow-400 transition-all duration-300 hover:text-yellow-300">open across all sectors with captivating categories</span>. Recognition is global. The 
                spotlight is <span className="font-semibold text-yellow-400 transition-all duration-300 hover:text-yellow-300">yours</span>.
              </p>
              
              <p className="text-white text-lg sm:text-xl font-semibold transition-all duration-500 hover:text-yellow-400 hover:scale-105 transform cursor-default">
                Not next year. Not someday. Right now.
              </p>
              
              {/* CTA Button */}
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-xl hover:-translate-y-1 active:scale-95 group relative overflow-hidden text-sm sm:text-base">
                <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">NOMINATE NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

          </div>

          {/* Right Side - Additional space for content (hidden on mobile) */}
          <div className="relative hidden lg:block animate-fade-in-right">
            <div className="text-center">
              <div className="text-white text-opacity-50 text-sm transition-all duration-500 hover:text-opacity-70">
                {/* You can add additional content here */}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Enhanced Floating particles with animations */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse transition-all duration-1000 hover:opacity-100"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-yellow-400 rounded-full opacity-80 animate-pulse transition-all duration-1000 hover:opacity-100" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-70 animate-pulse transition-all duration-1000 hover:opacity-100" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-purple-300 rounded-full opacity-60 animate-pulse transition-all duration-1000 hover:opacity-100" style={{animationDelay: '1.5s'}}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/2 w-1 h-1 bg-yellow-300 rounded-full opacity-50 animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-red-400 rounded-full opacity-40 animate-ping" style={{animationDelay: '2.5s'}}></div>
      </div>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes text-glow {
          0% {
            color: rgb(156 163 175);
            text-shadow: none;
          }
          100% {
            color: rgb(251 191 36);
            text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out forwards;
        }
        
        .animate-text-glow {
          animation: text-glow 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GAIEA;