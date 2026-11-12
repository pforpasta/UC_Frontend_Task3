import './FeaturedProjects.css'
import { Project } from './Project.jsx'
import { useState } from 'react'
import studyFlow from '../assets/studyflow-image.png'

export function FeaturedProjects() {
  const [index, setIndex] = useState(0);

  const projects = [{
    header: 'StudyFlow',
    body: 'StudyFlow, a single-page productivity dashboard designed to help students organize, manage and track their academic tasks in one place.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    linkedin: 'https://github.com/pforpasta/Sobia-Frontend-UC-Interview',
    img: studyFlow
  }, {
    header: 'CoffeeCafe',
    body: 'blah blah', 
    languages: ['HTML', 'Python'],
    linkedin: 'https://github.com/pforpasta/Sobia-Frontend-UC-Interview',
    img: studyFlow
  }, {
    header: 'CatGPT',
    body: 'blah blah blah blah blah blah blah blah blah blah', 
    languages: ['React', 'TailwindCSS', 'Javascript', 'CSS'],
    linkedin: 'https://github.com/pforpasta/Sobia-Frontend-UC-Interview',
    img: studyFlow
  }];

  const number = projects.length;

  function left() {
    setIndex((index) => (index === 0 ? number - 1 : index - 1))
  };

  function right() {
    setIndex((index) => (index === number - 1 ? 0 : index + 1))
  };

  return(
    <div className='main-featured-projects'>
      <div className='heading'>
          FEATURED PROJECTS
          <button className='click-left-button' onClick={left}>&#60;</button>
          <button className='click-right-button' onClick={right}>&#62;</button>
      </div>

        <Project 
          project = {projects[index]}
        />
      
    </div>
  )
}