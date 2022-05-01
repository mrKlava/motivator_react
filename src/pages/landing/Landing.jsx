import React, { useState, useRef, useEffect } from 'react'
import { About, Header, Sign, Footer } from '../../containers'
import { Navbar } from '../../components'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import './landing.scss'

gsap.registerPlugin(ScrollTrigger)



function Landing() {

  // GSAP - START
  gsap.config({
    nullTargetWarn: false,
  })

  const headerSection = useRef(null)
  const aboutSection = useRef(null)
  const signSection = useRef(null)

  useEffect(() => {
    /* Header section */
    const selHeader = gsap.utils.selector(headerSection)

    const header = headerSection.current

    let tlHeader = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: "top top",
        end: "bottom top",
        scrub: 0,
        markers: true,
      }
    })

    gsap.utils.toArray(".parallax").forEach(layer => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth)
      console.log(depth)
      console.log(movement)
      tlHeader.to(layer, {y: movement, ease: "none"}, 0)
    });

    /* About section */
    const selAbout = gsap.utils.selector(aboutSection)

    const about = aboutSection.current
    let tlAbout = gsap.timeline()

    tlAbout
      .to(
        selAbout('.about-content'),
        { duration: 1, opacity: 1 }
      )
      .fromTo(
        selAbout('.about-content__item__title'),
        { duration: 2, x: '300px' },
        { x: '0px' },
        '-=1'
      )
      .fromTo(
        selAbout('.about-carousel'),
        { duration: 2, x: '-100%' },
        { x: '0px' },
        '-=1'
      )
      .fromTo(
        selAbout('.about-text'),
        { duration: 2, x: '100%' },
        { x: '0px' },
        '-=1'
      )

    ScrollTrigger.create({
      animation: tlAbout,
      trigger: about,
      start: '30% 70%',
      end: '90% 70%',
      toggleActions: "play reverse play reverse",
      markers: true,
    })


    /* Sign Section */
    const selSign = gsap.utils.selector(signSection)

    const sign = signSection.current
    let tlSign = gsap.timeline()

    tlSign
      .to(
        selSign('.sign-content'),
        { duration: 1, opacity: 1 }
      )
      .fromTo(
        selSign('.sign-suptitle'),
        { duration: 2, x: '-100%' },
        { x: '0px' },
        '-=1'
      )
      .fromTo(
        selSign('.sign-title'),
        { duration: 2, x: '100%' },
        { x: '0px' },
        '-=1'
      )
      .fromTo(
        selSign('.sign-btn'),
        { duration: 2, opacity: 0 },
        { opacity: 1 },
        '-=1'
      )

    ScrollTrigger.create({
      animation: tlSign,
      trigger: sign,
      start: 'top 70%',
      end: 'bottom 70%',
      toggleActions: "play reverse play reverse",
      markers: true,
    })
  }, [])

  
  
  // const [width, setWidth] = useState(window.innerWidth)
  // const [height, setHeight] = useState(window.innerHeight)
  
  // useEffect(() => {
  //   ScrollTrigger.update()
  // }, [width])

  // useEffect(() => {
  //   updateDimensions()
  //   window.addEventListener("resize", updateDimensions)
  //   // console.log(`Width: ${width}`)
  //   // console.log(`Height: ${height}`)

  //   return () => window.removeEventListener("resize", updateDimensions)
  // })

  // const updateDimensions = () => {
  //   const width = window.innerWidth
  //   const height = width.innerHeight
  //   setWidth(width)
  //   setHeight(height)
  // }


  // useEffect( () => {
  //   const header = headerSection.current
  //   const about = aboutSection.current
  //   const sign = signSection.current

  //   console.dir(`Header ${header.scrollHeight}`)
  //   console.dir(`About ${about.scrollHeight}`)
  //   console.dir(`Sign ${sign.scrollHeight}`)

  // }, [width])



  // GSAP - END

  return (
    <>
      <Navbar />
      <Header ref={headerSection} />
      <About ref={aboutSection} />
      <Sign ref={signSection} />
      <Footer />
    </>
  )
}

export default Landing