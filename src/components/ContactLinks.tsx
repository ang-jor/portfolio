import React from "react";

export const ContactLinks: React.FC = () => {
  return (
    <div className="contact-links">
      <a href="https://github.com/ang-jor" target="_blank">
        <i className="fa-brands fa-github fa-xl"></i>
      </a>
      <a href="mailto:ang.j8r@gmail.com" target="_blank">
        <i className="fa-solid fa-envelope fa-xl"></i>
      </a>
      <a href="https://www.linkedin.com/in/angela-jordanova/" target="_blank">
        <i className="fa-brands fa-square-linkedin fa-xl"></i>
      </a>
    </div>
  );
};

export default ContactLinks;
