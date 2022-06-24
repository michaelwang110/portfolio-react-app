import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <>

    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}

      <div class="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* source: https://www.youtube.com/watch?v=Tmkr2kKUEgU */}
        <div class=" w-full max-w-[1000px] z-10">
          <div class="absolute top-36 -left-4 w-36 h-36 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob"></div>
          <div class="absolute top-0 -right-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-2000"></div>
          <div class="absolute -bottom-0 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-4000"></div>
        </div>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff] z-20'>
          Hi there
          <span class="waving-hand">👋</span>
        </h1>
        <h1 className='mt-4 sm:mt-8 text-4xl sm:text-7xl font-bold text-[#ffffff] z-20'>
          I'm {<span className='text-4xl sm:text-7xl font-bold text-[#eee955]'>Michael Wang</span>}
          , a Software Engineer based in Sydney.
        </h1>
      </div>
    </div>
    </>
  )
}

export default Home;