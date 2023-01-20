import React from 'react'
import AutoAwesomeMosaicRoundedIcon from '@mui/icons-material/AutoAwesomeMosaicRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';



function Sidebar() {
  return (
    <>
      <div className="sidebar d-flex align-items-center">

        <div className="sidebar-icons">
          <AutoAwesomeMosaicRoundedIcon style={{fontSize:"2rem"}}/>          
        </div>
        <div className="sidebar-icons">
          <LocalFireDepartmentRoundedIcon style={{fontSize:"2rem"}}/>          

        </div>
        <div className="sidebar-icons">
          <PlayArrowRoundedIcon style={{fontSize:"2rem"}}/>          

        </div>
        <div className="sidebar-icons">
          <FavoriteRoundedIcon style={{fontSize:"2rem"}}/>
        </div>
        <div className="sidebar-icons">
          <LibraryMusicRoundedIcon style={{fontSize:"2rem"}}/>
        </div>
      </div>
    </>
    )
}

export default Sidebar