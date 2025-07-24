import React, { useState,useEffect } from "react";
import {
  Building2,
  CheckSquare,
  Globe,
  ChevronDown,
  ChevronUp,
  Award,
  Check,
} from "lucide-react";
// import AwardCategoriesPage from './AwardCategoriesPage';

const AwardFormPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [justifications, setJustifications] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // 1.2 seconds delay

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const awardCategories = [
    {
      id: "ai-integration-excellence",
      title: "The AI-Integration Excellence Award",
      shortDesc:
        "Recognizing successful AI integration in operations, products, and services",
      description:
        "This award recognizes organizations that have successfully integrated AI into their operations, products, and services, driving innovation and measurable impact. It highlights businesses that have leveraged AI to enhance automation, decision-making, and operational efficiency, as well as those offering AI-powered solutions that create significant value for customers and industries.",
      eligibleNominees: [
        "Businesses that have successfully implemented AI-driven automation, decision-making, or operational improvements.",
        "Companies providing AI-powered products or services that deliver value to customers and industries.",
      ],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: "ai-integration-accelerator",
      title: "The AI-Integration Accelerator Award",
      shortDesc:
        "Honoring organizations accelerating AI adoption through technology and services",
      description:
        "This award honors organizations that play a crucial role in accelerating AI adoption by providing cutting-edge technology, robust infrastructure, and expert services. It recognizes both technology providers—such as cloud computing platforms, AI infrastructure providers, and AI development frameworks—and service providers, including consultancies and system integrators that help businesses implement, deploy, and optimize AI strategies.",
      eligibleNominees: [
        "Cloud computing platforms & AI infrastructure providers that offer the backbone for AI development and deployment.",
        "Companies offering AI frameworks, tools, and APIs that streamline AI innovation.",
        "MLOps, AI-as-a-Service (AIaaS), and model deployment specialists that simplify AI implementation.",
        "Consultancies, system integrators, and AI strategy firms that provide expertise in designing, implementing, and optimizing AI-driven solutions.",
      ],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: "ai-research-innovation",
      title: "The AI Research & Innovation Excellence Award",
      shortDesc:
        "Celebrating pioneers in AI research and technological innovation",
      description:
        "This award recognizes organizations pioneering AI research, technological innovation, and groundbreaking advancements. It honors those developing novel AI models, methodologies, and fundamental research that push the boundaries of AI capabilities. From academic institutions to cutting-edge R&D teams, this award celebrates those shaping the future of AI.",
      eligibleNominees: [
        "Academic institutions, AI research labs, and R&D departments leading AI innovation.",
        "Companies developing novel AI models, methodologies, or algorithms that advance the field.",
        "Organizations driving the future of AI through fundamental research and pioneering discoveries.",
      ],
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: "ai-autonomous-systems",
      title: "The AI-Driven Autonomous Systems Award",
      shortDesc:
        "Recognizing leaders in AI-powered autonomy and intelligent systems",
      description:
        "This award recognizes companies at the forefront of AI-powered autonomy, revolutionizing industries with intelligent, self-operating systems. It honors organizations that develop cutting-edge AI-driven robotics, autonomous vehicles, and self-operating machinery, driving innovation across sectors such as transportation, agriculture, and manufacturing. These companies are shaping the future by enabling AI-powered systems to operate independently, adapt, and make real-time decisions.",
      eligibleNominees: [
        "Developers of AI-driven robotics and autonomous machines that enhance efficiency and automation.",
        "Companies working on AI-powered self-learning and decision-making systems that enable greater autonomy.",
        "Organizations advancing AI autonomy in real-world applications, from industrial automation to next-generation mobility solutions.",
      ],
      gradient: "from-rose-500 to-orange-600",
    },
    {
      id: "responsible-ai-ethics",
      title: "The Excellence in Responsible AI & Ethics Award",
      shortDesc: "Honoring commitment to ethical AI adoption and governance",
      description:
        "This award honors organizations committed to ethical AI adoption, fairness, transparency, and governance. It recognizes leaders in bias reduction, responsible AI practices, and building trust in AI systems. By setting industry benchmarks, these organizations ensure AI aligns with ethical standards and societal well-being.",
      eligibleNominees: [
        "Organizations focused on AI fairness, explainability, and governance to ensure responsible AI implementation.",
        "Developers of AI tools that promote ethical AI use and bias mitigation, fostering trust and accountability.",
        "Companies implementing responsible AI practices in large-scale deployments, setting a high standard for ethical AI adoption.",
      ],
      gradient: "from-orange-500 to-yellow-600",
    },
    {
      id: "ai-data-excellence",
      title: "The AI Data Excellence Award",
      shortDesc: "Revolutionizing AI through high-quality data solutions",
      description:
        "This award recognizes companies that are revolutionizing AI-driven data processing, analytics, and model training through high-quality data solutions. It honors organizations that enable AI systems to perform at their best by providing cutting-edge data collection, preparation, annotation, and synthetic data generation. These businesses play a crucial role in advancing AI capabilities by ensuring data integrity, accuracy, and efficiency.",
      eligibleNominees: [
        "Companies offering data collection, preparation, annotation, and synthetic data solutions to enhance AI training.",
        "Organizations advancing AI model performance through high-quality data solutions and pipeline optimization.",
        "Businesses creating innovative AI-driven data analysis platforms that unlock new insights and drive AI-powered decision-making.",
      ],
      gradient: "from-yellow-500 to-green-600",
    },
    {
      id: "ai-hardware-innovation",
      title: "The AI Hardware Innovation Award",
      shortDesc: "Driving breakthrough advancements in AI hardware technology",
      description:
        "This award recognizes companies that are driving breakthrough advancements in AI hardware, enabling more efficient, powerful, and scalable AI systems. It honors organizations that develop AI-optimized processors, GPUs, TPUs, edge AI hardware, and specialized computing solutions that enhance AI performance across industries. These innovators are shaping the future of AI by building the foundational hardware that powers next-generation AI applications.",
      eligibleNominees: [
        "Companies developing AI-optimized processors, GPUs, TPUs, or AI chips to accelerate AI computations.",
        "Innovators in edge AI hardware and AI-specific computing solutions that bring AI capabilities closer to real-time applications.",
        "Organizations enhancing AI performance through specialized computing components, such as processors, edge devices, and novel AI architectures.",
      ],
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: "generative-ai-excellence",
      title: "The Generative AI Excellence Award",
      shortDesc: "Leading innovation in generative AI and content creation",
      description:
        "This award recognizes organizations leading the way in Generative AI innovation, transforming industries through AI-generated content, synthetic media, and creative automation. It honors companies that develop cutting-edge generative models, enabling advancements in text, image, video, music, and other AI-driven content creation. From research pioneers to industry disruptors, this award celebrates those pushing the boundaries of Generative AI's potential.",
      eligibleNominees: [
        "Companies developing state-of-the-art generative AI models for various applications.",
        "Organizations leveraging generative AI for content creation, automation, or synthetic media.",
        "Research teams and innovators advancing the capabilities and ethical use of Generative AI.",
      ],
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      id: "ai-training-education",
      title: "The AI Training & Education Excellence Award",
      shortDesc: "Excellence in AI education and workforce development",
      description:
        "This award recognizes organizations, institutions, and educators that have made outstanding contributions to AI education and workforce development. It honors those driving AI literacy, upskilling professionals, and fostering the next generation of AI talent through innovative training programs, academic research, and industry collaborations.",
      eligibleNominees: [
        "Universities and institutions offering AI-focused degree programs.",
        "Companies and training platforms providing AI certification and upskilling programs.",
        "Corporate initiatives that equip employees with AI expertise.",
        "Organizations advancing AI education through research, policy, or public initiatives.",
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  const handleCategoryToggle = (categoryId) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        const newJustifications = { ...justifications };
        delete newJustifications[categoryId];
        setJustifications(newJustifications);
        return prev.filter((id) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const handleExpandToggle = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleJustificationChange = (categoryId, value) => {
    setJustifications((prev) => ({
      ...prev,
      [categoryId]: value,
    }));
  };

  const getWordCount = (text) => {
    return text
      ? text
          .trim()
          .split(/\s+/)
          .filter((word) => word.length > 0).length
      : 0;
  };

  const getCategoryTitle = (categoryId) => {
    return awardCategories.find((cat) => cat.id === categoryId)?.title || "";
  };

  const [formData, setFormData] = useState({
    // Organization Information
    organizationName: "",
    contactPerson: "",
    jobTitle: "",
    email: "",
    website: "",
    incorporationYear: "",
    country: "",
    foundersName: "",
    totalEmployees: "",
    companyDescription: "",
    

    // Industry and Specialization
    industry: "",
    customIndustry: "",
    specialization: "",
    declaration: false,
  });

  const industries = [
    "Aerospace & Defense",
    "Agriculture & Food",
    "Automotive",
    "Banking & Financial Services",
    "Biotechnology",
    "Chemical & Materials",
    "Construction & Real Estate",
    "Consumer Goods",
    "E-commerce & Retail",
    "Education & Training",
    "Energy & Utilities",
    "Entertainment & Media",
    "Environmental Services",
    "Fashion & Apparel",
    "Government & Public Sector",
    "Healthcare & Medical",
    "Hospitality & Tourism",
    "Information Technology",
    "Insurance",
    "Legal Services",
    "Logistics & Supply Chain",
    "Manufacturing",
    "Maritime & Shipping",
    "Mining & Metals",
    "Non-profit & NGO",
    "Oil & Gas",
    "Pharmaceuticals",
    "Professional Services",
    "Renewable Energy",
    "Research & Development",
    "Robotics & Automation",
    "Security & Surveillance",
    "Smart Cities",
    "Sports & Recreation",
    "Telecommunications",
    "Transportation",
    "Travel & Aviation",
    "Waste Management",
    "Water Management",
    "Others",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = () => {
  //   console.log('Form submitted:', formData);
  //   alert('Application submitted successfully!');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formId = "b22c0c11-e09a-4348-b6ec-15c7f330cb56"; // Replace with your Web3Forms ID
    const data = {
      access_key: formId,
      ...formData,
      ...justifications,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Form submitted successfully!");
        console.log(result);
        setFormData({
          // Organization Information
          organizationName: "",
          contactPerson: "",
          jobTitle: "",
          email: "",
          website: "",
          incorporationYear: "",
          country: "",
          foundersName: "",
          totalEmployees: "",
          companyDescription: "",
          declaration: false,

          // Industry and Specialization
          industry: "",
          customIndustry: "",
          specialization: "",
        });
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };

  const handleDeclaration = (e) => {
    setFormData((prev) => ({
      ...prev,
      declaration: e.target.checked,
    }));
  };
  if (isLoaded){
  return (
      <div className=" text-black text-base bg-gray-50">
    <form onSubmit={handleSubmit} className=" ">
        <div className="relative max-w-6xl mx-auto xl:rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20 px-4 overflow-hidden">
          

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            
            <h1 className="text-4xl font-bold uppercase text-white mb-6 tracking-tight">
              Global AI Excellence Awards 2025
            </h1>
            <p className="text-gray-100 text-xl max-w-3xl mx-auto leading-relaxed">
              Recognize outstanding achievements in artificial intelligence
              innovation, implementation, and impact across industries
            </p>
            
          </div>
        </div>

        <div className="min-h-screen py-12 ">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <Building2 className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-Archivo font-semibold text-gray-800">
                    Organization Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your company name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter contact person name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter job title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Website *
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="https://www.example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Incorporation Year *
                    </label>
                    <input
                      type="number"
                      name="incorporationYear"
                      value={formData.incorporationYear}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="YYYY"
                      min="1800"
                      max="2025"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter country"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Founders Name *
                    </label>
                    <input
                      type="text"
                      name="foundersName"
                      value={formData.foundersName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter founder(s) name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Number of Employees *
                    </label>
                    
                    <input
                      type="number"
                      name="totalEmployees"
                      value={formData.totalEmployees}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter total number of employees"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Description *
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    Provide a brief overview of your company that will be used
                    to feature and promote your company
                  </p>
                  <textarea
                    name="companyDescription"
                    value={formData.companyDescription}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Describe your company, its mission, key products/services, and achievements..."
                    required
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <Globe className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-Archivo font-semibold text-gray-800">
                    Industry and Specialization
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.industry === "Others" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Please specify your industry *
                      </label>
                      <input
                        type="text"
                        name="customIndustry"
                        value={formData.customIndustry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="Enter your industry"
                        required={formData.industry === "Others"}
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specialization *
                    </label>
                    <textarea
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder="Describe your AI specialization, focus areas, and key innovations..."
                      required
                    />
                  </div>
                </div>
              </div>

              {/* <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-16 py-4 rounded-xl font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:translateY-1 transition-all duration-200 hover:shadow-xl"
              >
                Select Award Categories and Submit Your Nomination
              </button>
            </div> */}

              {/* Section 2: Select Award Category */}
              <div className="mb-12">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-8">
                  <h2 className="text-3xl uppercase font-bold text-gray-800 mb-4 flex items-center">
                    {/* <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">2</span> */}
                    Select Award Category
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    You may select multiple categories where applicable. Click
                    on each category to view details and make your selection.
                  </p>

                  <div className="space-y-4 ">
                    {awardCategories.map((category, index) => (
                      <div key={category.id} className="group">
                        <div
                          className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                            expandedCategory === category.id
                              ? "shadow-2xl"
                              : "shadow-lg hover:shadow-xl"
                          }`}
                        >
                          {/* Category Header */}
                          <div
                            className={`bg-gradient-to-r ${category.gradient} p-1 rounded-xl`}
                          >
                            <div className="bg-white/95 rounded-lg p-6">
                              <div className="flex flex-col space-y-4  md:flex-row md:items-center justify-between">
                                <div className="flex items-start space-x-4 flex-1">
                                  <div
                                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                                  >
                                    {index + 1}
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                      {category.title}
                                    </h3>
                                    <p className="text-gray-600">
                                      {category.shortDesc}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                  {/* Selection Checkbox Button */}
                                  <button
                                    onClick={() =>
                                      handleCategoryToggle(category.id)
                                    }
                                    className={`flex items-center justify-center w-10 h-10 rounded-lg border-2 transition-all duration-300 transform hover:scale-110 ${
                                      selectedCategories.includes(category.id)
                                        ? `bg-gradient-to-r ${category.gradient} border-transparent text-white shadow-lg`
                                        : "border-gray-300 bg-white hover:border-gray-400"
                                    }`}
                                    title={
                                      selectedCategories.includes(category.id)
                                        ? "Deselect category"
                                        : "Select category"
                                    }
                                  >
                                    {selectedCategories.includes(
                                      category.id
                                    ) ? (
                                      <Check className="w-6 h-6" />
                                    ) : (
                                      <div className="w-4 h-4 border-2 border-gray-400 rounded"></div>
                                    )}
                                  </button>

                                  <button
                                    onClick={() =>
                                      handleExpandToggle(category.id)
                                    }
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 bg-gradient-to-r ${category.gradient} text-white hover:shadow-lg transform hover:scale-105`}
                                  >
                                    <span className="font-medium">
                                      {expandedCategory === category.id
                                        ? "Close"
                                        : "View Details"}
                                    </span>
                                    {expandedCategory === category.id ? (
                                      <ChevronUp className="w-4 h-4" />
                                    ) : (
                                      <ChevronDown className="w-4 h-4" />
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Expanded Content */}
                          <div
                            className={`transition-all duration-500 ease-in-out ${
                              expandedCategory === category.id
                                ? " opacity-100"
                                : "max-h-0 opacity-0"
                            } overflow-hidden`}
                          >
                            <div className="bg-white p-6 border-t border-gray-100">
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                                  Award Description
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                  {category.description}
                                </p>
                              </div>

                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                                  Eligible Nominees Include:
                                </h4>
                                <ul className="space-y-2">
                                  {category.eligibleNominees.map(
                                    (nominee, idx) => (
                                      <li
                                        key={idx}
                                        className="flex items-start space-x-3"
                                      >
                                        <div
                                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} mt-2 flex-shrink-0`}
                                        ></div>
                                        <span className="text-gray-700">
                                          {nominee}
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>

                              {/* No selection button needed here anymore - moved to header */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Selection Summary */}
              {/* {selectedCategories.length > 0 && (
                      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                          <Check className="w-6 h-6 text-green-500 mr-2" />
                          Selected Categories ({selectedCategories.length})
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {selectedCategories.map((categoryId) => {
                            const category = awardCategories.find(cat => cat.id === categoryId);
                            return (
                              <div key={categoryId} className={`bg-gradient-to-r ${category.gradient} p-1 rounded-lg`}>
                                <div className="bg-white rounded-md p-3 flex items-center justify-between">
                                  <span className="text-sm font-medium text-gray-800 truncate pr-2">{category.title}</span>
                                  <button
                                    onClick={() => handleCategoryToggle(categoryId)}
                                    className="text-red-500 hover:text-red-700 transition-colors"
                                    title="Remove category"
                                  >
                                    ×
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )} */}

              {/* Section 3: Justification for Nomination */}
              {selectedCategories.length > 0 && (
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                    {/* <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">3</span> */}
                    Justification for Nomination
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    For each selected category, please provide a detailed
                    justification (150–300 words) explaining why your
                    organization deserves this award.
                  </p>

                  <div className="space-y-8">
                    {selectedCategories.map((categoryId) => {
                      const category = awardCategories.find(
                        (cat) => cat.id === categoryId
                      );
                      const wordCount = getWordCount(
                        justifications[categoryId] || ""
                      );
                      const isWithinRange =
                        wordCount >= 150 && wordCount <= 300;
                      const isOverLimit = wordCount > 300;
                      const isUnderLimit = wordCount > 0 && wordCount < 150;

                      return (
                        <div
                          key={categoryId}
                          className={`bg-gradient-to-r ${category.gradient} p-1 rounded-xl`}
                        >
                          <div className="bg-white rounded-lg p-6">
                            <div className="mb-6">
                              <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Category Name:
                              </label>
                              <div
                                className={`bg-gradient-to-r ${category.gradient} text-white p-4 rounded-lg font-semibold text-lg`}
                              >
                                {getCategoryTitle(categoryId)}
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor={`justification-${categoryId}`}
                                className="block text-sm font-semibold text-gray-700 mb-3"
                              >
                                Nomination Justification:
                              </label>
                              <textarea
                                id={`justification-${categoryId}`}
                                rows={8}
                                value={justifications[categoryId] || ""}
                                onChange={(e) =>
                                  handleJustificationChange(
                                    categoryId,
                                    e.target.value
                                  )
                                }
                                placeholder="Provide a detailed justification (150-300 words) explaining why your organization deserves this award. Include specific achievements, innovations, and measurable impacts..."
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical min-h-[150px] transition-all duration-300"
                              />
                              <div className="mt-4 flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                  <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                                      isWithinRange
                                        ? "bg-green-100 text-green-800"
                                        : isOverLimit
                                        ? "bg-red-100 text-red-800"
                                        : isUnderLimit
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-gray-100 text-gray-800"
                                    }`}
                                  >
                                    {wordCount}/300 words
                                  </span>
                                  {isWithinRange && (
                                    <span className="text-green-600 font-medium flex items-center">
                                      <Check className="w-4 h-4 mr-1" />
                                      Perfect length!
                                    </span>
                                  )}
                                </div>
                                <span className="text-sm text-gray-500">
                                  {isOverLimit && "Exceeds word limit"}
                                  {isUnderLimit && "Minimum 150 words required"}
                                  {wordCount === 0 && "Justification required"}
                                  {isWithinRange && "Within target range"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {selectedCategories.length === 0 && (
                <div className="text-center py-16">
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-12 max-w-md mx-auto">
                    <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      No Categories Selected
                    </h3>
                    <p className="text-gray-500">
                      Please select at least one award category above to provide
                      justifications.
                    </p>
                  </div>
                </div>
              )}
              {/* Submit Button */}
              {selectedCategories.length > 0 && (
                <div className="mt-12 text-center">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Ready to Submit?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      You have selected {selectedCategories.length} categor
                      {selectedCategories.length === 1 ? "y" : "ies"} and
                      provided justifications.
                    </p>

                    {/* Selected Categories Summary */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-700 mb-4">
                        Selected Categories:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedCategories.map((categoryId) => {
                          const category = awardCategories.find(
                            (cat) => cat.id === categoryId
                          );
                          const wordCount = getWordCount(
                            justifications[categoryId] || ""
                          );
                          const isComplete =
                            wordCount >= 150 && wordCount <= 300;

                          return (
                            <div
                              key={categoryId}
                              className={`bg-gradient-to-r ${category.gradient} p-1 rounded-lg`}
                            >
                              <div className="bg-white rounded-md p-4">
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <h5 className="font-semibold text-gray-800 text-sm mb-1">
                                      {category.title}
                                    </h5>
                                    <p className="text-xs text-gray-600">
                                      {wordCount} words
                                    </p>
                                  </div>
                                  {isComplete ? (
                                    <Check className="w-5 h-5 text-green-500" />
                                  ) : (
                                    <div className="w-5 h-5 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Validation Check */}
                    {selectedCategories.every((categoryId) => {
                      const wordCount = getWordCount(
                        justifications[categoryId] || ""
                      );
                      return wordCount >= 150 && wordCount <= 300;
                    }) ? (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center justify-center space-x-2 text-green-700">
                          <Check className="w-5 h-5" />
                          <span className="font-medium">
                            All justifications are complete and ready for
                            submission!
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex items-center justify-center space-x-2 text-yellow-700">
                          <div className="w-5 h-5 border-2 border-yellow-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          </div>
                          <span className="font-medium">
                            Please complete all justifications (150-300 words
                            each) before submitting.
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-6">
                        <CheckSquare className="text-blue-600" />
                        <h2 className="text-2xl font-Archivo font-semibold">
                          Declaration
                        </h2>
                      </div>
                      <div className="space-y-4 text-left">
                        <div>
                          <p htmlFor="declaration">Declaration Statement</p>
                          <p className="text-gray-700 text-sm">
                            By submitting this form, I declare that all
                            information provided is accurate to the best of my
                            knowledge.
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="declaration"
                            required
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                            checked={formData.declaration}
                            onChange={handleDeclaration}
                          />
                          <p htmlFor="declaration">
                            I agree to the terms and conditions.
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        const allComplete = selectedCategories.every(
                          (categoryId) => {
                            const wordCount = getWordCount(
                              justifications[categoryId] || ""
                            );
                            return wordCount >= 150 && wordCount <= 300;
                          }
                        );

                        if (allComplete) {
                          alert(
                            "Form submitted successfully! Thank you for your nomination."
                          );
                        } else {
                          alert(
                            "Please complete all justifications before submitting."
                          );
                        }
                      }}
                      disabled={
                        !selectedCategories.every((categoryId) => {
                          const wordCount = getWordCount(
                            justifications[categoryId] || ""
                          );
                          return wordCount >= 150 && wordCount <= 300;
                        })
                      }
                      className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                        selectedCategories.every((categoryId) => {
                          const wordCount = getWordCount(
                            justifications[categoryId] || ""
                          );
                          return wordCount >= 150 && wordCount <= 300;
                        })
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:shadow-2xl cursor-pointer"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
    </form>
    </div>
    

  )}
  return(
    <div className="h-[50vh] bg-white"></div>
  );
};

export default AwardFormPage;
