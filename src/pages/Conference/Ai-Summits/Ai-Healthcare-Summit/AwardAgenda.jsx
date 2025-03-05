import React from 'react';
import { useNavigate } from 'react-router-dom';
import HealthcareAgenda from '../../../../assets/HealthcareSummit/AwardAgenda/HealthcareAgenda.jpg'
import HealthcareAward from '../../../../assets/HealthcareSummit/AwardAgenda/HealthcareAward.jpg'
function AwardAgenda() {
  const navigate = useNavigate();

  const handleAgendaClick = () => {
    navigate('/gais/conference/ai-healthcare-summit/all-agendas') // Corrected navigation syntax
  }
  const handleAwardClick = () => {
    navigate('/gais/award') // Corrected navigation syntax
  }

  return (
    <div className='p-8 bg-white'>
        <div className='flex flex-col md:flex-row gap-8 justify-center items-center  '>
      <div className='relative bg-gradient-to-r from-teal-600 to-blue-600 overflow-hidden p-4 max-w-sm rounded-lg '>
        {/* Image Section */}
        <div>
          <img 
            src={HealthcareAgenda} 
            alt="Agenda Image" 
            className="w-full h-40 object-cover rounded-md"
          />
        </div>

        {/* Content Section */}
        <div className="mt-4 mb-8">
          <h2 className="text-xl font-semibold text-white">Themes and Agendas
          </h2>
          <p className="text-gray-100 text-sm my-2">
    Discover groundbreaking discussions at The AI Healthcare Summit, covering:
  </p>
  
  {/* Bullet Point List */}
  <ul className="text-gray-100 text-sm list-disc ml-5 ">
    <li>AI in Medical Diagnostics & Imaging</li>
    <li>Personalized Healthcare & AI-driven Drug Discovery</li>
    <li>AI in Hospital Management & Patient Care</li>
    <li>Ethical AI & Regulatory Compliance in Healthcare</li>
  </ul>
        </div>

        {/* "More Agendas" Button */}
        <div className='absolute -bottom-2 -right-2 bg-transparent text-white  text-sm border-8 border-white rounded-2xl '>
          <p onClick={handleAgendaClick} className='rounded-lg bg-transparent hover:bg-black p-2 px-3 cursor-pointer '>Find More →</p>
        </div>

        <div className='outline-none absolute -right-2 bottom-9 w-8 h-8 bg-transparent  border-b-8 border-r-8 border-white rounded-br-3xl '></div> 
        <div className='outline-none absolute right-[103.5px] -bottom-2 w-8 h-8 bg-red  border-b-8 border-r-8 border-white rounded-br-3xl '></div> 
      </div>





      <div className='relative group bg-white hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600 hover:text-white overflow-hidden  max-w-sm rounded-lg '>
        
        {/* Content Section */}
        <div className="mt-4 p-4 ">
          <h2 className="text-xl group-hover:text-white font-semibold text-gray-800">Honoring Excellence in AI & Healthcare
          </h2>
          <p className="text-gray-600 group-hover:text-white text-sm my-2">
          We honor AI-integrated healthcare companies, <span className='font-bold'>AI-powered startups, and institutions</span> driving innovation in the healthcare industry. If your organization has successfully implemented AI solutions or is actively encouraging AI adoption, apply for the AI Healthcare Excellence Awards and gain industry-wide recognition!
          </p>
        </div>
        
        
        {/* Image Section */}
        <div className='bg-slate-700'>
          <img 
            src={HealthcareAward} 
            alt="Award Image" 
            className="w-full h-48 object-cover object-top"
          />
        </div>

        

        {/* "More Agendas" Button */}
        <div className='absolute -bottom-2 -right-2 bg-white text-white  text-sm border-8 border-white rounded-tl-2xl rounded-br-2xl '>
          <p onClick={handleAwardClick} className='rounded-lg group-hover:bg-blue-600 bg-black hover:bg-blue-600 p-2 px-3 cursor-pointer '>Learn More →</p>
        </div>

        <div className='  absolute -right-2 bottom-9 w-8 h-8 bg-transparent  border-b-8 border-r-8 border-white rounded-br-3xl '></div> 
        <div className='  absolute right-[111.5px] -bottom-2 w-8 h-8 bg-red  border-b-8 border-r-8 border-white rounded-br-3xl '></div> 
      </div>
    </div>
    </div>
    
  );
}

export default AwardAgenda;
