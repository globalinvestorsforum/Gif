import React from "react";

const WhyJoin = () => {
  const reasons = [
    {
      number: 1,
      title: "Discover Cutting-Edge AI Innovations in Healthcare",
      description:
        "Explore the latest AI-driven breakthroughs in diagnostics, drug discovery, patient care, and hospital management, and learn how AI is transforming healthcare efficiency, precision, and accessibility.",
      gradientClass: "from-blue-600 to-cyan-600",
    },
    {
      number: 2,
      title: "Network with Global Industry Leaders & AI Experts",
      description:
        "Connect with top healthcare executives, AI researchers, policymakers, and technology pioneers to build strategic partnerships with startups, investors, and healthcare providers driving AI adoption.",
      gradientClass: "from-purple-600 to-blue-600",
    },
    {
      number: 3,
      title: "Gain Exclusive Insights from AI & Healthcare Visionaries",
      description:
        "Attend keynotes, panel discussions, and workshops led by industry pioneers to gain firsthand knowledge of AI applications in genomics, robotics, telemedicine, and personalized medicine.",
      gradientClass: "from-violet-600 to-purple-600",
    },
    {
      number: 4,
      title: "Unlock Investment & Business Opportunities",
      description:
        "Meet venture capitalists, government agencies, and corporate leaders looking to fund AI healthcare innovations while exploring collaboration opportunities with AI-driven startups and enterprises shaping the future of healthcare.",
      gradientClass: "from-indigo-600 to-violet-600",
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
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group bg-white  overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-2 hover:border-gradient-to-r"
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
                  src="https://th.bing.com/th/id/OIP.A3aLtXdHe0tdxI8y0Lm0ewHaEk?rs=1&pid=ImgDetMain"
                  alt={reason.title}
                  className="relative w-full h-56 object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                />

                <div className="absolute left-32 -bottom-2 h-4 w-4 bg-transparent border-white border-l-8 border-b-8 rounded-es-2xl"></div>
                <div className="absolute left-4 -bottom-2 h-4 w-4 bg-transparent border-white border-r-8 border-b-8 rounded-ee-2xl"></div>
                <div
                  className={`absolute -bottom-6 left-6 w-28 h-20 rounded-2xl bg-white flex items-start justify-center transform  group-hover:rotate-6 transition-all duration-300 `}
                >

                  <span className={` text-white m-2  w-full text-7xl text-center font-bold rounded-xl bg-gradient-to-r ${reason.gradientClass}`}>{reason.number}</span>
                  {/* <div className="absolute -right-2 bottom-4 h-4 w-4 bg-transparent border-white border-l-8 border-b-8 rounded-es-2xl"></div>
                  <div className="absolute -left-2 bottom-4 h-4 w-4 bg-transparent border-white border-r-8 border-b-8 rounded-ee-2xl"></div> */}

                </div>
              </div>
              
              <div className="p-8 pt-10">
                <div className="space-y-4">
                <h3
  className="text-2xl font-bold leading-tight text-gray-900 
  group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 
  group-hover:text-transparent bg-clip-text transition-colors duration-300"
>                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;