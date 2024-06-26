import React from 'react'
import cta from '../../../public/cta.png'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function Ctabanner() {
  return (
    <div className=' flex justify-center items-center'>
      
    <img src={cta} alt="" className=''/>
    <div className='absolute flex w-8/12 gap-5 justify-between items-center'>
        <p className='text-3xl text-yellow-400 font-bold'>Organize Events hassle free with Neighbourly!!!</p>
        <button className='bg-yellow-400 px-4 py-2 rounded-lg hover:scale-105 duration-75 text-xl text-[#2B293D]'>
            <CalendarMonthIcon/>
            Create Event
        </button>
    </div>
  
</div>
  )
}
