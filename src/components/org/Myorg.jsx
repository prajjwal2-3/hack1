import React from 'react'
import { useSelector } from 'react-redux'

export default function Myorg() {
    const org = useSelector((state)=>state.user.org)
  return (
    <div className='min-h-screen bg-body'>
      <section className='h-48 w-full '>
        <img src="https://www.missiondiscovery.org/wp-content/uploads/2023/03/Copy-of-Website-Featured-Images-14.png" alt="" className='object-cover w-full h-full' />
      </section>
      <section className='flex justify-between   px-20'>
        <section className='logo-of-myorg flex gap-10'>
           
            <img src="https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg" alt="" className='w-40 h-40 -mt-5 rounded-full object-cover'/>
            <section className='flex flex-col'>
           <p className='text-7xl text-slate-800 font-bold'>{org.name}</p>
           <p className='text-2xl text-slate-600 font-semibold'>{org.description}</p>
        </section>
        </section>
        
        <section className='flex flex-col'>
            <p className='text-xl font-semibold text-slate-800'>Email address: <span className='text-slate-600'>{org.email}</span></p>
            <p className='text-xl font-semibold text-slate-800'>Phone number: <span className='text-slate-600'>{org.phone}</span></p>
        </section>
      </section>
    </div>
  )
}
