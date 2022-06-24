import React from 'react'
import Socials from './Socials';
const Footer = () => {
  return (
    <div name='footer' className='w-full h-fit bg-[#0a192f] text-gray-300 pt-52'>
      {/* Container */}
      <div className='flex'>
        <div className='ml-5 text-sm'>
          © 2022 All rights reserved. – Designed & Coded by Michael Wang
        </div>
        <div className='ml-auto mr-5 mb-5'>
          <Socials size={25}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
