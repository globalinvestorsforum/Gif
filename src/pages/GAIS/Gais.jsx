import { React } from "react";


import { Link } from "react-router-dom";

import Hero from "./Hero";
import About from "./About";
import Numbers from "./Numbers";
import Join from "./Join";
import Summit from "./Summit";
import Threecards from "./Threecards";
import Partners from "./Partners";
import Banner from "./Banner";
import SEO from "../../components/SEO";

const Gais = () => {
  return (
    <>
    <SEO
        title="Global AI Summit — Home"
        description="Global AI Summit (GAIS): conferences, speakers, and attendees shaping the future of AI. Join us in Berlin."
        url="https://www.global-investors-forum.com/"
      />
      <Hero />
      <Numbers />
      <About />
      <Join/>
      <Summit/>
      <Threecards/>
      <Partners/>
      <Banner />
      
    </>
  );
};

export default Gais;
