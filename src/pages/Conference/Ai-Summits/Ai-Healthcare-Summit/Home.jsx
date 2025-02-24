import React from "react";
import { Calendar, MapPin, Users, Brain, Heart, Activity, ChevronRight, ArrowRight } from 'lucide-react';


function Home() {
  return (
    <div>


      <div className="">
      
        <div className="h-[calc(100vh-86px)]  flex flex-row justify-start items-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-blue-50 to-white">
          <div className="max-w-7xl md:w-1/2 text-center md:text-left ">
            {/* <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent font-semibold">
              March 2025
            </span> */}
            <h1 className="mt-4 text-4xl uppercase font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent lg:text-7xl">
             The AI Healthcare Summit 
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Transforming Healthcare Through Artificial Intelligence: Join
              Leading Medical Professionals and AI Experts
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 hover:bg-clip-text hover:text-transparent flex items-center">
                Register Now
                {/* <ChevronRight className="ml-2 h-5 w-5" /> */}
              </button>
              <button className="bg-white  text-teal-600 px-4 py-2 rounded-lg font-semibold hover:opacity-90 hover:bg-slate-300/50 ">
                View Schedule
              </button>
            </div>
          </div>
        </div>
        <div className="w-full"></div>
      </div>


    </div>
  );
}

export default Home;
