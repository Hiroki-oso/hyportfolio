import React from 'react'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import BakeryDiningOutlinedIcon from '@mui/icons-material/BakeryDiningOutlined';
import Face5OutlinedIcon from '@mui/icons-material/Face5Outlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

function AboutMain() {
  return (
    <div className='flex flex-row items-start md:grid grid-cols-1 space-y-10 mb-10'>
      <div>
          <lottie-player 
          src="https://assets6.lottiefiles.com/packages/lf20_quCdcn3b1A.json"  
          background="transparent"  speed="1"  

          loop autoplay>
          </lottie-player>
      </div>
      <div className='top-10 right-2  flex flex-col items-center mt-10 ml-2 mr-5 hover:scale-105 duration-300 md:flex flex-col p-6 m-3 space-y-10 career'>
        <div className='px-5 py-10 text-4xl aboutMain text-blue-200 bg-violet-500 hover:text-rose-300 hover:bg-blue-500 rounded-xl transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300'>Who is HIROKI YOSHIDA ? </div>
        <div className='mt-5'>
        <h4 className='mb-2 text-xl md-3 text-bold text-blue-700'><AutoStoriesOutlinedIcon /> 経歴</h4>
        <h4 className=''><BoltOutlinedIcon /> 学歴</h4> 
        <p className='mb-2 ml-2'>工業高専卒業<br /></p>
        <h4><WorkOutlineOutlinedIcon /> 職歴</h4>
        <p className='ml-2'>サービスエンジニア・メンテナス(電気,通信,電子機器)</p>
        <p className='ml-2'>ECサイト運営</p>
        <p className='ml-2'>WEB制作, プログラミング、デザイン</p>
        <p className='ml-2 mb-2'>現在、WEB制作、プログラミング中心で仕事をしています。</p>
        <h4 className=''><BakeryDiningOutlinedIcon /> 趣味</h4>
        <p className='ml-2'>ウォーキング</p>
        <p className='ml-2'>読書</p>
        <p className='ml-2 mb-2'>勉強（英語、スペイン語、プログラミング）</p>
        <h4 className=''><Face5OutlinedIcon /> 性格</h4>
        <p className='ml-2'>好奇心旺盛<br /> スポーツ観戦よりスポーツをする方が好きで<br />
        旅行も写真や本を見たりするより実際、行かないと気が済まない性格
        </p>
        <p className='ml-2'>少し人見知りしますが話好きです</p>
        <p className='mb-2 ml-2'>少し負けずらいところもあります。</p>
        <h4 className='mb-30 text-xl pt-3 text-lime-500'>これから色々、行動して人との出会いで<br />
        人生をより謳歌していこうと思います。</h4>        
        </div>
      </div>
    </div>
  )
}

export default AboutMain