import React from 'react'

function Queue({tracks,setCurrentIndex}) {
  console.log(tracks);
  return (
    <>
      <div className="queue-comp">
        <h5>Up Next</h5>
        <div className="queue-list">
          {
            tracks?.map((item,index)=>{
              return(
                <p className="track-name d-flex" key={index} onClick={()=>{
                  // so what here we are doing is that we are changing the tracks of the playlist using the index of the 
                  //  tracks(which is an array ) there by setting the currentIndex using the emiiter method (child to parent )
                  setCurrentIndex(index)
                }
                }>{item.track.name}<span>0:30</span></p>
              )
            })
          }
        </div>
      </div>
    </>
    )
}

export default Queue