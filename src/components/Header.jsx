import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(prev => !prev);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
      <div>
        <div className='text-4xl font-bold text-pink-600'>MW</div>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li className='hover:text-white hover:underline duration-1000'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-white hover:underline duration-1000'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-white hover:underline duration-1000'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:text-white hover:underline duration-1000'>
          <Link to='resume' smooth={true} duration={500}>
            Resume
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl hover:text-white hover:underline duration-1000'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-white hover:underline duration-1000'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-white hover:underline duration-1000'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-white hover:underline duration-1000'>
          <Link onClick={handleClick} to='resume' smooth={true} duration={500}>
            Resume
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header