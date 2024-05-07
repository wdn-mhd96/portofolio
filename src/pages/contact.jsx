import { faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "bootstrap";
import React from "react";

export default function Contact() {
    return (
        <>
            <h1 className="title">Contact</h1>
        <div className="contact d-flex justify-content-center align-items-center flex-column" style={{minHeight:'inherit'}}>
            <h2>Reach Me Out On</h2>
            <div className="social my-5">
            <a href="https://www.instagram.com/m.wldani/?utm_source=qr&igsh=ZmdtMnI0NDhkeTli" target="__blank"  ><FontAwesomeIcon icon={faInstagram} size="3x" className="icons"/></a>
            <a href="https://wa.me/6289668118794?text=p balap" target="__blank" className=""><FontAwesomeIcon icon={faWhatsapp} size="3x" className="icons"/></a>
            {/* <a href="https://wa.me/6289668118794?text=p balap" target="__blank"><FontAwesomeIcon icon={faGithub} size="3x" className="icons"/></a> */}
            </div>
        </div>
        </>
    )
}