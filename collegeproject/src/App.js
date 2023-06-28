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


function App() {
  const { isAuth } = useSelector((state) => state.eventDetails)
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='/' Component={Landingpage} />
          <Route path='/login' Component={Login} />/

          <Route path='/MusicEvents' Component={MusicEventPage} />
          <Route path='/ExhibitionPage' Component={ExhibitionEventPage} />
          <Route path='/EventDetailsPage/:q' Component={MusicDetailsPage} />
          <Route path='/Userdashboard' Component={Userdashboard} />
          <Route path='/CreateEvent' Component={Admindashboard} />


          {/* <Route path='/paymentpage' Component={Paymentsetup} /> */}


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
