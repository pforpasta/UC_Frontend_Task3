import './FeaturedProjects.css'

export function FeaturedProjects() {
  return(
    <div className='main-featured-projects'>
      <div className='heading'>
          FEATURED PROJECTS
          <button className='click-left-button'>&#60;</button>
          <button className='click-right-button'>&#62;</button>
      </div>

      <div className='project-box'>
        <div className='project-image'>

        </div>
        <div className='project-about'>
          <p className='project-about-header'>StudyFlow</p>
          <p className='project-about-body'>
            StudyFlow, a single-page productivity dashboard designed to help students organize, manage
            and track their academic tasks in one place.
          </p>
          <p className='project-about-languages'>
            <div>
              <span className='language-start'>HTML</span>
              <span className='language'>CSS</span>
              <span className='language-end'>JavaScript</span>
            </div>
            <button className='view-details-button'>View Details</button>
          </p>
        </div>
      </div>
    </div>
  )
}