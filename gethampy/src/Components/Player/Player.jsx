import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import apiClient from '../../AuthProcess/ApiDetails';
import DisPlayer from './DisplayPlayer/DisPlayer';
import Queue from './Queue';
import SongInfo from './Songcard/SongInfo';


function Player() {
  const [tracks, setTracks] = useState([]);
  const[currentTrack,setCurrentTrack]=useState(null);
  const[currentIndex,setCurrentIndex]=useState(0);  
  const locate = useLocation();
  console.log(locate.state.playlistId);
  useEffect(() => {
    if(locate.state){
      console.log('use');
      apiClient.get("playlists/"+ locate.state.playlistId +"/tracks").then((apiData) => {
        console.log(apiData.data.items)
        setTracks(apiData.data?.items);
        setCurrentTrack(apiData.data?.items[0]?.track);
      })
    }
  }, [locate.state])
  useEffect(()=>{
   console.log('use 2'); 
    setCurrentTrack(tracks[currentIndex]?.track)
  },[currentIndex,tracks])
    console.log(currentTrack)
  return (
    <>
      <section className="player">
        <div className="row">
          <div className="col-lg-8">
            <div className="left-side-player ">
              {
                currentTrack?
                <DisPlayer currentTrack={currentTrack} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} totalTracks={tracks} imgUrl={currentTrack?.album?.images[0]?.url}/>
                :null 
              }
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