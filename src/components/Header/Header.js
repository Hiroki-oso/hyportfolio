import React from 'react';
import {Link} from 'react-router-dom'
// import './header.css'


function Header() {
  return (
    <div className='flex border-b-2 border-gray-300 px-8 pt-12 flex justify-between md:pt-3 md:flex flex-wrap'>
      <div className='pr-1 home' >
        <Link to="/" >
         <h1 className='flex text-bold text-6xl text-green-600'>HIROKI YOSHIDA</h1>
        </Link>
      </div>
      <div className='flex justify-end gap-20 pb-3 flex items-end pr-10 menu md:pl-10 md:gap-10 md:pb-5' >
        <div className='about' >
          <Link to="/about" >
            <h2 className='text-2xl text-gray-400 text-semibold'>About</h2>
          </Link>
        </div>
        <div className='work' >
          <Link to="/work" >
            <h2 className='text-2xl text-gray-400 text-semibold'>work</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header