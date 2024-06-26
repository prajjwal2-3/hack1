import React from 'react'

function Footer() {
  return (
    <div>
      <div className='bg-body w-full h-[100vh] md:h-[50vh] bottom-0 text-white flex' >
       <div className=' w-[100%] md:w-[50%] md:flex md:ml-16 justify-center font-thin'>
         <div className=' p-10' >
            <p className='text-xl font-semibold mb-6'>Company info</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>FAQs</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
        </div>
        <div  className=' p-10' >
            <p className='text-xl font-semibold mb-6'>Help</p>
            <p>Account Support</p>
            <p>Event Ticketing</p>
            <p>Listing Events</p>
            <p>Ticketing Purches terms & Condition</p>
        </div>
        </div>
        <div className='w-[100%] md:w-[50%] md:flex  justify-center font-thin'>
         <div className=' p-10' >
            <p className='text-xl font-semibold mb-6'>Categories</p>
            <p>Concerts & Gigs</p>
            <p>Festivals & LifeStyle</p>
            <p>Business & Newtworking</p>
            <p>Food & Drinks</p>
            <p>Performing Arts</p>
            <p>Sports & Outdoors</p>
            <p>Exhibitions</p>
        </div>
        <div  className=' p-10' >
            <p className='text-xl font-semibold mb-6'>Follow Us</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
        </div>
        </div>
      </div>
      <div className='bg-body'>
      <hr className='h-[0.1rem] bg-gray-900 w-3/4 flex justify-center ml-[10%]'/>
      <p className='flex justify-center text-gray-300 p-4'>&copy;2024 Neighborly. All rights reserved. </p>
      
      </div>
    </div>
  )
}

export default Footer
