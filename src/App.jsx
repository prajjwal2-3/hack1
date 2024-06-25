import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Home/Hero'
import Categories from './components/Home/Categories'


function App() {
  const [count, setCount] = useState(0)

  return (
  
  <div className="min-h-screen w-full">
       <Header/>
     <Hero/>
    <Categories/>
  </div>
    
  )
}

export default App
