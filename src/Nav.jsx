import './Nav.css'

function Nav() {
  return (
    <div className='navBar'>
      <ul className="nav-list">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#projects">My Projects</a></li>
        <li className="nav-item"><a href="#resume">My Resume</a></li>
        <li className="nav-item"><a href="https://github.com/amekhail733" target='_blank'>My GitHub</a></li>
      </ul>
    </div>
  )
}
export default Nav
