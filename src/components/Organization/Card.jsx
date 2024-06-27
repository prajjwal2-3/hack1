import React from 'react'
import  Button  from '../Button.jsx'

function Card({imgURL,orgName,description ,URL}) {
  return (
    <div className='flex justify-center'>
      <div className='md:flex justify-between rounded-lg h-[25rem] md:h-[13rem] w-3/4 m-5 p-5 bg-slate-100'>
        <div className=' border-4 border-gray-600 rounded-lg flex justify-center '><img src={imgURL} alt="" height={200} width={260}/></div>
        <div className='mx-10 '>
          <p className='font-semibold text-lg'>{orgName}</p>
          <p >{description}</p>
          <div className='flex mt-5 h-10'> 
            <Button className={' px-4 py-2 border-2 border-black rounded-lg mx-3 font-semibold'} text={'Website'} />
            <Button className={'bg-yellow-200 px-4 py-2 rounded-lg mx-3 font-semibold'} text={'Explore'} />
            </div>
        </div>
        <div className='hidden md:flex w-[10rem] bg-black text-white text-2xl justify-center rounded-xl'>
          <p className='mt-10'>50+ <br />Projects</p>
        </div>

      </div>
    </div>
  )
}

export default Card
