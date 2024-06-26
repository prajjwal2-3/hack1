import React from 'react'
import BasicMenu from './Home/Dropdown'
import { Link } from 'react-router-dom'
export default function Navigationbar() {
  return (
    <>
    <div className='w-4/12 hidden md:flex gap-6 text-white font-medium text-md px-16 '>
      <Link to="/"><button>Home</button></Link>
      <Link to="/organization"><button>Organizations</button></Link>
      <Link to="/volunteer"><button>Calendar</button></Link>
      <button>ContactUs</button>
    </div>
    
    </>
  )
}
