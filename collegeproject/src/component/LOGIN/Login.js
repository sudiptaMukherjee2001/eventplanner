import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { Login } from "../../feature/eventSlice";
import axios from 'axios';
// import "../LOGIN/Login.scss"

import { useNavigate } from "react-router-dom"

// toast
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// It is login page
function Registerpage({ setisLoggedIn, setLoginmodalonoff }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handelloginAuth = () => {

        axios
            .post("http://localhost:8800/user/login", { email, password })
            .then((res) => {
                localStorage.setItem("userId", res.data.id);
                localStorage.setItem("userName", res.data.name);
                localStorage.setItem("userEmail", res.data.email);
                localStorage.setItem("userNumber", res.data.number);
                // Handle successful authentication here
                //dispatch(Login(true));
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
                console.log("succ")
                navigate("/");
                setLoginmodalonoff(false)


            })
            .catch((error) => {
                // Handle authentication error here
                console.log(error);
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
            });





    };

    const handelLoginModaloff = () => {
        setLoginmodalonoff(false)
    }

    const handelemailchange = (e) => {
        setEmail(e.target.value)

    }
    const handelpasswordChange = (e) => {
        setPassword(e.target.value);
    }






    return (
        <>

            <div className="registerCard">

                <div className="header">
                    <div className="title">
                        <h2>

                            Login form
                        </h2>
                    </div>
                    <RxCross2 className='CrossIcon' onClick={handelLoginModaloff} />

                </div>


                <div className="username">
                    <span>
                        Email:
                    </span>
                    <input type="email" value={email} onChange={handelemailchange} />
                </div>

                <div className="username">
                    <span>
                        password:
                    </span>
                    <input type="password " value={password} onChange={handelpasswordChange} />
                </div>
                <div className="btn" ><button onClick={handelloginAuth}  >Log in</button></div>

            </div>
        </>
    )
}

export default Registerpage