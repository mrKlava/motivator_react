import React, { useEffect, useRef } from 'react'
import { Suptitle, Title, Button } from '../../UI'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import './sign.scss'

gsap.registerPlugin(ScrollTrigger)


function Sign() {
  // GSAP - START
  gsap.config({
    nullTargetWarn: false,
  })

  const signSection = useRef(null)
  const q = gsap.utils.selector(signSection)

  useEffect(() => {
    const trg = signSection.current
    let tl = gsap.timeline()

    tl
      .to(
        trg,
        { duration: 1, opacity: 1 }
      )
      .to(
        q('.sign-content'),
        { duration: 0.5, opacity: 1 }, 
        '-=1'
      )
      .fromTo(
        q('.sign-suptitle'),
        { duration: 2, x: '-100%' },
        { x: '0px' },
        '-=1'
      )
      .fromTo(
        q('.sign-title'),
        { duration: 2, x: '100%' },
        { x: '0px' },
        '-=1'
      )
      .fromTo(
        q('.sign-btn'),
        { duration: 2, opacity: 0 },
        { opacity: 1 },
        '-=1'
      )

    ScrollTrigger.create({
      animation: tl,
      trigger: trg,
      start: 'top 70%',
      end: 'bottom 70%',
      toggleActions: "play reverse play reverse",
      markers: true,
    })
  })


  // GSAP - END

  return (
    <section ref={signSection} className='sign'>
      <div className="sign-content">
        <Suptitle className='sign-content__suptitle sign-suptitle'>time to tell</Suptitle>
        <Title className='sign-content__title sign-title'>your story</Title>
        <Button className='sign-content__button btn_big sign-btn'>sign in</Button>
      </div>
    </section>
  )
}

export default Sign