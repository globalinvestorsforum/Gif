import React, { useState, useEffect, useRef } from 'react';
import AllAgendaLayout from '../../../../assets/HealthcareSummit/AwardAgenda/AllAgendaLayout.jpg'
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const AllAgendas = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  const themes = [
    {
      id: 1,
      title: "AI in Diagnostics & Medical Imaging",
      description: "Bringing together industry leaders, researchers, and healthcare providers to discuss how AI is revolutionizing disease detection, radiology, and pathology. Experts will share case studies on AI-powered imaging solutions that enhance diagnostic accuracy and efficiency.",
      icon: "🔬"
    },
    {
      id: 2,
      title: "AI-Powered Drug Discovery & Development",
      description: "Pharmaceutical companies, biotech firms, and AI researchers will explore how AI accelerates drug discovery, reduces R&D costs, and improves success rates in clinical trials. Keynote sessions will highlight AI's role in transforming drug development pipelines.",
      icon: "💊"
    },
    {
      id: 3,
      title: "AI in Personalized Medicine & Treatment Planning",
      description: "Discussions will focus on how AI-driven predictive analytics and genomics enable personalized treatment plans. Healthcare leaders and data scientists will debate strategies for integrating AI into precision medicine while ensuring patient safety and ethical compliance.",
      icon: "🧬"
    },
    {
      id: 4,
      title: "AI for Hospital & Healthcare Operations",
      description: "Industry executives and AI solution providers will present real-world use cases demonstrating AI's impact on streamlining hospital workflows, reducing administrative burdens, and improving patient care efficiency.",
      icon: "🏥"
    },
    {
      id: 5,
      title: "AI & Robotics in Surgery and Rehabilitation",
      description: "Leading surgeons and robotics experts will share insights on how AI-driven robotic systems are enhancing surgical precision, reducing risks, and improving rehabilitation outcomes. Panel discussions will explore the future of AI-assisted surgery.",
      icon: "🤖"
    },
    {
      id: 6,
      title: "Generative AI & Large Language Models in Healthcare",
      description: "The role of generative AI, including large language models, in medical research, clinical documentation, and patient interactions will be a key topic. Experts will assess both the opportunities and challenges of these technologies in healthcare.",
      icon: "📝"
    },
    {
      id: 7,
      title: "AI in Mental Health & Virtual Healthcare Assistants",
      description: "Policymakers, mental health professionals, and AI developers will discuss how AI-powered chatbots, virtual therapists, and telehealth solutions are addressing mental health challenges and improving accessibility to care. Ethical concerns and regulatory frameworks will also be debated.",
      icon: "🧠"
    },
    {
      id: 8,
      title: "AI Ethics, Trust, and Regulatory Challenges",
      description: "A key forum for industry regulators, legal experts, and healthcare leaders, this session will explore AI governance, data privacy, and ethical AI adoption. Discussions will focus on overcoming AI bias, ensuring cybersecurity, and complying with global healthcare regulations.",
      icon: "⚖️"
    },
    {
      id: 9,
      title: "AI-Driven Remote Monitoring & Telemedicine",
      description: "Sessions will highlight how AI-powered remote monitoring, wearable health devices, and telemedicine platforms are revolutionizing patient care. Case studies from leading telehealth providers will demonstrate AI's potential in enhancing accessibility and real-time patient monitoring.",
      icon: "📱"
    },
    {
      id: 10,
      title: "AI for Global Health & Pandemic Preparedness",
      description: "Global health organizations, policymakers, and AI innovators will discuss how AI can predict pandemics, optimize resource allocation, and improve healthcare accessibility in underserved regions.",
      icon: "🌍"
    }
  ];


  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /** ✨ Title Fade-in & Slide-up */
      gsap.utils.toArray(".fade-slide").forEach((title) => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      /** 🎯 Goals Slide-in from Left */
      gsap.utils.toArray(".slide-left").forEach((goal) => {
        gsap.fromTo(
          goal,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: goal,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.utils.toArray(".slide-right").forEach((goal) => {
        gsap.fromTo(
          goal,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: goal,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      /** 🔥 Reasons Scale-in Effect */
      gsap.utils.toArray(".scale-in").forEach((reason) => {
        gsap.fromTo(
          reason,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: reason,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      /** 🏆 Award Cards Slide-up */
      gsap.utils.toArray(".slide-up").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const navigate = useNavigate();
  const handleClick =()=>{
    navigate('/gais/ticket')
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-black leading-tight">
      
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row '>
        <div className='slide-left flex-1 '>
            <img className='w-full h-full object-cover object-left-bottom' src={AllAgendaLayout} alt="AllAgendaLayout" />
        </div>
        <div className="slide-right flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r  from-teal-600 to-blue-600 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <h1 className="slide-right text-3xl md:text-4xl mx-8 md:mx-12 text-start uppercase font-extrabold pb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-200">
          Navigating the Future of Care: Illuminating Pathways with AI
          </h1>
          <p className="slide-right text-sm  max-w-xl mx-8 md:mx-12 text-start text-blue-100 mb-8">
          The AI Healthcare Summit isn't just an event; it's a pivotal convergence of minds dedicated to reshaping the landscape of patient care. In an era defined by rapid technological advancement, we've curated a series of thematic explorations and actionable agendas designed to unpack the transformative power of artificial intelligence.  Our carefully curated agenda features thought-provoking keynotes, dynamic panel discussions, and interactive workshops, all designed to empower healthcare professionals with the knowledge and tools to harness AI's full potential. Let's embark on this journey together, paving the way for a healthier, smarter future.          </p>
          <div className=" flex flex-wrap justify-start mx-8 md:mx-12 gap-4">
            <button onClick={handleClick} className="slide-left bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Register Now
            </button>
            {/* <button className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full border-2 border-white/70 shadow-lg transition duration-300 transform hover:scale-105">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="slide-up text-3xl md:text-4xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent uppercase font-bold mb-4">Conference Themes and Agenda</h2>
          <p className="slide-up text-lg text-gray-700 max-w-3xl mx-auto">
            Join us for groundbreaking discussions, workshops, and networking opportunities
            at the forefront of healthcare innovation.
          </p>
        </div>

        {/* Theme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme) => (
            <div 
              key={theme.id}
              className={`scale-in relative bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl p-6 shadow-xl backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                activeCard === theme.id ? 'scale-105 ring-2 ring-teal-300' : 'hover:scale-105'
              }`}
              onClick={() => setActiveCard(activeCard === theme.id ? null : theme.id)}
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 flex items-center brightness-150 justify-center bg-gradient-to-bl to-teal-600 from-blue-600 rounded-full text-3xl shadow-lg">
                {theme.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 pr-12">{theme.title}</h3>
              <p className={` text-white transition-all duration-300 ${
                activeCard === theme.id ? 'opacity-100 ' : 'opacity-75  overflow-hidden'
              }`}>
                {theme.description}
              </p>
              
            </div>
          ))}
        </div>

        {/* Featured Speakers Section */}
        {/* <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Speakers</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-12">
            Learn from the brightest minds at the intersection of AI and healthcare
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-gradient-to-br from-blue-800/50 to-indigo-900/50 rounded-xl p-6 backdrop-blur-sm w-64">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-blue-500 mb-4 overflow-hidden">
                  <img src={`/api/placeholder/200/200`} alt="Speaker" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Dr. AI Expert</h3>
                <p className="text-blue-200 text-sm">Chief AI Officer</p>
                <p className="text-blue-200 text-sm">Healthcare Innovation Inc.</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="slide-up mt-24 bg-gradient-to-r from-teal-500/20 to-blue-600/20 rounded-2xl p-8 md:p-12 text-center ">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Join Us at The AI Healthcare Summit</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            October 9, 2025 • Berlin, Germany • In-Person Event
          </p>
          <button onClick={handleClick} className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Secure Your Spot Today
          </button>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-indigo-950/80 mt-16 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-200 mb-4">© 2025 The AI Healthcare Summit. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-300 hover:text-white">Contact</a>
            <a href="#" className="text-blue-300 hover:text-white">Sponsors</a>
            <a href="#" className="text-blue-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-blue-300 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default AllAgendas;