import { useState } from 'react'
import TopOrg from './components/TopOrganization'
import Header from './components/Header'
import Hero from './components/Hero'
import CreateAccount from './components/autorization/CreateAccount'
import Login  from './components/autorization/Login'
import Footer from './components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {/* <Login/> */}
   <Footer/>
   {/* <CreateAccount/> */}
   
  
     {/* <Header/>
     <Hero/>
     <TopOrg/> */}
    </>
  )
}

export default App
