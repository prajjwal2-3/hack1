import { useState } from 'react'
import TopOrg from './components/TopOrganization'
import Header from './components/Header'
import Hero from './components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     <Header/>
     <Hero/>
     <TopOrg/>
    </>
  )
}

export default App
