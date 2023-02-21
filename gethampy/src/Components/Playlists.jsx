import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../AuthProcess/ApiDetails';


function Playlists() {
  const[playlists,setPlaylists]=useState([]);
  useEffect(()=>{
    apiClient.get("https://api.spotify.com/v1/me/playlists").then((resp)=>{
      // console.log(resp.data.items);
      setPlaylists(resp.data.items)
    })
    .catch((err)=>{
      console.log("Page Not Found",err);
    })
  },[]);
  const navi=useNavigate();

  return (
    <>
      <section className="playlist-comp">
        <div className="container">
          <div className="row">
          {
            playlists.map((playlist)=>{
              return (
                <div className="col-lg-3">
                  <div className="playlist-container" onClick={()=>{navi("/home/player",{state:{playlistId:playlist.id}})}} >
                    <img src={playlist?.images[0]?.url} alt='Playlist cover' className="playlist-cover" />
                    <div className="playlist-info">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="playlist-title">
                            <h5>{playlist?.name}</h5>
                            <p>{playlist?.tracks?.total} songs</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <button></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </section>
    </>
    )
}

export default Playlists