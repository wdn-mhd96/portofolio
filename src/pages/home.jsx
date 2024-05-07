import React from "react";
import  profil  from '../assets/profil.jpg'

export default function Home() {
    return (
        <>
        <div className="row home">
            <div className="col-md-6">
                <h2>Muhammad Wildani</h2>
                <h1>Web Developer</h1>
                <h3><i>HTML, PHP, CSS, Javascript</i></h3>
            </div>
            <div className="col-md-6 m-auto">
                <div className="profil">
                    <img src={profil} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
        </>
    )
}