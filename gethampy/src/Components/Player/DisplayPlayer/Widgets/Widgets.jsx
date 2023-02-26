import React, { useEffect, useState } from 'react'
import apiClient from '../../../../AuthProcess/ApiDetails'
import WidgetBox from './WidgetBox'
import "./Widgets.css"

function Widgets({artistId}) {
  
  const[albums,setAlbums]=useState([]);
  const[similar,setSimilar]=useState([]);
  const[featured,setFeatured]=useState([]);
  
  
  useEffect(()=>{
    apiClient.get(`artists/${artistId}/albums`)
    .then((res)=>{
      const fetchData=res.data?.items?.slice(0,6);
      setAlbums(fetchData);
    })
    .catch((err)=>{
      console.error(err);
    })
  },[artistId])
  
  // useEffect(()=>{
  //   apiClient.get(`artists/${artistId}/albums`)
  //   .then((res)=>{
  //     const fetchData=res.data?.items;
  //     setAlbums(fetchData)  
  //   })
  // },[artistId])


  // useEffect(()=>{
  //   apiClient.get(`artists/${artistId}/albums`)
  //   .then((res)=>{
  //     const fetchData=res.data?.items;
  //     setAlbums(fetchData)  
  //   })
  //   .catch((err)=>{
  //     console.error(err);
  //   })
  // },[artistId])

  
  console.log(artistId)
  return (
    <>
      <div className="widgetsCont container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <WidgetBox albums={albums} title="Related Albums" />
          </div>
          <div className="col-lg-4">
            <WidgetBox head />
          </div>
          <div className="col-lg-4">
            <WidgetBox head />
          </div>
        </div>
      </div>
    </>
  )
}

export default Widgets