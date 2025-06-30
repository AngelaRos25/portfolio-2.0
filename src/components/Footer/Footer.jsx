import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";


import './Footer.css';

function Footer(){
  return (
    <footer>
      <div className="icon">
        <a href="https://www.instagram.com/angiirosi/" target="_blank"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/angela-rosace-744925291/"><FaLinkedin /></a>
        <a href="https://github.com/Giangy25"><FaGithub /></a>
        <a><IoDocumentText /></a>
      </div>
      <div className="copyright">
        © 2025 Angela Rosace
      </div>
    </footer>
  )
}

export default Footer;