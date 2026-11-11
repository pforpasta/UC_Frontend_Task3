import './Header.css'

export function Header() {
    return(
        <div className='header-bar'>
          <div className ='portfolio'>
            &#60;/&#62; PORTFOLIO
          </div>
          <div className = 'main-header'>
            <p><li className='list-link'><a href="#aboutme" className="a-link">ABOUT ME</a></li></p>
            <p><li className='list-link'><a href="#skills" className="a-link">SKILLS</a></li></p>
            <p><li className='list-link'><a href="#featuredprojects" className="a-link">PROJECTS</a></li></p>
            <p><li className='list-link'><a href="#achievements" className="a-link">ACHIEVEMENTS</a></li></p>
          </div>
          <div className='contact-me'>
            <li className='list-link'><a href="#contactme" className="a-link">CONTACT ME</a></li>
          </div>
        </div>
    )
}