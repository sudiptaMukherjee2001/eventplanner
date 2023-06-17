import React from 'react'
import { RxCross2 } from "react-icons/rx";
function Registerpage({ setRegistermodalonoff }) {
    const handelRegisterModaloff = () => {
        setRegistermodalonoff(false)
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
                    <input type="text" />
                </div>
                <div className="username">
                    <span>
                        Email:
                    </span>
                    <input type="text" />
                </div>
                <div className="username">
                    <span>
                        Phone Number:
                    </span>
                    <input type="text" />
                </div>
                <div className="username">
                    <span>
                        password:
                    </span>
                    <input type="text" />
                </div>
                <div className="btn"><button>Register</button></div>
            </div>
        </>
    )
}

export default Registerpage