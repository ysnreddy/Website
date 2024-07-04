import CompanyLogo from "../../assets/logos/companylogo.png";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './Navbar.css';



const Navbar = () => {

  const [menuVisible, handlemenuVisible] = useState(true);

  const handleMenu = () => {
    handlemenuVisible(!menuVisible)
  }
  return (
    <nav>
      <div className="h-20 fixed z-20 top-0 left-0 w-full p-3 flex justify-between items-center md:p-5">
        <a href="#" className="flex items-center">
          
          
          <div className="logo" >
          <img src= {CompanyLogo} alt="companylogo" />
        </div>
          
          
         
        </a>
       
        <div
          id="nav-menu"
          className="text-lg text-white font-medium hidden gap-8 md:flex"
        >
          <a
            href="#"
            className="transition duration-500 ease-out hover:duration-500 hover:ease-in-out md:hover:text-primary"
          >
            Home
          </a>
          <a
            href="#services"
            className="transition duration-500 ease-out hover:duration-500 hover:ease-in-out md:hover:text-primary"
          >
            Services
          </a>
         
          <a
            href="#"
            className="transition duration-500 ease-out hover:duration-500 hover:ease-in-out md:hover:text-primary"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="transition duration-500 ease-out hover:duration-500 hover:ease-in-out md:hover:text-primary"
          >
            Contact Us
          </a>
        </div>

        <button className="p-2 md:hidden cursor-pointer transition" onClick={handleMenu}>
          {menuVisible ? (
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "white" }}
              className="h-8 transition"
            />
          ) : (
            <FontAwesomeIcon
              icon={faTimes}
              style={{ color: "white" }}
              className="h-8 transition"
            />
          )}
        </button>
      </div>

      {!menuVisible && (
        <div className="transition-height duration-500 ease-in-out fixed z-20 top-20 w-full bg-secondary text-white text-lg flex flex-col gap-3 px-3.5 py-5 md:hidden">
          <a
            href="#"
            className="transition duration-500 ease-out hover:duration-500 hover:ease-in-out hover:text-primary"
          >
            Home
          </a>
          <a
            href="#services"
            className="transition duration-500 ease-out hover:duration-500 hover:ease-in-out hover:text-primary"
          >
            Services
          </a>
          <a
            href="#"
            className="transition duration-500 ease-out hover:duration-500 hover:ease-in-out hover:text-primary"
          >
            Projects
          </a>
          <a
            href="#"
            className="transition duration-500 ease-out hover:duration-500 hover:ease-in-out hover:text-primary"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="transition duration-500 ease-out hover:duration-500 hover:ease-in-out hover:text-primary"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
