import React from 'react';
import { Calendar, DollarSign, Clock, Bell, Award } from 'lucide-react';

export default function Timelines() {
  const timelineEvents = [
    {
      id: 1,
      title: "Zero Cost Nomination Open",
      date: "9th May, 2025",
      icon: Calendar,
      status: "completed",
      description: "Free nomination window opens"
    },
    {
      id: 2,
      title: "Paid Nomination Open",
      date: "30th August, 2025",
      icon: DollarSign,
      status: "upcoming",
      description: "Premium nomination period begins"
    },
    {
      id: 3,
      title: "Nomination Deadline",
      date: "15th September, 2025",
      icon: Clock,
      status: "upcoming",
      description: "Final date for all submissions"
    },
    {
      id: 4,
      title: "Shortlist Announced",
      date: "1st October, 2025",
      icon: Bell,
      status: "upcoming",
      description: "Finalists revealed to the public"
    },
    {
      id: 5,
      title: "Winners Announcement",
      date: "9th October, 2025",
      icon: Award,
      status: "upcoming",
      description: "Award ceremony and winners revealed"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 px-8 py-8">
      <div className="max-w-2xl flex flex-col lg:flex-row mx-auto">
        {/* Header */}
        {/* <div className="text-center mb-6">
          <div className="inline-block bg-black text-white px-4 py-2 rounded-lg mb-2">
            <h1 className="text-lg font-bold">GLOBAL <span className="bg-white text-black px-1 py-0.5 rounded">AI</span> SUMMIT</h1>
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">TIMELINES</h2>
          <p className="text-white/80 text-sm">Award Categories Schedule</p>
        </div> */}
                  <h2 className="lg:text-5xl text-4xl  uppercase font-bold text-white my-6">Timelines Schedule</h2>


        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/30"></div>
          
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            const isCompleted = event.status === 'completed';
            
            return (
              <div key={event.id} className="relative flex items-start mb-6">
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  isCompleted 
                    ? 'bg-green-500 border-green-300' 
                    : 'bg-white border-white/50'
                } shadow-md`}>
                  <IconComponent className={`w-5 h-5 ${
                    isCompleted ? 'text-white' : 'text-gray-700'
                  }`} />
                </div>
                
                {/* Content */}
                <div className="ml-6 flex-1">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base font-bold text-gray-800">{event.title}</h3>
                      {isCompleted && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                          Completed
                        </span>
                      )}
                    </div>
                    <p className="text-lg font-bold text-blue-600 mb-1">{event.date}</p>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        {/* <div className="text-center mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white text-sm font-semibold">
              Stay updated with the latest announcements
            </p>
            <p className="text-white/80 mt-1 text-xs">
              Visit our website for more details
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}