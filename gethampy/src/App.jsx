import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import "./BootStrap/bootstrap.min.css";
import Feed from "./Components/Feed";
import Trend from "./Components/Trend"
import Fav from "./Components/Fav"
import Player from "./Components/Player/Player"
import Login from "./Components/Login/Login"
import Playlists from './Components/Playlists';
import { setClientToken } from './AuthProcess/ApiDetails';


function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const authToken = window.localStorage.getItem("token"),
    locate = window.location.hash;
    window.location.hash = "";
    if (!token && locate) {
      const _token = locate.split("&")[0].split("=")[1];
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
        {token ?
          <Routes>
            <Route path="/" element={<Login />}></Route>
            {/* Nested Routing starts  */}
            <Route path="/home" element={<Home />}>
              <Route path="/home/fav" element={<Fav />}></Route>
              <Route path="/home/feed" element={<Feed />}></Route>
              <Route path="/home/playlists" element={<Playlists />}></Route>
              <Route path="/home/player" element={<Player />}></Route>
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
