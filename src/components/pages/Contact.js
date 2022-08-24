import React from "react";
import "./Contact.css";
import { FaTwitter, FaGoogle, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="contact-hero">
        <h1>Contact</h1>
      </div>
      <div className="content-body">
        <div className="contact-facebook-container">
          <div className="facebook-circle">
            <FaTwitter />
          </div>
          <span className="contact-text">Follow us on Twitter</span>
        </div>
        <div className="contact-email-container">
          <div className="email-circle">
            <FaGoogle />
          </div>
          <span className="contact-text">Email us at Spirit@email.com</span>
        </div>
        <div className="contact-facebook-container">
          <div className="facebook-circle">
            <FaFacebook />
          </div>
          <span className="contact-text">Follow us on Facebook</span>
        </div>
      </div>
    </>
  );
}
