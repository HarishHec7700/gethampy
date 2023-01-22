import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import "./BootStrap/bootstrap.min.css";
import Feed from "./Components/Feed";
import Library from "./Components/Library"
import Trend from "./Components/Trend"
import Fav from "./Components/Fav"
import Playlist from "./Components/Playlist"


function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/player" element={<App />}></Route>
            {/* Nested Routing starts  */}
            <Route path="/home" element={<Home />}>  
              <Route path="/home/fav" element={<Fav />}></Route>
              <Route path="/home/feed" element={<Feed />}></Route>
              <Route path="/home/library" element={<Library />}></Route>
              <Route path="/home/playlist" element={<Playlist />}></Route>
              <Route path="/home/trend" element={<Trend />}></Route>

            </Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
