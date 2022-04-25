import React from 'react'
import { Button } from '../../UI'

import './navbar.scss'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="container">
        <div className="navbar-inner">
          <div className="navbar-inner-logo"></div>
          <ul className="navbar-inner-menu">
            <li className="navbar-inner-menu__item">
              <Button className='btn btn_contr btn_thr'>EN</Button>
            </li>
            <li className="navbar-inner-menu__item">
              <Button className='btn btn_contr'>sign in</Button>
            </li>
            <li className="navbar-inner-menu__item">
              <Button className='btn btn_contr btn_sec'>explore</Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar