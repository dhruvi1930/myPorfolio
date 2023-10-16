import React from "react";
import linkedIn from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";
import github from "../../assets/github.png";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="socialMedia">
        <a href="https://github.com/dhruvi1930">
          <img src={github} alt="GitHub" className="socialMediaImage" />
        </a>
        <a href="https://www.linkedin.com/in/dhruvi-lad-b645771a2/">
          <img src={linkedIn} alt="LinkedIn" className="socialMediaImage" />
        </a>
        <a href="mailto:dhruvihl369@gmail.com">
          <img src={gmail} alt="Gmail" className="socialMediaImage" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
