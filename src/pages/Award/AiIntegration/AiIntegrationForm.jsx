import React, { useState } from "react";
import {
  Award,
  Building2,
  Factory,
  Cpu,
  Lightbulb,
  BarChart,
  Star,
  CheckSquare,
} from "lucide-react";

const jobTitles = [
  "CEO",
  "CTO",
  "COO",
  "CFO",
  "Chief AI Officer",
  "Director of Innovation",
  "Head of AI/ML",
  "Technical Director",
  "AI Research Lead",
  "Senior Data Scientist",
  "VP of Engineering",
  "Innovation Manager",
  "Product Manager",
  "Project Director",
  "Technology Lead",
  "Solutions Architect",
  "Research Director",
  "Digital Transformation Lead",
  "Head of R&D",
  "Technical Program Manager",
];

const industries = [
  "Healthcare & Medical",
  "Financial Services",
  "Manufacturing",
  "Retail & E-commerce",
  "Transportation & Logistics",
  "Energy & Utilities",
  "Telecommunications",
  "Education & E-learning",
  "Agriculture & Farming",
  "Real Estate & Construction",
  "Media & Entertainment",
  "Gaming",
  "Cybersecurity",
  "Environmental & Sustainability",
  "Professional Services",
  "Automotive",
  "Aerospace & Defense",
  "Biotechnology",
  "Chemical & Materials",
  "Consumer Goods",
  "Food & Beverage",
  "Government & Public Sector",
  "Insurance",
  "Legal Services",
  "Life Sciences",
  "Maritime & Shipping",
  "Mining & Metals",
  "NGO & Non-profit",
  "Oil & Gas",
  "Pharmaceuticals",
  "Research & Development",
  "Sports & Fitness",
  "Tourism & Hospitality",
  "Waste Management",
  "Water & Sanitation",
  "Renewable Energy",
  "Space Technology",
  "Smart Cities",
  "Social Services",
  "Robotics & Automation",
];

const aiTechnologies = [
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Robotics Process Automation",
  "Expert Systems",
  "Speech Recognition",
  "Neural Networks",
  "Predictive Analytics",
  "Other",
];

const years = Array.from({ length: 74 }, (_, i) => 2024 - i);
const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "Singapore",
  "India",
  "China",
  "Brazil",
  "UAE",
];

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    {children}
  </div>
);

const Label = ({ children, htmlFor }) => (
  <label
    htmlFor={htmlFor}
    className="block text-sm font-medium text-gray-700 mb-1"
  >
    {children}
  </label>
);

const Input = ({ id, type = "text", placeholder, value, onChange }) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    value={value}
    onChange={onChange}
  />
);

const Select = ({ id, options, placeholder, value, onChange }) => (
  <select
    id={id}
    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    value={value}
    onChange={onChange}
  >
    <option value="">{placeholder}</option>
    {options.map((option) => (
      <option key={option} value={String(option).toLowerCase()}>
        {option}
      </option>
    ))}
  </select>
);

const Textarea = ({ id, placeholder, value, onChange, className = "" }) => (
  <textarea
    id={id}
    placeholder={placeholder}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
    value={value}
    onChange={onChange}
  />
);

const AiIntegrationForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    jobTitle: "",
    email: "",
    website: "",
    year: "",
    country: "",
    founder: "",
    employees: "",
    description: "",
    industry: "",
    specialization: "",
    integrationDescription: "",
    aiTech: "",
    otherTech: "",
    businessChallenge: "",
    aiSolution: "",
    measurableOutcomes: "",
    innovation: "",
    bestPractices: "",
    declaration: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formId = "b22c0c11-e09a-4348-b6ec-15c7f330cb56"; // Replace with your Web3Forms ID
    const data = {
      access_key: formId,
      ...formData,
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
          companyName: "",
          contactPerson: "",
          jobTitle: "",
          email: "",
          website: "",
          year: "",
          country: "",
          founder: "",
          employees: "",
          description: "",
          industry: "",
          specialization: "",
          integrationDescription: "",
          aiTech: "",
          otherTech: "",
          businessChallenge: "",
          aiSolution: "",
          measurableOutcomes: "",
          innovation: "",
          bestPractices: "",
          declaration: false,
        });
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div className="flex justify-center bg-white">
      <div className="min-h-screen font-['Aptos'] text-black lg:w-1/2 text-base bg-gray-50 p-8">
      {/* Header Card */}
      <Card className="mb-8 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 -m-6 p-8 text-white">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Award size={40} />
            <h1 className="text-4xl uppercase font-bold">
              The AI Integration Excellence Award
            </h1>
          </div>
          <h2 className="text-xl uppercase text-center">
            Official Nomination Form
          </h2>
        </div>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Organization Information */}
        <Card className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="text-blue-600" />
            <h2 className="text-2xl font-Aptos font-semibold">
              Organization Information
            </h2>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="contactPerson">Contact Person</Label>
                <Input
                  id="contactPerson"
                  placeholder="Enter contact person name"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Select
                  id="jobTitle"
                  options={jobTitles}
                  placeholder="Select job title"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="website">Company Website</Label>
                <Input
                  id="website"
                  placeholder="Enter company website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="year">Incorporation Year</Label>
                <Select
                  id="year"
                  options={years}
                  placeholder="Select year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Select
                  id="country"
                  options={countries}
                  placeholder="Select country"
                  value={formData.country}
                  onChange={handleChange}
                  
                />
              </div>
              <div>
                <Label htmlFor="founder">Founder Name</Label>
                <Input
                  id="founder"
                  placeholder="Enter founder name"
                  value={formData.founder}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="employees">Total Number of Employees</Label>
                <Input
                  id="employees"
                  type="number"
                  placeholder="Enter number of employees"
                  value={formData.employees}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Company Description</Label>
              <Textarea
                id="description"
                placeholder="Provide a brief overview of your company"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>
        </Card>

        {/* Industry and Specialization */}
        <Card className="mb-8 font-A">
          <div className="flex items-center gap-2 mb-6">
            <Factory className="text-blue-600" />
            <h2 className="text-2xl font-Aptos font-semibold">
              Industry and Specialization
            </h2>
          </div>

          <div className="grid gap-6">
            <div>
              <Label htmlFor="industry">Industry Implementation</Label>
              <Select
                id="industry"
                options={industries}
                placeholder="Select your industry"
                value={formData.industry}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="specialization">Specialization/Application</Label>
              <Textarea
                id="specialization"
                placeholder="Describe your specific specialization or application within the selected industry"
                value={formData.specialization}
                onChange={handleChange}
                className="h-40"
              />
            </div>
          </div>
        </Card>

        {/* AI Integration */}
        <Card>
          <div className="grid gap-6">
            <div className="flex items-center gap-2 ">
              <Cpu className="text-blue-600" />
              <h2 className="text-2xl font-Aptos font-semibold">
                AI Integration
              </h2>
            </div>
            <div>
              <Label htmlFor="integrationDescription">
                Business Integration Description
              </Label>
              <Textarea
                id="integrationDescription"
                placeholder="Describe how AI has been integrated into your business operations"
                value={formData.integrationDescription}
                onChange={handleChange}
                className="h-40"
              />
            </div>
            <div>
              <Label htmlFor="aiTech">AI Technologies Implemented</Label>
              <Select
                id="aiTech"
                options={aiTechnologies}
                placeholder="Select AI technologies used"
                value={formData.aiTech}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="otherTech">Other Technologies (if any)</Label>
              <Input
                id="otherTech"
                placeholder="Other technologies used"
                value={formData.otherTech}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="businessChallenge">
                Business Challenge Addressed
              </Label>
              <Textarea
                id="businessChallenge"
                placeholder="What business challenge did you address through this AI integration? (e.g., increased efficiency, improved customer experience, reduced costs, new revenue streams)"
                value={formData.businessChallenge}
                onChange={handleChange}
                className="h-40"
              />
            </div>
          </div>
        </Card>
        {/* AI-Driven Solution */}

        <Card>
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="text-blue-600" />
            <h2 className="text-2xl font-Aptos font-semibold">
              AI-Driven Solution
            </h2>
          </div>
          <div>
            <Label htmlFor="aiSolution">Solution Overview</Label>
            <Textarea
              id="aiSolution"
              placeholder="What AI-powered solution(s) does your company offer? Provide a comprehensive overview of your solution and its unique value proposition."
              value={formData.aiSolution}
              onChange={handleChange}
              className="h-40"
            />
          </div>
        </Card>
        {/* Impact and Results */}

        <Card>
          <div className="flex items-center gap-2 mb-6">
            <BarChart className="text-blue-600" />
            <h2 className="text-2xl font-Aptos font-semibold">
              Impact and Results
            </h2>
          </div>

          <div>
            <Label htmlFor="measurableOutcomes">Measurable Outcomes</Label>
            <Textarea
              id="measurableOutcomes"
              placeholder="Share specific data, metrics, and measurable outcomes that demonstrate the impact of your AI integration. Include quantifiable results and success stories."
              value={formData.measurableOutcomes}
              onChange={handleChange}
              className="h-40"
            />
          </div>
        </Card>
        {/* Innovation & Best Practices */}

        <Card>
          <div className="grid gap-6">
            <div className="flex items-center gap-2 ">
              <Star className="text-blue-600" />
              <h2 className="text-2xl font-Aptos font-semibold">
                Innovation & Best Practices
              </h2>
            </div>
            <div>
              <Label htmlFor="innovation">Innovation Approach</Label>
              <Textarea
                id="innovation"
                placeholder="What makes your AI Integration approach innovative? Describe your unique methodologies and creative solutions."
                value={formData.innovation}
                onChange={handleChange}
                className="h-40"
              />
            </div>
            

            <div>
              <Label htmlFor="bestPractices">
                Best Practices & Lessons Learned (Optional)
              </Label>
              <Textarea
                id="bestPractices"
                placeholder="Share key insights, best practices, and lessons learned that could benefit others in implementing AI solutions."
                value={formData.bestPractices}
                onChange={handleChange}
                className="h-40"
              />
            </div>
          </div>
        </Card>

        {/* Declaration */}
        <Card className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <CheckSquare className="text-blue-600" />
            <h2 className="text-2xl font-Aptos font-semibold">Declaration</h2>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="declaration">Declaration Statement</Label>
              <p className="text-gray-700 text-sm">
                By submitting this form, I declare that all information provided
                is accurate to the best of my knowledge.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="declaration"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                checked={formData.declaration}
                onChange={handleChange}
              />
              <Label htmlFor="declaration">
                I agree to the terms and conditions.
              </Label>
            </div>
          </div>
        </Card>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Nomination
          </button>
        </div>
      </form>
    </div>
    </div>

    
  );
};

export default AiIntegrationForm;
