import './ContactMe.css'
import LinkedIn from '../assets/logos/linkedin-logo.jpg'
import Git from '../assets/logos/git-logo.jpg'
import Instagram from '../assets/logos/instagram-logo.jpg'

export function ContactMe() {
  return(
    <div className='main-contactme'>
      <div className='contactme-left'>
        <p className='contactme-header'>LET'S BUILD SOMETHING AMAZING TOGETHER</p>
        <p className='group-together'>
          <input type="text" className='name-input' placeholder='NAME'/>
          <input type="text" className='email-input' placeholder='EMAIL'/>
        </p>
        <input type="text" className='message-input' placeholder='MESSAGE'/>
        <button className='contactme-button'>GET IN TOUCH!</button>
      </div>

      <div className='contactme-right'>
        <div className='logos-box'>
          <a href="https://www.instagram.com/sssobiaaaaa/?__d=dist" target='blank'>
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://github.com/pforpasta" target='blank'>
            <img src={Git} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/sssobiaaaaa/?__d=dist" target='blank'>
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  )
}