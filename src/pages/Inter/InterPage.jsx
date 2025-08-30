import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const GAISTracksPage = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const navigate = useNavigate();
  const handleViewAllTracks = () => {
    navigate('/gais/UnifiedTracks');
    console.log('Navigating to all tracks...');
    // Add your navigation logic here
  };

  const handleViewIndustryTracks = () => {
    navigate('/gais/conference');
    console.log('Navigating to industry-specific tracks...');
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center p-6">
      {/* Google Fonts import for Antonio */}
      <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <div className="max-w-4xl mx-auto text-center text-white">
        {/* Main Heading */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-wide" style={{ fontFamily: 'Antonio, sans-serif' }}>
            EXPLORE TRACKS
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto opacity-90">
            Discover the perfect learning path for your AI journey. Choose from comprehensive tracks 
            covering all aspects of artificial intelligence or dive deep into industry-specific applications 
            tailored to your field.
          </p>
        </div>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-16">
          {/* View All Tracks Button */}
          <button
            onClick={handleViewAllTracks}
            onMouseEnter={() => setHoveredButton('all')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`
              group relative px-12 py-6 text-xl font-semibold rounded-2xl
              bg-gradient-to-r from-violet-600 to-purple-700 backdrop-blur-md border border-white border-opacity-30
              hover:scale-105 transform transition-all duration-300
              shadow-2xl hover:shadow-3xl text-white
              min-w-[280px] md:min-w-[320px]
              ${hoveredButton === 'all' ? 'ring-4 ring-white ring-opacity-50' : ''}
            `}
          >
            <div className="relative z-10">
              <div className="text-2xl font-bold mb-2">VIEW ALL TRACKS</div>
              <div className="text-sm font-normal opacity-90">
                Comprehensive AI learning paths
              </div>
            </div>
            {/* Animated background effect */}
            {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white from-opacity-0 to-white to-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
          </button>

          {/* View Industry Tracks Button */}
          <button
            onClick={handleViewIndustryTracks}
            onMouseEnter={() => setHoveredButton('industry')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`
              group relative px-12 py-6 text-xl font-semibold rounded-2xl
              bg-violet-600 bg-opacity-80 backdrop-blur-md border border-white border-opacity-30
              hover:bg-violet-600 hover:bg-opacity-90 hover:scale-105 transform transition-all duration-300
              shadow-2xl hover:shadow-3xl text-white
              min-w-[280px] md:min-w-[320px]
              ${hoveredButton === 'industry' ? 'ring-4 ring-white ring-opacity-50' : ''}
            `}
          >
            <div className="relative z-10">
              <div className="text-2xl font-bold mb-2">INDUSTRY TRACKS</div>
              <div className="text-sm font-normal opacity-90">
                Specialized tracks by sector
              </div>
            </div>
            {/* Animated background effect */}
            {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white from-opacity-0 to-white to-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-lg font-light opacity-80 max-w-2xl mx-auto">
            Whether you're a <strong>seasoned AI professional</strong>, an <strong>aspiring entrepreneur</strong>, 
            or simply <strong>curious about the future</strong>, find your perfect track to 
            <span className="font-semibold"> learn, connect, and be empowered</span>.
          </p>
        </div>

        {/* Decorative Elements */}
        {/* <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse delay-500"></div> */}
      </div>
    </div>
  );
};

export default GAISTracksPage;