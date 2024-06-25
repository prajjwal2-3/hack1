import React from 'react'

import Navigationbar from './Navigationbar'
import BasicMenu from './Home/Dropdown'
import Button from './Button'
export default function Header() {
  return (
    <div className='w-full h-20 p-4 flex items-center justify-between bg-navbar shadow-md:0 1px 3px 0 '>
        <section className='font-semibold flex text-base gap-1 w-2/12 text-center text-white'>
           
           <p className='hidden sm:flex'> TEAM NAME</p>
        </section>
      
      <Navigationbar/>
      <section className='w-2/12 md:flex hidden justify-around'>
      <Button className={'text-white'} text={'Login'}/>
      <Button className={'bg-yellow-400 px-4 py-2 rounded-lg'} text={'Sign Up'} />
      </section>
      <div className="flex md:hidden ">
    <BasicMenu/>
    </div>
      
        
     
    </div>
  )
}
