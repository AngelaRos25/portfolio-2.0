import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Pages() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}


export default Pages;