import React from 'react'
import BasicMenu from './Dropdown'

export default function Navigationbar() {
  return (
    <>
    <div className='w-4/12 hidden md:flex gap-6 text-button font-medium text-md px-16 '>
      <button>Home</button>
      <button>Organizations</button>
      <button>Calendar</button>
      <button>ContactUs</button>
    </div>
    <div className="flex md:hidden ">
    <BasicMenu/>
    </div>
    </>
  )
}
