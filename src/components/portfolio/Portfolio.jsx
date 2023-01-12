import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/vero-project.png'
import IMG2 from '../../assets/vero-project2.png'
import IMG3 from '../../assets/vero-project3.png'
import IMG4 from '../../assets/movie-2.png'
import IMG5 from '../../assets/dogs-2.png'
import IMG6 from '../../assets/inca-2.png'
import IMG7 from '../../assets/movie-3.png'
import IMG8 from '../../assets/dogs-3.png'
import IMG9 from '../../assets/inca-3.png'

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
    image: [IMG8, IMG5, IMG2],
    title: 'Dogs App',
    github: 'https://github.com/veronisago/PI-Dogs-main',
    demo: 'https://github.com/veronisago'
  },
  {
    id: 3,
    image: [IMG3, IMG6, IMG9],
    title: 'Ecotourism App, Ecommerce Project',
    github: 'https://github.com/veronisago/PF-IncaAdventure',
    demo: 'https://pf-inca-adventure.vercel.app/home'
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
                  <Swiper
                    className="portfolio__item-swiper"
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                  >
                    {image.map((e, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <img className='img-border' src={e} alt={title} />
                        </SwiperSlide>
                      )
                    })}
                  </Swiper> 
                  {/* <img src={image[0]} alt={title} /> */}
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