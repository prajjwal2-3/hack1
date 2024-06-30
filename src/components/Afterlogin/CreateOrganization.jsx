import React, { useState,useEffect } from 'react'
import { TextField } from '@mui/material'
import { addOrg } from '../../redux/org/org';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function CreateOrganization() {
  const org = useSelector((state)=>state.user.org.name)
  const navigate = useNavigate()
  if(org!==''){
navigate('/myOrg')
  }
  const dispatch = useDispatch()
  const [token, setToken] = useState(null);
  const [id,setid]=useState('')
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    const userId = localStorage.getItem('user_id')
    setToken(accessToken);
    setid(userId)
    console.log(accessToken);
  }, []);
  const [name,setname]=useState('')
  const [ description,setdescription]=useState('')
  const [email,setemail]=useState('')
  const [number,setnumber]=useState('')
  const [address,setaddress]=useState('')
  const [url,seturl] = useState('')
  const newOrg={
    name:name,
    description:description,
    email:email,
    phone:number,
    address:address,
    website:url
  }
   async function createOrg(){
    try{
      const response = await axios.post('https://neighbourly-backend.vercel.app/organizations',{
        user_id:id,
        name:name,
        description:description,
        contact_email:email,
        contact_phone:number,
        address:address,
        website:url,
        
      },{
        headers:{
          'access_token':token,
           'Content-Type': 'application/json'
        }
      })
      dispatch(addOrg(newOrg))
      console.log('Response data:', response.data);
    }catch (error) {
      console.error('Error Creating organization:', error);
    }
 }

  return (
    <div className='p-24 bg-body flex flex-col gap-10 items-center justify-center'>
    
   <section className='flex flex-col'>
   <p className='text-4xl font-bold text-slate-800'>Welcome to Neighbourly!!!</p>
   <p className='text-2xl font-bold text-slate-800'>Create Organization</p>
   
   </section>
    <section className='grid grid-cols-2 gap-10  w-7/12 items-center'>
    <TextField onChange={(e)=>setname(e.target.value)} className='w-10/12' id="outlined-basic" label="Name of Organization" variant="outlined" />
    <TextField onChange={(e)=>setdescription(e.target.value)} className='w-10/12' id="outlined-basic" label="Description" variant="outlined" />
    <TextField onChange={(e)=>setemail(e.target.value)} className='w-10/12' id="outlined-basic" label="Email Address" variant="outlined" />
    <TextField onChange={(e)=>setnumber(e.target.value)} className='w-10/12' id="outlined-basic" label="Phone Number" variant="outlined" />
    <TextField onChange={(e)=>setaddress(e.target.value)} className='w-10/12' id="outlined-basic" label="Address" variant="outlined" />
    <TextField onChange={(e)=>seturl(e.target.value)} className='w-10/12' id="outlined-basic" label="Website URL" variant="outlined" />
    
    </section>
    
    
    <button onClick={createOrg} className='bg-yellow-400 px-4 py-2  rounded-md '>Create Organization</button>
    </div>
  )
}
