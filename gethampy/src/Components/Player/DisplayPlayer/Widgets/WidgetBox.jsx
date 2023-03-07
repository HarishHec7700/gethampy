import React from 'react'
import WidgetItems from './WidgetItems'

function WidgetBox({albums , title}) {
    console.log(albums)
  return (
    <>
        <div className="widgetBox">
            <h5>{title}</h5>
            {
                albums?albums.map((album,index)=>{
                  <WidgetItems key={index} album={album} />  
                }):null
            }
        </div>
    </>
    )
}

export default WidgetBox