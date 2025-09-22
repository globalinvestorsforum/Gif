import React, { useEffect, useRef } from 'react';
import {useNavigate} from "react-router-dom"
import Mass from '../../../assets/IndustryTracksImage/Mass2.png'
import './Retail.css';
export default function MediaJournalismAIAgenda() {
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
    <div className="max-w-6xl mx-auto p-8 bg-white" id="Massmedia">
        <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
                                 <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                   {/* Background Image - Replace with your image */}
                                   <div 
                                     className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                                     style={{
                                       backgroundImage: `url(${Mass})`, // Replace with your image URL
                                     }}
                                   >
                                     {/* Dark overlay */}
                                     <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                                     
                                     {/* Content */}
                                     <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                                       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                                         AI IN MEDIA, JOURNALISM & COMMUNICATION
                                        
                                       </h1>
                                       <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                                         Shaping the Future of Content, Broadcasting & Public Engagement Through AI
                                       </p>
                                       <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300 w-fit" onClick={()=>{navigate("/gais/ticket")}}>
                                         Book Pass
                                       </button>
                                     </div>
                                   </div>
                                 </div>
                               </div>
      <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6 animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Antonio, sans-serif'}}>AGENDAS</h1>
      
      <p className="text-gray-700 mb-6 leading-relaxed animate-on-scroll" data-animation="fade-in-up">
        This track will explore how artificial intelligence is transforming media, journalism, and communication, 
        reshaping the way content is created, distributed, and consumed. From AI-powered news generation and 
        automated fact-checking to personalized content delivery, audience analytics, and immersive storytelling, AI 
        is redefining the role of journalists, broadcasters, and communicators. Attendees will gain insights into how 
        these technologies are driving efficiency, creativity, and trust in the rapidly evolving information landscape.
      </p>

      <p className="text-gray-700 mb-8 leading-relaxed animate-on-scroll" data-animation="fade-in-up">
        By examining emerging applications, ethical challenges, and future opportunities, participants will discover 
        how AI can enhance storytelling, strengthen public engagement, and foster innovation across the global 
        media and communication ecosystem.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-on-scroll" data-animation="slide-in-left">SESSIONS:</h2>

      <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Opening Keynote</h3>
        <div className="text-gray-800 mb-1"><span className="font-bold">Topic:</span> AI in Media & Journalism: Redefining Storytelling, Trust, and Public Engagement</div>
        <div className="text-gray-800 mb-1"><span className="font-bold">Time:</span> 30 minutes</div>
        <div className="text-gray-800"><span className="font-bold">Overview:</span> Exploring how AI is shaping the creation, distribution, and consumption of news, entertainment, and digital media.</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 animate-on-scroll" data-animation="slide-in-left">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">AI-Powered Newsrooms</h3>
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Automating reporting, real-time fact-checking, and personalized news delivery.</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Generative AI in Content Creation</h3>
            <div className="text-gray-800"><span className="font-bold">Overview:</span> From automated video editing to AI-generated articles, graphics, and broadcasting scripts.</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Hyper-Personalization of Media Consumption</h3>
            
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Recommendation engines and adaptive content delivery powered by AI.</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ethics & Responsibility in AI Journalism</h3>
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Navigating deepfakes, misinformation, and ethical boundaries of AI-generated content.</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">AI in Multilingual Communication</h3>
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Real-time language translation, cross-cultural engagement, and AI for global media outreach.</div>
          </div>
        </div>

        <div className="space-y-6 animate-on-scroll" data-animation="slide-in-right">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Can AI Help Restore Trust in Journalism?</h3>
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Leveraging AI for transparency, bias detection, and combating fake news.</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">AI in Broadcasting & Live Media</h3>
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Enhancing sports broadcasting, real-time translation, and immersive viewing experiences.</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">AI for Public Engagement & Audience Insights</h3>
           
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Using AI to analyze sentiment, predict audience trends, and improve communication strategies. </div>
            
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">AI in Advertising & Brand Communication</h3>
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Smart targeting, programmatic advertising, and AI-driven brand storytelling.</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Future Outlook: Human Creativity + AI Collaboration</h3>
            
            <div className="text-gray-800"><span className="font-bold">Overview:</span> Exploring how AI can complement, not replace, human creativity in storytelling and communication.</div>
            
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