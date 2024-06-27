import React from 'react'
import EventAtt from './EventAtt'
import EditIcon from '@mui/icons-material/Edit';
import Button from '../Button';


function UserPage() {

   const data =
    {
        name:'Avinash Verma',
        about:'I am priest and love to care for animals.This community works on creating clean & Green environment across the whole world by planting trees,growing sapling & encouraging people.',
        skills:'Gardning | Ploughing | Farming',
        availability:'All Time',
        userImgURl:'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        eventAttended:[
            {
                Event_Details:'abcdjsnvkjhiwubbwuehfekjbc  khefiuwehfiuhb  kjbiuwehfiqeb adkchiuefhwiqefb kcbdaskjhwi khiuefhwbc',
                organization:'smile Foundation',
                location:'heeramandi,Dholakpur',
                date:'10-2-2004'

            },
            {
                Event_Details:'abcdjsnvkjhiwubbwuehfekjbc  khefiuwehfiuhb  kjbiuwehfiqeb adkchiuefhwiqefb kcbdaskjhwi khiuefhwbc',
                organization:'smile Foundation',
                location:'heeramandi,Dholakpur',
                date:'10-2-2004'

            },
            {
                Event_Details:'abcdjsnvkjhiwubbwuehfekjbc  khefiuwehfiuhb  kjbiuwehfiqeb adkchiuefhwiqefb kcbdaskjhwi khiuefhwbc',
                organization:'smile Foundation',
                location:'heeramandi,Dholakpur',
                date:'10-2-2004'

            }
        ]

    }

  return (
    <>
    <div className='flex'>
        <div className='w-[70%] p-5'>
            <p className='bg-black text-yellow-400 px-5 py-2 text-2xl font-semibold w-3/4 flex justify-center rounded-lg'>{data.name}</p>
            <p className='w-[60%] p-4 font-normal'><b>About</b>  <br />{data.about}</p>
            <p className='w-[60%] px-4 font-medium'><b>Skills :</b> {data.skills}</p>
            <p className='w-[60%] p-4 font-medium'> <b>Availability :</b> {data.availability}</p>
            <hr className='mt-[8%] flex' />
        </div>
        <div className='w-[30%] p-5'>
            <div className='flex justify-end'><Button className={'px-4 py-2 mb-4 border-2 border-black rounded-lg'} text={<EditIcon/>}/></div>
             <div className='flex justify-center  border-4 border-gray-400 rounded-lg '><img src={data.userImgURl} alt="" height={300} width={370}/></div>
        </div>
       
    </div>
    <div className='p-5'>
    <p className='font-medium text-2xl'>EVENTS ATTENDED:</p>
    <table className=' mt-10 '>
      <tr className='  w-4/4'>
        <th className='px-10 border-2 border-black '>S.No</th>
        <th className='px-32 border-2 border-black '>Event Details</th>
        <th className='px-20 border-2 border-black'>Organization</th>
        <th className='px-20 border-2 border-black'>Location</th>
        <th className='px-20 border-2 border-black'>Date</th>

      </tr>
      <tr className='flex flex-col'>
      {data.eventAttended.map((d,index)=>{
        return <td><EventAtt key={index} index={index} date={d.date} location={d.location} Org={d.organization} ED={d.Event_Details} /></td>
})}
      </tr>
    </table>
    </div>
      
    </>
  )
}

export default UserPage
// date={d.date} location={d.location} Org={d.organization} ED={d.Event_Details}
