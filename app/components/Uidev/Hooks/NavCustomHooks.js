import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../Uidev.css'

export default function NavCustomHooks() {
  return (
    <div className='nav-2'>
      <ul>
        <li className='button'>
          <NavLink
            className='link'
            to='/uidev/hooks/useEffect/char-limit'>
            Quiz Rules of Hooks
          </NavLink>
        </li>
        <li className='button'>
          <NavLink
            className='link'
            to='/uidev/hooks/useEffect/char-limit'>
            Quiz Higher-order Components
          </NavLink>
        </li>
        <li className='button'>
          <NavLink
            className='link'
            to='/uidev/hooks/useEffect/char-limit'>
            Quiz React Render Props
          </NavLink>
        </li>
        <li className='button'>
          <NavLink
            to='/uidev/hooks/useEffect/wait-delay'
            className='link'>
            Quiz Custom Hooks
          </NavLink>
        </li>
        <li className='button'>
          <NavLink
            to='/uidev/hooks/useEffect/api-request'
            className='link'>
            useWait
          </NavLink>
        </li>
        <li className='button'>
          <NavLink
            to='/uidev/hooks/useEffect/api-request'
            className='link'>
            useWindowDimensions
          </NavLink>
        </li>
        <li className='button'>
          <NavLink
            to='/uidev/hooks/useEffect/api-request'
            className='link'>
            useFetch
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
