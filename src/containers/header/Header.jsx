import React, { useEffect, useRef } from 'react'
import { BackImg, FirstImg, FrontImg, SecondImg, ThirdImg } from '../../assets/images/header'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import './header.scss'

gsap.registerPlugin(ScrollTrigger)


function Header() {
  // GSAP - START

  const headerSection = useRef(null)
  const q = gsap.utils.selector(headerSection)

  useEffect(() => {
    const trg = headerSection.current
    let tl = gsap.timeline()

    tl
      .to(q('#header-bg'), 5, { y: '50vh'}, '-=5')
      .to(q('#header-third'), 5, { y: '60vh' }, '-=5')
      .to(q('#header-second'), 5, { y: '50vh' }, '-=5')
      .to(q('#header-first'), 5, { y: '35vh' }, '-=5')

    ScrollTrigger.create({
      animation: tl,
      trigger: trg,
      start: '0 top',
      end: '100% top',
      markers: true,
      scrub: 0,
    })
  }, [])
  // GSAP - END

  return (
    <header ref={headerSection} className='header'>
      <img id='header-bg' src={BackImg} alt="" />
      <img id='header-third' src={ThirdImg} alt="" />
      <img id='header-second' src={SecondImg} alt="" />
      <img id='header-first' src={FirstImg} alt="" />
      <img id='header-front' src={FrontImg} alt="" />
    </header>
  )
}

export default Header