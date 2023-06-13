import React from 'react'

function Login() {
    return (
        <>
            <div className="username">
                username: <input type="text" />
            </div>
            <div className="username">
                Email: <input type="text" />
            </div>
            <div className="username">
                Phone Number: <input type="text" />
            </div>
            <div className="username">
                password: <input type="text" />
            </div>
        </>
    )
}

export default Login