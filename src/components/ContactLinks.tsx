import React from "react";

import {
  IconBrandLinkedinFilled,
  IconBrandGithubFilled,
  IconMailFilled,
  IconBrandBehance,
} from "@tabler/icons-react";

export const ContactLinks: React.FC = () => {
  return (
    <div className="contact-links">
      <a
        href="https://github.com/ang-jor"
        target="_blank"
        className="filled-btn"
      >
        <IconBrandGithubFilled size={24} />
      </a>
      <a href="mailto:hello@ang-jor.com" target="_blank" className="filled-btn">
        <IconMailFilled size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/angela-jordanova/"
        target="_blank"
        className="filled-btn"
      >
        <IconBrandLinkedinFilled size={24} />
      </a>
      <a
        href="https://www.behance.net/angjor"
        target="_blank"
        className="filled-btn"
      >
        <IconBrandBehance size={24} />
      </a>
    </div>
  );
};

export default ContactLinks;
