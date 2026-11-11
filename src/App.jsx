import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { ContactMe } from './components/ContactMe';
import { Footer } from './components/Footer';
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <section id='aboutme'><AboutMe /></section>
      <section id='skills'><Skills /></section>

      <div className='featured-projects-certifications'>
        <section id='featuredprojects'><FeaturedProjects /></section>
        <section id='certifications'><Certifications /></section>
      </div>

      <div className='achievements-contact-me'>
        <section id='achievements'><Achievements /></section>
        <section id='contactme'><ContactMe /></section>
      </div>

      <section><Footer /></section>

    </div>
  )
}

export default App;