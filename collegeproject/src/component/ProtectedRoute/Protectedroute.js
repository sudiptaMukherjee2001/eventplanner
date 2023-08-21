import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
function Protectedroute({ isLoggedIn, setisLoggedIn }) {
    localStorage.getItem("userId") > 0 ? setisLoggedIn(true) : setisLoggedIn(false);
    console.log(isLoggedIn);
    return isLoggedIn || localStorage.getItem("userId") > 0 ? <Outlet /> : <Navigate to="/" />;
}
export default Protectedroute