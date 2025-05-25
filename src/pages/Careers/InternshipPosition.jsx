import React, { useState } from 'react';
import { Clock, MapPin, Calendar, Users, Target, Briefcase, ChevronDown, ChevronUp, Award, ExternalLink, Linkedin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const InternshipPosition = () => {
  const [activeTab, setActiveTab] = useState('partnership');
  const [expandedSections, setExpandedSections] = useState({
    partnership: { roles: true, responsibilities: false },
    sales: { roles: true, responsibilities: false }
  });

  const toggleSection = (tab, section) => {
    setExpandedSections(prev => ({
      ...prev,
      [tab]: {
        ...prev[tab],
        [section]: !prev[tab][section]
      }
    }));
  };

  const jobData = {
    partnership: {
      title: "International Partnership Associate/Manager - Intern",
      duration: "2-3 months",
      workHours: "3-4 hours/day",
      shifts: "4PM (First Shift) & 7PM (Second Shift)",
      location: "Remote",
      type: "Both Live Projects and Full-fledged Internship",
      keyResponsibilities: "Identify targets through research, establish outreach strategies, and drive registration growth",
      roles: [],
      responsibilities: [
        {
          category: "Partnership",
          tasks: [
            "Conduct market research to identify potential partners who align with the organization's target audience, and event goals.",
            "Develop a comprehensive partnership strategy that outlines the desired outcomes and benefits for both the organization and its partners.",
            "Forge partnership with several organisations, research center, innovative hubs, universities association, media outlets, AI-Powered Entities and others to drive registration rate.",
            "Negotiate partnership agreements that clearly define the roles, responsibilities, and expectations of each party."
          ]
        },
        {
          category: "Sponsorship and Visitors Registration",
          tasks: [
            "Identify and secure sponsorship opportunities with global corporations, aligning their brand with the summit's objectives.",
            "Work closely with sponsors to ensure their expectations are met, providing value through tailored sponsorship packages.",
            "Oversee the efficient registration process for attendees, ensuring a smooth experience for participants from various countries and time zones.",
            "Driving targeted audience registrations through strategic partnerships and immersive international outreach.",
            "Collaborate on marketing initiatives to promote the summit globally, utilizing various channels to reach a broad audience interested in AI advancements."
          ]
        }
      ]
    },
    sales: {
      title: "Delegates Sales Executive - Intern",
      duration: "2-3 months",
      workHours: "3-4 hours/day",
      shifts: "4PM (First Shift) & 7PM (Second Shift)",
      location: "Remote",
      type: "Both Live Projects and Full-fledged Internship",
      keyResponsibilities: "Identify prospects through research, conduct targeted outreach, and achieve registration targets",
      roles: [],
      responsibilities: [
        {
          category: "Prospecting",
          tasks: [
            "Identify and research potential delegates, including corporations, academic institutions, government agencies, and individual AI enthusiasts.",
            "Utilize various prospecting techniques, such as email outreach, social media networking like LinkedIn and attending industry events."
          ]
        },
        {
          category: "Sales Presentations",
          tasks: [
            "Develop compelling sales presentations highlighting the benefits of attending the AI summit.",
            "Deliver persuasive presentations to potential delegates, addressing their specific needs and concerns."
          ]
        },
        {
          category: "Client Relationship Management",
          tasks: [
            "Maintain relationships with existing clients and engage with new prospects to convert leads into delegate registrations.",
            "Ensure a positive customer experience by providing information about event schedules, speakers, and networking opportunities."
          ]
        },
        {
          category: "Target Achievement",
          tasks: [
            "Meet or exceed sales targets and quotas for delegate registration.",
            "Monitor sales performance and provide regular reports to the sales manager."
          ]
        },
        {
          category: "Market Research",
          tasks: [
            "Conduct research to identify new sectors and regions for potential delegate outreach.",
            "Stay updated on industry trends, competitor events, and potential partnerships."
          ]
        }
      ]
    }
  };

  const currentJob = jobData[activeTab];

  return (
    <div className=" mx-auto text-black flex flex-row justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white max-w-6xl  rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
          <h1 className="text-4xl uppercase font-bold mb-2">Global Investors Forum</h1>
          <p className="text-blue-100 text-lg">World's Largest AI Summit Internship Program</p>
        </div>

        {/* Company Introduction */}
        <div className="p-8 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="mb-8">
            <h2 className="text-2xl uppercase font-bold text-gray-800 mb-4">About Global Investors Forum</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Global Investors Forum is an event management company orchestrating the world's largest summits. 
              Immerse yourself in the forefront of innovation and knowledge with our flagship gatherings, including 
              the prestigious <span className="font-semibold text-indigo-700">Global Artificial Intelligence Summit</span>, 
              the trailblazing <span className="font-semibold text-indigo-700">Global Fintech Summit</span>, 
              the visionary <span className="font-semibold text-indigo-700">World Tech Summit</span>, and the exclusive 
              <span className="font-semibold text-indigo-700"> Global Residency and Citizenship Summit</span>. 
              As a beacon of excellence, we curate unparalleled experiences that transcend boundaries, bringing together 
              thought leaders, visionaries, and trailblazers to shape the future of industries worldwide.
            </p>



            <div className="bg-gradient-to-r from-orange-100 to-red-100 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
              <p className="text-orange-800 font-semibold">
                🚀 Global Investors Forum is immediately hiring interns for the world's largest AI summit!
              </p>
            </div>
          </div>

          {/* Program Benefits */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Transform Your Profile</h3>
              <div className="space-y-3">
                <p className="text-gray-600">📚 <span className="font-medium">Still just a fresher?</span> Join our live project and internship program to update your LinkedIn & Resume and gain hands-on experience.</p>
                <p className="text-gray-600">🎓 <span className="font-medium">Still just a student?</span> Join us to update your LinkedIn profile and earn valuable credentials.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Earn Valuable Credentials</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm text-gray-700">Training Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Completion Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Recommendation Letter</span>
                </div>
              </div>
            </div>
          </div>

          {/* Program Features */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
            <h3 className="text-xl font-bold  text-gray-800 mb-6">Why Join Our Internship Program?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">100% Flexible Hours</p>
                  <p className="text-sm text-gray-600">Work at your own pace</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">100% Remote</p>
                  <p className="text-sm text-gray-600">Work from anywhere</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Flexible Duration</p>
                  <p className="text-sm text-gray-600">4-12 weeks program</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Expert Mentorship</p>
                  <p className="text-sm text-gray-600">Industry professional guidance</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Real-World Exposure</p>
                  <p className="text-sm text-gray-600">Summit organization experience</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Global Collaboration</p>
                  <p className="text-sm text-gray-600">Work with AI leaders worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Impact Statement */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-6 mb-8">
            <h3 className="text-xl uppercase font-bold mb-3">Be Part of the AI Revolution</h3>
            <p className="text-purple-100 leading-relaxed">
              This is a fantastic opportunity to be part of a groundbreaking initiative that highlights the growing 
              importance of AI in transforming industries globally. From education to manufacturing and beyond, 
              AI is revolutionizing the way we work, innovate, and grow. Join us in shaping the future!
            </p>
          </div>

          {/* Program Details */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Program Requirements</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">Minimum Commitment</p>
                <p className="text-xs text-gray-600">Live Project: 3-4 hours/day</p>
                <p className="text-xs text-gray-600">SIP: 8-9 hours/day</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">Duration Options</p>
                <p className="text-sm text-gray-600">6-12 weeks</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">Stipend</p>
                <p className="text-sm text-gray-600">Target-based rewards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('partnership')}
            className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
              activeTab === 'partnership'
                ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-700'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            International Partnership Manager
          </button>
          <button
            onClick={() => setActiveTab('sales')}
            className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
              activeTab === 'sales'
                ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-700'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            Delegates Sales Executive
          </button>
        </div>

        <div className="p-8">
          {/* Job Details */}
          <div className="mb-8">
            <h2 className="text-3xl uppercase font-bold text-gray-800 mb-6">{currentJob.title}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{currentJob.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Work Hours</p>
                  <p className="font-semibold">{currentJob.workHours}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold">{currentJob.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Shifts</p>
                  <p className="font-semibold text-sm">{currentJob.shifts}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg md:col-span-2">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="font-semibold">{currentJob.type}</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-gray-700">
                <span className="font-semibold">Key Responsibilities:</span> {currentJob.keyResponsibilities}
              </p>
            </div>
          </div>

          {/* Roles Section */}
          {currentJob.roles && currentJob.roles.length > 0 && (
          <div className="mb-8">
            <button
              onClick={() => toggleSection(activeTab, 'roles')}
              className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all"
            >
              <h3 className="text-xl font-bold">Key Roles</h3>
              {expandedSections[activeTab].roles ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            
            {expandedSections[activeTab].roles && (
              <div className="mt-4 space-y-4">
                <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
                  <p className="text-indigo-800 font-medium mb-4">
                    This is more than just an internship; it's a front-row seat to the <span className="font-bold">future of AI</span>. 
                    As an International Partnership Manager intern, you'll be the bridge between our summit and the global AI ecosystem. 
                    You'll play a vital role in:
                  </p>
                </div>
                
                {currentJob.roles.map((role, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">{role.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{role.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          )}

          {/* Detailed Responsibilities */}
          <div>
            <button
              onClick={() => toggleSection(activeTab, 'responsibilities')}
              className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:from-green-600 hover:to-teal-700 transition-all"
            >
              <h3 className="text-xl uppercase font-bold">Detailed Responsibilities</h3>
              {expandedSections[activeTab].responsibilities ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            
            {expandedSections[activeTab].responsibilities && (
              <div className="mt-4 space-y-6">
                {currentJob.responsibilities.map((section, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4">
                      <h4 className="text-lg font-semibold text-white">{section.category}</h4>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {section.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-3">
                            <Target className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl uppercase font-bold mb-4">Ready to Shape the Future of AI?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join us in creating a world-class AI summit that brings together the brightest minds in artificial intelligence.
            </p>
            <Link to={'https://forms.gle/HtfiAQHUyi1ib3n9A'} className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipPosition;