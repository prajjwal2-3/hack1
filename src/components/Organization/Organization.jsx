import  Button  from '../Button.jsx'
import React, { useState ,useEffect} from 'react'
import Card from './Card.jsx'


function Organization () {
     const data=[
      {
        "_id": "667c53bdf01b57b48f6dcadf",
        imgURL:'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
        "user_id": "667c50e800e5a85ff9c386b6",
        "name": "Green Health Organization",
        "description": "THe organization works on clean city THe organization works on clean city THe organization works on clean city",
        "contact_phone": "9013422132",
        "contact_email": "jasjeev99@gmail.com",
        "address": "Jamna parr Yamiunuaa",
        "website": "www.jasjee.com"
      },
      {
        "_id": "667c54bef01b57b48f6dcae0",
        imgURL:'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
        "user_id": "667c50e800e5a85ff9c386b6",
        "name": "Green Health Organization",
        "description": "THe organization works on clean city THe organization works on clean city THe organization works on clean city",
        "contact_phone": "9013422132",
        "contact_email": "jasjeev99@gmail.com",
        "address": "Jamna parr Yamiunuaa",
        "website": "www.jasjee.com"
      },
      {
        "_id": "667c54c2f01b57b48f6dcae1",
        'imgURL':'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
        "user_id": "667c50e800e5a85ff9c386b6",
        "name": "Green Health Organization",
        "description": "THe organization works on clean city THe organization works on clean city THe organization works on clean city",
        "contact_phone": "9013422132",
        "contact_email": "jasjeev99@gmail.com",
        "address": "Jamna parr Yamiunuaa",
        "website": "www.jasjee.com"
      },
     ]
  return (
    <>
      <div className='md:flex justify-between '>
        <div className='flex gap-20 my-10 mx-10  bg-gray-300 px-4 py-2 md:px-15 rounded-lg justify-center items-center h-12 font-semibold'>
            <p className='bg-[#272342] px-3 py-2 rounded-lg text-yellow-300'>Organizations</p>
            <p>Projects</p>
            <p>Events</p>
        </div>
        <div className='mx-[15%] md:mx-3'>
            <input type="text" className='px-4 py-2 rounded-lg md:my-10 mx-2 border-[0.1rem] border-[#272342]' />
            <Button className={'bg-yellow-400 px-4 py-2 rounded-lg mx-3 font-semibold'} text={'Search'} />
        </div>
      </div>
      {
        data.map((d)=>{
          return <Card imgURL={d.imgURL} URL={d.website} description={d.description} orgName={d.name} />
        })
      }

    </>
  )
}

export default Organization
