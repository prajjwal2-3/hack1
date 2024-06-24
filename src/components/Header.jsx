import React from 'react'
import Searchbar from './Searchbar'
import Navigationbar from './Navigationbar'
import  logo from '../assets/Logo.png'

export default function Header() {
  return (
    <div className='w-full h-20 p-4 flex items-center justify-between bg-white shadow-md:0 1px 3px 0 '>
        <section className='font-semibold flex text-base gap-1 w-4/12 text-center text-white'>
           <img src={logo} className='lg:h-12' alt="" />
           <p className='hidden sm:flex'> TEAM NAME</p>
        </section>
      <Searchbar/>
      <Navigationbar/>
    </div>
  )
}
