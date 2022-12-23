import React from 'react'
import './about.css'
import ME from '../../assets/me-remove.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers, FiFolder } from 'react-icons/fi'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Woldwide</small>
            </article>

            <article className='about__card'>
              <FiFolder className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dolore 
            quisquam veniam doloremque tenetur aliquam, quis deleniti similique 
            alias earum! Repellendus aliquid, reiciendis veritatis nobis modi 
            delectus eos esse architecto.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About