import React, { useRef, useEffect,useState } from 'react'
import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box';
import Controls from './Controls';
import WaveAni from './WaveAni';



function DisPlayer({ currentTrack, currentIndex, setCurrentIndex, totalTracks, imgUrl }) {
    // console.log(totalTracks[0]?.track?.preview_url);
    const [trackProgress, setTrackProgress] = useState(0);

    const audioSrc = totalTracks[currentTrack]?.tracks?.preview_url;

    const [isPlaying, setIsPlaying] = useState(false);

    const isReady = useRef(false);   // We use useRef here because here we are creating a audio element (so inorder to manipulate a DOM element in react we use useRef ) 

    const audioRef = useRef(new Audio(totalTracks[0]?.track?.preview_url));

    const intRef = useRef();

    const { duration } = audioRef.current;  // refers to the total duration of the song in url and normally while logging useRef we get it as an object with one property current

    const currPercentage = duration ? (trackProgress / duration) * 100 : 0;

    const startTimer = () => {
        clearInterval(intRef.current);

        intRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                nextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };

    useEffect(() => {
        if (audioRef.current.src) {
            if (isPlaying) {
                audioRef.current.play();
                startTimer();
            } else {
                clearInterval(intRef.current);
                audioRef.current.pause();
            }
        } else {
            if (isPlaying) {
                audioRef.current = new Audio(audioSrc);
                audioRef.current.play();
                startTimer();
            } else {
                clearInterval(intRef.current);
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(audioSrc);

        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            isReady.current = true;
        }
    }, [currentIndex]);

    // Functionality for the player control buttons like previous ,next tracks etc  

    // Function for next Track button    

    const nextTrack = () => {
        if (currentIndex < totalTracks.length - 1)  // if the currentIndex is less thn total tracks then we are increasing the currentIndex by 1  
            setCurrentIndex(currentIndex + 1)
        else
            setCurrentIndex(0); // Else we are setting the currentIndex to 0
    };

    // Function for previous Track button    

    const prevTrack = () => {
        if (currentIndex - 1 < 0)
            setCurrentIndex(totalTracks.length - 1)
        else
            setCurrentIndex(currentIndex - 1)
    };


    const songArtists = [];
    currentTrack.artists.forEach((artist) => {
        console.log(artist.name);
        songArtists.push(artist.name);
    })
    console.log(currPercentage);
    console.log(duration);

    return (
        <>
            <div className="audio-player d-flex ">
                <div className="left-audio-player">
                    <Box className='progress-bar' sx={{ position: 'relative', display: 'inline-flex', overflow: "hidden" }} >
                        <CircularProgress variant="determinate" value={currPercentage} size="12rem" color={"warning"} className='progress-stroke' />
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
                        <WaveAni isPlaying={isPlaying} />
                        <p>0.30</p>
                    </div>
                    <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} nextTrack={nextTrack} prevTrack={prevTrack} />
                </div>
            </div>
        </>
    )
}

export default DisPlayer;