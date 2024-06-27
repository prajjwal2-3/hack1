import React from 'react'

function EventAtt({index ,ED,Org,location,date}) {
  return (
    <>
    <table>
      <tr>
        <td className='px-7 border-2 border-black font-normal '>{index+1}</td>
        <td className='px-8 py-2 border-2 border-black font-normal '>{ED}</td>
        <td className='px-10 border-2 border-black font-normal'>{Org}</td>
        <td className='px-20 border-2 border-black font-normal'>{location}</td>
        <td className='px-20 border-2 border-black font-normal'>{date}</td>

      </tr>
      </table>  
      
    </>
  )
}

export default EventAtt
