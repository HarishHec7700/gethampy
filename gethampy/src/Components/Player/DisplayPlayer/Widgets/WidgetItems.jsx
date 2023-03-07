import React from 'react'

function WidgetItems({album}) {
  return (
    <>
        <div className="widget-flex d-flex">
            <img src={album?.images[2]?.url} alt="Image" className="wid-img" style={{width:"20%"}} />
            <p className="widget-info">
                <h6 className="widget-head">{album?.name}</h6>
                <p>{album?.total_tracks}</p>
            </p>
        </div>
    </>
    )
}

export default WidgetItems