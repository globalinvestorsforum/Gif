import React from "react";
import { useNavigate } from "react-router-dom";
import ticketImg from '../../../../assets/HealthcareSummit/ticket.png'
export default function Register() {
  const navigate = useNavigate();

  const handleClick =()=>{
    navigate('/gais/TicketRegistration')
  }
  return (
    <div className="flex flex-col items-center justify-center bg-white px-6 py-20">
      <img className="" src={ticketImg} alt="" />
      <h2 className="text-2xl uppercase md:text-4xl font-bold text-gray-800 text-center">
        Hold Your Ticket for  
        <span className="block text-transparent uppercase bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
          The AI-Healthcare Summit
        </span>
      </h2>
      <p className="mt-4 text-gray-700 text-center max-w-md">
        Join us for an exclusive event where The AI meets healthcare innovation.
      </p>
      
      <button onClick={handleClick} className="mt-6 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-teal-600 to-blue-600 hover:shadow-2xl hover:scale-105 active:scale-95">
        🎟️ Register Now
      </button>
    </div>
  );
}
