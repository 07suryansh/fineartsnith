import './navbar.css';
import {NavLink} from "react-router-dom";

export default function Navbar() {
  
  return (
    <>
      <div className={"navbar"}>
        <div className="left-navbar">Finearts NITH</div>
        <div className="right-navbar">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/gallery'>Gallery</NavLink>
          <NavLink to='/contributions'>Contributions</NavLink>
          <NavLink to='/team'>Team</NavLink>
        </div>
      </div>
    </>
  );
}
