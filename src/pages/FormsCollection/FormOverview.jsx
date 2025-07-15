import React from 'react';
import { Award, Building, Hotel, Ticket, Globe, Users, Handshake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FormOverview = () => {
  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award Nomination at 0% Cost",
      description: "Apply to be recognized in the world's largest AI Awards program across multiple categories."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Free Exhibition Space",
      description: "Showcase your AI-powered products, services, tools, or platforms at zero booth rental cost."
    },
    {
      icon: <Hotel className="w-6 h-6" />,
      title: "Complimentary Accommodation",
      description: "Enjoy 2 days of free hotel stay during the summit for your main exhibiting representative."
    },
    {
      icon: <Ticket className="w-6 h-6" />,
      title: "All-Access Pass",
      description: "Full entry to all keynotes, industry-specific conferences, panel discussions, and networking events."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Visibility",
      description: "Gain exposure among an audience of investors, corporates, policymakers, media, and tech influencers."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lead Generation & Partnerships",
      description: "Grow your pipeline through live demos, real-time engagement, and qualified partnership opportunities."
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Meet Investors Face-to-Face",
      description: "Connect directly with VCs, angel investors, and enterprise buyers exploring cutting-edge AI innovations."
    }
  ];
 const navigate = useNavigate();
   return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <h1 className="text-2xl font-bold text-center mb-3" style={{ fontFamily: 'Antonio, sans-serif' }}>
            <span className=" text-yellow-300">FREE EXHIBITION</span> APPLICATION FORM
          </h1>
          <div className="text-center text-sm space-y-1">
            <div className="font-medium">Global AI Summit – <span className="font-bold">Berlin, Germany</span></div>
            <div>Dates: <span className="font-bold text-yellow-300">9th & 10th October, 2025</span></div>
            <div>Organized by: <span className="font-bold text-yellow-300">Global Investors Forum</span></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Why Exhibit */}
          <div>
            <div className="text-sm text-gray-700 space-y-4">
              <p>
                We're bringing together the entire global AI ecosystem — from emerging startups and enterprise innovators to research labs, infrastructure enablers, and policy leaders — all under one roof in <span className="font-bold text-purple-600">Berlin: Europe's Industrial AI Capital</span>.
              </p>
              <p>
                Whether you're integrating AI into your business operations, delivering AI-powered solutions, building AI infrastructure, conducting cutting-edge research, or supporting the broader ecosystem — this is your platform to shine.
              </p>
            </div>
          </div>

          {/* What You'll Get */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200 hover:from-purple-100 hover:to-violet-100 hover:border-purple-400 transition-all duration-300 hover:shadow-lg transform hover:scale-105 h-full flex flex-col">
                    <div className="bg-gradient-to-r from-purple-500 to-violet-600 p-4 rounded-2xl text-white mb-4 w-fit group-hover:from-purple-600 group-hover:to-violet-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {benefit.icon}
                    </div>
                    <h4 className="font-semibold text-sm text-gray-800 mb-3 group-hover:text-purple-700 transition-colors">{benefit.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors flex-grow">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="p-6">
            <p className="text-white text-xl leading-relaxed mb-6 font-['Antonio'] font-normal" style={{ fontFamily: 'Antonio, sans-serif' }}>
              JUST JOIN LIKE ANY OTHER EVENT BY SIMPLY PURCHASING A GENERAL TICKET TO OFFICIALLY REGISTER YOURSELF AND WE'LL TAKE CARE OF THE REST: YOUR EXHIBITION SPACE AND STAY IN EUROPE'S AI POWERHOUSE ARE FULLY COVERED BY US.NO HIDDEN CHARGES!
            </p>
           
            <button onClick={() => navigate('/gais/exhibition-form')}className="bg-white text-blue-700 px-8 py-4 rounded-lg font-['Antonio'] font-bold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg w-fit">
              APPLY FOR FREE EXHIBITION SPACE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOverview;