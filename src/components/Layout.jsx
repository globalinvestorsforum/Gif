// import React from 'react'
// import Header from './Header/Header'
// import Footer from './Footer/Footer'
// import { ScrollRestoration } from 'react-router-dom'

// import {Outlet} from 'react-router-dom'
// const Layout = () => {
//   return (
//     <>
//     <Header/>
//     <ScrollRestoration/>
//     <Outlet/>
//     <Footer/>
//     </>
//   )
// }

// export default Layout

import React from "react";
import Header from "./Header/Header";
import GaisHeader from "./Header/GaisHeader"; // New Navbar for Gais paths
import Footer from "./Footer/Footer";
import { ScrollRestoration, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SEO from './SEO';

const Layout = () => {
  const location = useLocation();

  // Check if the current route starts with `/gais`
  const isGaisRoute = location.pathname.startsWith("/gais") || location.pathname === "/";

  return (
    <>
      <SEO
        title="GAIS — Global AI Summit"
        description="Global AI Summit (GAIS) — conferences, speakers, attendees and events focused on AI applications across industries."
        url="https://www.global-investors-forum.com/"
      />
      {isGaisRoute ? <GaisHeader /> : <Header />}
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
