import React from 'react'
import BasicMenu from './Dropdown'

export default function Navigationbar() {
  return (
    <>
    <div className='w-6/12 hidden md:flex  items-center justify-evenly'>
      <button>Home</button>
      <button>Organizations</button>
      <button>Calendar</button>
      <button>Contact Us</button>
    </div>
    <div className="flex md:hidden ">
    <BasicMenu/>
    </div>
    </>
  )
}
