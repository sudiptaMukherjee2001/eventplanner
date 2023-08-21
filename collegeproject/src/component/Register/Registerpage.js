import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Registerpage({ setRegistermodalonoff }) {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [number, setnumber] = useState("");
    const [password, setPassword] = useState("");
    // const [passwordVisible, setPasswordVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const indianphone = /^[6-9]\d{9}$/;
    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const handelRegisterModaloff = () => {
        setRegistermodalonoff(false)
    }
    const navigate = useNavigate();
    const handelregister = (e) => {
        e.preventDefault();

        const usernameRegex = /^[A-Za-z]+$/;
        const isValidUsername = usernameRegex.test(name);
        if (!isValidUsername) {
            toast.error("Username must contain only alphabetic characters", {
                position: "top-center",
                autoClose: 4000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
            return;
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const isValidPassword = passwordRegex.test(password);
        if (!isValidPassword) {
            toast.error("Password must contain at least 8 characters including alphabets, numbers, and special symbols", {
                position: "top-center",
                autoClose: 4000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
            return;
        }

        if (!indianphone.test(number)) {
            toast.error("Please enter a valid Indian phone number", {
                position: "top-center",
                autoClose: 4000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(email);
        if (!isValidEmail) {
            toast.error("Please enter a valid email address", {
                position: "top-center",
                autoClose: 4000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
            return;
        }

        axios.post('http://localhost:8800/user/reg', { name, email, password, number })
            .then(response => {
                // Handle successful authentication here
                // dispatch(Login(true));
                toast.success(" Registration Successfull ", {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                navigate("/");
                setRegistermodalonoff(false)
            })
            .catch(error => {
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

    }

    const handelnamechange = (e) => {
        setname(e.target.value)

    }
    const handelemailchange = (e) => {
        setEmail(e.target.value)

    }
    const handelpnumchange = (e) => {
        setnumber(e.target.value)

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

                            Registration Form
                        </h2>
                    </div>
                    <RxCross2 className='CrossIcon' onClick={handelRegisterModaloff} />

                </div>

                <div className="username">
                    <span>
                        username:
                    </span>
                    <input type="text" value={name} pattern="[A-Za-z]+" onChange={handelnamechange} />
                </div>
                <div className="username">
                    <span>
                        Email:
                    </span>
                    <input type="email" value={email} onChange={handelemailchange} />
                </div>
                <div className="username">
                    <span>
                        Phone Number:
                    </span>
                    <input type="text" value={number} onChange={handelpnumchange} />
                </div>
                <div className="username" >
                    <span>
                        password:
                    </span>
                    <input type={showPassword ? "text" : "password"} value={password} onChange={handelpasswordChange}
                        style={{ transform: "translateX(60px)" }}
                    />
                    {showPassword ? (
                        <FaEye className="eye" onClick={togglePasswordVisibility} style={{ position: "relative", zIndex: "4", right: "10px", fontSize: "22px", top: "8px" }} />
                    ) : (
                        <FaEyeSlash
                            className="eye_slash"
                            onClick={togglePasswordVisibility}
                            style={{ position: "relative", zIndex: "4", right: "10px", fontSize: "22px", top: "8px" }}
                        />
                    )}
                </div>
                <div className="btn"><button onClick={handelregister}>Register</button></div>
            </div>
        </>
    )
}

export default Registerpage