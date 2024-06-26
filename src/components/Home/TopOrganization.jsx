import React from 'react'
import { Organizations } from '../../constants/Categories'
export default function TopOrg() {
  return (
    <div className='p-10 flex flex-col justify-center gap-10 items-center'>
      <p className='text-2xl text-slate-800 font-semibold'>Top Volunteering Organizations</p>
      <div className="flex gap-5 justify-center items-center">
      {Organizations.map((e,index)=> <div key={index} className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 duration-150">
     <img src={e.image} alt="" className='w-40 h-40 rounded-full object-cover' />
    <p className='text-slate-800 font-medium'> {e.name}</p>
     </div>)}
      </div>
    </div>
  )
}
