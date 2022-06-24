import React from 'react'
import react from '../assets/react.png';
import nextjs from '../assets/nextjs.png';
import dotnetcore from '../assets/dotnetcore.png';
import django from '../assets/django.png';
import apollo from '../assets/apollo.png';
import graphql from '../assets/graphql.png';
import postgresql from '../assets/postgresql.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import typescript from '../assets/typescript.png';

const Skills = () => {
  return (
    <div name='about' className='w-full h-fit bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 pb-52'>
          {/* Title */}
          <div className='pb-12 text-center'>
            <p className='sm:text-4xl text-2xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          </div>
          {/* Content */}
          <div className='w-full grid grid-cols-3 sm:grid-cols-5 gap-8 text-center justify-center a'>
            <div className='rounded-lg hover:scale-110 border border-pink-800 hover:border-pink-500 duration-500'>
              <img className='mt-2 w-20 mx-auto' src={react} alt='react' />
              <p className='mt-1 mb-2'>ReactJS</p>
            </div>
            <div className='rounded-lg hover:scale-110 border border-pink-800 hover:border-pink-500 duration-500'>
              <img className='mt-5 mb-5 w-20 mx-auto' src={nextjs} alt='react' />
              <p className='mt-1 mb-2'>NextJS</p>
            </div>
            <div className='rounded-lg hover:scale-110 border border-pink-800 hover:border-pink-500 duration-500'>
              <img className='mt-2 w-20 mx-auto' src={dotnetcore} alt='react' />
              <p className='mt-1 mb-2'>.Net Core</p>
            </div>
            <div className='rounded-lg hover:scale-110 border border-pink-800 hover:border-pink-500 duration-500'>
              <img className='mt-2 w-20 mx-auto' src={django} alt='react' />
              <p className='mt-1 mb-2'>Django Rest</p>
            </div>
            <div className='rounded-lg hover:scale-110 border border-pink-800 hover:border-pink-500 duration-500'>
              <img className='mt-2 w-20 mx-auto' src={apollo} alt='react' />
              <p className='mt-1 mb-2'>Apollo Client</p>
            </div>
            <div className='rounded-lg hover:scale-110 border border-pink-800 hover:border-pink-500 duration-500'>
              <img className='mt-2 w-20 mx-auto' src={graphql} alt='react' />
              <p className='mt-1 mb-2'>GraphQL</p>
            </div>
            <div className='rounded-lg hover:scale-110 border border-pink-800 hover:border-pink-500 duration-500'>
              <img className='mt-2 w-20 mx-auto' src={postgresql} alt='react' />
              <p className='mt-1 mb-2'>PostgreSQL</p>
            </div>
            <div className='rounded-lg hover:scale-110 border border-pink-800 hover:border-pink-500 duration-500'>
              <img className='mt-4 w-16 mx-auto' src={html} alt='react' />
              <p className='mt-4 mb-1'>HTML</p>
            </div>
            <div className='rounded-lg hover:scale-110 border border-pink-800 hover:border-pink-500 duration-500'>
              <img className='mt-4 w-16 mx-auto' src={css} alt='react' />
              <p className='mt-4 mb-1'>CSS</p>
            </div>
            <div className='rounded-lg hover:scale-110 border border-pink-800 hover:border-pink-500 duration-500'>
              <img className='mt-4 w-16 mx-auto' src={typescript} alt='react' />
              <p className='mt-4 mb-1'>TypeScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills