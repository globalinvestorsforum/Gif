
import React from 'react';
import { Users, Stethoscope, Lightbulb, Rocket, Database, Landmark, GraduationCap } from 'lucide-react';

const AudienceDemographics = () => {
  const demographics = [
    {
      id: 1,
      title: "Healthcare Professionals",
      description: "Hospital executives, doctors, clinicians, and administrators",
      bgColor: "from-blue-500 to-blue-600",
      icon: <Stethoscope className="w-6 h-6 text-white" />,
      reason: "To explore AI-powered advancements in patient care, diagnostics, and hospital management."
    },
    {
      id: 2,
      title: "AI & Tech Innovators",
      description: "AI researchers, data scientists, and software developers",
      bgColor: "from-purple-500 to-purple-600",
      icon: <Database className="w-6 h-6 text-white" />,
      reason: "To showcase and learn about AI-driven healthcare solutions, algorithms, and emerging technologies."
    },
    {
      id: 3,
      title: "Startups & Entrepreneurs",
      description: "Founders, CEOs, and healthcare startup leaders",
      bgColor: "from-green-500 to-green-600",
      icon: <Rocket className="w-6 h-6 text-white" />,
      reason: "To pitch innovations, gain visibility, and connect with investors and strategic partners."
    },
    {
      id: 4,
      title: "Investors & VCs",
      description: "Angel investors, VC firms, and corporate investors",
      bgColor: "from-amber-500 to-amber-600",
      icon: <Landmark className="w-6 h-6 text-white" />,
      reason: "To discover and invest in the next big AI-powered healthcare breakthroughs."
    },
    {
      id: 5,
      title: "Pharma & Biotech",
      description: "Pharma executives, biotech researchers, and R&D teams",
      bgColor: "from-red-500 to-red-600",
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      reason: "To understand how AI accelerates drug discovery, clinical trials, and personalized medicine."
    },
    {
      id: 6,
      title: "Policy Makers",
      description: "Health officials, regulatory agencies, and public health experts",
      bgColor: "from-cyan-500 to-cyan-600",
      icon: <Users className="w-6 h-6 text-white" />,
      reason: "To assess AI’s impact on healthcare regulations, policies, and ethical considerations."
    },
    {
      id: 7,
      title: "Academics & Students",
      description: "Professors, researchers, and healthcare/AI students",
      bgColor: "from-indigo-500 to-indigo-600",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      reason: "To gain insights, collaborate on AI research, and explore career opportunities in AI healthcare."
    }
];


  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl uppercase font-bold mb-6 text-center bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
          Who Attends The AI Healthcare Summit?
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {demographics.map((demo) => (
            <div 
              key={demo.id} 
              className="w-40 h-60 relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${demo.bgColor} opacity-90`}></div>
              
              <div className="absolute inset-0 p-3 flex flex-col  text-white">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-white bg-opacity-20 rounded-full">
                    {demo.icon}
                  </div>
                  <h3 className="text-sm font-bold leading-tight">{demo.title}</h3>
                </div>
                
                <p className="text-xs py-2 leading-tight text-white text-opacity-90">
                  {demo.description}
                </p>
                <p>WHY</p>
                <p className="text-xs py-2 leading-tight text-white text-opacity-90">
                  {demo.reason}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block text-lg px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
            Join Our Diverse Community
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceDemographics;