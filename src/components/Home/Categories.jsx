import React from 'react'
import { Category } from '../../constants/Categories'
export default function Categories() {
  return (
    <div className='p-10 flex flex-col gap-10'>
      <p className='text-slate-800 font-medium text-2xl'> Explore Categories</p>
      <section className='flex items-center justify-around'>
       
    {Category.map((e,index)=> <div key={index} className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 duration-150">
     <img src={e.image} alt="" className='w-40 h-40 rounded-full object-cover' />
    <p className='text-slate-800 font-medium'> {e.title}</p>
     </div>)}
      </section>
    </div>
  )
}
