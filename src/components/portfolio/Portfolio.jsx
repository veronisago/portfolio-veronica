import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/vero-project.png'
import IMG2 from '../../assets/vero-project2.png'
import IMG3 from '../../assets/vero-project3.png'
import IMG4 from '../../assets/portfolio1.jpg'
import IMG5 from '../../assets/portfolio2.jpg'
import IMG6 from '../../assets/portfolio3.jpg'
import IMG7 from '../../assets/portfolio4.jpg'
import IMG8 from '../../assets/portfolio5.png'
import IMG9 from '../../assets/portfolio6.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: [IMG1, IMG4, IMG7],
    title: 'Movies App',
    github: 'https://github.com/veronisago/Movies-project',
    demo: 'https://github.com/veronisago'
  },
  {
    id: 2,
    image: [IMG2, IMG5, IMG8],
    title: 'Dogs App',
    github: 'https://github.com/veronisago/PI-Dogs-main',
    demo: 'https://github.com/veronisago'
  },
  {
    id: 3,
    image: [IMG3, IMG6, IMG9],
    title: 'Ecotourism App, Ecommerce Project',
    github: 'https://github.com/veronisago/PF-IncaAdventure',
    demo: 'https://github.com/veronisago'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image[0]} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer noopener">Github</a>
                  <a href={demo} target='_blank' className='btn btn-primary' rel="noreferrer noopener">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio