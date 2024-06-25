import React from 'react'

export default function Heroimage() {
  return (
    <div className='h-96 w-full bg-red-500 '>
        <div className="absolute w-full h-96 bg-black/30 flex justify-center items-center">
        <p className='text-white text-5xl font-semibold'>Explore Nearby <span className='text-yellow-400'> Volunteering</span> opportunities. Locally and Globally.</p>
        </div>
    <img
      src="https://images.pexels.com/photos/5029859/pexels-photo-5029859.jpeg?auto=compress&cs=tinysrgb&&dpr=1"
      alt=""
      className='object-cover object-center h-full w-full'
    />
  </div>
  
  )
}
