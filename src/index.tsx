import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './NavBar'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <div className='bg-[#7F8487] w-screen h-screen flex'>
    <NavBar></NavBar>
  </div>
)
