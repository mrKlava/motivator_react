import React, { useEffect, useRef } from 'react'
import { BackImg, FirstImg, FrontImg, SecondImg, ThirdImg } from '../../assets/images/header'
// import { Navbar } from '../../components'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import './header.scss'


function Header() {
  gsap.registerPlugin(ScrollTrigger)

  // Ref for header and selecto
  const header = useRef(null)
  const q = gsap.utils.selector(header)
  
  useEffect(() => {
  const trg = header.current

    gsap.to(
      q('#header-bg'),
      {
        y: '50vh',
        scrollTrigger: {
          trigger: trg,
          start: '0 top',
          end: '100% top',
          scrub: 0,
        },
      }
    )
    gsap.to(
      q('#header-third'),
      {
        y: '60vh',
        scrollTrigger: {
          trigger: trg,
          start: '0 top',
          end: '100% top',
          scrub: 0,
        },
      }
    )
    gsap.to(
      q('#header-second'),
      {
        y: '50vh',
        scrollTrigger: {
          trigger: trg,
          start: '0 top',
          end: '100% top',
          scrub: 0,
        },
      }
    )
    gsap.to(
      q('#header-first'),
      {
        y: '35vh',
        scrollTrigger: {
          trigger: trg,
          start: '0 top',
          end: '100% top',
          scrub: 0,
        },
      }
    )
    
  }, [])

  return (
    <header ref={header} className='header'>
      <img id='header-bg' src={BackImg} alt="" />
      <img id='header-third' src={ThirdImg} alt="" />
      <img id='header-second' src={SecondImg} alt="" />
      <img id='header-first' src={FirstImg} alt="" />
      <img id='header-front' src={FrontImg} alt="" />
    </header>
  )
}

export default Header