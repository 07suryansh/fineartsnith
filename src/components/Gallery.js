import React from 'react'
import './gallery.css'
import GalleryCard from './GalleryCard'
import img from './assets/img.jpeg'

export default function Gallery() {
  return (
    <>
    <div className="heading">Gallery</div>
      <div className="gallery">
        <GalleryCard imgurl={img} name="Hill'ffair 2k22"/>
      </div>
    </>
  )
}
