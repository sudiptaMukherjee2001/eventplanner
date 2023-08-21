// admin login 
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom';
import "../Adminlogin/Adminlogin.scss"
import { toast } from 'react-toastify';
function Adminlogin() {
    const [Name, setName] = useState("");
    const [adminPassword, setPassword] = useState("");
    // const handelLoginModaloff = () => {
    //     setLoginmodalonoff(false)
    // }

    const navigate = useNavigate();
    localStorage.setItem("AdminName", 'Sudipta');
    localStorage.setItem("Adminpassword", 1234);
    const adminName = localStorage.getItem('AdminName')
    const Password = localStorage.getItem('Adminpassword')
    const handelloginAuth = () => {
        if (Name === adminName && adminPassword === Password) {
            toast.success(" Login Successfull ", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            navigate("/approvedEvents")
        }
        else {
            toast.error(" Invalid credentials ", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }

    const handelNamechange = (e) => {
        setName(e.target.value)

    }
    const handelpasswordChange = (e) => {
        setPassword(e.target.value);
    }
    return (
        <>
            <div className="adminLoginOn">

                <div className="header">
                    <div className="title">
                        <h2>

                            Admin Login
                        </h2>
                    </div>
                    {/* <RxCross2 className='CrossIcon' onClick={handelLoginModaloff} /> */}

                </div>


                <div className="username">
                    <span>
                        Name:
                    </span>
                    <input type="text" value={Name} onChange={handelNamechange} />
                </div>

                <div className="username">
                    <span>
                        password:
                    </span>
                    <input type="text " value={adminPassword} onChange={handelpasswordChange} />
                </div>
                <div className="btn"><button onClick={handelloginAuth} >Log in</button></div>
            </div>


        </>
    )
}

export default Adminlogin