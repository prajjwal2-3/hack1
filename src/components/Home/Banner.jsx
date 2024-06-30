import React from 'react'
import persoj from '../../../public/persoj.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Banner() {
  return (
    <div className='p-10 flex justify-center items-center'>
      
        <img src={persoj} alt="" className=''/>
        <div className='absolute flex flex-col gap-5 justify-center items-center'>
            <p className='text-3xl text-slate-800 font-bold'>Volunteering Events specially curated for you!</p>
            <button className='bg-[#2B293D] px-4 py-2 rounded-lg hover:scale-105 duration-75 text-xl text-yellow-400'>Get Started

                <ArrowForwardIcon/>
            </button>
        </div>
      
    </div>
  )
}
