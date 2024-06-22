import React from 'react'
import Searchbar from './Searchbar'
import Navigationbar from './Navigationbar'

export default function Header() {
  return (
    <div className='w-full h-20 p-4 flex items-center bg-blue-500'>
        <section className='font-semibold flex text-base gap-1 w-4/12 text-center text-white'>
           <p>  LOGO</p>
           <p className='hidden sm:flex'> TEAM NAME</p>
        </section>
      <Searchbar/>
      <Navigationbar/>
    </div>
  )
}
