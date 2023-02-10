import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import apiClient from '../../AuthProcess/ApiDetails';
import Queue from './Queue';
import SongInfo from './SongInfo';


function Player() {
  const [tracks, setTracks] = useState([]);
  const[currentTrack,setCurrentTrack]=useState({});  
  const locate = useLocation();
  // console.log(locate.state.playlistId);
  useEffect(() => {
    apiClient.get("playlists/" + locate.state.playlistId + "/tracks").then((apiData) => {
      setTracks(apiData.data.items);
      setCurrentTrack(apiData.data.items[0]);
    })
  }, [locate.state.playlistId])
  // console.log(currentTrack)

  return (
    <>
      <section className="player">
        <div className="row">
          <div className="col-lg-8">
            <div className="left-side-player">

            </div>
          </div>
          <div className="col-lg-4">
            <div className="right-side-player">
              <SongInfo />
              <Queue />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Player