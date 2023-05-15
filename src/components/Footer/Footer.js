import React from 'react'

function Footer() {
  return (
    <div className='bg-indigo-200 h-20 flex items-center flex justify-center md:flex justify-center footer'>
        <a href="https://linkedin.com"><i className="ri-linkedin-box-fill"></i></a>
        <a href="https://twitter.com"><i className="ri-twitter-fill"></i></a>
        <small className='text-xl mr-2'>&copy; Sonrisa </small>
        <a href="https://facebook.com"><i className="ri-facebook-box-fill"></i></a>
        <a href="https://instagram.com"><i className="ri-instagram-fill"></i></a>
    </div>
  )
}

export default Footer
