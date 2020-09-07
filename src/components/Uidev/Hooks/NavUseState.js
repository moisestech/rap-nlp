import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../Uidev.css'

export default function NavUseState() {
  return (
    <div className='nav-3'>
      <ul>
        <li className='button'>
          <NavLink
            className='link quiz'
            to='/uidev/hooks/useState/char-limit'>
            Quiz useEffect
          </NavLink>
        </li>
        <li className='button'>
          <NavLink
            to='/uidev/hooks/useState/wait-delay'
            className='link'>
            Theme
          </NavLink>
        </li>
        <li className='button'>
          <NavLink
            to='/uidev/hooks/useState/api-request'
            className='link'>
            Todos
          </NavLink>
        </li>
        <li className='button'>
          <NavLink
            to='/uidev/hooks/useState/api-request'
            className='link'>
            Show/Hide
          </NavLink>
        </li>
      </ul>
    </div>
  )
}