import React from 'react';
import { ArrowRight } from 'lucide-react';
import IntroBanner from './IntroBanner'

const AIHealthcareBannerIntro = () => {
  return (
    <div className="max-w-6xl my-12  mx-auto">
      {/* Market Growth Banner */}
      {/* <IntroBanner/> */}
      {/* <div className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white p-6 md:p-8 rounded-xl mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          The Future of Healthcare is AI-Powered
        </h2>
        
        <p className="text-base md:text-lg leading-relaxed">
          The healthcare landscape is undergoing a radical transformation, driven by the power of AI. 
          This transformative technology is poised to revolutionize everything from diagnostics and 
          treatment to drug discovery and patient care.
        </p>
        
        <div className="my-6 bg-white bg-opacity-10 p-4 md:p-6 rounded-lg">
          <p className="text-base md:text-lg font-semibold mb-2">
            Market Growth Projection:
          </p>
          <p className="text-base md:text-lg">
            The global AI in healthcare market is projected to explode, reaching a staggering 
            <span className="font-bold text-pink-300"> USD 164.16 billion by 2030</span>, 
            growing at an astounding CAGR of 49.1% from 2024's USD 14.92 billion.
          </p>
          <p className="text-sm mt-2 text-gray-300">
            Source: Research and Markets
          </p>
        </div>
        
        <p className="text-base md:text-lg">
          The summit presents a timely opportunity for stakeholders to engage with cutting-edge 
          technologies and strategies that are driving this growth.
        </p>
      </div> */}

      {/* Introduction Section */}
      <div className="bg-white rounded-xl p-6  md:p-8 shadow-lg">
        <div className="flex items-center mb-2">
          <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 mr-4"></div>
          <h2 className="text-xl md:text-xl font-bold text-gray-800">Introduction: The AI Healthcare Summit</h2>
        </div>
        
        <div className="text-gray-700 ">
          <p className="text-sm md:text-md leading=tight">
            The AI Healthcare Summit is a pioneering event in the healthcare industry that is dedicated to 
            exploring the latest trends and advancements in artificial intelligence (AI) and their impact on healthcare. 
            With AI rapidly transforming the way healthcare is delivered, this summit is designed to bring together 
            leading experts, cutting-edge startups, innovators, researchers, and practitioners from across the globe 
            to share insights, knowledge, and experiences on how AI is shaping the healthcare landscape.
          </p>
          
          <p className="text-sm md:text-md py-2">
            This summit will provide a unique platform for attendees to engage in interactive sessions, panel discussions, 
            keynote speeches, and workshops on topics such as AI-powered diagnostics, precision medicine, drug discovery, 
            data extraction from eHealth records, medical imaging clinical decision-making, patient engagement, 
            enhance operational efficiency and more.
          </p>
          
          <p className="text-sm md:text-md">
            The AI Healthcare Summit will be an unparalleled opportunity for attendees to gain valuable knowledge 
            and insights on the latest advancements in AI and their application in healthcare. Join us for this 
            ground-breaking event and be a part of the conversation that is shaping the future of healthcare.
          </p>
        </div>
        
        {/* <div className="mt-8">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition flex items-center">
            Register Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AIHealthcareBannerIntro;