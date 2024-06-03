import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <span>Contact</span>
        <div className="flex items-center gap-4 mx-auto">
          <a href="https://github.com/emnanaija" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/emna-naija-a14551244/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
