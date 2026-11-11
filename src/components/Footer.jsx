import './Footer.css'
import Stars from '../assets/stars.png'
export function Footer(){
  return(
    <div className='main-footer'>
      <img src={Stars} className="stars" />
    </div>
  )
}