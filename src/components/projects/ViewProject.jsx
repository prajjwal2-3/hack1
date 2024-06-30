import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function ViewProject() {
    const {projectID}=useParams()
    const [project,setproject]=useState([])
    const [category,setcategory]=useState()
    const [organization,setorganization]=useState()
    useEffect(()=>{
   async function getProject(){
    try{
        const response = await axios.get(`https://neighbourly-backend.vercel.app/projects/${projectID}`)
        
    setproject(response.data)
    const categ = await axios.get(`https://neighbourly-backend.vercel.app/categories/${response.data.category_id}`)
    setcategory(categ.data.name)
    const org = await axios.get(`https://neighbourly-backend.vercel.app/organizations/${response.data.organization_id}`)
    setorganization(org.data.name)
    }catch(error){
        alert(error+'useef')
    }

   }
   getProject()
    },[])
  return (
    <div className='p-10'>
      <section className='flex items-center gap-10'>
      <div className="w-48 h-48 rounded-full bg-red-100"></div>
   
  <section className='flex flex-col w-7/12'>
  <p className='text-4xl font-semibold text-slate-800'>{project.title}</p>
  <p className='text-xl font-semibold text-slate-600'>{project.description}</p>
 <section className='flex justify-between'>
 <p className='text-slate-600'>Location: {project.location}</p>
 <p className='text-slate-600'>Volunteers needed: {project.volunteers_needed}</p>
 <p className='text-slate-600'>Category: {category}</p>
 </section>
  </section>
  <section className='w-3/12 h-48 flex items-center text-center flex-col gap-5'>
  <section>
  <p className='text-3xl font-semibold text-slate-800 '>Organized by</p>
  <p className='text-xl font-semibold text-slate-600'>{organization}</p>
  </section>
  <section>
  <p className='text-xl font-semibold text-slate-800 '>Start Date</p>
  <p className='text-base font-semibold text-slate-600'>{project.start_date}</p>
  </section>
  <section>
  <p className='text-xl font-semibold text-slate-800 '>End Date</p>
  <p className='text-base font-semibold text-slate-600'>{project.end_date}</p>
  </section>
  
  </section>
      </section>
        
    
    </div>
  )
}
