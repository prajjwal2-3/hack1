import React from 'react'
import Hero from './Hero'
import Categories from './Categories'
import Popular from './Popular'
import Banner from './Banner'
import TopOrg from './TopOrganization'
import Ctabanner from './Ctabanner'
import Newsletter from './Newsletter'

export default function Home() {
  return (
    <div>
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
