import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [nav, setNav] = useState(false)
    useEffect(() => {
        const handleScrolled = () => {
            const isScrolled = window.scrollY > 100
            if(scrolled !== isScrolled)
                setScrolled(isScrolled)
        }
        window.addEventListener('scroll', handleScrolled)

        return () => {
            window.removeEventListener('scroll', handleScrolled)
        }
    },[scrolled]
)
    const toggleNav = () => {
        setNav(!nav)
    }
    const closeNav = () => {
        setNav(false)
    }
    return (
        <div className={`header ${(scrolled) && "scrolled"}`}>
            <i><a href="" className="logo">DANS</a></i>
            <span onClick={toggleNav}><FontAwesomeIcon icon={faBars} style={{color:'var(--text)'}} size="2x"/></span>
            <Navbar visible={nav} close = {closeNav}/>
        </div>
    )
}