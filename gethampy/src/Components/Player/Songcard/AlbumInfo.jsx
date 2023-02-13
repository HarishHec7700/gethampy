import React from 'react'

function AlbumInfo({album}) {
    const artists=[] // we are creating this empty array since there will be many artist for a song .
    album?.artists?.forEach((person)=>{
        artists.push(person.name);
        console.log(person);
    })
    // console.log(artists);
  return (
    <>
        <div className="album-info">
            <p className='song-title'>{artists}</p>
            <p className='song-desp'></p>
            <p className='song-rel-date'></p>
        </div>
    </>
    )
}

export default AlbumInfo