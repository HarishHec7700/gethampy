import React from 'react'
import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box';
import Controls from './Controls';



function DisPlayer({imgUrl}) {
    return (
        <>
            <div className="audio-player d-flex ">
                <Box className='progress-bar' sx={{ position: 'relative', display: 'inline-flex',overflow:"hidden" }} >
                    <CircularProgress variant="determinate" value={45} size="15rem" color={"warning"} className='progress-stroke' />
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
                        <img className='displayer-img' src={imgUrl} alt='Song Image' style={{width:"90%"}}/>
                    </Box>
                </Box>
                <Controls/>
            </div>
        </>
    )
}

export default DisPlayer