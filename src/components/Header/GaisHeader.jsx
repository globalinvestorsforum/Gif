import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { gaisNavItems } from "../../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

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
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-start flex-shrink-0">
              <Link to="/">
                <div className="flex items-center gap-2 font-bold tracking-widest text-lg">
                  <span className="text-red-400">GLOBAL</span>
                  <span className="bg-black text-white px-2 py-1 rounded">
                    AI
                  </span>
                  <span className="text-purple-500">SUMMIT</span>
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex flex-row items-center justify-between w-4/5 xl:w-3/5 mx-6">
              <ul className="flex flex-row uppercase">
                {gaisNavItems.map((item, index) => (
                  <li key={index} className="mx-4 relative">
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `font-bold ${
                          isActive
                            ? "text-orange-500 font-extrabold"
                            : "text-white hover:text-blue-500"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <Link
                to="/gais/ticket"
                className="bg-gradient-to-r from-orange-400 to-purple-600 py-2 px-3 rounded-md"
              >
                Get Tickets
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={toggleNavbar}
                aria-label={mobileDrawerOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileDrawerOpen}
                aria-controls="gais-mobile-menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
              >
                {mobileDrawerOpen ? (
                  <AiOutlineClose className="text-2xl" />
                ) : (
                  <AiOutlineMenu className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileDrawerOpen && (
        <div
          id="gais-mobile-menu"
          className="fixed inset-0 z-[999] flex w-full flex-col bg-neutral-950 lg:hidden"
        >
          <div className="bg-gradient-to-r from-orange-400 via-purple-500 to-purple-600 h-16 w-full flex items-center justify-between px-4">
            <Link
              to="/"
              onClick={closeMobileDrawer}
              className="flex items-center gap-2 font-bold tracking-widest text-base"
            >
              <span className="text-white">GLOBAL</span>
              <span className="bg-black text-white px-2 py-1 rounded">AI</span>
              <span className="text-white">SUMMIT</span>
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

          <div className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="w-full space-y-2">
              {gaisNavItems.map((item, index) => (
                <li
                  className="bg-neutral-950 text-base border-b border-neutral-800"
                  key={index}
                >
                  <NavLink
                    to={item.href}
                    onClick={closeMobileDrawer}
                    className={({ isActive }) =>
                      `font-bold text-left block w-full px-4 py-4 uppercase ${
                        isActive
                          ? "text-orange-500 font-extrabold"
                          : "text-white hover:text-blue-500"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="w-full px-4 mt-6">
              <Link
                to="/gais/ticket"
                onClick={closeMobileDrawer}
                className="block w-full bg-gradient-to-r from-orange-700 to-purple-600 py-3 px-4 rounded-md text-center font-bold text-white"
              >
                Get Tickets
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
