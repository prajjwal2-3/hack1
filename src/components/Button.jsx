import React from 'react'


export default function Button({prop}) {
  return (
    <div>
      <button className='px-4 py-2 rounded-full bg-button  text-white font-medium  '>{prop}</button>
    </div>
  )
}
