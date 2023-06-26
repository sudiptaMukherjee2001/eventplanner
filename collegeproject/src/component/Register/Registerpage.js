import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
function Registerpage({ setRegistermodalonoff }) {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [number, setnumber] = useState("");
    const [password, setPassword] = useState("");
    const handelRegisterModaloff = () => {
        setRegistermodalonoff(false)
    }

    const handelregister = () => {

        axios.post('http://localhost:8800/user/reg', { name, email, password, number })
            .then(response => {
                // Handle successful authentication here
                // dispatch(Login(true));
            })
            .catch(error => {
                // Handle authentication error here
                console.log(error);
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
                    <input type="text" value={name} onChange={handelnamechange} />
                </div>
                <div className="username">
                    <span>
                        Email:
                    </span>
                    <input type="text" value={email} onChange={handelemailchange} />
                </div>
                <div className="username">
                    <span>
                        Phone Number:
                    </span>
                    <input type="text" value={number} onChange={handelpnumchange} />
                </div>
                <div className="username">
                    <span>
                        password:
                    </span>
                    <input type="text" value={password} onChange={handelpasswordChange} />
                </div>
                <div className="btn"><button onClick={handelregister}>Register</button></div>
            </div>
        </>
    )
}

export default Registerpage