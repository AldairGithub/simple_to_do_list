import React from 'react'

import './Header.css'

export default function Header() {

  const colors = [
    '#84CEEB',
    '#5AB9EA',
    '#5680E9',
    '#8860D0'
  ]

  return (
    <>
      <div>
        <h1 style={{textDecorationColor: `${colors[Math.ceil(Math.random() * colors.length + 1)]}`}} className='header-title'>To Do List</h1>
      </div>
    </>
  )
}