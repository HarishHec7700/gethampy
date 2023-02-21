import React, { useRef, useState } from 'react'
import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box';
import Controls from './Controls';
import WaveAni from './WaveAni';



function DisPlayer({ currentTrack,currentIndex,setCurrentIndex,totalTracks,imgUrl }) {
    // console.log(totalTracks[0]?.track?.preview_url);
    const [trackProgress,setTrackprogress]=useState(0);

    const audioSrc=totalTracks[currentTrack]?.tracks?.preview_url;
    
    const[isPlaying,setIsPlaying]=useState(true);
    
    const isReady=useRef(false);   // We use useRef here because here we are creating a audio element (so inorder to manipulate a DOM element in react we use useRef ) 
    
    const audioRef= useRef(new Audio(totalTracks[0]?.track?.preview_url));
    
    const {duration} =audioRef.current;  // refers to the total duration of the song in url and normally while logging useRef we get it as an object with one property current
    
    const currPercentage=duration?(trackProgress/duration)*100 : 0;

    // Functionality for the player control buttons like previous ,next tracks etc  

    const nextTrack=()=>{
        if(currentIndex > totalTracks.length-1)  // if the currentIndex is greater thn total tracks then we reset the currentIndex to 0 
            setCurrentIndex(0);
        else
            setCurrentIndex(currentIndex+1) // Else we are setting the currentIndex to currentIndex+1c 
        };

    const prevTrack=()=>{
        if(currentIndex < totalTracks.length -1)
            setCurrentIndex(totalTracks.length -1)
        else
            setCurrentIndex(currentIndex -1)
        };


    const songArtists=[];
    currentTrack.artists.forEach((artist)=>{
        console.log(artist.name);
        songArtists.push(artist.name);
    })
    console.log(audioRef);
    return (
        <>
            <div className="audio-player d-flex ">
                <div className="left-audio-player">
                    <Box className='progress-bar' sx={{ position: 'relative', display: 'inline-flex', overflow: "hidden" }} >
                        <CircularProgress variant="determinate" value={45} size="12rem" color={"warning"} className='progress-stroke' />
                        <Box
                            sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img className='displayer-img' src={imgUrl} alt='Song Image' style={{ width: "90%" }} />
                        </Box>
                    </Box>

                </div>
                <div className="right-audio-player">
                    <h3 className="player-song-title">
                        {currentTrack?.name}
                    </h3>
                    <p className="song-artist">
                        {songArtists.join(" | ")}
                    </p>
                    <div className="player-track d-flex justify-content-center">
                        <p>0.00</p>
                        <WaveAni isPlaying={isPlaying}/>
                        <p>0.30</p>
                    </div>            
                    <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} nextTrack={nextTrack} prevTrack={prevTrack} />
                </div>
            </div>
        </>
    )
}

export default DisPlayer;