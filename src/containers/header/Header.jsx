import React, { useEffect } from 'react'
import { BackImg, FirstImg, FrontImg, SecondImg, ThirdImg } from '../../assets/images/header'

import './header.scss'


const Header = React.forwardRef((props, ref) => {

  return (
    <header ref={ref} className='header'>
      <img id='header-bg' src={BackImg} alt="" />
      <img id='header-third' src={ThirdImg} alt="" />
      <img id='header-second' src={SecondImg} alt="" />
      <img id='header-first' src={FirstImg} alt="" />
      <img id='header-front' src={FrontImg} alt="" />
    </header>
  )
})

export default Header