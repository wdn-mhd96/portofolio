import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPerson, faScrewdriverWrench, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll} from "react-scroll";

export default function Navbar() {

    return (
        <>
        <div className="nav-wrap">
           <ul className="navv">
            <li><Link activeClass="active" className="navv-link" to="home" spy={true} smooth={true} duration={300} offset={-80}><FontAwesomeIcon icon={faHome}className="px-1" size="xs"/>Home</Link></li>
            <li><Link activeClass="active" className="navv-link" to="about" spy={true}smooth={true} duration={300} offset={-80}><FontAwesomeIcon icon={faPerson}className="px-1" size="xs"/>About</Link></li>
            <li><Link activeClass="active" className="navv-link" to="project" spy={true}smooth={true} duration={300} offset={-80}><FontAwesomeIcon icon={faScrewdriverWrench}className="px-1" size="xs"/>Projects</Link></li>
            <li><Link activeClass="active" className="navv-link" to="contact" spy={true}smooth={true} duration={300} offset={-80}><FontAwesomeIcon icon={faPhone}className="px-1" size="xs"/>Contact</Link></li>
           </ul>
        </div>
        </>
    )
}