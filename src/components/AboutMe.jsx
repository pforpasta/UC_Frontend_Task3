import './AboutMe.css'
import UserImage from '../assets/user-image.jpeg'
export function AboutMe(){
  return(
    <div className='main'>
      <div className='aboutme-left'>
        hello
      </div>
      <div className='aboutme-right'>
        <div className='green-box' />
        <img src={UserImage} className='user-image'/>
        <div className='aboutme-content'>

          <p><span color='#c792ea' className='color-pastel-lavender'>const</span> 
            <span color='#ff5370' className='color-vivid-crimson'> AboutMe </span> 
            <span color='#ff914d'>= &#123;</span>
          </p> 

            <p className='tab-one'> 
              <span color='#82aaff' className='color-pastel-blue'>age</span>
              <span color='#ff914d' className='color-orange'>: </span>
              <span color='#f78c6c' className='color-vivid-orange'>18</span>
              <span color='#ff914d' className='color-orange'>,</span>
            </p> 

            <p className='tab-one'> 
              <span color='#82aaff' className='color-pastel-blue'>pet</span>
              <span color='#ff914d' className='color-orange'>: </span>
              <span color='#c3e88d' className='color-pastel-green'>'cat'</span>
              <span color='#ff914d' className='color-orange'>,</span>
            </p>

            <p className='tab-one'> 
              <span color='#82aaff' className='color-pastel-blue'>hobbies</span>
              <span color='#ff914d' className='color-orange'>: </span>
              <span color='#ff914d' className='color-orange'>&#91;</span>
              <span color='#c3e88d' className='color-pastel-green'>'reading'</span>
              <span color='#ff914d' className='color-orange'>,</span>
            </p>  
              
                <p className='tab-two'>
                  <span color='#c3e88d' className='color-pastel-green'>'running'</span>
                  <span color='#ff914d' className='color-orange'>,</span>
                </p> 

                <p className='tab-two'>
                  <span color='#c3e88d' className='color-pastel-green'>'watching movies'</span>
                  <span color='#ff914d' className='color-orange'>,</span>
                </p> 
              
            <p className='tab-two'>
              <span color='#ff914d' className='color-orange'>&#93;</span>
            </p> 

          <p color='#ff914d' className='color-orange'>&#125;;</p> 

        </div>
      </div>
    </div>
  )
}