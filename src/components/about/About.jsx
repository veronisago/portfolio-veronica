import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
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
              <small>looking for my first work experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>become my first customer!</small>
            </article>

            <article className='about__card'>
              <FiFolder className='about__icon' />
              <h5>Projects</h5>
              <small>4 personal projects completed</small>
            </article>
          </div>
          <p>
          Currently I am dedicated to the design and programming of web applications,
          from the client side (Front-end, UX / UI) and server side (Back-end). 
          I am a professional with a high degree of responsibility, teamwork 
          and self-taught, with a desire to contribute with my knowledge and 
          skills while I continue learning and achieving my professional goals.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About