import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { navItems } from '../../constants';
import {NavLink, Link} from 'react-router-dom'
import giflogo from '../../assets/giflogo.png'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const toggleNavbar = () => {
        setMobileDrawerOpen((isOpen) => !isOpen);
    };

    const closeMobileDrawer = () => {
        setMobileDrawerOpen(false);
    };

    useEffect(() => {
        if (!mobileDrawerOpen) {
            return undefined;
        }

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [mobileDrawerOpen]);

    return (
        <nav className="sticky top-0  z-50 bg-neutral-900 border-b border-neutral-700">
            <div className="container  px-4 mx-auto relative text-sm">
                <div className="flex justify-between  items-center">
                    {/* Logo on the left */}
                    
                    <div className="flex items-center justify-start flex-shrink-0">
                        <Link to="/">
                        <img className="h-50 w-40 " src={giflogo} alt="" />
                        </Link>
                    </div>

                    {/* Navigation links on the right */}
                    <div className="hidden lg:flex items-center justify-between text-center  w-1/2">
                        <ul className="flex space-x-12 uppercase">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                   {item.name==='Agendas' ? (
                                    <div>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="font-bold text-white hover:text-blue-500 uppercase"
        >
          {item.name}
        </button>
        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 bg-neutral-800 border border-neutral-700 rounded-md shadow-lg z-50 min-w-48">
            <button className="block w-full text-left px-4 py-2 text-white hover:bg-neutral-700 hover:text-blue-500" onClick={()=>{navigate('/gais/UnifiedTracks')}}>
              View All Tracks
            </button>
            <button className="block w-full text-left px-4 py-2 text-white hover:bg-neutral-700 hover:text-blue-500" onClick={()=>{navigate('/gais/conference')}}>
              Industry Specific Tracks
            </button>
          </div>
        )}
      </div>
                                   ):
                                   (
                                    <NavLink
                                     to={item.href}  
                                     className={({ isActive }) =>
                                       `font-bold ${isActive ? "text-orange-500 font-extrabold" : "text-white hover:text-blue-500"}`
                                     }>
                                        {item.name}
                                    </NavLink>)}
                                </li>
                            ))}
                        </ul>
                        {/* <Link to="/ticket" className="bg-gradient-to-r from-orange-400 to-purple-600 py-2 px-3 rounded-md ">
                            Get Tickets
                        </Link> */}
                    </div>

                    {/* Hamburger menu on the right in mobile view */}
                    <div className="lg:hidden flex items-center ">
                        <button
                            type="button"
                            onClick={toggleNavbar}
                            aria-label={mobileDrawerOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileDrawerOpen}
                            aria-controls="main-mobile-menu"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
                        >
                            {mobileDrawerOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />}
                        </button>
                    </div>
                </div>

                {/* Mobile drawer */}
                {mobileDrawerOpen && (
                    <div id="main-mobile-menu" className="fixed inset-0 z-50 bg-neutral-900 w-full flex flex-col lg:hidden">
                        <div className="h-16 flex items-center justify-between border-b border-neutral-700 px-4">
                            <Link to="/" onClick={closeMobileDrawer}>
                                <img className="h-12 w-28 object-contain" src={giflogo} alt="" />
                            </Link>

                            <button
                                type="button"
                                onClick={toggleNavbar}
                                aria-label="Close menu"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
                            >
                                <AiOutlineClose className="text-2xl" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-10 flex flex-col justify-start items-center text-center">
                        <ul className="w-full">
                            {navItems.map((item, index) => (
                                <li className="bg-neutral-900 py-3 text-base border-b border-neutral-800" key={index}>
                                    <NavLink 
                                    className={({ isActive }) =>
                                       `font-bold block w-full text-left uppercase ${isActive ? "text-orange-500 font-extrabold" : "text-white hover:text-blue-500"}`
                                     }
                                     to={item.href}
                                     onClick={closeMobileDrawer}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        </div>

                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
