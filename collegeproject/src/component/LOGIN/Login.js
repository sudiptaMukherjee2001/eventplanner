import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { Login } from "../../feature/eventSlice";
import axios from 'axios';
// import "../LOGIN/Login.scss"
function Registerpage({ setLoginmodalonoff }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handelloginAuth = () => {
        axios.post('http://localhost:8800/user/login', { email, password })
            .then(response => {
                localStorage.setItem("userId", response.ID)
                // Handle successful authentication here
                //dispatch(Login(true));
            })
            .catch(error => {
                // Handle authentication error here
                console.log(error);
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
                    <input type="text" value={email} onChange={handelemailchange} />
                </div>

                <div className="username">
                    <span>
                        password:
                    </span>
                    <input type="text " value={password} onChange={handelpasswordChange} />
                </div>
                <div className="btn"><button onClick={handelloginAuth}>Log in</button></div>
            </div>
        </>
    )
}

export default Registerpage