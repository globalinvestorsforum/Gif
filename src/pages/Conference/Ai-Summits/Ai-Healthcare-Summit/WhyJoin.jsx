import React from "react";
import { Brain, Users, Lightbulb, Coins } from 'lucide-react';

import Networking from '../../../../assets/HealthcareSummit/Networking.jpg'
import Opportunity from '../../../../assets/HealthcareSummit/Opportunity.jpg'
import Insight from '../../../../assets/HealthcareSummit/Insight.jpg'
import Discover from '../../../../assets/HealthcareSummit/Discover.png'

const WhyJoin = () => {
  const reasons = [
    {
      number: 1,
      title: "Discover Cutting-Edge AI Innovations in Healthcare",
      description:
        "Explore the latest AI-driven breakthroughs in diagnostics, drug discovery, patient care, and hospital management, and learn how AI is transforming healthcare efficiency, precision, and accessibility.",
      gradientClass: "from-blue-600 to-cyan-600",
      imgSrc:Discover,
      iconColor: "#3B82F6",

      icon: Brain
    },
    {
      number: 2,
      title: "Network with Global Industry Leaders & AI Experts",
      description:
        "Connect with top healthcare executives, AI researchers, policymakers, and technology pioneers to build strategic partnerships with startups, investors, and healthcare providers driving AI adoption.",
      gradientClass: "from-purple-600 to-blue-600",
      iconColor: "#8B5CF6",
      icon: Users,
      imgSrc:Networking
      
    },
    {
      number: 3,
      title: "Gain Exclusive Insights from AI & Healthcare Visionaries",
      description:
        "Attend keynotes, panel discussions, and workshops led by industry pioneers to gain firsthand knowledge of AI applications in genomics, robotics, telemedicine, and personalized medicine.",
      gradientClass: "from-violet-600 to-purple-600",
      imgSrc:Insight,
      iconColor: "#EC4899",

            icon: Lightbulb
      
    },
    {
      number: 4,
      title: "Unlock Investment & Business Opportunities",
      description:
        "Meet venture capitalists, government agencies, and corporate leaders looking to fund AI healthcare innovations while exploring collaboration opportunities with AI-driven startups and enterprises shaping the future of healthcare.",
      gradientClass: "from-indigo-600 to-violet-600",
      imgSrc:Opportunity,
      iconColor: "#6366F1",

            icon: Coins
      
    },
  ];

  return (
    <div className="py-8 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-6xl uppercase font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Why Join the AI-Healthcare Summit
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => {
                      const Icon = reason.icon;
            return(
            <div
              key={reason.number}
              className="group max-w-xl bg-white mx-auto overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-2 hover:border-gradient-to-r"
              style={{
                borderImage: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to)) 1`,
                '--tw-gradient-from': reason.gradientClass.includes('from-blue-600') ? '#2563eb' : 
                                    reason.gradientClass.includes('from-purple-600') ? '#9333ea' : 
                                    reason.gradientClass.includes('from-violet-600') ? '#7c3aed' : 
                                    '#4f46e5',
                '--tw-gradient-to': reason.gradientClass.includes('to-cyan-600') ? '#0891b2' : 
                                  reason.gradientClass.includes('to-blue-600') ? '#2563eb' : 
                                  reason.gradientClass.includes('to-purple-600') ? '#9333ea' : 
                                  '#7c3aed'
              }}
            >
              <div className="relative">
                <img
                  src={reason.imgSrc}
                  alt={reason.title}
                  className="relative w-full h-48 object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
                <div className="absolute -bottom-6 right-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                  <Icon className="w-8 h-8" color={reason.iconColor} strokeWidth={1.5} />
                </div>

                {/* <div className="absolute left-32 -bottom-2 h-4 w-4 bg-transparent border-white border-l-8 border-b-8 rounded-es-2xl"></div>
                <div className="absolute left-4 -bottom-2 h-4 w-4 bg-transparent border-white border-r-8 border-b-8 rounded-ee-2xl"></div> */}
                

                {/* Number badge */}

                <div
                  className={`absolute top-6 left-6 w-12 h-12 shadow-xl rounded-full bg-white flex justify-center items-center transform  group-hover:rotate-6 transition-all duration-300 `}
                >

<div className={`bg-clip-text text-transparent m-2 my-2 w-full h-8 text-2xl text-center font-bold rounded-full bg-gradient-to-r ${reason.gradientClass}`}>
  {reason.number}
</div>
                  {/* <div className="absolute -right-2 bottom-4 h-4 w-4 bg-transparent border-white border-l-8 border-b-8 rounded-es-2xl"></div>
                  <div className="absolute -left-2 bottom-4 h-4 w-4 bg-transparent border-white border-r-8 border-b-8 rounded-ee-2xl"></div> */}

                </div>
              </div>
              
              <div className="p-4 pt-4">
                <div className="space-y-2">
                <h3
  className="text-md font-bold leading-tight text-gray-900 
  group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 
  group-hover:text-transparent bg-clip-text transition-colors duration-300"
>                    {reason.title}
                  </h3>
                  <p className=" text-sm text-gray-600 leading-tight">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;