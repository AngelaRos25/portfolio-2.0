import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import pdf from '../../assets/document/CV-Angela-Rosace.pdf';

import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="icon">
        <a href="https://www.instagram.com/angiirosi/" target="_blank"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/angela-rosace-744925291/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/Giangy25" target="_blank"><FaGithub /></a>
        <a href={pdf} target="_blank"><IoDocumentText /></a>
      </div>
      <div className="copyright">
        © 2025 Angela Rosace
      </div>
    </footer>
  )
}

export default Footer;