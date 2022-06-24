import React from 'react'
import Socials from './Socials';

const Footer = () => {
  return (
    <div name='footer' className='sm:flex w-full h-fit bg-[#0a192f] text-gray-300 pt-52'>
        {/* desktop */}
        <div className='sm:flex hidden ml-5 text-sm'>
          <span className='text-gray-400'>© 2022 All rights reserved. –&nbsp;</span> Designed & Coded by Michael Wang
        </div>
        <div className='sm:flex hidden ml-auto mr-5 mb-5'>
          <Socials size={25}/>
        </div>

        {/* mobile */}
        <div className='sm:hidden flex m-auto mr-5 mb-5 justify-center'>
          <Socials size={25}/>
        </div>
        <div className='sm:hidden flex text-sm justify-center pb-5'>
          <span className='text-gray-400'>© 2022 All rights reserved. –&nbsp;</span> Designed & Coded by Michael Wang
        </div>
    </div>
  )
}

export default Footer
