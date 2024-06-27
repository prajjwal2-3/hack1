import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
export default function Organizationdetail() {

    const {orgID}=useParams();
    const organizations = useSelector((state)=>state.user.allorg.organizations)
    const actualOrg = organizations.find((org)=>org._id===orgID)
  return (
    <div className='min-h-screen bg-body'>
      <section className='h-48 w-full '>
        <img src="https://www.missiondiscovery.org/wp-content/uploads/2023/03/Copy-of-Website-Featured-Images-14.png" alt="" className='object-cover w-full h-full' />
      </section>
      <section className='flex justify-between   px-20'>
        <section className='logo-of-myorg flex gap-10'>
           
            <img src="https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg" alt="" className='w-40 h-40 -mt-5 rounded-full object-cover'/>
            <section className='flex flex-col'>
           <p className='text-7xl text-slate-800 font-bold'>{actualOrg.name}</p>
           <p className='text-2xl text-slate-600 font-semibold'>{actualOrg.description}</p>
        </section>
        </section>
        
        <section className='flex flex-col'>
            <p className='text-xl font-semibold text-slate-800'>Email address: <span className='text-slate-600'>{actualOrg.contact_email}</span></p>
            <p className='text-xl font-semibold text-slate-800'>Phone number: <span className='text-slate-600'>{actualOrg.contact_phone}</span></p>
        </section>
      </section>
    </div>
  )
}
