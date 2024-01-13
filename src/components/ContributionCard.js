import React from 'react'
import './contributioncard.css'

export default function ContributionCard(props) {
  return (
    <>
        <div className="contribution-card">
            <img src={props.imgurl} alt="" className='contribution-img'/>
            <div className="contribution-name"><b>Artist Name:</b> {props.name}</div>
        </div>
    </>
  )
}
