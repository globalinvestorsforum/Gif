import React, { useState } from 'react';

export default function AwardCategories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const awardCategories = [
    {
      id: 1,
      title: "The AI-Integration Excellence Award",
      description: "This award recognizes organizations that have successfully integrated AI into their operations, products, and services, as well as those offering AI-powered solutions that create significant value for customers and industries.",
      nominees: [
        "Businesses that have successfully implemented AI-driven automation, decision-making, or operational improvements.",
        "Companies providing AI-powered products or services that deliver value to customers and industries."
      ]
    },
    {
      id: 2,
      title: "The AI-Integration Accelerator Award",
      description: "This award recognizes enablers of AI adoption—tech providers, infrastructure experts, and consultants—who empower businesses with the tools and strategies to scale AI effectively.",
      nominees: [
        "Cloud computing platforms and AI infrastructure providers.",
        "Companies offering AI development frameworks, tools, and APIs.",
        "Businesses facilitating AI adoption through MLOps, model deployment, or AI-as-a-Service (AIaaS).",
        "Consultancies, system integrators, and AI strategy firms that provide expertise in designing, implementing, and optimizing AI-driven solutions."
      ]
    },
    {
      id: 3,
      title: "The AI Research & Innovation Excellence Award",
      description: "Celebrates academic institutions, R&D teams, and companies that are pushing the boundaries of Artificial Intelligence through cutting-edge models, methodologies, and fundamental research.",
      nominees: [
        "Academic institutions, AI research labs, and R&D departments.",
        "Companies that develop novel AI models, methodologies, or algorithms.",
        "Organizations driving the future of AI through fundamental research."
      ]
    },
    {
      id: 4,
      title: "The AI-Driven Autonomous Systems Award",
      description: "Highlights innovators leading the charge in autonomous technologies—from robotics and self-operating machinery to autonomous mobility solutions—across sectors like manufacturing, agriculture, and logistics.",
      nominees: [
        "Developers of AI-driven robotics and autonomous machines.",
        "Companies working on AI-powered self-learning and decision-making systems.",
        "Organizations that advance AI autonomy in real-world applications."
      ]
    },
    {
      id: 5,
      title: "The Excellence in Responsible AI & Ethics Award",
      description: "Commends organizations that champion ethical AI use by focusing on fairness, transparency, governance, and responsible deployment to ensure AI aligns with societal values.",
      nominees: [
        "Organizations focused on AI fairness, explainability, and governance.",
        "Developers of AI tools that promote ethical AI use and bias mitigation.",
        "Companies implementing responsible AI practices in large-scale deployments."
      ]
    },
    {
      id: 6,
      title: "The AI Data Excellence Award",
      description: "Recognizes excellence in data solutions—including annotation, synthetic data generation, and pipeline optimization—that serve as the backbone of high-performing AI systems.",
      nominees: [
        "Companies offering data collection, preparation, annotation, and synthetic data solutions.",
        "Organizations advancing AI model performance through high-quality data solutions.",
        "Businesses creating innovative AI-driven data analysis platforms."
      ]
    },
    {
      id: 7,
      title: "The AI Hardware Innovation Award",
      description: "Companies advancing AI performance through breakthrough hardware solutions such as AI chips, edge devices, and specialized computing systems designed for scalable AI applications.",
      nominees: []
    },
    {
      id: 8,
      title: "The Generative AI Excellence Award",
      description: "Celebrates those leading in the generative AI space—pioneering creative applications through text, image, video, and media synthesis, while also exploring ethical and responsible deployment.",
      nominees: [
        "Companies developing state-of-the-art generative AI models for various applications.",
        "Organizations leveraging generative AI for content creation, automation, or synthetic media.",
        "Research teams and innovators advancing the capabilities and ethical use of Generative AI."
      ]
    },
    {
      id: 9,
      title: "The AI Training & Education Excellence Award",
      description: "This award recognizes organizations, institutions, and educators that have made outstanding contributions to AI education and workforce development. It honors those driving AI literacy, upskilling professionals, and fostering the next generation of AI talent through innovative training programs, academic research, and industry collaborations.",
      nominees: [
        "Universities and institutions offering AI-focused degree programs.",
        "Companies and training platforms providing AI certification and upskilling programs.",
        "Corporate initiatives that equip employees with AI expertise.",
        "Organizations advancing AI education through research, policy, or public initiatives."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12 pt-8">
          <h1 className="text-5xl font-bold mb-4">AWARD CATEGORIES</h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">Recognizing excellence in AI innovation across multiple disciplines</p>
        </header>
        
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Side */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {awardCategories.map((award) => (
                <div 
                  key={award.id}
                  className={`bg-opacity-40 rounded-xl p-5 cursor-pointer transition-all duration-300 h-full ${
                    selectedCategory === award.id 
                      ? 'bg-blue-800 border-2 border-blue-400 shadow-lg shadow-blue-900/50' 
                      : 'bg-blue-900 border border-blue-800 hover:bg-blue-800'
                  }`}
                  onClick={() => setSelectedCategory(award.id === selectedCategory ? null : award.id)}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-lg font-bold font-Archivo text-transparent bg-gradient-to-r from-blue-600 via-red-500 to-yellow-600 bg-clip-text ">{award.title.replace(/^The\s/, '')}</h2>
                      {selectedCategory === award.id ? (
                        <span className="bg-blue-400 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">−</span>
                      ) : (
                        <span className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">+</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-300 flex-grow">
                      {award.description.length > 120 && selectedCategory !== award.id
                        ? `${award.description.substring(0, 120)}...`
                        : award.description}
                    </p>
                    
                    {/* Show nominees when selected */}
                    {selectedCategory === award.id && award.nominees.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-blue-700">
                        <h3 className="text-sm font-semibold mb-2 text-blue-300">Eligible Nominees:</h3>
                        <ul className="text-sm space-y-2">
                          {award.nominees.map((nominee, index) => (
                            <li key={index} className="flex">
                              <span className="text-blue-400 mr-2">•</span>
                              <span className="text-gray-200">{nominee}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 mb-10 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-lg shadow-lg transform transition hover:scale-105">
            Submit Your Nomination
          </button>
          <p className="mt-4 text-gray-400">Deadline: April 30, 2025</p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ 
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>
    </div>
  );
}