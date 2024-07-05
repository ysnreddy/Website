import React from 'react'
import "./Nav.css";
import CompanyLogo from "../../assets/logos/companylogo.png";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='container'>
        
          <img src= {CompanyLogo} alt="companylogo"
          className="logo  fill:secondary transition duration-500 ease-in-out transform hover:scale-110 " />
          <ul>
            <li><Link to = 'home' smooth = {true} offset={0} durattion ={500}>Home </Link></li>
            <li><Link to = 'Indus' smooth = {true} offset={0} durattion ={500}>Industries </Link></li>
            <li><Link to = 'Vision' smooth = {true} offset={0} durattion ={500}>Solutions</Link></li>
            <li><Link to = 'abou' smooth = {true} offset={0} durattion ={500}>About Us</Link></li>
            <li><Link to = 'cont' smooth = {true} offset={0} durattion ={500}><button className='btn '> Contact Us </button></Link></li>
          </ul>
      
    </nav>
  )
}

export default Nav
