import './App.css';
import Landingpage from './component/Landingpage/Landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MusicEventPage from './component/MusicEventPage/MusicEventPage';
import Navbar from './component/nav/Navbar';
import MusicDetailsPage from './component/MusicDetailsPage/MusicDetailsPage';
import ExhibitionEventPage from './component/ExhibitionEventPage/ExhibitionEventPage';
import Login from './component/LOGIN/Login';
import Userdashboard from './component/UserDashboard/Userdashboard';
import { useSelector } from 'react-redux';
import Protectedroute from './component/ProtectedRoute/Protectedroute';
import Admindashboard from './component/Admin/Admindashboard';
import Footer from './Footer/Footer';
import Registerpage from './component/Register/Registerpage';
import { useEffect, useState } from 'react';
import Administrator from './component/Administrator/Administrator';
import Adminlogin from './component/Adminlogin/Adminlogin';
import { ToastContainer } from 'react-toastify';
import ApprovedEvents from './component/Administrator/ApprovedEvents';
import OnlineEventpage from './component/OnlineEventpage/OnlineEventpage';
import PartyEventpage from './component/PartyEventpage/PartyEventpage';


function App() {
  // const { isAuth } = useSelector((state) => state.eventDetails)
  const [isLoggedIn, setisLoggedIn] = useState(null)



  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <ToastContainer />
        <Routes>
          <Route exact path='/' Component={Landingpage} />
          <Route path='/login' element={<Login />} />
          <Route path='/Register' Component={Registerpage} />
          <Route element={<Protectedroute isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}>


            <Route path='/MusicEvents' Component={MusicEventPage} />
            <Route path='/ExhibitionPage' Component={ExhibitionEventPage} />
            <Route path='/OnlineEventPage' Component={OnlineEventpage} />
            <Route path='/PartyEventpage' Component={PartyEventpage} />
            <Route path='/EventDetailsPage/:q' Component={MusicDetailsPage} />
            <Route path='/Userdashboard' Component={Userdashboard} />
            <Route path='/CreateEvent' Component={Admindashboard} />
          </Route>


          {/* <Route path='/paymentpage' Component={Paymentsetup} /> */}


          {/* Admin */}
          <Route path='/adminDashboard' Component={Administrator} />
          <Route path='/adminLogin' Component={Adminlogin} />
          <Route path='/approvedEvents' Component={ApprovedEvents} />


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
