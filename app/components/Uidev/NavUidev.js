import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Uidev.css'

export default function NavUidev() {
  return (
    <ul className='nav'>
      <li className='button'>
        <NavLink
          className='link'
          to='/uidev/modern-js'>
          Modern Javascript
        </NavLink>
      </li>
      <li className='button'>
        <NavLink
          to='/uidev/adv-js'
          className='link'>
          Advanced Javascript
        </NavLink>
      </li>
      <li className='button'>
        <NavLink
          to='/uidev/react'
          className='link'>
          React
        </NavLink>
      </li>
      <li className='button'>
        <NavLink
          to='/uidev/react-router'
          className='link'>
          React Router
        </NavLink>
      </li>
      <li className='button'>
        <NavLink
          to='/uidev/hooks/'
          className='link'>
          Hooks
        </NavLink>
      </li>
      <li className='button'>
        <NavLink
          to='/uidev/redux'
          className='link'>
          Redux
        </NavLink>
      </li>
    </ul>
  )
}