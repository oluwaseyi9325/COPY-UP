import React from 'react'
import LandingBanner from "../component/LandingBanner"
import Footer from "../component/LANGINPAGE/Footer"
import GetStarted from "../component/LANGINPAGE/GetStarted"
import NotAlone from "../component/LANGINPAGE/NotAlone"
import NeedCopy from "../component/LANGINPAGE/NeedCopy"
import WhatWeOffer from "../component/LANGINPAGE/WhatWeOffer"
import AvailableCourse from "../component/LANGINPAGE/AvailableCourse"
import NavBar from "../component/LANGINPAGE/Navbar"

export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
       <LandingBanner/>
        <AvailableCourse />
         <WhatWeOffer />
         <NeedCopy />
          <NotAlone /> 
         <GetStarted className="mt-5" />
         <Footer/>
    </React.Fragment>
  )
}
