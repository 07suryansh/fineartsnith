import './navbar.css';
import React,{ useState } from "react";
import {NavLink} from "react-router-dom";

export default function Navbar() {

  const [burger_class,setBurgerClass]=useState("burger-bar unclicked");
  const [menu_class,setMenuClass]=useState("right-navbar hidden");
  const [isMenuClicked,setIsMenuClicked]=useState(false);

  const updateMenu=()=>{
    if(!isMenuClicked){
      setBurgerClass("burger-bar clicked");
      setMenuClass("right-navbar visible")
    }
    else{
      setBurgerClass("burger-bar unclicked");
      setMenuClass("right-navbar hidden")
    }
    setIsMenuClicked(!isMenuClicked);
  }
  // right-navbar
  return (
    <>
      <div className="navbar">
        <div className="left-navbar">Finearts NITH</div>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
        </div>
        <div className={menu_class}>
          <NavLink to='/' onClick={updateMenu}>Home</NavLink>
          <NavLink to='/gallery' onClick={updateMenu}>Gallery</NavLink>
          <NavLink to='/contributions' onClick={updateMenu}>Contributions</NavLink>
          <NavLink to='/team' onClick={updateMenu}>Team</NavLink>
        </div>
      </div>
    </>
  );
}
