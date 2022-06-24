import React from 'react'
import {HiOutlineMail} from 'react-icons/hi';
import { mailHref } from './helpers/mailHref';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Socials = ({size=40}) => {
  return (
    <div className='flex justify-center space-x-8'>
          <a
            className='hover:text-white duration-500 text-gray-300'
            href='https://www.linkedin.com/in/michaelmhw1/'
          >
            <FaLinkedin size={size}/>
          </a>
          <a
            className='hover:text-white duration-500 text-gray-300'
            href='https://github.com/michaelwang110'
          >
            <FaGithub size={size}/>
          </a>
          <a
            className='hover:text-white duration-500 text-gray-300'
            href={mailHref()}
          >
            <HiOutlineMail size={size}/>
          </a>
    </div>
  )
}

export default Socials