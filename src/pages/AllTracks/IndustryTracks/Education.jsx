import {React,useState,useEffect,useRef} from 'react';
import {useNavigate} from "react-router-dom"
import Education from '../../../assets/IndustryTracksImage/Ed.png';
import './Retail.css';
const ConferenceAgenda = () => {
  const navigate=useNavigate()
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
  const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  setIsLoaded(true);
}, []);
  return (
    <div classname="bg-white">
    <div  className="max-w-6xl mx-auto p-8 bg-white font-sans" id="Education">
      <div className="mb-16 animate-on-scroll" data-animation="fade-in-up">
                                       <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                         {/* Background Image - Replace with your image */}
                                         <div 
                                           className="h-64 sm:h-80 lg:h-96 bg-cover bg-center relative"
                                           style={{
                                             backgroundImage: `url(${Education})`, // Replace with your image URL
                                           }}
                                         >
                                           {/* Dark overlay */}
                                           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
                                           
                                           {/* Content */}
                                           <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12">
                                             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                                               AI In Education
                                              
                                             </h1>
                                             <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl">
                                              Revolutionising the way we learn and teach with AI
                                             </p>
                                             <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 w-fit hover:scale-105 hover:shadow-lg transform" onClick={()=>{navigate("gais/ticket")}}>
                                               Book Pass
                                             </button>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
      {/* Header */}
      <h1 className="text-5xl font-bold text-black mb-8 tracking-wide animate-on-scroll" data-animation="slide-in-left" style={{fontFamily: 'Antonio, sans-serif'}} >AGENDAS</h1>
      
      {/* Introduction Paragraph */}
      <p className="text-gray-800 leading-relaxed mb-8 text-base animate-on-scroll" data-animation="fade-in-up">
        This track will explore how artificial intelligence is transforming the education sector by personalizing learning, 
        enhancing teaching methods, and improving institutional efficiency. Learn how schools, universities, and edtech 
        innovators are using AI to deliver adaptive learning experiences, automate grading, support teachers, and 
        improve accessibility for all learners. From intelligent tutoring systems to predictive analytics, this track will help 
        educators, administrators, and policymakers understand how to harness AI to prepare students for an AI-driven 
        future.
      </p>
      
      {/* Sessions Header */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-on-scroll" data-animation="slide-in-left">SESSIONS:</h2>
      
      {/* Opening Keynote */}
      <div className="mb-8 animate-on-scroll" data-animation="fade-in-up">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Opening Keynote</h3>
        <div className="mb-1">
          <span className="font-bold text-gray-900">Topic: </span>
          <span className="text-gray-800">The Future of Learning: How AI is Transforming Education Globally</span>
        </div>
        <div className="mb-1">
          <span className="font-bold text-gray-900">Time: </span>
          <span className="text-gray-800">30 minutes</span>
        </div>
        <div>
          <span className="font-bold text-gray-900">Overview: </span>
          <span className="text-gray-800">A visionary look at how AI is reshaping education systems, enabling personalized learning, and preparing students for the skills of tomorrow.</span>
        </div>
      </div>
      
      {/* Session Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {/* Left Column */}
        <div className="space-y-8 animate-on-scroll" data-animation="slide-in-left">
          {/* Personalized & Adaptive Learning */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized & Adaptive Learning</h3>
            <div className="space-y-3">
              <div>
                <span className="font-bold text-gray-900">1. AI for Personalized Learning</span>
                <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300"> – Leveraging AI to tailor lessons, address learning gaps, and adapt content to each student's pace and style.</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">2. AI-Powered Intelligent Tutoring Systems</span>
                <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300"> – How AI tutors deliver real-time feedback, boost engagement, and support learners beyond the classroom.</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">3. Gamification & Immersive Learning with AI</span>
                <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300"> – Using AI-driven gamified experiences, VR, and AR to make learning interactive and motivating.</span>
              </div>
            </div>
          </div>
          
          {/* Empowering Educators with AI */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Empowering Educators with AI</h3>
            <div className="space-y-3">
              <div>
                <span className="font-bold text-gray-900">7. AI in Teacher Training & Professional Development</span>
                <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300"> – Enhancing teacher skills, classroom management, and AI integration in lesson plans.</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">8. AI in Administrative Efficiency</span>
                <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300"> – Automating student enrollment, scheduling, and performance tracking to free up educator time.</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">9. The Role of AI in Curriculum Design</span>
                <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300"> – Creating future-ready curricula aligned with workforce demands and AI-driven industries.</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-8 animate-on-scroll" data-animation="slide-in-right">
          {/* AI in Assessment & Student Success */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI in Assessment & Student Success</h3>
            <div className="space-y-3">
              <div>
                <span className="font-bold text-gray-900">4. AI in Educational Assessment</span>
                <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300"> – Automated grading, plagiarism detection, and AI-powered predictive analytics for student performance.</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">5. Predictive Analytics for Academic Success</span>
                <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300"> – Identifying at-risk students early and designing timely interventions.</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">6. AI for Accessibility in Education</span>
                <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300"> – Ensuring inclusivity with AI-powered transcription, translation, and adaptive content for students with disabilities.</span>
              </div>
            </div>
          </div>
          
          {/* Ethics, Policy & the Future of AI in Education */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ethics, Policy & the Future of AI in Education</h3>
            <div className="space-y-3">
              <div>
                <span className="font-bold text-gray-900">10. Ethics & Responsible AI in Education</span>
                <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300"> – Addressing bias, privacy, and transparency in educational AI tools.</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">11. The Role of Policymakers in AI Education</span>
                <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300"> – Crafting policies, funding research, and building global AI-education partnerships.</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">12. Preparing Students for AI-Driven Careers</span>
                <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300"> – Integrating AI literacy, critical thinking, and emerging tech skills into learning pathways.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Panel Discussion */}
      <div className="mt-12 animate-on-scroll" data-animation="fade-in-up">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Panel Discussion</h3>
        <ul className="space-y-2">
          <li className="flex items-start text-gray-800">
            <span className="text-black mr-2 mt-1">•</span>
            <span className="group-hover:text-gray-900 ">Panel 1: Scaling AI in Education – From Pilot Projects to Nationwide Implementation</span>
          </li>
          <li className="flex items-start text-gray-800">
            <span className="text-black mr-2 mt-1">•</span>
            <span className="group-hover:text-gray-900">Panel 2: Balancing Innovation with Responsibility – The Ethical Future of AI in Education</span>
          </li>
        </ul>
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
    </div>
  );
};

export default ConferenceAgenda;