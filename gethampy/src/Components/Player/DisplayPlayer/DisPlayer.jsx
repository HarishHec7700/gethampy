import React from 'react'
import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box';
import Controls from './Controls';
import WaveAni from './WaveAni';



function DisPlayer({ imgUrl,currentTrack }) {
    console.log(currentTrack.artists);
    const songArtists=[];
    currentTrack.artists.forEach((artist)=>{
        console.log(artist.name);
        songArtists.push(artist.name);
    })
    console.log(songArtists);
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
                        <WaveAni/>
                        <p>0.30</p>
                    </div>            
                    <Controls />
                </div>
            </div>
        </>
    )
}

export default DisPlayer