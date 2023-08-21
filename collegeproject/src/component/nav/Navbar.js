import React, { useEffect, useState } from 'react'
import "../nav/Nav.scss"
import logo from "../../Images/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
function Navbar({ categoryRef, aboutref, setLoginmodalonoff, setRegistermodalonoff }) {




    const Navigate = useNavigate();
    const scrollToSection = () => {

        categoryRef?.current?.parentNode?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const scrollToabout = () => {
        aboutref?.current?.parentNode?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }



    const handelRegistermodalon = () => {
        setRegistermodalonoff(true)
    }
    const handelLoginModalOn = () => {

        setLoginmodalonoff(true)
    }
    const handelLogOutModal = () => {
        localStorage.removeItem('userId')
        localStorage.removeItem('userName')
        localStorage.removeItem('userEmail')
        localStorage.removeItem('userNumber')

        window.location.reload();

    }

    const id = localStorage.getItem('userId')
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
                <li onClick={scrollToabout}>
                    About us
                </li>
                <li onClick={scrollToSection}>

                    Category

                </li>
            </ul>
            {
                id > 0 ? <button className='loginBtn' onClick={handelLogOutModal}>Logout</button>
                    :
                    <>

                        <button className='loginBtn' onClick={handelLoginModalOn}>Login</button>
                        <button className='RegisterBtn' onClick={handelRegistermodalon}>Register</button>
                    </>
            }

        </div>
    )
}

export default Navbar