import React from 'react'
import { Suptitle, Title, Button } from '../../UI'

import './sign.scss'


const Sign =React.forwardRef((props, ref) => {

  return (
    <section ref={ref} className='sign'>
      <div className="sign-content">
        <Suptitle className='sign-content__suptitle sign-suptitle'>time to tell</Suptitle>
        <Title className='sign-content__title sign-title'>your story</Title>
        <Button className='sign-content__button btn_big sign-btn'>sign in</Button>
      </div>
    </section>
  )
})

export default Sign