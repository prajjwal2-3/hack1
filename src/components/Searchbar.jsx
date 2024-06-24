import React from 'react'
import Button from './Button'
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar() {
  return (
    <>
    <div className='md:hidden flex'>
      <Button prop={<SearchIcon/>} />
    </div>
    <div className='hidden outline-none  md:flex justify-between gap-2  items-center' >
      <input type="text" className='md:w-[15rem] h-8 bg-body outline-none border-[1px] px-5 py-5   rounded-full border-gray-300 ' name="" id="" placeholder='Search Organisation'/>
      <Button prop={'Search'}/>
    </div>
    </>
  )
}
