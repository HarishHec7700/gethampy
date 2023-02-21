import React from 'react'
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';

import "./control.css"

function Controls({ isPlaying, setIsPlaying, nextTrack, prevTrack }) {

  return (
    <>
      <div className="trackControls d-flex justify-content-center">
        <div className='controlButt' onClick={prevTrack}>
          <SkipPreviousRoundedIcon  style={{fontSize:"2rem"}}/>
        </div>
        <div className='playPauseButt' >
          {isPlaying ? <PauseRoundedIcon style={{fontSize:"4rem"}} /> : <PlayArrowRoundedIcon style={{fontSize:"4rem"}} />}
        </div>
        <div className='controlButt' onClick={nextTrack}>
          <SkipNextRoundedIcon style={{fontSize:"2rem"}}/>
        </div>
      </div>
    </>
  )
}

export default Controls