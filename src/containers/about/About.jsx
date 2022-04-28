import React, { useEffect, useRef } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { NflCardImg } from '../../assets/images/about'
import { Title, Button, Text } from '../../UI'
import { CarouselItem } from '../../components'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import './about.scss'

gsap.registerPlugin(ScrollTrigger)


function About() {

  const arr = [
    { id: 1, text: 'first', img: NflCardImg },
    { id: 2, text: 'second', img: NflCardImg },
    { id: 3, text: 'third', img: NflCardImg },
  ]

  // GSAP - START
  gsap.config({
    nullTargetWarn: false,
  })

  const aboutSection = useRef(null)
  const q = gsap.utils.selector(aboutSection)

  useEffect(() => {
    const trg = aboutSection.current
    let tl = gsap.timeline()

    tl
      .to(
        q('.about-content'),
        { duration: 1, opacity: 1 }
      )
      .fromTo(
        q('.about-content__item__title'),
        { duration: 2, x: '300px' },
        { x: '0px' },
        '-=1'
      )
      .fromTo(
        q('.about-carousel'),
        { duration: 2, x: '-100%' },
        { x: '0px' },
        '-=1'
      )
      .fromTo(
        q('.about-text'),
        { duration: 2, x: '100%' },
        { x: '0px' },
        '-=1'
      )

    ScrollTrigger.create({
      animation: tl,
      trigger: trg,
      start: '30% center',
      end: '90% center',
      toggleActions: "play reverse play reverse",
      markers: true,
    })
  }, [])

  // GSAP - END

  return (
    <section ref={aboutSection} className='about'>
      {/* <div className="container"> */}
      <div className='about-content'>
        <div className='about-content__item about-carousel'>
          <Title className='about-content__item__title'>the way</Title>
          <Carousel
            showThumbs={false}
            stopOnHover={true}
            autoPlay={false}
            infiniteLoop={true}
            interval={4000} >
            {
              arr.map((item) => {
                return <CarouselItem key={item.id} data={item} />
              })
            }
          </Carousel>
        </div>
        <div className='about-content__item about-text'>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante tellus, placerat lobortis sapien et, fermentum posuere tellus. Aliquam erat volutpat. Integer maximus nisl libero, eget imperdiet libero tempor ut. Donec massa mauris, imperdiet non ex sit amet, elementum tincidunt quam. Ut metus orci, porta vel congue ac, efficitur ac metus. Aliquam ut pharetra ex, sit amet tincidunt elit. Mauris fringilla velit et turpis luctus elementum. Etiam ultrices neque non nulla egestas luctus.</Text>
          <Button className='btn_thr btn_big'>Explore for more stories</Button>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}

export default About