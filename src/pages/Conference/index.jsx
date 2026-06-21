import React from 'react'
import Hero from './Hero'
import Feature from './Feature'
import Banner2 from './Banner2'
import card from './Card'
import Card from './Card'
import { Signal } from "./Signal";
import { Theme } from "./Theme";

const index = () => {
  return (
    <>
    <Hero/>
    {/* <Feature/> */}
    <Signal/>  
    <Theme/>
    <Banner2/>
    <Card/>
    </>
  )
}

export default index