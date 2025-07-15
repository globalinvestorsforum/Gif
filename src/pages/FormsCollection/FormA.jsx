import React, { useState } from 'react';
import { ChevronDown, Globe, MapPin, Calendar, Users, Target, Phone, Mail, Linkedin, CheckCircle } from 'lucide-react';

const FormA = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    headquarters: '',
    yearFounded: '',
    companySize: '',
    primaryIndustry: '',
    companyDescription: '',
    usingAI: '',
    aiRole: '',
    aiStage: '',
    aiProgress: 0,
    technologies: [],
    preferredDay: '',
    numRepresentatives: '',
    exhibitionGoals: '',
    contactName: '',
    contactPosition: '',
    contactEmail: '',
    contactPhone: '',
    linkedIn: '',
    consent: {
      tickets: false,
      installation: false,
      terms: false
    },
    signature: '',
    date: new Date().toISOString().split('T')[0]
  });

  const companySizes = [
    'Startup (1-10 employees)',
    'Small (11-50 employees)',
    'Medium (51-200 employees)',
    'Large (201-1000 employees)',
    'Enterprise (1000+ employees)'
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Retail',
    'Transportation',
    'Entertainment',
    'Agriculture',
    'Other'
  ];

  const aiRoles = [
    'AI-Integrated Business (using AI in operations/products)',
    'AI-Powered Solution Provider',
    'Generative AI Application (e.g., Copilots, Agents)',
    'AI Service / Consultancy Provider',
    'AI Infrastructure / MLOps / Cloud Enabler',
    'AI Tools / APIs / Models / Framework Developers',
    'AI Native Startup (AI-first product)',
    'Research Institute / University / Academic Lab',
    'AI Ecosystem Contributor (Data, Model Access, Developer Tools)',
    'Other'
  ];

  const aiStages = [
    'Live in Market',
    'Pilot Phase',
    'Under Development',
    'Research/Prototype'
  ];

  const technologies = [
    'NLP',
    'Computer Vision',
    'Generative AI / LLMs',
    'Predictive Analytics',
    'MLOps / Infrastructure',
    'AI Agents / Copilots',
    'Reinforcement Learning',
    'Custom AI Models'
  ];

  const showcaseDays = [
    'Day 1',
    'Day 2',
    'All Days'
  ];

  const representativeOptions = [
    '1 person',
    '2-3 persons'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTechnologyToggle = (tech) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter(item => item !== tech)
        : [...prev.technologies, tech]
    }));
  };

  const handleConsentChange = (consentType) => {
    setFormData(prev => ({
      ...prev,
      consent: {
        ...prev.consent,
        [consentType]: !prev.consent[consentType]
      }
    }));
  };

  const handleSubmit = async (e) => {
    console.log('Form submitted:', formData);
   
    const form = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => form.append(`${key}[]`, v));
    } else {
      form.append(key, value);
    }
  });
  form.append("access_key", "b22c0c11-e09a-4348-b6ec-15c7f330cb56");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: form,
  });

  const data = await response.json();

  if (data.success) {
    alert("Application submitted successfully!");
     // Reset the form
  } else {
    console.log("Error", data);
    alert("Failed to submit. Please try again.");
  }
    console.log('Form submitted:', formData);
   
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 px-8 py-10">
            <div className="text-center">
              <h1 className="uppercase text-4xl font-bold text-white mb-4">Free Exhibition Application Form</h1>
              <p className="text-blue-100 text-lg">Join our AI showcase event and connect with industry leaders</p>
            </div>
          </div>

          <div className="p-8 space-y-12">
            {/* Section 1: Company Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Company Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Website</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="https://example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Headquarters Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="headquarters"
                      value={formData.headquarters}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="City, Country"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Year Founded</label>
                  <input
                    type="number"
                    name="yearFounded"
                    value={formData.yearFounded}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    min="1900"
                    max="2024"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company Size</label>
                  <div className="relative">
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select company size</option>
                      {companySizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Industry</label>
                  <div className="relative">
                    <select
                      name="primaryIndustry"
                      value={formData.primaryIndustry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select primary industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Short Company Description (Max 250 characters)</label>
                <textarea
                  name="companyDescription"
                  value={formData.companyDescription}
                  onChange={handleInputChange}
                  maxLength={250}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Brief description of your company..."
                  required
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.companyDescription.length}/250 characters
                </div>
              </div>
            </div>

            {/* Section 2: AI Role & Contribution */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-800">AI Role & Contribution</h2>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">✅ Is your company using AI in your operations, products, or services?</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="usingAI"
                      value="yes"
                      checked={formData.usingAI === 'yes'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700"><strong>Yes</strong> - We are actively using AI in our operations</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="usingAI"
                      value="no"
                      checked={formData.usingAI === 'no'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700"><strong>No</strong> - We are not currently using AI</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Which of the following best describe your AI role?</label>
                  <div className="relative">
                    <select
                      name="aiRole"
                      value={formData.aiRole}
                      onChange={handleInputChange}

                      className="w-full px-4 py-3 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select your AI role</option>
                      {aiRoles.map(role => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">What stage is your AI work in?</label>
                  <div className="relative">
                    <select
                      name="aiStage"
                      value={formData.aiStage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select current stage</option>
                      {aiStages.map(stage => (
                        <option key={stage} value={stage}>{stage}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">AI Implementation Progress ({formData.aiProgress}%)</label>
                <div className="relative">
                  <input
                    type="range"
                    name="aiProgress"
                    min="0"
                    max="100"
                    value={formData.aiProgress}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">Key Technologies or Disciplines Used:</label>
                <div className="space-y-4">
                  {technologies.map(tech => (
                    <div key={tech} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">{tech}</span>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => handleTechnologyToggle(tech)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            formData.technologies.includes(tech) 
                              ? 'bg-blue-600' 
                              : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              formData.technologies.includes(tech) 
                                ? 'translate-x-6' 
                                : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Showcase Requirements */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Showcase Requirements</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Showcase Day</label>
                  <div className="relative">
                    <select
                      name="preferredDay"
                      value={formData.preferredDay}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select preferred day</option>
                      {showcaseDays.map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Number of representatives attending</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      name="numRepresentatives"
                      value={formData.numRepresentatives}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select number of representatives</option>
                      {representativeOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Exhibition Goals</label>
                <div className="relative">
                  <Target className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="exhibitionGoals"
                    value={formData.exhibitionGoals}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="What do you hope to achieve at the exhibition?"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Contact Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Main Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Position/Title</label>
                  <input
                    type="text"
                    name="contactPosition"
                    value={formData.contactPosition}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn</label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="url"
                      name="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Consent & Confirmation */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  5
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Consent & Confirmation</h2>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                <p className="text-sm font-semibold text-gray-700 mb-4">Please confirm each of the following:</p>
                
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent.tickets}
                    onChange={() => handleConsentChange('tickets')}
                    className="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded mt-1"
                    required
                  />
                  <span className="text-sm text-gray-700">My company will purchase visitor tickets to be eligible to exhibit</span>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent.installation}
                    onChange={() => handleConsentChange('installation')}
                    className="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded mt-1"
                    required
                  />
                  <span className="text-sm text-gray-700">I understand that installation (furniture, banners, stands) is not included</span>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent.terms}
                    onChange={() => handleConsentChange('terms')}
                    className="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded mt-1"
                    required
                  />
                  <span className="text-sm text-gray-700">I accept the event's terms and exhibition space limitations (1m × 1m or 1.2m × 1.2m per company)</span>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Signature</label>
                  <input
                    type="text"
                    name="signature"
                    value={formData.signature}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Type your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <CheckCircle className="w-6 h-6" />
                <span>Submit Application</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          border: none;
        }
      `}</style>
    </div>
  );
};

export default FormA;