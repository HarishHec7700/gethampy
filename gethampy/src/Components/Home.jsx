import React, { useEffect, useState } from 'react'
import AutoAwesomeMosaicRoundedIcon from '@mui/icons-material/AutoAwesomeMosaicRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import { Outlet, Link } from 'react-router-dom';
import apiClient from '../AuthProcess/ApiDetails';


function Home() {
  const [user, setUser] = useState({});
  useEffect(() => {
    apiClient.get("me").then((res) => {
      setUser(res);
      // console.log(res.data.display_name);
    })
  },[])
  console.log(user);
  return (
    <>
      <section className='main'>
        <div className='row adjust'>
          <div className=' col-sm-1 col-md-1 col-lg-1'>
            <div className="sidebar d-flex align-items-center">
              <div className="row flex-dir-col">
                <div className="col-lg-2">
                  <div className="profile-img">
                    <img src="" alt="Profile Pic" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row flex-dir-col">
                    <div className="col-lg-2">
                      <div className="sidebar-icons"><Link to="/home/feed">
                        <AutoAwesomeMosaicRoundedIcon style={{ fontSize: "2rem", color: "#000" }} />

                      </Link>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="sidebar-icons"><Link to="/home/trend">
                        <LocalFireDepartmentRoundedIcon style={{ fontSize: "2rem", color: "#000" }} />

                      </Link>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="sidebar-icons"><Link to="/home/player">
                        <PlayArrowRoundedIcon style={{ fontSize: "2rem", color: "#000" }} />

                      </Link>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="sidebar-icons"><Link to="/home/fav">
                        <FavoriteRoundedIcon style={{ fontSize: "2rem", color: "#000" }} />

                      </Link>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="sidebar-icons"><Link to="/home/playlists">
                        <LibraryMusicRoundedIcon style={{ fontSize: "2rem", color: "#000" }} />

                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="sidebar-icons">
                    <Link to="/">
                      <MeetingRoomRoundedIcon style={{ fontSize: "2rem", color: "#000" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-11 col-lg-11'>
            <div className='mainplayer'>
              <div className="profile-disp d-flex">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuiltprefab.com%2Fcropped-blank-profile-picture-973460_960_720-300x300-png%2F&psig=AOvVaw0oirAonaHVD39ZUKf-WwmP&ust=1675262051151000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjTp8yD8vwCFQAAAAAdAAAAABAK"
                 alt="Profile" className="profile-img" />
                <h5 className="profile-name">
                {/* {user.data.display_name} */}HI
                </h5>
              </div>
              <h1 className="greet">Welcome back , </h1>
              {/* In outlet you can see that the Child routes of the router componenets gets displayed in the Outlet area  */}
              <Outlet />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home