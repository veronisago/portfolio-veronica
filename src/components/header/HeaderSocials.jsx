import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank' rel="noreferrer noopener" ><BsLinkedin/></a>
        <a href="https://github.com" target='_blank' rel="noreferrer noopener"><FaGithub/></a>
        <a href="https://dribbble.com" target='_blank' rel="noreferrer noopener"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials