import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <>
        <div className="navbar">
            <div className="left-navbar">
                Finearts NITH
            </div>
            <div className="right-navbar">
                    <a href='/'>Home</a>
                    <a href='/'>Gallery</a>
                    <a href='/'>Team</a>
                    <a href='/'>Contact</a>
            </div>
        </div>
    </>
  )
}
