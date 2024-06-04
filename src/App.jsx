import React from 'react'
import './index.css'
import Navbar from './components/navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Reviews from './components/Reviews'
import Eyesmain from './components/Eyes-main'
import Ready from './components/Ready'
import Foot from './components/Foot'
import LocomotiveScroll from 'locomotive-scroll';
import Normalcard from './components/normal-card'
export default function App() {

const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full min-h-screen text-white bg-zinc-900">
  
<Navbar/>
<LandingPage/>
<Marquee/>
<About/>
<Eyes/>
<Featured/>
<Reviews/>
<Normalcard/>
<Ready/>
<Foot/>

      </div>
    </>
  )
}
