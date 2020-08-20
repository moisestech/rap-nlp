import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../Uidev.css'

export default function NavHooks() {
  return (
    <ul className='nav-2'>
      <li className='button'>
        <NavLink
          className='link'
          to='/uidev/hooks/why-hooks'>
          Why Hooks
        </NavLink>
      </li>
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
      <li className='button'>
        <NavLink
          to='/uidev/hooks/useEffect'
          className='link'>
          Custom Hooks
        </NavLink>
      </li>
      <li className='button'>
        <NavLink
          to='/uidev/hooks/useEffect'
          className='link'>
          useReducer
        </NavLink>
      </li>
      <li className='button'>
        <NavLink
          to='/uidev/hooks/useEffect'
          className='link'>
          useRef
        </NavLink>
      </li>
      <li className='button'>
        <NavLink
          to='/uidev/hooks/useEffect'
          className='link'>
          Performance
        </NavLink>
      </li>
      <li className='button'>
        <NavLink
          to='/uidev/hooks/useEffect'
          className='link'>
          Project
        </NavLink>
      </li>
    </ul>
  )
}