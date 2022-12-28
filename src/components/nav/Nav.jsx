import React from 'react'
import './nav.css'
import {BiHome, BiUser, BiBook, BiMessageDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineFileSearch} from 'react-icons/ai'
import { useState } from 'react'



const Nav = () => {

const [active, setActive] = useState('#')

  return (
  <nav>
    <a href="#" onClick={()=> setActive('#')} className={active === '#' ? 'active' : ''}><BiHome/></a>
    <a href="#about" onClick={()=> setActive('#about')} className={active === '#about' ? 'active' : ''}><BiUser/></a>
    <a href="#experience" onClick={()=> setActive('#experience')} className={active === '#experience' ? 'active' : ''}><AiOutlineFileSearch/></a>
    <a href="#portfolio" onClick={()=> setActive('#portfolio')} className={active === '#portfolio' ? 'active' : ''}><BiBook/></a>
    {/* <a href="#services"  onClick={()=> setActive('#services')} className={active === '#services' ? 'active' : ''}><RiServiceLine/></a> */}
    <a href="#contact" onClick={()=> setActive('#contact')} className={active === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
  </nav>
  )
}

export default Nav