import React from 'react'

function AlbumInfo({ album }) {
    const artists = [] // we are creating this empty array since there will be many artist for a song .
    console.log(album)
    // Here we are creating an array with all artist name  
    album?.artists?.forEach((person) => {
        artists.push(person.name);
        // console.log(person.name);
    })
    console.log(artists);
    return (
        <>
            <div className="album-info">
                <div className="albumName-container">
                    <div className="marquee">
                        <p className='song-title'>{album?.name + " - " + artists.join(", ")}</p>
                    </div>
                </div>
                <div className="albumn-desp">
                    <p className='song-desp'>
                        {album?.name+" is an "+album?.album_type+" by "+artists.join(", ")+" with "+album?.total_tracks +" tracks"}
                    </p>
                </div>
                <div className="albumn-release">
                    <p className='song-rel-date'>Release date: {album?.release_date}</p>
                </div>
            </div>
        </>
    )
}

export default AlbumInfo