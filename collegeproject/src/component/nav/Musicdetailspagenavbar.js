import React, { useEffect, useState } from 'react'
import "../nav/Secondnavbar.scss"
import logo from "../../Images/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { BsBoxArrowInLeft } from "react-icons/bs";
function Navbar({ categoryRef, aboutref }) {
    const navigate = useNavigate();
    const handelEventpage = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate('/');
        }
    }

    return (
        <div className='secondNav'>
            <div className="logo">
                <img src={logo} alt="" srcset="" />
                Evento

            </div>


            <button className='returnButton' onClick={handelEventpage}>
                <span>
                    Previous page
                </span>
                {/* <BsBoxArrowInLeft className='icon' /> */}
            </button>
        </div>
    )
}

export default Navbar