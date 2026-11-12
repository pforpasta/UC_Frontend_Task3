import './Project.css'

export function Project({project}) {
  return (
    <div className='project-box'>
      <div className='project-image'>

      </div>
      <div className='project-about'>
        <p className='project-about-header'>{project.header}</p>
        <p className='project-about-body'>{project.body}</p>
        <p className='project-about-languages'>
        <div className='languages-container'> 
        {
          project.languages.map((language) => (
          <span className='language'>{language}</span>
          ))
        }
        </div>
        <a href={project.linkedin} target='blank'>
          <button className='view-details-button' >View Details</button>
        </a>
        </p>
      </div>
    </div>
  )
}