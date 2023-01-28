import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import "./BootStrap/bootstrap.min.css";
import Feed from "./Components/Feed";
import Library from "./Components/Library"
import Trend from "./Components/Trend"
import Fav from "./Components/Fav"
import Playlist from "./Components/Playlist"
import Login from "./Components/Login/Login"
import { setClientToken } from './AuthProcess/ApiDetails';


function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    // window.localStorage.clear();
    const authToken = window.localStorage.getItem("token"),
      locate = window.location.hash;
    window.location.hash = "";
    if (!token && locate) {
      const _token = locate.split("&")[0].split("=")[1];
      // console.log(authToken);
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(authToken);
      setClientToken(authToken);
    }
  }, [])
  console.log(token);
  


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      {token ?
        <Routes>
          <Route path="/" element={<Login />}></Route>
          {/* Nested Routing starts  */}
          <Route path="/home" element={<Home />}>
            <Route path="/home/fav" element={<Fav />}></Route>
            <Route path="/home/feed" element={<Feed />}></Route>
            <Route path="/home/library" element={<Library />}></Route>
            <Route path="/home/playlist" element={<Playlist />}></Route>
            <Route path="/home/trend" element={<Trend />}></Route>
          </Route>
        </Routes>
          :
          <Login />}
      </Router>
    </>

  );
}

export default App;
