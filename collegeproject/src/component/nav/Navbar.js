import React, { useEffect, useState } from 'react'
import "../nav/Nav.scss"
import logo from "../../Images/logo.png"
import { Link, useNavigate } from 'react-router-dom';
function Navbar({ sectionRef }) {
    const Navigate = useNavigate();
    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handelLogin = () => {
        Navigate("/login")
    }
    return (
        <div className='nav'>
            <div className="logo">
                <img src={logo} alt="" srcset="" />
                Evento

            </div>
            <ul>
                <li>
                    home
                </li>
                <li>
                    About us
                </li>
                <li onClick={scrollToSection}>

                    Category

                </li>
            </ul>
            <button className='loginBtn' onClick={handelLogin}>Login</button>
            <button className='RegisterBtn'>Register</button>
        </div>
    )
}

export default Navbar