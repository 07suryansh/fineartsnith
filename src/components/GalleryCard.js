import React from 'react'
import './gallerycard.css'

export default function GalleryCard(props) {
  return (
    <>
        <div className="gallery-card">
        <img src={props.imgurl} alt="" className='gallery-img'/>
            {/* <div className="gallery-name">{props.name}</div> */}
        </div>
    </>
  )
}
