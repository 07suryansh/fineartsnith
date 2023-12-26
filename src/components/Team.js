import React from 'react'
import Card from './Card'
import img from './assets/img.jpeg'


export default function Team() {
  return (
    <>
      <div className="team">
        <h4>Final Year</h4>
        <Card name="Suryansh Singh Bisen" imgurl={img}/>
      </div>
    </>
  )
}
