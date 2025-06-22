import React, { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who is eligible to apply for the AI Awards?",
      answer:
        "We welcome applications from a diverse range of entities, including startups, established companies, academic institutions, individual researchers, and others who are driving innovation in the field of AI. For detailed eligibility criteria specific to each award, please refer to the individual award pages.",
    },
    {
      question: "Is the award nomination free?",
      answer:
        "Yes, nominations are free of charge if submitted before the specified deadline for the respective awards. After the deadline, nomination fees will apply.",
    },
    {
      question:
        "What will be the nomination fee if we apply after the deadline?",
      answer:
        "The late nomination fee will be announced once the free nomination period concludes.",
    },
    {
      question:
        "Will we need to pay a fee to attend the award ceremony or to receive award on selection?",
      answer:
        "No additional fees are required for award recipients to attend the ceremony or receive their award.",
    },
    {
      question: "When will the winners be announced?",
      answer:
        "Winners will be announced during the awards ceremony at the Global AI Summit.",
    },
    {
      question:
        "Does this nomination also cover the cost of our summit participation?",
      answer:
        "No, the nomination does not guarantee full summit access, as the ticket registration fees are directly linked to covering the basic costs of vendors and other service providers for their services.",
    },
    {
      question: "How can I buy tickets for summit?",
      answer:
        "You can purchase tickets online through our website or request an invoice for payment.",
    },
    {
      question: "Can we get a chance to represent our company as a speaker?",
      answer:
        "You are welcome to apply for a speaking opportunity. The final decision will be made by our production team after reviewing your request.",
    },
    {
      question:
        "What are the next steps if we want to proceed with the nomination?",
      answer:
        "If you wish to proceed with the nomination, please share your basic details for an initial screening by emailing us at info@global-investors-forum.com or complete the nomination form on our website. Our team will guide you through the next steps once your submission is received.",
    },
    {
      question: "When will the complete list of nominees be announced?",
      answer:
        "The complete list of nominees will be announced according to the dates specified for each award.",
    },
    {
      question: "What are the categories for the AI Awards 2025?",
      answer:
        "Our AI Award program features a diverse array of categories spanning various industries and AI specializations. Explore the full list of categories on the dedicated page for the award that interests you.",
    },
    {
      question: "How are the winners of the AI Awards selected?",
      answer:
        "Winners are selected through a rigorous evaluation process conducted by our internal expert team. Each nomination is assessed based on comprehensive criteria, including innovation, technical excellence, impact, and scalability.",
    },
    {
      question:
        "How can I stay updated on any changes or announcements related to the ceremony?",
      answer:
        "Stay updated on any changes or announcements related to the ceremony by following us on LinkedIn or visiting our website regularly.",
    },
    {
      question:
        "What makes our AI Awards Program the world's largest initiative of its kind?",
      answer:
        "Our AI Awards stands as the world's largest recognition platform through its unprecedented reach and impact:",

      points: [
        "Global participation from over 100 countries across six continents, embracing AI innovation at a truly global scale",
        "Highest number of participating organizations of any global AI awards program",
        "Industry-specific awards across 15+ sectors: Multi-sector recognition spanning healthcare, finance, manufacturing, retail, education, and beyond",
        "Recognition for organizations of all sizes, from startups to enterprises",
        "Awards covering every aspect of AI implementation: technical innovation, business impact, and societal contribution",
        "International stage showcasing AI breakthroughs to a global audience",
        "Rigorous evaluation framework assessing innovation, impact, and implementation excellence",
        "Unrivaled global network connecting innovators, investors, and industry leaders",
        "No other platform offers this scale of global recognition and opportunity for AI excellence",
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen font-Archivo bg-gradient-to-r from-purple-100 to-pink-100">
      {/* Hero Section */}
      <div className=" text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl uppercase font-bold text-black mb-4 font-Antonio">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about our AI Awards nomination
            process, ceremony details, and participation guidelines.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`font-medium text-base lg:text-lg transition-all duration-300 ${
                    openIndex === index
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold"
                      : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openIndex === index
                      ? "transform rotate-180 text-blue-600"
                      : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? "pb-4" : "h-0 py-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600 whitespace-pre-line ">
                  {faq.answer}
                </p>

                {faq.points && faq.points.length > 0 && (
                  <ul className="list-disc pl-4 mt-2 space-y-2">
                    {faq.points.map((point, idx) => (
                      <li key={idx} className="text-gray-600 leading-tight">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className=" py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-2xl p-8">
            <h2 className="text-2xl text-black font-Archivo font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <a href="mailto:info@global-investors-forum.com">
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:bg-gradient-to-r from-purple-60 to-pink-60 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              Contact Support
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
