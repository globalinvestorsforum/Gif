import React from "react";
import { Calendar, MapPin, Users, Brain, Heart, Activity, ChevronRight, ArrowRight } from 'lucide-react';
import surgury from '../../../../assets/HealthcareSummit/surgury.png'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick =()=>{
    navigate('/gais/TicketRegistration')
  }
  
  return (
    <div>


      <div className="flex flex-row justify-between bg-gradient-to-br from-teal-50 via-blue-50 to-white">


        <div className="relative h-[calc(100vh-86px)] w-full ">
            <img className="object-cover w-full h-full brightness-75" src={surgury} alt="" />
        </div>
      
        <div className="absolute top-0 left-0 h-[calc(100vh-86px)] flex flex-row justify-start items-center pt-32 pb-16 px-6 sm:px- lg:px-16 ">
          <div className=" text-center md:text-left">
            {/* <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent font-semibold">
              March 2025
            </span> */}
            <h1 className="mt-4 text-4xl uppercase font-bold text-gray-50 lg:text-7xl">
             The <br />AI-Healthcare Summit 
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
              Transforming Healthcare Through Artificial Intelligence: Join
              Leading Medical Professionals and AI Experts
            </p>
            <div className="mt-10 flex justify-center md:justify-start gap-4">
            <button onClick={handleClick} className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-110">
            Register Now
                {/* <ChevronRight className="ml-2 h-5 w-5" /> */}
              </button>
              <button className="bg-white  text-teal-600 px-4 py-2 rounded-lg font-semibold transition-all duration-500 hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600 hover:text-white">
                View Schedule
              </button>
            </div>
          </div>
        </div>
        
      </div>


    </div>
  );
}

export default Home;
