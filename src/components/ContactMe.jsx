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
          <img src={LinkedIn} alt="" />
          <img src={Git} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
    </div>
  )
}