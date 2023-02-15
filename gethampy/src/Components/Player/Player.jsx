import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import apiClient from '../../AuthProcess/ApiDetails';
import Queue from './Queue';
import SongInfo from './Songcard/SongInfo';


function Player() {
  const [tracks, setTracks] = useState([]);
  const[currentTrack,setCurrentTrack]=useState({});
  const[currentIndex,setCurrentIndex]=useState(0);  
  const locate = useLocation();
  // console.log(locate.state.playlistId);
  useEffect(() => {
    apiClient.get("playlists/" + locate.state.playlistId + "/tracks").then((apiData) => {
      setTracks(apiData.data.items);
      setCurrentTrack(apiData.data?.items[0]?.track);
    })
  }, [locate.state.playlistId])
  // console.log(currentTrack)
  useEffect(()=>{
    setCurrentTrack(tracks[currentIndex]?.track)
  },[currentIndex,tracks])
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
              <SongInfo album={currentTrack?.album}/>
              <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Player