import React from 'react'
import AutoAwesomeMosaicRoundedIcon from '@mui/icons-material/AutoAwesomeMosaicRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Outlet, Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <section className='main'>

        <div className='row adjust'>
          <div className=' col-sm-1 col-md-1 col-lg-1'>
            <div className="sidebar d-flex align-items-center">

              <div className="sidebar-icons"><Link to="/home/feed">
                <AutoAwesomeMosaicRoundedIcon style={{ fontSize: "2rem" ,color:"#000"}} />

              </Link>
              </div>
              <div className="sidebar-icons"><Link to="/home/trend">
                <LocalFireDepartmentRoundedIcon style={{ fontSize: "2rem" ,color:"#000"}} />

              </Link>

              </div>
              <div className="sidebar-icons"><Link to="/home/playlist">
                <PlayArrowRoundedIcon style={{ fontSize: "2rem" ,color:"#000"}} />

              </Link>

              </div>
              <div className="sidebar-icons"><Link to="/home/fav">
                <FavoriteRoundedIcon style={{ fontSize: "2rem" ,color:"#000"}} />

              </Link>
              </div>
              <div className="sidebar-icons"><Link to="/home/library">
                <LibraryMusicRoundedIcon style={{ fontSize: "2rem" ,color:"#000"}} />

              </Link>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-11 col-lg-11'>
            <div className='mainplayer'>
              MainPlayer
              {/* In outlet you can see that the Child routes of the router componenets gets displayed in the Outlet area  */}
              <Outlet/>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home