import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Home/Hero'
import Categories from './components/Home/Categories'
import Popular from './components/Home/Popular'
import Banner from './components/Home/Banner'
import TopOrg from './components/Home/TopOrganization'
import Ctabanner from './components/Home/Ctabanner'
import Newsletter from './components/Home/Newsletter'


function App() {
  

  return (
  
  <div className="min-h-screen w-full">
       <Header/>
     <Hero/>
    <Categories/>
    <Popular/>
    <Banner/>
    <TopOrg/>
    <Ctabanner/>
    <Newsletter/>
  </div>
    
  )
}

export default App
