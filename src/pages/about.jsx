import { faUserAstronaut, faUserGear, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function About() {
    return (
        <>
        <div className="row about">
            <div className="col-md-6">    
                <div className="experience mb-5">
                    <h2><FontAwesomeIcon icon={faUserAstronaut} size="1x" className="mx-2 icon"/>Experience</h2>
                    <ul>
                        <li>Web Developer ( STIKes Wijaya Husada )</li>
                        <li>Freelance web Developer</li>
                        <li>Assistant Chief of Store ( PT. Sumber Alfaria Trijaya)</li>
                    </ul>
                </div>
                <div className="skills mt-3">
                <h2><FontAwesomeIcon icon={faUserGear} size="1x" className="mx-2 icon" />Skills</h2>
                    <ul>
                        <li>Programming Language : <strong><i>HTML, CSS, Javascript, PHP</i></strong></li>
                        <li>Framework/Library : <strong><i>Bootstrap, React JS, JQuery, Codeigniter 4</i></strong></li>
                        <li>Problem Solving</li>
                        <li>English Language</li>
                        <li>Microsoft Office</li>
                        <li>Adobe Photoshop</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6">
                <div className="biodata">
                    <h2> <FontAwesomeIcon icon={faUserGraduate} size="1x" className="mx-2 icon"/>Education</h2>
                    <ul>
                        <li>SMK N 4 Kota Bogor (2011-2014) <strong><i>( Rekayasa Perangkat Lunak )</i></strong></li>
                        <li>MTs Al-Barkah (2008-2011) </li>
                        <li>SDN Katulampa 02 Bogor (2002-2008) </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}