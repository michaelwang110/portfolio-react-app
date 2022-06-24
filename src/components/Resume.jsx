import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/michael_wang_resume.pdf';
import { FiDownload } from 'react-icons/fi';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <div name='resume' className='w-full h-fit bg-[#0a192f] text-gray-300'>
      <div className='lg:mb-0 md:mb-4 sm:mb-16 mb-8 w-full '>
        {/* Container */}
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full px-4 pt-52'>
            {/* Title */}
            <div className='pb-12 text-center'>
              <p className='sm:text-4xl text-2xl font-bold inline border-b-4 border-pink-600'>Resume</p>
            </div>
            {/* Content */}
            <div className='flex justify-center'>
              <Document file={resume}>
                <Page height={800} pageNumber={1} />
              </Document>
            </div>
            <div className='flex justify-center items-center'>
              <a 
                className='text-gray-200 bg-pink-600 font-size text-2xl hover:bg-pink-700 rounded-full mt-6  duration-500'
                href={resume}
                download
              >
                <button className='p-4'><FiDownload /></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
