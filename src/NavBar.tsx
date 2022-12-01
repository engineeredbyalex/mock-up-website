import React from 'react'
import menuIcon from './icons/menu.png'
import darkMode from './icons/darkmode.png'
import { useState } from 'react'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className='bg-[#413F42] flex flex-col h-20 items-center w-screen sm:flex-row'>
      {/* Buttons */}
      <div
        id='darkModeButton'
        className='flex flex-row items-center w-[100%] justify-between'
      >
        <button className='text-3xl flex w-20 h-20 items-center justify-center'>
          <img className='w-10 h-10' src={darkMode} />
        </button>
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
          id='menuButton'
          className='flex text-3xl w-20 h-20 items-center justify-center sm:hidden'
        >
          <img className='w-10 h-10' src={menuIcon} />
        </button>
      </div>
      {/* Links */}
      <ul
        id='navList'
        className={
          isMenuOpen
            ? 'flex w-screen h-20 flex-row p-10 justify-evenly items-center text-2xl bg-[#413F42]  text-white sm:hidden'
            : 'hidden w-screen h-20 flex-row p-10 justify-evenly items-center text-2xl bg-[#413F42] text-white sm:flex'
        }
      >
        <li className='animate-loading '>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Work</a>
        </li>
      </ul>
    </nav>
  )
  const navList = document.getElementById('navList')
  const menuBtn = document.getElementById('menuButton')
  const darkModeBtn = document.getElementById('darkModeButton')
}

export default NavBar
