import React, { useEffect, useRef } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { NflCardImg } from '../../assets/images/about'
import { Title, Button, Text } from '../../UI'
import { CarouselItem } from '../../components'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import './about.scss'

function About() {
  gsap.registerPlugin(ScrollTrigger)

  const about = useRef(null)
  

  // useEffect( () => {
  //   const q = gsap.utils.selector(about)
  //   const trg = about.current

  //   console.dir(trg)
  //   console.log( q('.about__content') )

  //   gsap.to(
  //     q('.about-content'),
  //     {
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: trg,
  //         start: '50% center',
  //         end: '100% center',
  //         scrub: 0,
  //         markers: true,
  //       },
  //     }
  //   )
  // }, [])

  const arr = [
    {id:1, text: 'first', img: NflCardImg},
    {id:2, text: 'second', img: NflCardImg},
    {id:3, text: 'third', img: NflCardImg},
  ]


  return (
    <section ref={about} className='about'>
      {/* <div className="container"> */}
        <div className="about-content">
          <div className="about-content__item">
            <Title className="about-contet__item__title">the way</Title>
            <Carousel 
              showThumbs={false}
              stopOnHover={true}
              autoPlay={false}
              infiniteLoop={true}
              interval={4000} >
                {
                  arr.map( (item) => {
                    return <CarouselItem key={item.id} data={item}/>
                  })
                }

            </Carousel>
          </div>
          <div className="about-content__item">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante tellus, placerat lobortis sapien et, fermentum posuere tellus. Aliquam erat volutpat. Integer maximus nisl libero, eget imperdiet libero tempor ut. Donec massa mauris, imperdiet non ex sit amet, elementum tincidunt quam. Ut metus orci, porta vel congue ac, efficitur ac metus. Aliquam ut pharetra ex, sit amet tincidunt elit. Mauris fringilla velit et turpis luctus elementum. Etiam ultrices neque non nulla egestas luctus.</Text>
            <Button className='btn_thr btn_big' >Explore for more stories</Button>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}

export default About