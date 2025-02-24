import React, { useState } from 'react';
import { ChevronDown, Clock, Receipt, CreditCard } from 'lucide-react';

const TicketRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    designation: '',
    industry: '',
    ticketType: ''
  });

  const industries = [
    "Aerospace & Defense",
    "Agriculture",
    "Automotive",
    "Banking & Financial Services",
    "Biotechnology",
    "Chemical",
    "Construction",
    "Consulting",
    "Consumer Goods",
    "Education",
    "Energy & Utilities",
    "Entertainment & Media",
    "Fashion & Apparel",
    "Food & Beverage",
    "Gaming",
    "Government",
    "Healthcare",
    "Hospitality & Tourism",
    "Information Technology",
    "Insurance",
    "Legal Services",
    "Logistics & Supply Chain",
    "Manufacturing",
    "Marketing & Advertising",
    "Mining & Metals",
    "Non-Profit",
    "Oil & Gas",
    "Pharmaceuticals",
    "Real Estate",
    "Retail",
    "Semiconductors",
    "Software",
    "Sports",
    "Telecommunications",
    "Transportation",
    "Venture Capital",
    "Web Services",
    "Wholesale",
    "Other"
  ];

  const ticketTypes = [
    "Track Pass: €1140" ,
    "Standard Ticket: €1460",
    "VIP Pass: €2999" ,
    "Guest Visitor Startup: €1899",
  ];

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
            fullName: '',
            email: '',
            companyName: '',
            designation: '',
            industry: '',
            ticketType: ''
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
    <div className="text-black min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full lg:w-4/5 mx-auto bg-white/90 backdrop-blur-lg rounded-xl shadow-xl p-8 lg:p-16">
        <div className=" text-center mb-8">
          <h1 className="text-3xl font-['Antonio'] uppercase tracking-wider text-gray-900 mb-2">
            You're Invited: Secure Your Spot with <span><br />Pre-Registration</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </div>

        <form onSubmit={handleSubmit} className=" grid gap-8 grid-cols-1 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              required
              value={formData.fullName}
              className="px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:border-purple-500 focus:ring-purple-500"
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}

              className="px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:border-purple-500 focus:ring-purple-500"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              required
              value={formData.companyName}

              className="px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:border-purple-500 focus:ring-purple-500"
              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Designation</label>
            <input
              type="text"
              required
              value={formData.designation}

              className="px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:border-purple-500 focus:ring-purple-500"
              onChange={(e) => setFormData({...formData, designation: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Industry</label>
            <div className="relative mt-1">
              <select
                required
                value={formData.industry}

                className="px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:border-purple-500 focus:ring-purple-500 appearance-none"
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
              >
                <option value="">Select Industry</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Ticket Type</label>
            <div className="relative mt-1">
              <select
                required
                value={formData.ticketType}

                className="px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:border-purple-500 focus:ring-purple-500 appearance-none"
                onChange={(e) => setFormData({...formData, ticketType: e.target.value})}
              >
                <option value="">Select Ticket</option>
                {ticketTypes.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Select Ticket Type</label>
            <div className="mt-4 space-y-4">
              {ticketTypes.map((ticket) => (
                <div key={ticket} className="flex items-center">
                  <input
                    type="radio"
                    name="ticket-type"
                    value={ticket.name}
                    className="h-4 w-4 text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 border-gray-300"
                    onChange={(e) => setFormData({...formData, ticketType: e.target.value})}
                  />
                  <label className="ml-3 block text-sm font-medium text-gray-700">
                    {ticket.name} - {ticket.price}
                  </label>
                </div>
              ))}
            </div>
          </div> */}

          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="text-purple-600" size={18} />
              <p>Early bird tickets are available for a limited time only.</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Receipt className="text-purple-600" size={18} />
              <p>Local German tax and processing fee will be applicable on all tickets.</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <CreditCard className="text-purple-600" size={18} />
              <p>Once you submit your pre-registration, we will share the registration link via email.</p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketRegistration;