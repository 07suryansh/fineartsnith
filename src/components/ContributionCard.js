import React from 'react'
import './contributioncard.css'

export default function ContributionCard(props) {
  return (
    <>
        <div className="contribution-card">
            <img src={props.imgurl} alt="" className='contribution-img'/>
            <div className="contribution-name"><b>Name:</b> {props.name}</div>
            <div className="contribution-type"><b>Art Type:</b> {props.type}</div>
        </div>
    </>
  )
}
