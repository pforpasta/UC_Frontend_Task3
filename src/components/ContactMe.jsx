import './ContactMe.css'
import LinkedIn from '../assets/logos/linkedin-logo.jpg'
import Git from '../assets/logos/git-logo.jpg'
import Instagram from '../assets/logos/instagram-logo.jpg'
import { useState } from 'react'

export function ContactMe() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [numberError, setNumberError] = useState(' ');
  const [emailError, setEmailError] = useState(' ');

  function saveInputName(event) {
    const containsNumber = /\d/.test(event.target.value);
    if(event.target.value && containsNumber){
      setNumberError('Name cannot have number.');
    }
    setInputName(event.target.value)
  }

  function saveInputEmail(event) {
    const containsAt = /@/.test(event.target.value);
    if(event.target.value && !(containsAt)){
      setEmailError('Email needs to have @.');
    }
    setInputEmail(event.target.value);
  }

  function saveInputMessage(event) {
    setInputMessage(event.target.value);
  }

  function sendMessage() {
    console.log('Name: '+inputName);
    console.log('Email: '+inputEmail);
    console.log('Message: '+inputMessage);
    setInputName('');
    setInputEmail('');
    setInputMessage('');
    setNumberError(' ');
    setEmailError(' ');
  }

  return(
    <div className='main-contactme'>
      <div className='contactme-left'>
        <p className='contactme-header'>LET'S BUILD SOMETHING AMAZING TOGETHER</p>
        <p className='group-together'>

          <div className='span-and-input'>
            <span className='error-text'>{numberError}</span>
            <input 
              type="text" 
              className='name-input' 
              placeholder='NAME'
              onChange={saveInputName}
              value={inputName}
            />
          </div>
          
          <div className='span-and-input'>
            <span className='error-text'>{emailError}</span>
            <input 
              type="text" 
              className='email-input' 
              placeholder='EMAIL'
              onChange={saveInputEmail}
              value={inputEmail}
            />
          </div>
        </p>

        <input 
          type="text" 
          className='message-input' 
          placeholder='MESSAGE'
          onChange={saveInputMessage}
          value={inputMessage}
        />
        
        <button className='contactme-button' onClick={sendMessage}>GET IN TOUCH!</button>
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