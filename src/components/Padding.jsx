import React from 'react'

const Padding = ({bg = '0a192f', height=12}) => {
  return (
    <div className={`w-full h-${height} bg-[#${bg}]`}/>
  )
}

export default Padding