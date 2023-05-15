import React from 'react'
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

function WorkMain() {
  const [IndexHover, setIndexHover] = useState();
  const data = [
    {
      title:'primerodjangoapp',
      description:'初めて自分の力で制作したWEBアプリです。Pythonが好きなのでDjangoを利用しました。 制作で苦労したのは便利な管理画面ありますがモデルの構築で上手くいかず、何度も作り直しました。あとデプロイでHeroku, Pythonanywhereでエラーが解消できず、現在、Vultrで上手く動作してすべて完了しました。',
      image:'assets/Weight&BMI_Management.png',
    },
    {
      title:'現在制作中',
      description:'shopifyをECサイトを制作中です。liquidという言語で制作しています。購買意欲がますサイトを制作しようと思います。',
      image:'assets/pic_i006.jpg',
    },
  ]
  return (
    <div className='flex flex-col h-[100vh] flex justify-center mb-20 md:grid grid-col-1'>
      <div className='flex items-start flex justify-center mb-10'>
        <h1 className='work mr-7 text-primary text-5xl flex justify-center'>Work</h1>
        <span className='workIcon text-primary text-5xl flex justify-center mt-50'><i class="ri-palette-fill"></i></span>
      </div>
      <div className='flex justify-center grid grid-cols-2 gap-5 md:flex flex-col gap-5'>
      {data.map((item, index)=>{
        return (
          <div className='index mx-7'
          onMouseEnter={()=>setIndexHover(index)}
          onMouseLeave={()=>setIndexHover(null)}
          >
          <h1 className='text-4xl mb-5'>{item.title}</h1>
          <div className='flex justify-center md:mb-10'>
            <img src={item.image} alt=""  className='h-full w-full index_image'/>
          </div>
          <p className={`h-0 overflow-hidden transiotion-all duration-300 ${index===IndexHover && 'h-8 bg-secondary text-white p-2 m-2 rounded-xl hover'
          }`}
          >{item.description}
          </p>
          </div>
        )
        
      })}

      </div>
    </div>
  )
}

export default WorkMain