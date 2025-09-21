import React,{ useEffect, useRef }  from 'react';
import {useNavigate} from "react-router-dom"
import FinanceBack from "../../../assets/IndustryTracksImage/finance_background.png"
import Finance1 from "../../../assets/IndustryTracksImage/finance1.png"
import Finance2 from "../../../assets/IndustryTracksImage/finance2.png"
import Finance3 from "../../../assets/IndustryTracksImage/finance3.png"
import Finance4 from "../../../assets/IndustryTracksImage/finance4.png"
import Finance5 from "../../../assets/IndustryTracksImage/finance5.png"
import Finance6 from "../../../assets/IndustryTracksImage/finance6.png"
import Finance7 from "../../../assets/IndustryTracksImage/finance7.png"
import Finance8 from "../../../assets/IndustryTracksImage/finance8.png"

const FinanceTopicsPage = () => {
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
  return (
    <div className="min-h-screen bg-white" id="Finance">
      {/* Hero Section with Background Image */}
      <div className="relative h-80 md:h-96 bg-gray-200 overflow-hidden">
        {/* Background Image - Replace with your image */}
        <img 
          src={FinanceBack}
          alt="AI in Finance background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight">
                AI in<br/>
                Finance
              </h1>
              <p className="text-white text-lg md:text-xl font-light max-w-lg leading-relaxed">
                Accelerating AI Integration Across the Global BFSI Sector
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        
        {/* Main Header */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-12 leading-tight max-w-4xl">
          FEW MOST COMMON ENGAGING TOPICS OR AREA OF DISCUSSION DURING THE SUMMIT.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
  <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold text-base hover:bg-blue-800 transition-colors duration-300 shadow-lg" onClick={()=>{navigate("/gais/ticket")}}>
    View All Tracks
  </button>
  <button className="border-2 border-blue-900 text-blue-900 bg-transparent px-8 py-3 rounded-lg font-semibold text-base hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-lg">
    Know More
  </button>
</div>
        {/* Topics List */}
        <div className="space-y-12">
          
          {/* 1. Intelligent Automation */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                1. INTELLIGENT AUTOMATION IN FINANCIAL SERVICES
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Robotic Process Automation (RPA) and its impact on operational efficiency.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Intelligent document processing and data extraction for improved accuracy and speed.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Machine learning algorithms for risk assessment and fraud detection.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Chatbots and virtual assistants transforming customer service and support.
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={Finance1} 
                alt="Intelligent Automation" 
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
          </div>

          {/* 2. AI-Driven Investment */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                2. AI-DRIVEN INVESTMENT STRATEGIES:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Algorithmic trading and the use of predictive analytics in financial markets.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Portfolio management and asset allocation through AI models.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Natural language processing for sentiment analysis and news-based trading strategies.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Explainable AI and transparency in automated investment decision-making.
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={Finance2}
                alt="Investment Strategies" 
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
          </div>

          {/* 3. Personalized Financial Services */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                3. PERSONALIZED FINANCIAL SERVICES
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AI-powered robo-advisors and personalized financial planning.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Customer segmentation and personalized marketing in the digital era.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Virtual banking assistants and conversational AI for enhanced customer experience.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AI-driven credit scoring and lending decisions for individuals and businesses.
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={Finance3}
                alt="Personalized Services" 
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
          </div>

          {/* 4. Risk Management */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                4. RISK MANAGEMENT AND COMPLIANCE
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AI in regulatory compliance and anti-money laundering (AML) efforts.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fraud prevention and detection using advanced analytics and anomaly detection.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AI for credit risk assessment and stress testing in financial institutions.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ethical considerations and responsible AI practices in risk management.
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={Finance4}
                alt="Risk Management" 
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
          </div>

          {/* 5. Data Analytics */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                5. DATA ANALYTICS AND INSIGHTS:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Algorithmic trading and the use of predictive analytics in financial markets.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Portfolio management and asset allocation through AI models.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Natural language processing for sentiment analysis and news-based trading strategies.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Explainable AI and transparency in automated investment decision-making.
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={Finance5}
                alt="Data Analytics" 
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
          </div>

          {/* 6. Future of Fintech */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                6. FUTURE OF FINTECH AND AI
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  The role of AI in shaping the future of fintech startups and incumbents.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Blockchain technology and AI integration for secure and efficient transactions.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Open banking and API-driven ecosystems powered by AI.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Regulatory implications and challenges in the adoption of AI in finance.
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={Finance6}
                alt="Future of Fintech" 
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
          </div>

          {/* 7. AI in Insurance */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                7. AI IN INSURANCE INDUSTRY
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AI-driven underwriting and pricing models in the insurance sector.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Claims processing automation and fraud detection using AI.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Telematics and IoT data for personalized insurance offerings.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Chatbots and virtual assistants for customer support and policy management.
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={Finance7} 
                alt="Insurance AI" 
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
          </div>

          {/* 8. Responsible AI */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                8. RESPONSIBLE AI AND ETHICAL CONSIDERATIONS
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Bias and fairness in AI algorithms for finance.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Explainability and interpretability of AI models for regulatory compliance.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Data privacy and security in the era of AI-driven financial services.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ensuring accountability and transparency in AI decision-making.
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={Finance8}
                alt="Responsible AI" 
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
          </div>
        <div className="mt-8 flex gap-4 animate-on-scroll" data-animation="fade-in-up">
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference")}}>
    View All Tracks
  </button>
  <button className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:shadow-xl transform" onClick={()=>{navigate("/gais/conference/ai-Finance-summit")}}>
    More About Tracks
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default FinanceTopicsPage;