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
import IMG10 from '../../assets/erco1.png'
import IMG11 from '../../assets/erco2.png'
import IMG12 from '../../assets/erco3.png'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 3,
    image: [IMG3, IMG6, IMG9],
    title: 'Ecotourism App, Ecommerce Project',
    github: 'https://github.com/veronisago/PF-IncaAdventure',
    demo: 'https://pf-inca-adventure.vercel.app/',
    text: 'Academic project.'
  },
  {
    id: 2,
    image: [IMG8, IMG5, IMG2],
    title: 'Dogs App',
    github: 'https://github.com/veronisago/PI-Dogs-main',
    demo: 'https://pi-dogs-main-plum.vercel.app/',
    text: 'Academic project.'
  },
  // {
  //   id: 1,
  //   image: [IMG1, IMG4, IMG7],
  //   title: 'Movies App',
  //   github: 'https://github.com/veronisago/Movies-project',
  // },
  {
    id: 4,
    image: [IMG10, IMG11, IMG12],
    title: 'Erco Website',
    github: 'https://erco.energy/co?slugs=co',
    text: 'Professional project.'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'className='container-big'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo, text }) => {
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
                <small>{text}</small>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer noopener">{title === 'Erco Website'? 'Link': 'Github'}</a>
                  { demo && <a href={demo} target='_blank' className='btn btn-primary' rel="noreferrer noopener">Live Demo</a>}
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