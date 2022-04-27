import React from 'react'
import { Suptitle, Title, Button } from '../../UI'

import './sign.scss'

function Sign() {
  return (
    <section className='sign'>
      <div className="sign-content">
        <Suptitle className='sign-content__suptitle'>time to tell</Suptitle>
        <Title className='sign-content__title'>your story</Title>
        <Button className='sign-content__button btn_big'>sign in</Button>
      </div>
    </section>
  )
}

export default Sign