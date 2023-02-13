import React from 'react'

function AlbumImg({ imgUrl }) {
    return (
        <>
            <div className="album-img d-flex justify-content-center align-items-center">
                <img src={imgUrl} alt="Album Image" className="main-img" />
                <div className="img-shadow">
                    <img src={imgUrl} alt="Shadow Image" className="shadow-img" />
                </div>
            </div>
        </>
    )
}

export default AlbumImg