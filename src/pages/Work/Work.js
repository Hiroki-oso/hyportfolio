import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import WorkMain from '../../components/main/WorkMain'

function Work() {
  return (
    <div className='relative'>
        <Header />
        <WorkMain />
        <div className='md:absolute -bottom-[550px] w-full'>
        
        <Footer />
        </div>
    </div>
  )
}

export default Work