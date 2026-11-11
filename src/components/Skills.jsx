import './Skills.css'
import CanvaIcon from '../assets/icons/canva-icon.png'
import CSSIcon from '../assets/icons/css-icon.jpg'
import FigmaIcon from '../assets/icons/figma-icon.png'
import GitIcon from '../assets/icons/git-icon.jpg'
import HTMLIcon from '../assets/icons/html-icon.jpg'
import JSIcon from '../assets/icons/js-icon.jpg'
import ReactIcon from '../assets/icons/react-icon.png'
export function Skills(){
  return(
    <div className='main'>
      <div className='skills-box'>
        SKILLS
      </div>
      <div className='actual-skills-box'>
        <p className='section'>
          <img src={CanvaIcon} className='icon'/>
          Canva
        </p>

        <p className='section'>
          <img src={CSSIcon} className='icon'/>
          CSS
        </p>

        <p className='section'>
          <img src={FigmaIcon} className='icon'/>
          Figma
        </p>

        <p className='section'>
          <img src={GitIcon} className='icon'/>
          Git
        </p>

        <p className='section'>
          <img src={HTMLIcon} className='icon'/>
          HTML
        </p>

        <p className='section'>
          <img src={JSIcon} className='icon'/>
          JavaScript
        </p>

        <p className='react-section'>
          <img src={ReactIcon} className='icon'/>
          React
        </p>
      </div>
    </div>
  )
}