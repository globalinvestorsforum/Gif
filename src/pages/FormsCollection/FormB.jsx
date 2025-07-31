import React, { useState } from 'react';
import { Upload, Check, User, Building, Award, Globe, Quote, FileText } from 'lucide-react';

const FormB = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    headquarters: '',
    incorporationYear: '',
    website: '',
    linkedIn: '',
    logoLink: '',
    tagline: '',
    shortDescription: '',
    longBio: '',
    aiRoles: [],
    fullName: '',
    designation: '',
    linkedInProfile: '',
    photoLink: '',
    shortBio: '',
    quote: '',
    demoVideo: '',
    brochureLink: '',
    mediaKit: '',
    declaration: false
  });

  const [currentSection, setCurrentSection] = useState(0);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'aiRoles') {
        setFormData(prev => ({
          ...prev,
          aiRoles: checked 
            ? [...prev.aiRoles, value]
            : prev.aiRoles.filter(role => role !== value)
        }));
      }else if(name==="declaration"){
        setFormData(prev => ({ ...prev, [name]: true }));
      }
       else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, [fieldName]: file }));
  };

  const aiRoleOptions = [
    'AI-Powered Solution Provider',
    'AI-Integrated Business Operations',
    'Generative AI Tools (Copilot, Agents, etc.)',
    'AI Infrastructure / Cloud / MLOps Provider',
    'AI Consultancy / Implementation',
    'Research Lab / Academic Institution',
    'Developer Tools / APIs / LLMs',
    'Data / Model / Compute Provider',
    'Ecosystem Supporter',
    'Other'
  ];

  const sections = [
    { id: 'company', title: 'Company Information', icon: Building },
    { id: 'brand', title: 'Brand Visibility', icon: Globe },
    { id: 'role', title: 'AI Landscape Role', icon: Award },
    { id: 'representative', title: 'Representative Details', icon: User },
    { id: 'quote', title: 'Quote & Materials', icon: Quote },
    { id: 'declaration', title: 'Declaration', icon: FileText }
  ];

  const handleSubmit = async() => {
    if (!formData.companyName || !formData.headquarters || !formData.declaration) {
      alert('Please fill in all required fields and accept the declaration.');
      return;
    }

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
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-2">GLOBAL AI SUMMIT</h1>
          <p className="text-xl opacity-90">Visibility & Branding Submission Form</p>
          <p className="text-blue-100 mt-2">Berlin • For Visiting AI Companies, Exhibitors, Sponsors, Award Nominees & Ecosystem Partners</p>
        </div>
      </div>

      {/* Progress Bar - Hidden on mobile, visible on tablet and desktop */}
      <div className="hidden md:block max-w-6xl mx-auto px-6 -mt-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center gap-4">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={section.id} className="flex items-center min-w-0 flex-1">
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    index <= currentSection 
                      ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    <Icon size={20} className="lg:w-6 lg:h-6" />
                  </div>
                  <span className={`ml-3 text-sm lg:text-base font-medium ${
                    index <= currentSection ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {section.title}
                  </span>
                  {index < sections.length - 1 && (
                    <div className={`w-8 lg:w-12 h-0.5 ml-4 lg:ml-6 flex-shrink-0 ${
                      index < currentSection ? 'bg-gradient-to-r from-blue-500 to-emerald-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-6xl mx-auto px-6 pb-12 pt-8 md:pt-0">
        <div className="space-y-8">
          
          {/* Section 1: Company Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
            <div className="flex items-center mb-6">
              <Building className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">COMPANY INFORMATION</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">Headquartered in (City, Country) *</label>
                <input
                  type="text"
                  name="headquarters"
                  value={formData.headquarters}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Incorporation Year *</label>
                <input
                  type="number"
                  name="incorporationYear"
                  value={formData.incorporationYear}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company Website *</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Official LinkedIn Page *</label>
                <input
                  type="url"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company Logo *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors">
                  <p className="text-gray-600 text-sm mb-3 text-center">
                    Upload your official logo to Dropbox, Google Drive, or any cloud storage and paste the viewable link here.
                  </p>
                  <input
                    type="url"
                    name="logoLink"
                    value={formData.logoLink || ''}
                    onChange={handleInputChange}
                    placeholder="Paste your logo link here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Brand Visibility Details */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-emerald-500">
            <div className="flex items-center mb-6">
              <Globe className="w-6 h-6 text-emerald-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">BRAND VISIBILITY DETAILS</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company Tagline (Max 1 sentence) *</label>
                <input
                  type="text"
                  name="tagline"
                  value={formData.tagline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Short Company Description (Max 400 characters) *</label>
                <textarea
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  maxLength={400}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  required
                />
                <div className="text-sm text-gray-500 mt-1">{formData.shortDescription.length}/400 characters</div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Longer Company Bio (Optional, Max 700 characters)</label>
                <textarea
                  name="longBio"
                  value={formData.longBio}
                  onChange={handleInputChange}
                  maxLength={700}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
                <div className="text-sm text-gray-500 mt-1">{formData.longBio.length}/700 characters</div>
              </div>
            </div>
          </div>

          {/* Section 3: AI Landscape Role */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-cyan-500">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-cyan-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">AI LANDSCAPE ROLE</h2>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">What best describes your role in the AI landscape? (Select all that apply) *</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {aiRoleOptions.map((role) => (
                  <label key={role} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      name="aiRoles"
                      value={role}
                      checked={formData.aiRoles.includes(role)}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-700">{role}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Representative Details */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">REPRESENTATIVE DETAILS</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Designation *</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn Profile *</label>
                <input
                  type="url"
                  name="linkedInProfile"
                  value={formData.linkedInProfile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">High-Resolution Photo (Headshot) *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors">
                  <p className="text-gray-600 text-sm mb-3 text-center">
                    Upload a headshot of your representative and paste the shareable link here.
                  </p>
                  <input
                    type="url"
                    name="photoLink"
                    value={formData.photoLink || ''}
                    onChange={handleInputChange}
                    placeholder="Paste your photo link here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Short Bio (Max 500 characters) *</label>
                <textarea
                  name="shortBio"
                  value={formData.shortBio}
                  onChange={handleInputChange}
                  maxLength={500}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
                <div className="text-sm text-gray-500 mt-1">{formData.shortBio.length}/500 characters</div>
              </div>
            </div>
          </div>

          {/* Section 5: Quote & Additional Materials */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-emerald-500">
            <div className="flex items-center mb-6">
              <Quote className="w-6 h-6 text-emerald-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">QUOTE & ADDITIONAL MATERIALS (OPTIONAL)</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Quote for Social Media</label>
                <textarea
                  name="quote"
                  value={formData.quote}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Product/Service Demo Video (Link)</label>
                  <input
                    type="url"
                    name="demoVideo"
                    value={formData.demoVideo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Media/Press Kit Link</label>
                  <input
                    type="url"
                    name="mediaKit"
                    value={formData.mediaKit}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">PDF Brochure or Deck</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-emerald-500 transition-colors">
                  <p className="text-gray-600 text-sm mb-3 text-center">
                    Upload your PDF brochure or presentation deck to cloud storage and paste the shareable link here.
                  </p>
                  <input
                    type="url"
                    name="brochureLink"
                    value={formData.brochureLink || ''}
                    onChange={handleInputChange}
                    placeholder="Paste your PDF link here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Declaration */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Declaration</h2>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mt-1"
                  required
                />
                <span className="text-gray-700 leading-relaxed">
                  I confirm that the information submitted is accurate and may be used for public promotional purposes by the Global AI Summit team across digital and physical channels.
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white px-12 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Submit Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormB;