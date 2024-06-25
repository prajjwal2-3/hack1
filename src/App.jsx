import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Home/Hero'
import Categories from './components/Home/Categories'
import Popular from './components/Home/Popular'


function App() {
  

  return (
  
  <div className="min-h-screen w-full">
       <Header/>
     <Hero/>
    <Categories/>
    <Popular/>
  </div>
    
  )
}

export default App
