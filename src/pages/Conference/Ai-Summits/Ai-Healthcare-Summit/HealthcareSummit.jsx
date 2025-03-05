import React from 'react'
import Home from './Home'
import WhyJoin from './WhyJoin'
import WhyJoin2 from './WhyJoin2'
import Register from './Register'
import Audience from './Audience'
import Introduction from './Introduction'
import AwardAgenda from './AwardAgenda'
import AllAgendas from './AllAgendas'
import Gsap from './Gsap'

function HealthcareSummit() {
  return (
    <div className='bg-white'>
        <Home/>
        <Introduction/>
        <WhyJoin/>
        {/* <WhyJoin2/> */}
        <Audience/>
        <AwardAgenda/>
        {/* <AllAgendas/> */}
        <Register/>
        {/* <Gsap/> */}
    </div>
  )
}

export default HealthcareSummit
