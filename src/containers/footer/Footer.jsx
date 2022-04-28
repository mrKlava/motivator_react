import React from 'react'
import { Text } from '../../UI'

import './footer.scss'


function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <Text className='footer-content__text'>created by</Text>
        <a className='footer-content__link' href="https://github.com/mrKlava" target='_blank'>mr.klava</a>
      </div>
    </footer>
  )
}

export default Footer