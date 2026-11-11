import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Certifications } from './components/Certifications';
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <div className='featured-projects-certifications'>
        <FeaturedProjects />
        <Certifications />
      </div>
    </div>
  )
}

export default App;