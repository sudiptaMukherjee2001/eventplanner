import './App.css';
import Landingpage from './component/Landingpage/Landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MusicEventPage from './component/MusicEventPage/MusicEventPage';
import Navbar from './component/nav/Navbar';
import MusicDetailsPage from './component/MusicDetailsPage/MusicDetailsPage';
import ExhibitionEventPage from './component/ExhibitionEventPage/ExhibitionEventPage';
import Login from './component/LOGIN/Login';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Landingpage} />
          <Route path='/login' Component={Login} />
          <Route path='/MusicEvents' Component={MusicEventPage} />
          <Route path='/ExhibitionPage' Component={ExhibitionEventPage} />
          <Route path='/EventDetailsPage/:q' Component={MusicDetailsPage} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
