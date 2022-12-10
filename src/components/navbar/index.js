import React from "react";
import "./index.css"
import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";
import linkedin from "./img/linkedin.svg";
import twitter from "./img/twitter.svg";
import mail from "./img/mail.svg";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logotext">Milton</div>
            <hr/>
            <p className="textbar">Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.</p>
            <hr/>
            <a className="pages-nav" href="#">Home</a><br/>
            <a className="pages-nav" href="#">About</a><br/>
            <a className="pages-nav" href="#">Contact</a><br/>
            <hr/>
            <img className="nav-image" src={facebook}/>
            <img className="nav-image" src={instagram}/>
            <img className="nav-image" src={twitter}/>
            <img className="nav-image" src={linkedin}/>
            <img className="nav-image" src={mail}/>
            <div className="text-link">Created by Maksym</div>
        </div>
    );
}

export default Navbar;