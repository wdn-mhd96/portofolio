import React from "react";
import  profil  from '../assets/profil.png'

export default function Home() {
    return (
        <>
        <div className="home">
            <div className="left-pane">
                <h1>Thoughtful Design, Intelligent Development</h1>
                <h2>Muhammad Wildani</h2>
            <a href="https://wa.me/6289668118794?text=Hai Wildan, Saya Tertarik Menggunakan Jasa Anda Sebagai Web Developer" target="__blank" className="">Connect with Me</a>
            </div>
            <div className="right-pane">
                <div className="profil">
                    <img src={profil} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
        </>
    )
}