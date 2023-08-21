import React from 'react'
import logo from "../Images/logo.png"
import "../Footer/Footer.scss"
import { AiFillPhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Footer() {
    const navigate = useNavigate();
    const handelNavigateToCreatepage = () => {
        navigate("/CreateEvent")
    }
    const gotoAdminLogin = () => {
        navigate("/adminLogin")
    }
    return (
        <>
            <div className="footerCon">
                <div className="allbox">

                    <div className="firstBox">
                        <div className="header">

                            <img src={logo} alt="" srcset="" />
                            <h2>
                                Evento
                            </h2>
                        </div>

                        <ul>
                            <li>
                                <HiLocationMarker className='icon' /> Andrahali ,Bangalore,Karnataka
                            </li>
                            <li>
                                <MdEmail className='icon' />123@gamil.com
                            </li>
                            <li>
                                <AiFillPhone className='icon' /> 7392739293
                            </li>
                        </ul>
                    </div>
                    <div className="secondBox">
                        <div className="header">

                            <h3>
                                Quick Links
                            </h3>
                        </div>

                        <ul>
                            <li>
                                About us
                            </li>
                            <li>
                                Service
                            </li>
                            <li>
                                Our team
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div className="thirdtBox">
                        <div className="header">

                            <h3>
                                useful Links
                            </h3>
                        </div>

                        <ul>
                            <li>
                                Privacy Policy
                            </li>
                            <li>
                                Terms and Conditions
                            </li>
                            <li>
                                Support
                            </li>
                            <li>
                                FAQ
                            </li>
                        </ul>
                    </div>
                    <div className="fourthBox">
                        <button className='create' onClick={gotoAdminLogin}>Administrator Login</button>
                        <button className="create" onClick={handelNavigateToCreatepage}>Create Event</button>
                        <ul>
                            <li><FaFacebookMessenger /></li>
                            <li><AiFillTwitterCircle /></li>
                            <li><AiFillInstagram /></li>
                            <li><IoLogoYoutube /></li>
                        </ul>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer