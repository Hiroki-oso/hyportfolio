import React from 'react'
// import './home.css'

function HomeMain() {
  return (
    <div className='flex items-center flex justify-center mt-10 mb-10 h-[100vh] transition ease-in-out bg-white hover:-translate-y-1 hover:scale-110 hover:bg-yellow-200 md:flex flex-col'>
      <h3 className='text-9xl text-semibold home pt-10 md:flex items-center flex justify-center'>よしだひろき</h3>
      <div className=''>
      <img  className='img_hy photo w-700 h-700 mt-5 md:flex flex-start flex justify-center rounded-full' src="/assets/Hiroki_4.jpg" alt="" />
      </div>
    </div>
  )
}

export default HomeMain