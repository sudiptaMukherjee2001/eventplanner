import React from 'react'
import logo from "../../Images/logo.png"
import { useNavigate } from "react-router-dom"
import "../nav/Administrator.scss"
function Administornav() {
    const navigate = useNavigate();
    // admin log out
    const handelLogout = () => {
        localStorage.removeItem('AdminName');
        localStorage.removeItem('Adminpassword');


        navigate('/')

    }
    const gotoapprovedEvent = () => {
        navigate('/approvedEvents')
    }
    const gotounapprovedEvent = () => {
        navigate('/adminDashboard')
    }
    return (
        <div className='administratorNav'>
            <div className="logo">
                <img src={logo} alt="" srcset="" />
                Evento

            </div>

            <div className="mid">


                <button onClick={gotoapprovedEvent} >
                    <span>
                        Approved Events
                    </span>
                    {/* <BsBoxArrowInLeft className='icon' /> */}
                </button>
                <button onClick={gotounapprovedEvent} >
                    <span>
                        Unapproved Events
                    </span>
                    {/* <BsBoxArrowInLeft className='icon' /> */}
                </button>
            </div>

            <button className='returnButton' onClick={handelLogout}>
                <span>
                    Logout
                </span>
                {/* <BsBoxArrowInLeft className='icon' /> */}
            </button>

        </div>
    )
}

export default Administornav