import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addallOrg } from '../../redux/org/allorg'
export default function Organization() {
  const dispatch =useDispatch()
  const organizations = useSelector((state)=>state.user.allorg.organizations)
    useEffect(()=>{
    async  function getOrg(){
        const token = localStorage.getItem('access-token')
        const org = await axios.get('https://neighbourly-backend.vercel.app/organizations/')
        dispatch(addallOrg(org.data))
        console.log(org)
      }
      getOrg()
    },[])
  return (
    <div className='p-10 grid grid-cols-3'>
      {organizations.map((e,index)=><section key={index} className='bg-blue-300 m-5 hover:scale-105 duration-100 rounded-xl  h-72'>
      <section className='w-full h-28 bg-yellow-400 rounded-t-xl'></section>
      <section className='w-24 h-24 -mt-10 mx-5 rounded-full bg-white'></section>
       <p className='text-xl h-10  truncate font-bold mx-5 text-slate-800'>{e.name}</p>
       <p className='text-lg font-semibold ml-5 mr-10 h-20  truncate text-slate-600'>{e.description}</p>
      </section>)}
    </div>
  )
}
