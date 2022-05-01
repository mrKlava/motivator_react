import React, { useEffect } from 'react'
import { BackImg, FirstImg, FrontImg, SecondImg, ThirdImg } from '../../assets/images/header'

import './header.scss'


const Header = React.forwardRef((props, ref) => {

  return (
    <header ref={ref} className='header'>
      <div className='parallax' data-depth='0.30' id='header-bg'></div>
      <div className='parallax' data-depth='0.50' id='header-third'></div>
      <div className='parallax' data-depth='0.60' id='header-second'></div>
      <div className='parallax' data-depth='1.00' id='header-first'></div>
      <div className='parallax' data-depth='0' id='header-front'></div>
    </header>
  )
})

export default Header