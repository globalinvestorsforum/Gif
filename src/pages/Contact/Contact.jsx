import React from "react";
import { Link } from "react-router-dom";

import { contactus } from "../../constants";
import Types from "./Types";
import Form from "./Form";
import SEO from '../../components/SEO'

const Contact = () => {
  return (
    <>
    <SEO
      title="Contact — GAIS"
      description="Get in touch with the Global AI Summit team for sponsorship, press, and partnership inquiries."
      url="https://www.global-investors-forum.com/gais/contact"
    />
    <Types/>
    <Form/>
    </>
  );
};

export default Contact;
