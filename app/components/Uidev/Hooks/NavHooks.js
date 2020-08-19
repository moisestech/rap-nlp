import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../Uidev.css'

export default function NavHooks() {
  return (
    <ul className='nav-2'>
      <li className='button'>
        <NavLink
          className='link'
          to='/uidev/hooks/useState'>
          useState
        </NavLink>
      </li>
      <li className='button'>
        <NavLink
          to='/uidev/hooks/useEffect'
          className='link'>
          useEffect
        </NavLink>
      </li>
    </ul>
  )
}