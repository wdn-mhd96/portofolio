import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
export default function Header() {
    const [scrolled, setScrolled] = useState(false)
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
    return (
        <div className={`header ${(scrolled) && "scrolled"}`}>
            <i><a href="" className="logo">DANS</a></i>
            <Navbar />
        </div>
    )
}