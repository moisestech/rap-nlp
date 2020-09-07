import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../Uidev.css'

export default function NavUseEffect() {
  return (
    <div className='nav-2'>
      <ul>
        <li className='button'>
          <NavLink
            className='link'
            to='/uidev/hooks/useEffect/char-limit'>
            Quiz Execution Context
          </NavLink>
        </li>
        <li className='button'>
          <NavLink
            className='link'
            to='/uidev/hooks/useEffect/char-limit'>
            Quiz useEffect
          </NavLink>
        </li>
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
    </div>
  )
}