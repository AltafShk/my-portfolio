import React from "react";
import "./ContactInfo.css"; // Import your CSS file for styling

const ContactInfo = () => {
  const email = "altaf.and18@gmail.com";
  const phoneNumber = "+92 333 1232849";
  const resumeUrl = "/AltafShaikh(Resume).pdf";

  return (
    <div className="contact-container">
      <h2>Contact Information</h2>
      <div className="contact-info">
        <p className="contact-item">
          <span className="contact-title">Email:</span>{" "}
          <a href={`mailto:${email}`} className="contact-link">
            {email}
          </a>
        </p>
        <p className="contact-item">
          <span className="contact-title">Phone:</span>{" "}
          <a href={`tel:${phoneNumber}`} className="contact-link">
            {phoneNumber}
          </a>
        </p>
        <p className="contact-item">
          <span className="contact-title">Resume:</span>{" "}
          <a href={resumeUrl} download className="contact-link">
            Download Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
