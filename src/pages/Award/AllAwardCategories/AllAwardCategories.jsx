import React, { useState, useEffect, useRef } from 'react';
import { Award, Sparkles, Brain, Cpu, Shield, Database, Zap, Palette, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AwardCard = ({ award, icon: Icon, gradient, delay }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          // delay: delay / 1000,
          stagger: 0.2,
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl ${gradient} group cursor-pointer`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl mr-4">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">{award.title}</h3>
            <div className="w-16 h-1 bg-white/50 rounded-full"></div>
          </div>
        </div>
        <p className="text-white/90 text-lg leading-relaxed mb-6">{award.description}</p>
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-lg">Eligible Nominees:</h4>
          <div className="space-y-2">
            {award.nominees.map((nominee, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-white/70 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <p className="text-white/80 text-base">{nominee}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`mt-6 flex justify-start`}>
          <button
            onClick={() => navigate("/gais/award-form-page")}
            className="px-6 py-2 shadow-2xl text-sm font-semibold text-black bg-gradient-to-r from-white/60 to-white/60 backdrop-blur-sm hover:bg-gradient-to-r rounded-full border border-white/30 hover:from-black/30 hover:to-black/20 hover:text-white hover:border-white/50 transition-all duration-300 transform hover:scale-125 hover:shadow-lg"
          >
            Apply Now →
          </button>
        </div>
      </div>
    </div>
  );
};

// Keep the rest of the awards array and main component AllAwardCategories unchanged

const awards = [
  {
    title: "The AI-Integration Excellence Award",
    description: "This award recognizes organizations that have successfully integrated AI into their operations, products, and services, driving innovation and measurable impact. It highlights businesses that have leveraged AI to enhance automation, decision-making, and operational efficiency, as well as those offering AI-powered solutions that create significant value for customers and industries.",
    nominees: [
      "Businesses that have successfully implemented AI-driven automation, decision-making, or operational improvements.",
      "Companies providing AI-powered products or services that deliver value to customers and industries."
    ],
    icon: Award,
    gradient: "bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700"
  },
  {
    title: "The AI-Integration Accelerator Award",
    description: "This award honors organizations that play a crucial role in accelerating AI adoption by providing cutting-edge technology, robust infrastructure, and expert services. It recognizes both technology providers—such as cloud computing platforms, AI infrastructure providers, and AI development frameworks—and service providers, including consultancies and system integrators that help businesses implement, deploy, and optimize AI strategies.",
    nominees: [
      "Cloud computing platforms & AI infrastructure providers that offer the backbone for AI development and deployment.",
      "Companies offering AI frameworks, tools, and APIs that streamline AI innovation.",
      "MLOps, AI-as-a-Service (AIaaS), and model deployment specialists that simplify AI implementation.",
      "Consultancies, system integrators, and AI strategy firms that provide expertise in designing, implementing, and optimizing AI-driven solutions."
    ],
    icon: Zap,
    gradient: "bg-gradient-to-br from-cyan-500 via-teal-600 to-blue-700"
  },
  {
    title: "The AI Research & Innovation Excellence Award",
    description: "This award recognizes organizations pioneering AI research, technological innovation, and groundbreaking advancements. It honors those developing novel AI models, methodologies, and fundamental research that push the boundaries of AI capabilities. From academic institutions to cutting-edge R&D teams, this award celebrates those shaping the future of AI.",
    nominees: [
      "Academic institutions, AI research labs, and R&D departments leading AI innovation.",
      "Companies developing novel AI models, methodologies, or algorithms that advance the field.",
      "Organizations driving the future of AI through fundamental research and pioneering discoveries."
    ],
    icon: Brain,
    gradient: "bg-gradient-to-br from-pink-500 via-rose-600 to-orange-600"
  },
  {
    title: "The AI-Driven Autonomous Systems Award",
    description: "This award recognizes companies at the forefront of AI-powered autonomy, revolutionizing industries with intelligent, self-operating systems. It honors organizations that develop cutting-edge AI-driven robotics, autonomous vehicles, and self-operating machinery, driving innovation across sectors such as transportation, agriculture, and manufacturing. These companies are shaping the future by enabling AI-powered systems to operate independently, adapt, and make real-time decisions.",
    nominees: [
      "Developers of AI-driven robotics and autonomous machines that enhance efficiency and automation.",
      "Companies working on AI-powered self-learning and decision-making systems that enable greater autonomy.",
      "Organizations advancing AI autonomy in real-world applications, from industrial automation to next-generation mobility solutions."
    ],
    icon: Cpu,
    gradient: "bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700"
  },
  {
    title: "The Excellence in Responsible AI & Ethics Award",
    description: "This award honors organizations committed to ethical AI adoption, fairness, transparency, and governance. It recognizes leaders in bias reduction, responsible AI practices, and building trust in AI systems. By setting industry benchmarks, these organizations ensure AI aligns with ethical standards and societal well-being.",
    nominees: [
      "Organizations focused on AI fairness, explainability, and governance to ensure responsible AI implementation.",
      "Developers of AI tools that promote ethical AI use and bias mitigation, fostering trust and accountability.",
      "Companies implementing responsible AI practices in large-scale deployments, setting a high standard for ethical AI adoption."
    ],
    icon: Shield,
    gradient: "bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700"
  },
  {
    title: "The AI Data Excellence Award",
    description: "This award recognizes companies that are revolutionizing AI-driven data processing, analytics, and model training through high-quality data solutions. It honors organizations that enable AI systems to perform at their best by providing cutting-edge data collection, preparation, annotation, and synthetic data generation. These businesses play a crucial role in advancing AI capabilities by ensuring data integrity, accuracy, and efficiency.",
    nominees: [
      "Companies offering data collection, preparation, annotation, and synthetic data solutions to enhance AI training.",
      "Organizations advancing AI model performance through high-quality data solutions and pipeline optimization.",
      "Businesses creating innovative AI-driven data analysis platforms that unlock new insights and drive AI-powered decision-making."
    ],
    icon: Database,
    gradient: "bg-gradient-to-br from-amber-500 via-orange-600 to-red-600"
  },
  {
    title: "The AI Hardware Innovation Award",
    description: "This award recognizes companies that are driving breakthrough advancements in AI hardware, enabling more efficient, powerful, and scalable AI systems. It honors organizations that develop AI-optimized processors, GPUs, TPUs, edge AI hardware, and specialized computing solutions that enhance AI performance across industries. These innovators are shaping the future of AI by building the foundational hardware that powers next-generation AI applications.",
    nominees: [
      "Companies developing AI-optimized processors, GPUs, TPUs, or AI chips to accelerate AI computations.",
      "Innovators in edge AI hardware and AI-specific computing solutions that bring AI capabilities closer to real-time applications.",
      "Organizations enhancing AI performance through specialized computing components, such as processors, edge devices, and novel AI architectures."
    ],
    icon: Cpu,
    gradient: "bg-gradient-to-br from-slate-600 via-gray-700 to-zinc-800"
  },
  {
    title: "The Generative AI Excellence Award",
    description: "This award recognizes organizations leading the way in Generative AI innovation, transforming industries through AI-generated content, synthetic media, and creative automation. It honors companies that develop cutting-edge generative models, enabling advancements in text, image, video, music, and other AI-driven content creation. From research pioneers to industry disruptors, this award celebrates those pushing the boundaries of Generative AI's potential.",
    nominees: [
      "Companies developing state-of-the-art generative AI models for various applications.",
      "Organizations leveraging generative AI for content creation, automation, or synthetic media.",
      "Research teams and innovators advancing the capabilities and ethical use of Generative AI."
    ],
    icon: Palette,
    gradient: "bg-gradient-to-br from-fuchsia-500 via-pink-600 to-rose-700"
  },
  {
    title: "The AI Training & Education Excellence Award",
    description: "This award recognizes organizations, institutions, and educators that have made outstanding contributions to AI education and workforce development. It honors those driving AI literacy, upskilling professionals, and fostering the next generation of AI talent through innovative training programs, academic research, and industry collaborations.",
    nominees: [
      "Universities and institutions offering AI-focused degree programs.",
      "Companies and training platforms providing AI certification and upskilling programs.",
      "Corporate initiatives that equip employees with AI expertise.",
      "Organizations advancing AI education through research, policy, or public initiatives."
    ],
    icon: GraduationCap,
    gradient: "bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700"
  }
];

export default function AllAwardCategories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-20 left-1/4 w-60 h-60 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-bounce" style={{animationDelay: '3s', animationDuration: '4s'}}></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{animationDelay: '5s'}}></div>
        <div className="absolute bottom-1/3 left-20 w-56 h-56 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-6xl pb-2 uppercase md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
              GAIEA Categories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Celebrating innovation, ethics, and excellence in artificial intelligence across industries and research
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Grid */}
      <div className="relative z-10 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <AwardCard 
                key={index} 
                award={award} 
                icon={award.icon}
                gradient={award.gradient}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/10">
            <h2 className="text-4xl font-bold uppercase text-white mb-6">Ready to Nominate?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the celebration of AI excellence. Submit your nomination and be part of the future of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/gais/award-form-page")} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Submit Nomination
              </button>
              {/* <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">GAIEA Categories</h3>
            <p className="text-gray-400 mb-6">Recognizing the leaders shaping the future of artificial intelligence</p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}