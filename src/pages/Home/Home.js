import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HomeMain from '../../components/main/HomeMain'
import Pict from '../../components/main/Pict'
import { useEffect } from 'react'


function Home() {
  useEffect(() => {
    setTimeout(() => {
      const pict = document.querySelector('#pict');
      if(pict){
        pict.remove();
      }
    }, 5000)
  }, [])

  return (
    <div className='md:grid grid-cols-1 '>
      <Header />
      <div className='w-[full]' id='pict'>
        <Pict />
      </div>
        <HomeMain />
          <Footer />
    </div>
         
        
     )
    
    
  }

export default Home