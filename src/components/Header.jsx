import './Header.css'

export function Header() {
    return(
        <div className='header-bar'>
          <div className ='portfolio'>
            PORTFOLIO
          </div>
          <div className = 'main-header'>
            <p>ABOUT ME</p>
            <p>SKILLS</p>
            <p>PROJECT</p>
            <p>ACHIEVEMENTS</p>
          </div>
          <div className='contact-me'>
            CONTACT ME
          </div>
        </div>
    )
}