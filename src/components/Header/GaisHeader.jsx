import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { gaisNavItems } from '../../constants';
import {NavLink, Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    {/* Logo on the left */}
                    
                    <div className="flex items-center justify-start flex-shrink-0">
                        <Link to="/">
                        <img className="h-10 w-44 border-neutral-900 border-2 " src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/Tranparent%2Fgaislogo.png?alt=media&token=eea47d8e-d244-42f6-8274-66a8733e42ce" alt="" />
                        </Link>
                    </div>

                    {/* Navigation links on the right */}
                    <div className="hidden lg:flex flex-row items-center justify-between w-4/5 xl:w-3/5 mx-6 ">
                        <ul className="flex flex-row uppercase">
                            {gaisNavItems.map((item, index) => (
                                <li key={index} className='mx-4 relative'>
                                    {item.name==='Agendas' ? (
                                    <div>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="font-bold text-white hover:text-blue-500 uppercase"
        >
          {item.name}
        </button>
        {dropdownOpen && (
  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-neutral-800 border border-neutral-700 rounded-md shadow-lg z-50 min-w-48">
    <button className="block w-full text-left px-4 py-2 text-white hover:bg-neutral-700 hover:text-orange-500 uppercase" onClick={()=>{navigate('/gais/UnifiedTracks')}}>
      View All Tracks
    </button>
    <button className="block w-full text-left px-4 py-2 text-white hover:bg-neutral-700 hover:text-orange-500 uppercase" onClick={()=>{navigate('/gais/conference')}}>
      Industry Specific Tracks
    </button>
  </div>
)}
      </div>
                                   ):
                                   ( <NavLink
                                     to={item.href}  
                                     className={({ isActive }) =>
                                       `font-bold ${isActive ? "text-orange-500 font-extrabold" : "text-white hover:text-blue-500"}`
                                     }>
                                        {item.name}
                                    </NavLink>)}
                                </li>
                            ))}
                        </ul>
                        <Link to="/gais/ticket" className="bg-gradient-to-r from-orange-400 to-purple-600 py-2 px-3 rounded-md ">
                            Get Tickets
                        </Link>
                    </div>

                    {/* Hamburger menu on the right in mobile view */}
                    <div className="lg:hidden flex items-center ">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <AiOutlineClose className="text-2xl absolute top-0 z-50 right-0 m-4" /> : <AiOutlineMenu className="text-2xl" />}
                        </button>
                    </div>
                </div>

                {/* Mobile drawer */}
                {mobileDrawerOpen && (
                    <div className="fixed top-0 right-0 z-20 bg-neutral-900 w-full p-10 flex flex-col justify-center items-center text-center lg:hidden">
                        <ul>
                            {gaisNavItems.map((item, index) => (
                                <li className="bg-neutral-900 py-1 text-base relative" key={index}>
                                    {item.name==='Agendas' ? (

  <div>
   <button
  onClick={() => setDropdownOpen(!dropdownOpen)}
  className="font-bold text-white hover:text-blue-500 flex items-center gap-1"
>
  {item.name}
  <svg 
    className={`w-4 h-4 text-white transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
</button>
    {dropdownOpen && (
      <div className="mt-2 bg-neutral-800 border border-neutral-700 rounded-md shadow-lg min-w-48">
        <button 
          className="block w-full text-left px-4 py-2 text-white hover:bg-neutral-700 hover:text-orange-500" 
          onClick={()=>{navigate('/gais/UnifiedTracks'); setMobileDrawerOpen(false); setDropdownOpen(false);}}
        >
          View All Tracks
        </button>
        <button 
          className="block w-full text-left px-4 py-2 text-white hover:bg-neutral-700 hover:text-orange-500" 
          onClick={()=>{navigate('/gais/conference'); setMobileDrawerOpen(false); setDropdownOpen(false);}}
        >
          Industry Specific Tracks
        </button>
      </div>
    )}
  </div>
):(
  <NavLink 
    className={({ isActive }) =>
      ` font-bold ${isActive ? "text-orange-500 font-extrabold" : "text-white hover:text-blue-500"}`
    }
    to={item.href}>
      {item.name}
  </NavLink>
)}
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6 m-5">
                            <Link to='/gais/ticket' className="bg-gradient-to-r from-orange-700 to-purple-600 py-2 px-3 rounded-md">
                                Get Tickets
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
