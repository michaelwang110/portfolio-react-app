import React from 'react'
import {HiOutlineMail} from 'react-icons/hi';
import { mailHref } from './helpers/mailHref';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Socials = () => {
  return (
    <div className='flex justify-center space-x-8'>
          <a
            className='hover:text-white duration-500 text-gray-300'
            href='https://www.linkedin.com/in/michaelmhw1/'
          >
            <FaLinkedin size={40}/>
          </a>
          <a
            className='hover:text-white duration-500 text-gray-300'
            href='https://github.com/michaelwang110'
          >
            <FaGithub size={40}/>
          </a>
          <a
            className='hover:text-white duration-500 text-gray-300'
            href={mailHref()}
          >
            <HiOutlineMail size={40}/>
          </a>
    </div>
  )
}

export default Socials