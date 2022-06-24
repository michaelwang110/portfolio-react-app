import React from 'react'
import Logo from '../assets/logo.png';
import Socials from './Socials';

const About = () => {
  return (
    <div name='about' className='w-full h-fit bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 pt-52'>
          {/* Title */}
          <div className='pb-12 text-center'>
            <p className='sm:text-4xl text-2xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          {/* Content */}
          <img class='mx-auto h-[150px] mb-8 sm:hidden flex' src={Logo} alt='Logo'/>
          <div className='lg:mb-8 md:mb-12 sm:mb-12 mb-12 w-full grid sm:grid-cols-3 gap-0 '>
            <div className='sm:text-2xl text-xl col-span-2'>
              <div>
                <p>I am passionate about building quality software that improves the lives of those around me. I can wear many hats and have had experience with a wide variety of Frontend and Backend technologies.</p>
              </div>
              <div className='pt-4'>
                <p>Outside of software development you'll find me looking for the best yum cha in Sydney, practicing kicks at muay thai, and petting all the good dogs.</p>
              </div>
              <div className='pt-4'>
                <p>Feel free to connect with me!</p>
              </div>
            </div>
            <img class='mx-auto h-[80%] sm:flex hidden' src={Logo} alt='Logo'/>
          </div>
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default About