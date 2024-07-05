import CompanyLogo from "../../assets/logos/companylogo.png";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import './Navbar.css';

const Navbar = () => {
  const [menuVisible, handleMenuVisible] = useState(false);
  const [navbarSolid, setNavbarSolid] = useState(false);

  const handleMenu = () => {
    handleMenuVisible(!menuVisible);
  };

  const handleScroll = () => {
    const industriesSection = document.getElementById('Industries');
    if (industriesSection) {
      const industriesTop = industriesSection.offsetTop;
      if (window.scrollY >= industriesTop) {
        setNavbarSolid(true);
      } else {
        setNavbarSolid(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${navbarSolid ? 'solid' : 'transparent'}`}>
      <div className="navbar-container fixed z-20 top-0 left-0 w-full p-2 md:p-3 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="logo transition duration-500 ease-in-out transform hover:scale-110">
            <img src={CompanyLogo} alt="company logo" />
          </div>
        </a>
        <div
          id="nav-menu"
          className="nav text-lg font-medium hidden gap-8 md:flex"
        >
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#Industries" className="nav-link">
            Industries
          </a>
          
          <a href="#About" className="nav-link">
            About Us
          </a>
          <a href="#solutions" className="nav-link">
            Solutions
          </a>
          <a href="#contact" className="nav-link">
            <button className="btn">Contact Us</button>
          </a>
        </div>
        <button className="p-2 md:hidden cursor-pointer transition" onClick={handleMenu}>
          {menuVisible ? (
            <FontAwesomeIcon icon={faTimes} className="text-whitesmoke h-8 transition" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-whitesmoke h-8 transition" />
          )}
        </button>
      </div>

      <div className={`sidebar ${menuVisible ? 'translate-x-0' : 'translate-x-full'} fixed z-30 top-0 right-0 w-1/2 md:w-1/4 h-full bg-grey-slate-400 text-whitesmoke text-lg flex flex-col gap-3 px-6 py-8 transition-transform duration-300 ease-in-out`}>
        <a href="#" className="mobile-nav-link btn-sidebar" onClick={handleMenu}>
          Home
        </a>
        <a href="#Industries" className="mobile-nav-link btn-sidebar" onClick={handleMenu}>
          Industries
        </a>
        
        <a href="#About" className="mobile-nav-link btn-sidebar" onClick={handleMenu}>
          About Us
        </a>
        <a href="#solutions" className="mobile-nav-link btn-sidebar" onClick={handleMenu}>
          Solutions
        </a>
        <a href="#contact" className="mobile-nav-link btn-sidebar" onClick={handleMenu}>
          Contact Us
        </a>
      </div>

      <div className={`overlay ${menuVisible ? 'block' : 'hidden'} fixed inset-0 bg-black opacity-50 z-20`} onClick={handleMenu}></div>
    </nav>
  );
};

export default Navbar;
