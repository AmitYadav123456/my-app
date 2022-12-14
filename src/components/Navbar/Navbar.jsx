import React from "react";
import Toggle from "../Toggle/Toggle";
import './Navbar.css'
import Services from "../Services/Services";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Testimonial from "../Testimonial/Testimonial";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
        <div className="n-name">Ameet</div>
        <Toggle/>
        </div>
        <div className="n-right">
          <div className="n-list">
             <ul style={{listStyleType: 'none'}}>
              <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
              <li>Home</li>
              </Link>
              <Link spy={true} to='Services' smooth={true}>
                <li>Services</li>
                </Link>
                <Link spy={true} to='Experience' smooth={true}>
              <li>Experience</li>
              </Link>
              <Link spy={true} to='Porfolio' smooth={true}>
                <li>Portfolio</li>
                </Link>
              <Link spy={true} to='Testimonials' smooth={true}>
                <li>Testimonials</li>
                </Link>
             
              </ul>
          </div>
          <button className="button n-button">
            Contact
          </button>
        </div>
    </div>
    
  )
}

export default Navbar