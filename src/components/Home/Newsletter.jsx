import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-yellow-400 h-60 mt-10 gap-20 w-full flex  justify-center items-center'>
     <section className='w-4/12'>
     <p className='text-2xl font-semibold text-slate-800'>Subscribe to Our news letter</p>
     <p className='text-slate-800'>Receive our weekly newsletter and stay updated with latest events happening around you.</p>
     </section>
     <section className='w-5/12'>
    <div className="border-slate-800 border rounded-lg">
      <input type="text" name="" id="" className='outline-none w-10/12 p-4 rounded-l-lg' />
      <button className='w-2/12 text-yellow-400 font-bold p-4 rounded-r-lg bg-[#2B293D]'>Subscribe</button>
    </div>
     </section>
    </div>
  )
}
