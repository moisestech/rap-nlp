import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../Uidev.css'

export default function NavUseState() {
  return (
    <ul className='nav-3'>
      <li className='button'>
        <NavLink
          className='link'
          to='/uidev/hooks/useState/char-limit'>
          UseState 1
        </NavLink>
      </li>
      <li className='button'>
        <NavLink
          to='/uidev/hooks/useState/wait-delay'
          className='link'>
          UseState 2
        </NavLink>
      </li>
      <li className='button'>
        <NavLink
          to='/uidev/hooks/useState/api-request'
          className='link'>
          UseState 3
        </NavLink>
      </li>
    </ul>
  )
}