import React from 'react'
import './card.css'

export default function Card(props) {
  return (
    <>
        <div className="card">
            <img src={props.imgurl} alt="" className='card-img' draggable="false"/>
            <div className="name">{props.name}</div>
        </div>
    </>
  )
}
