import React from 'react'
import { Link } from 'react-router-dom'
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
              <Button className='btn_contr btn_thr'>EN</Button>
            </li>
            <li className="navbar-inner-menu__item">
              <Link to='/sign-in'>
                <Button className='btn_contr'>sign in</Button>
              </Link>
            </li>
            <li className="navbar-inner-menu__item">
              <Link to='/explore'>
                <Button className='btn_contr btn_sec'>explore</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar