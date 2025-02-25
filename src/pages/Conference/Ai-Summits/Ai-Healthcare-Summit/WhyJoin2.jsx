

import React from 'react';
import { Brain, Users, Lightbulb, Coins } from 'lucide-react';

const KeyReasonsCards = () => {
  const reasons = [
    {
      number: 1,
      title: "Discover Cutting-Edge AI Innovations in Healthcare",
      description: "Explore the latest AI-driven breakthroughs in diagnostics, drug discovery, patient care, and hospital management, and learn how AI is transforming healthcare efficiency, precision, and accessibility.",
      gradientClass: "from-blue-600 via-cyan-500 to-emerald-400",
      iconColor: "#3B82F6",
      icon: Brain
    },
    {
      number: 2,
      title: "Network with Global Industry Leaders & AI Experts",
      description: "Connect with top healthcare executives, AI researchers, policymakers, and technology pioneers to build strategic partnerships with startups, investors, and healthcare providers driving AI adoption.",
      gradientClass: "from-violet-600 via-purple-500 to-fuchsia-400",
      iconColor: "#8B5CF6",
      icon: Users
    },
    {
      number: 3,
      title: "Gain Exclusive Insights from AI & Healthcare Visionaries",
      description: "Attend keynotes, panel discussions, and workshops led by industry pioneers to gain firsthand knowledge of AI applications in genomics, robotics, telemedicine, and personalized medicine.",
      gradientClass: "from-rose-600 via-pink-500 to-orange-400",
      iconColor: "#EC4899",
      icon: Lightbulb
    },
    {
      number: 4,
      title: "Unlock Investment & Business Opportunities",
      description: "Meet venture capitalists, government agencies, and corporate leaders looking to fund AI healthcare innovations while exploring collaboration opportunities with AI-driven startups and enterprises shaping the future of healthcare.",
      gradientClass: "from-indigo-600 via-blue-500 to-sky-400",
      iconColor: "#6366F1",
      icon: Coins
    }
  ];

  return (
    <div className='w-full bg-white'>
        <div className="p-8 max-w-7xl mx-auto bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div 
              key={reason.number} 
              className="group relative overflow-hidden border-0 bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 rounded-xl"
            >
              <div className="relative">
                <img 
                  src="/api/placeholder/600/300" 
                  alt={reason.title}
                  className="w-full h-64 object-cover brightness-95 group-hover:brightness-100 transition-all duration-500"
                />
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradientClass} opacity-50 group-hover:opacity-40 transition-opacity duration-500`} />
                
                {/* Icon box */}
                <div className="absolute -bottom-6 right-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                  <Icon className="w-8 h-8" color={reason.iconColor} strokeWidth={1.5} />
                </div>

                {/* Number badge */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <span className={`text-2xl font-bold bg-gradient-to-br ${reason.gradientClass} bg-clip-text text-transparent`}>
                    {reason.number}
                  </span>
                </div>
              </div>

              <div className="p-8 pt-10 relative">
                <div className="space-y-4">
                  <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r ${reason.gradientClass}`} />
                  <h3 className="text-2xl font-bold leading-tight group-hover:text-transparent bg-clip-text bg-gradient-to-r ${reason.gradientClass} transition-colors duration-500">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className={`h-1 w-full bg-gradient-to-r ${reason.gradientClass} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default KeyReasonsCards;