import React from 'react'
import Logo from '../assets/logo.png';
import Socials from './Socials';

function About() {
  return (
    <div name='about' className='w-full h-fit bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 py-36'>
          {/* Title */}
          <div className='pb-12 text-center'>
            <p className='sm:text-4xl text-2xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          {/* Content */}
          <div className='w-full grid sm:grid-cols-3 gap-0 '>
            <div className='sm:text-2xl text-xl col-span-2'>
              <div>
                <p>I am passionate about building quality software that improves the lives of those around me. I can wear many hats and have had experience with a wide variety of Frontend and Backend technologies.</p>
              </div>
              <div className='pt-4'>
                <p>Outside of software development you'll find me hunting down the best yum cha in Sydney, practicing kicks at muay thai, and petting all the good dogs.</p>
              </div>
            </div>
            <img class='mx-auto h-[80%]' src={Logo} alt='Logo'/>
          </div>
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default About