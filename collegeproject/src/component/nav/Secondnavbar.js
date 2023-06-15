import React, { useEffect, useState } from 'react'
import "../nav/Secondnavbar.scss"
import logo from "../../Images/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { BsBoxArrowInLeft } from "react-icons/bs";
function Navbar({ categoryRef, aboutref }) {
    const navigate = useNavigate();
    const handelgotohomepage = () => {
        navigate("/")
    }

    return (
        <div className='secondNav'>
            <div className="logo">
                <img src={logo} alt="" srcset="" />
                Evento

            </div>


            <button className='returnButton' onClick={handelgotohomepage}>
                <span>
                    GO to Home Page
                </span>
                {/* <BsBoxArrowInLeft className='icon' /> */}
            </button>
        </div>
    )
}

export default Navbar