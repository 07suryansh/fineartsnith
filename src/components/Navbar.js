import './navbar.css';

export default function Navbar() {
  

  return (
    <>
      <div className={"navbar"}>
        <div className="left-navbar">Finearts NITH</div>
        <div className="right-navbar">
          <a href='/'>Home</a>
          <a href='/gallery'>Gallery</a>
          <a href='/team'>Team</a>
          <a href='/contact'>Contact</a>
        </div>
      </div>
    </>
  );
}
