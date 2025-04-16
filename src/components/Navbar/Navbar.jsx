import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        {/* Brand Logo with Icon & Stylish Text */}
        <Link to="/" smooth={true} duration={500} className="cursor-pointer flex items-center space-x-2">
        <FaLaptopCode className="text-4xl text-blue-500 hover:text-indigo-500 transition duration-300" />

          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#06B6D4]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            MD JAHED MIAH
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">About</Link></li>
          <li><Link to="/services" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Services</Link></li>
          <li><Link to="/portfolio" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Portfolio</Link></li>
          <li><Link to="/contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Contact</Link></li>
          <li>
        <a href="mailto:seoabdurrahmanbd@gmail.com" className="btn bg-blue-600 text-white px-4 py-3 rounded-xl text-lg hover:bg-blue-700 transition-all">
          Hire Me
        </a>
      </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={30} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md text-center space-y-4 py-4">
          <li><Link to="hero" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="services" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Portfolio</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li>
        <a href="mailto:mdjahedahmed12@gmail.com" className="btn bg-blue-600 text-white px-4 py-3 rounded-xl text-lg hover:bg-blue-700 transition-all">
          Hire Me
        </a>
      </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
