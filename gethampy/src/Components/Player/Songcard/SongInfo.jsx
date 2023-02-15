import React from 'react'
import AlbumImg from './AlbumImg'
import AlbumInfo from './AlbumInfo'
import "./SongCard.css"

function SongInfo({album}) {
  // console.log(album);
  return (
    <>
      <div className="song-info d-flex">
        <AlbumImg imgUrl={album?.images[0]?.url}/>
        <AlbumInfo album={album} />
      </div>
    </>
    )
}

export default SongInfo