import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import "./BootStrap/bootstrap.min.css"
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <>
      <Router>
        <section className='main'>

          <div className='row adjust'>
            <div className=' col-sm-1 col-md-1 col-lg-1'>
              <Sidebar/>
            </div>
            <div className='col-sm-11 col-md-11 col-lg-11'>
              <div className='mainplayer'>
              MainPlayer

              </div>
            </div>
          </div>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
          </Routes>

        </section>
      </Router>
    </>
  );
}

export default App;
