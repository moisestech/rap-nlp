import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../Uidev.css'

export default function NavUseEffect() {
  return (
    <ul className='nav-3'>
      <li className='button'>
        <NavLink
          className='link'
          to='/uidev/hooks/useEffect/char-limit'>
          Character Limit
        </NavLink>
      </li>
      <li className='button'>
        <NavLink
          to='/uidev/hooks/useEffect/wait-delay'
          className='link'>
          Wait Delay
        </NavLink>
      </li>
      <li className='button'>
        <NavLink
          to='/uidev/hooks/useEffect/api-request'
          className='link'>
          API Request
        </NavLink>
      </li>
    </ul>
  )
}